(() => {
  'use strict';
  const cfg = window.JV_INVITE;
  if (!cfg) return;
  const translations = {
    en: {
      skip:'Skip to events', navEvents:'Events', navFamilies:'Families', navDirections:'Directions',
      coverBlessing:'With the blessings of Lord Venkateshwara', coverKicker:'A wedding invitation',
      brideShort:'Jyoti', groomShort:'Vaibhav', and:'&', coverDate:'4 & 5 December 2026 · Nashik',
      letterText:'YOU ARE INVITED', openInvitation:'Tap to open your invitation',
      heroBlessing:'Together with our families', heroTitleFirst:'Two hearts.', heroTitleSecond:'One beautiful beginning.',
      heroSub:'With love and blessings, we invite you to celebrate the wedding of', heroVisualLabel:'Together with our loved ones',
      viewCelebrations:'Explore our celebrations ↓', celebrationsEyebrow:'The celebrations',
      celebrationsTitle:'Four moments to remember', eventsSubtitle:'All four celebrations, at a glance.',
      filterAll:'All 4 events', filterFriday:'Fri, 4 Dec', filterSaturday:'Sat, 5 Dec',
      friday:'Friday · 4 December 2026', saturday:'Saturday · 5 December 2026',
      venueShort:'Swaminarayan Banquet Hall · Nashik', commonVenue:'All celebrations at Swaminarayan Banquet Hall · Nashik', directionsAction:'Directions ↗',
      inviteHeading:'A heartfelt invitation',
      inviteMessage:'With the blessings of Lord Venkateshwara and our families, we warmly invite you to join us, celebrate with us, and bless the bride and groom.',
      familiesEyebrow:'Together with our families', familiesTitle:'Two hearts, two families',
      blessingsTitle:'With love & blessings', wishesFamilyName:'The Tiwari Family', prayerTitle:'A prayer for a beautiful journey',
      prayerText:'May the newlyweds be blessed with lifelong happiness, harmony, good health and love.',
      directionsEyebrow:'Find your way', directionsTitle:'We will see you there',
      venueLabel:'Wedding venue', venueName:'Swaminarayan Banquet Hall', venueAddress:'Panchavati, Nashik, Maharashtra',
      venueNote:'All four wedding celebrations take place here.', mapsButton:'Open Google Maps ↗', qrCaption:'Scan for directions',
      footerDate:'4 & 5 December 2026 · Nashik', footerNote:'Your presence and blessings mean the world to us.',
      parentsJoin:'&', openAria:'Open the wedding invitation', navAria:'Main navigation', languageAria:'Invitation language',
      paperHeading:'Jyoti & Vaibhav | Wedding Invitation', musicPause:'Mute wedding music', musicPlay:'Play wedding music', altGanpati:'Gold Ganpati illustration',
      altEmblem:'Jyoti Sang Vaibhav wedding emblem', altCouple:'Illustration of Jyoti and Vaibhav in Indian wedding attire',
      altQr:'Wedding venue QR code'
    },
    hi: {
      skip:'कार्यक्रम देखें', navEvents:'कार्यक्रम', navFamilies:'परिवार', navDirections:'स्थान',
      coverBlessing:'श्री वेंकटेश भगवान की असीम कृपा से', coverKicker:'सादर स्नेह निमंत्रण',
      brideShort:'ज्योति', groomShort:'वैभव', and:'संग', coverDate:'४ एवं ५ दिसंबर २०२६ · नाशिक',
      letterText:'सादर आमंत्रण', openInvitation:'निमंत्रण खोलने के लिए स्पर्श करें',
      heroBlessing:'परिवार के आशीर्वाद के साथ', heroTitleFirst:'दो हृदय।', heroTitleSecond:'एक मंगलमय शुरुआत।',
      heroSub:'सप्रेम आमंत्रण है, हमारे शुभ विवाह के मंगलमय अवसर पर पधारकर आशीर्वाद दें',
      heroVisualLabel:'अपनों के स्नेह और आशीर्वाद के साथ', viewCelebrations:'मांगलिक कार्यक्रम देखें ↓',
      celebrationsEyebrow:'मांगलिक कार्यक्रम', celebrationsTitle:'चार मंगलमय अवसर',
      eventsSubtitle:'समस्त विवाह कार्यक्रमों की जानकारी एक ही स्थान पर।',
      filterAll:'सभी ४ कार्यक्रम', filterFriday:'शुक्र, ४ दिसंबर', filterSaturday:'शनि, ५ दिसंबर',
      friday:'शुक्रवार · ४ दिसंबर २०२६', saturday:'शनिवार · ५ दिसंबर २०२६',
      venueShort:'स्वामीनारायण बैंक्वेट हॉल · नाशिक', commonVenue:'सभी कार्यक्रम स्वामीनारायण बैंक्वेट हॉल · नाशिक में', directionsAction:'मार्ग देखें ↗',
      inviteHeading:'सादर स्नेह निमंत्रण',
      inviteMessage:'परम पिता की असीम अनुकम्पा एवं श्री वेंकटेश भगवान की कृपा से हमारे यहाँ शुभ विवाह का मंगलमय अवसर है। इस पावन अवसर पर आप सपरिवार पधारकर वर-वधू को अपना स्नेह एवं शुभाशीर्वाद प्रदान कर हमें अनुगृहीत करें।',
      familiesEyebrow:'परिवार का स्नेह एवं आशीर्वाद', familiesTitle:'दो हृदय, दो परिवार',
      blessingsTitle:'स्नेह एवं शुभाशीर्वाद', wishesFamilyName:'समस्त तिवारी परिवार', prayerTitle:'॥ मंगल कामना ॥',
      prayerText:'भगवान श्री वेंकटेश से प्रार्थना है कि नवदम्पति पर सदैव अपनी कृपा, आशीर्वाद एवं मंगलमय जीवन का वरदहस्त बनाए रखें।',
      directionsEyebrow:'विवाह स्थल', directionsTitle:'आपका हार्दिक स्वागत है',
      venueLabel:'विवाह स्थल', venueName:'स्वामीनारायण बैंक्वेट हॉल', venueAddress:'पंचवटी, नाशिक, महाराष्ट्र',
      venueNote:'सभी चार मांगलिक कार्यक्रम इसी स्थल पर आयोजित होंगे।', mapsButton:'गूगल मैप्स में देखें ↗',
      qrCaption:'मार्ग जानने के लिए स्कैन करें', footerDate:'४ एवं ५ दिसंबर २०२६ · नाशिक',
      footerNote:'आपकी उपस्थिति एवं आशीर्वाद हमारे लिए अमूल्य हैं।', parentsJoin:'एवं',
      openAria:'विवाह निमंत्रण खोलें', navAria:'मुख्य नेविगेशन', languageAria:'निमंत्रण की भाषा',
      paperHeading:'ज्योति संग वैभव | विवाह निमंत्रण', musicPause:'संगीत बंद करें', musicPlay:'संगीत चलाएँ', altGanpati:'श्री गणेश जी की स्वर्णिम छवि',
      altEmblem:'ज्योति संग वैभव का विवाह चिह्न', altCouple:'पारम्परिक विवाह परिधान में ज्योति एवं वैभव का चित्र',
      altQr:'विवाह स्थल का क्यूआर कोड'
    }
  };
  const $ = selector => document.querySelector(selector);
  const $$ = selector => Array.from(document.querySelectorAll(selector));
  const safe = val => String(val == null ? '' : val).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const pages = $('#invitationPages');
  const cover = $('#cover');
  const openButton = $('#openInvitation');
  const musicToggle = $('#musicToggle');
  const weddingMusic = $('#weddingMusic');
  let lang = 'en';
  let filter = 'all';
  let opened = false;
  let opening = false;
  let musicEnabled = true;
  let musicStarted = false;
  let musicStage = 'intro';


  function syncMusicToggle() {
    const T = translations[lang];
    musicToggle.classList.toggle('is-enabled', musicEnabled);
    musicToggle.classList.toggle('is-playing', musicEnabled && !weddingMusic.paused);
    musicToggle.setAttribute('aria-pressed', String(musicEnabled));
    const label = musicEnabled ? T.musicPause : T.musicPlay;
    musicToggle.setAttribute('aria-label', label);
    musicToggle.title = label;
  }
  function playWeddingMusic() {
    if (!musicEnabled) return;
    if (!musicStarted) {
      musicStarted = true;
      musicStage = 'intro';
      weddingMusic.loop = false;
      weddingMusic.src = 'assets/mangal-rang-envelope-intro.mp3';
      weddingMusic.volume = 0.38;
    }
    const result = weddingMusic.play();
    if (result && typeof result.catch === 'function') {
      result.then(syncMusicToggle).catch(() => {
        musicEnabled = false;
        syncMusicToggle();
      });
    }
    syncMusicToggle();
  }
  weddingMusic.addEventListener('ended', () => {
    if (musicStage !== 'intro' || !musicEnabled) return;
    musicStage = 'shehnai';
    weddingMusic.loop = true;
    weddingMusic.src = 'assets/shehnai-ambient-loop.mp3';
    weddingMusic.volume = 0.34;
    const result = weddingMusic.play();
    if (result && typeof result.catch === 'function') {
      result.then(syncMusicToggle).catch(() => {
        musicEnabled = false;
        syncMusicToggle();
      });
    }
  });
  weddingMusic.addEventListener('play', syncMusicToggle);
  weddingMusic.addEventListener('pause', syncMusicToggle);
  musicToggle.addEventListener('click', () => {
    musicEnabled = !musicEnabled;
    if (!musicEnabled) weddingMusic.pause();
    else if (opening || opened) playWeddingMusic();
    syncMusicToggle();
  });

  function renderEvents() {
    const T = translations[lang];
    const events = cfg.events.filter(e => filter === 'all' || e.date === filter);
    $('#eventsList').innerHTML = events.map(event => {
      const dateText = event.date === '2026-12-04' ? T.friday : T.saturday;
      return `<article class="event-card" id="event-${safe(event.id)}">
        <div class="event-art" aria-hidden="true"><img src="assets/event-${safe(event.id)}.svg" alt="" loading="lazy" decoding="async"></div>
        <div class="event-top"><span class="event-date">${safe(dateText)}</span><span class="event-icon" aria-hidden="true">${safe(event.icon)}</span></div>
        <h3>${safe(event.title[lang])}</h3><span class="event-time">${safe(event.time[lang])}</span>
        <p>${safe(event.description[lang])}</p>
      </article>`;
    }).join('');
  }
  function renderFamilies() {
    const T = translations[lang];
    $('#familyCards').innerHTML = cfg.family.map(f => `<article class="family-card">
      <div class="family-role">${safe(f.role[lang])}</div><h3>${safe(f.name[lang])}</h3>
      <p class="family-profession">${safe(f.profession[lang])}</p>
      <p class="family-relation">${safe(f.relation[lang])}</p>
      <p class="family-parent">${safe(f.mother[lang])}</p><p class="family-join">${safe(T.parentsJoin)}</p>
      <p class="family-parent">${safe(f.father[lang])}</p>
    </article>`).join('');
    $('#wellwishersGrid').innerHTML = cfg.acknowledgements.map(a => `<article class="wisher-card">
      <h4>${safe(a.heading[lang])}</h4><p>${safe(a.people[lang])}</p>
    </article>`).join('');
  }
  function setLanguage(next) {
    lang = next === 'hi' ? 'hi' : 'en';
    const T = translations[lang];
    document.documentElement.lang = lang;
    document.title = T.paperHeading;
    $$('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (Object.prototype.hasOwnProperty.call(T, key)) el.textContent = T[key];
    });
    $$('.language-btn').forEach(button => {
      const active = button.dataset.lang === lang;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    $('.nav-links').setAttribute('aria-label', T.navAria);
    $('.language-switch').setAttribute('aria-label', T.languageAria);
    openButton.setAttribute('aria-label', T.openAria);
    $('.cover-emblem').src = lang === 'hi' ? 'assets/ganpati.png' : 'assets/jv-emblem.png';
    $('.cover-emblem').alt = lang === 'hi' ? T.altGanpati : T.altEmblem;
    $('.brand img').src = lang === 'hi' ? 'assets/ganpati.png' : 'assets/jv-emblem.png';
    $('.brand span').textContent = lang === 'hi' ? 'ज्योति संग वैभव' : 'J & V';
    $('.ganpati').alt = T.altGanpati;
    $('.hero-visual img').alt = T.altCouple;
    $('.qr-card img').alt = T.altQr;
    $('.letter-initials').textContent = lang === 'hi' ? 'ज्योति ♥ वैभव' : 'J & V';
    renderEvents();renderFamilies();syncMusicToggle();
    try { localStorage.setItem('jv-invitation-language', lang); } catch (err) { /* Preferences are optional. */ }
  }
  $$('.language-btn').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));

  function setFilter(value) {
    filter = value;
    $$('.day-button').forEach(button => {
      const active = button.dataset.filter === filter;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    renderEvents();
  }
  $$('.day-button').forEach(button => button.addEventListener('click', () => setFilter(button.dataset.filter)));

  function showPages(target) {
    if (opened) {
      if (target) navigate(target);
      return;
    }
    if (opening) return;
    opening = true;
    if (musicEnabled) playWeddingMusic();
    document.body.classList.add('is-opening');
    const finish = () => {
      opened = true;
      opening = false;
      pages.setAttribute('aria-hidden', 'false');
      cover.setAttribute('aria-hidden', 'true');
      document.body.classList.add('invite-open');
      openButton.setAttribute('aria-expanded', 'true');
      if (target) requestAnimationFrame(() => requestAnimationFrame(() => navigate(target)));
      else { window.scrollTo({top:0,behavior:'instant'}); }
    };
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) finish();
    else window.setTimeout(finish, 860);
  }
  function navigate(target) {
    const element = document.getElementById(target);
    if (target === 'events') setFilter('all');
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 68;
      window.scrollTo({top:Math.max(0,y),behavior:'instant'});
    }
  }
  openButton.addEventListener('click', () => showPages('home'));
  $('#openHint').addEventListener('click', () => showPages('home'));
  $$('a[href^="#"]').forEach(link => link.addEventListener('click', event => {
    const target = link.getAttribute('href').slice(1);
    if (!['home','events','families','directions'].includes(target)) return;
    event.preventDefault();
    if (!opened) showPages(target);
    else navigate(target);
  }));
  let savedLanguage = 'en';
  try { savedLanguage = localStorage.getItem('jv-invitation-language') || 'en'; } catch (err) {}
  setLanguage(savedLanguage);
  if (location.hash && ['#home','#events','#families','#directions'].includes(location.hash)) {
    pages.setAttribute('aria-hidden', 'false');
    cover.setAttribute('aria-hidden', 'true');
    opened = true;
    document.body.classList.add('invite-open');
    requestAnimationFrame(() => navigate(location.hash.slice(1)));
  }
})();
