(() => {
  'use strict';
  const cfg = window.JV_INVITE;
  const safe = s => String(s ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const eventsList = document.querySelector('#eventsList');
  const familyCards = document.querySelector('#familyCards');

  function renderEvents(day='all') {
    const rows = cfg.events.filter(ev => day === 'all' || ev.day === day);
    eventsList.innerHTML = rows.map(ev => {
      const num = ev.day.slice(-2);
      const when = ev.day === '2026-12-04' ? '4 DECEMBER 2026' : '5 DECEMBER 2026';
      const place = ev.venue ? '<span class="event-place">⌖ &nbsp;' + safe(ev.venue) + (ev.locationLine ? ', ' + safe(ev.locationLine) : '') + '</span>' : '<span class="event-place pending">Venue details coming soon</span>';
      const map = ev.mapUrl ? '<a class="event-map" href="' + safe(ev.mapUrl) + '" target="_blank" rel="noopener noreferrer">Get directions ↗</a>' : '';
      return '<article class="event-card" id="' + safe(ev.id) + '"><div class="event-date"><strong>' + safe(num) + '</strong><span>DEC · 2026</span></div><div class="event-info"><div class="event-small">' + safe(ev.dayLabel) + ' · ' + when + '</div><h3>' + safe(ev.title) + '</h3><p>' + safe(ev.description) + '</p>' + place + '</div><div class="event-action"><span class="event-time">' + safe(ev.time) + '</span>' + map + '</div></article>';
    }).join('');
  }

  function renderFamilies() {
    familyCards.innerHTML = ['bride','groom'].map(type => {
      const f = cfg.family[type];
      return '<article class="family-card"><span class="family-type">' + (type === 'bride' ? 'THE BRIDE' : 'THE GROOM') + '</span><h3>' + safe(f.name) + '</h3><p class="relation">' + safe(f.relation) + '</p><p class="parent">' + safe(f.mother) + '</p><p class="family-and">&amp;</p><p class="parent">' + safe(f.father) + '</p></article>';
    }).join('');
  }

  document.querySelectorAll('.day-button').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.day-button').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed','false');
      });
      button.classList.add('active');
      button.setAttribute('aria-pressed','true');
      renderEvents(button.dataset.filter);
    });
  });

  let toastTimeout;
  function toast(message) {
    const node=document.getElementById('toast');
    node.textContent=message;
    node.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout=setTimeout(() => node.classList.remove('show'), 2600);
  }
  async function shareInvitation() {
    const share = {
      title:'Jyoti & Vaibhav — Wedding Invitation',
      text:'Join us for the wedding celebrations on 4 & 5 December 2026 in Nashik!',
      url:'https://tinyurl.com/jyotisangvaibhav'
    };
    try {
      if(navigator.share) { await navigator.share(share); return; }
      if(navigator.clipboard && location.protocol!=='file:') {
        await navigator.clipboard.writeText(share.url);
        toast('Invitation link copied');
        return;
      }
      const input=document.createElement('textarea');
      input.value=share.url;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      input.remove();
      toast('Invitation link copied');
    } catch(err) {
      if(err.name!=='AbortError') toast('Copy the invitation URL to share');
    }
  }
  ['shareButton','shareHero'].forEach(id => {
    const button = document.getElementById(id);
    if(button) button.addEventListener('click', shareInvitation);
  });
  const observer = ('IntersectionObserver' in window) ? new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold:.08}) : null;
  document.querySelectorAll('.reveal').forEach(el => observer ? observer.observe(el) : el.classList.add('visible'));
  renderEvents();
  renderFamilies();
  const ig = document.getElementById('instagramLink');
  ig.href = cfg.instagramUrl;
  ig.textContent = 'Instagram · ' + cfg.hashtag + ' ↗';
})();