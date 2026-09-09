(() => {
  'use strict';

  const origin = 'https://oahpa-spanskkagiela.washer-unfailing628.chatgpt.site';
  const base = '/oahpa-spanskkagiela';
  const frame = document.getElementById('oahpa');
  const tokenPattern = /^[a-zA-Z0-9_-]{1,160}$/;

  function showPage() {
    let path = '/';
    const set = new URLSearchParams(location.search).get('set');
    let requested = location.hash.slice(1);
    if (!requested && location.pathname.startsWith(base + '/')) {
      requested = location.pathname.slice(base.length);
    }
    if (set && tokenPattern.test(set)) {
      path = '/s/' + encodeURIComponent(set);
    } else {
      const match = requested.match(/^\/s\/([a-zA-Z0-9_-]{1,160})\/?$/);
      if (match) path = '/s/' + match[1];
    }

    const target = origin + path;
    if (frame.src !== target) frame.src = target;
  }

  window.addEventListener('hashchange', showPage);
  showPage();
})();
