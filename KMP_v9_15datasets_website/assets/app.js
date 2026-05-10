// ════════════════════════════════════════════════════
// KMP Master · Shared App Logic
// ════════════════════════════════════════════════════

// Sidebar tree expand/collapse — event delegation (works regardless of DOM ready timing)
(function initSidebar() {
  // Clear any old localStorage state
  try {
    localStorage.removeItem('kmp_sidebar_state');
    localStorage.removeItem('kmp_sidebar_state_v2');
  } catch(e) {}

  // Force-close ALL sidebar menus on load (function for re-use)
  function closeAll() {
    document.querySelectorAll('.tree-children').forEach(el => el.classList.remove('show'));
    document.querySelectorAll('.tree-node.expandable, .tree-node.expanded').forEach(el => el.classList.remove('expanded'));
  }
  closeAll();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', closeAll);
  }

  // Event delegation: single listener on document — works for ALL tree nodes
  // even if added after this script runs
  document.addEventListener('click', function(e) {
    const node = e.target.closest('.tree-node.expandable');
    if (!node) return;
    // Don't toggle if user clicked an actual link inside (let link work)
    if (e.target.tagName === 'A' && e.target !== node) return;

    e.stopPropagation();
    const targetId = node.dataset.toggle;
    const target = document.getElementById(targetId);
    if (target) {
      node.classList.toggle('expanded');
      target.classList.toggle('show');
    }
  });

  // Highlight active page link
  function markActive() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.tree-node[href]').forEach(link => {
      if (link.getAttribute('href') === currentPage) link.classList.add('active');
    });
  }
  markActive();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', markActive);
  }
})();

// Global search → filter sections in current page
(function initSearch() {
  const searchInput = document.getElementById('globalSearch');
  if (!searchInput) return;
  
  searchInput.addEventListener('input', e => {
    const q = e.target.value.toLowerCase().trim();
    const sections = document.querySelectorAll('.section, .insight, .kpi, .pat-card, .chart-card');
    
    if (!q) {
      sections.forEach(s => s.style.display = '');
      return;
    }
    
    sections.forEach(s => {
      const text = s.textContent.toLowerCase();
      s.style.display = text.includes(q) ? '' : 'none';
    });
  });
})();

// Helper: WR pill class
function wrClass(wr, n) {
  if (wr == null || n < 30) return 'none';
  return wr >= 53 ? 'high' : (wr >= 48 ? 'mid' : 'low');
}

// Helper: format WR pill HTML
function wrPill(wr, n) {
  if (wr == null || n < 30) return '<span class="wr-pill none">—</span>';
  const cls = wrClass(wr, n);
  return `<span class="wr-pill ${cls}">${wr.toFixed(1)}%</span>`;
}

// Helper: direction text
function dirText(d) {
  if (d === 1) return '<span style="color:var(--green)">L</span>';
  if (d === -1) return '<span style="color:var(--red)">S</span>';
  return '<span style="color:var(--yellow)">⇄</span>';
}

// Helper: tier label
function tierLabel(tier) {
  const m = {'A':'A', 'B':'B', 'C':'C', 'M':'M', 'BAD':'BAD', 'NF':'NF'};
  return `<span class="tier-tag tier-${tier}">${m[tier] || tier}</span>`;
}

// Helper: format number with k/M
function fmtN(n) {
  if (n == null) return '—';
  if (n >= 1000000) return (n/1000000).toFixed(2) + 'M';
  if (n >= 1000) return (n/1000).toFixed(1) + 'K';
  return n.toLocaleString();
}

// Helper: format dollar
function fmtDollar(n, withSign) {
  if (n == null) return '—';
  const sign = n < 0 ? '-$' : (withSign ? '+$' : '$');
  return sign + Math.abs(n).toLocaleString();
}

// Load JSON data (cached)
let _cachedData = null;
async function loadData() {
  if (_cachedData) return _cachedData;
  try {
    const res = await fetch('data/master_data.json');
    _cachedData = await res.json();
    return _cachedData;
  } catch (e) {
    console.error('Failed to load data:', e);
    return null;
  }
}
