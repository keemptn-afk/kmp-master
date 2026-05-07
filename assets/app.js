// ════════════════════════════════════════════════════
// KMP Master · Shared App Logic
// ════════════════════════════════════════════════════

// Sidebar tree expand/collapse with state persistence
(function initSidebar() {
  const STORAGE_KEY = 'kmp_sidebar_state_v2';
  const state = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');

  document.querySelectorAll('.tree-node.expandable').forEach(node => {
    const targetId = node.dataset.toggle;
    const target = document.getElementById(targetId);
    if (!target) return;

    // Restore state
    if (state[targetId]) {
      node.classList.add('expanded');
      target.classList.add('show');
    }

    node.addEventListener('click', e => {
      e.stopPropagation();
      const isExpanded = node.classList.toggle('expanded');
      target.classList.toggle('show');
      state[targetId] = isExpanded;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    });
  });

  // Highlight active nav based on current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.tree-node[href]').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
      // Auto-expand parents
      let parent = link.closest('.tree-children');
      while (parent) {
        const toggle = document.querySelector(`[data-toggle="${parent.id}"]`);
        if (toggle) {
          toggle.classList.add('expanded');
          parent.classList.add('show');
        }
        parent = toggle?.closest('.tree-children');
      }
    }
  });
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
