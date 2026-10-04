/* =========================================================
   SUNFLOWER OS — Birthday Edition
   Everything you'd want to personalise is in the CONFIG,
   PHOTOS, MEMORIES, QUIZ, TRACKS and MESSAGES blocks below.
   ========================================================= */
(() => {
'use strict';

/* ---------- 1. PERSONALISE HERE ---------- */
const CONFIG = {
  sisterName: 'Juu',
  imageFolder: 'images/',      // photos live in /images
  imageExt: 'jpeg',            // img1.jpeg, img2.jpeg ...
  decodeCipher: '8-5-12-9-1-14-20-8-21-19',   // A=1 ... Z=26
  decodeAnswer: 'HELIANTHUS',
  finalMessage:
    "If I could give you one thing today, it would be the ability to see yourself the way the people who love you see you. " +
    "Keep growing, keep laughing, and keep being exactly who you are. I will always be somewhere in your corner. 🌻"
};

// Gallery photos: images/img1.jpeg ... img12.jpeg  (change captions freely)
// Gallery photos: images/img1.jpeg ... img12.jpeg
const PHOTOS = [
  'Facecard',
  'Trip',
  'Smily Face',
  'Constant Pose',
  'Celebrations',
  'Sunshine',
  'Food crimes',
  'Mirror Selfie',
  'Saree Love',
  'Quiet moments',
  'Silly faces',
  'Traditional Love'
].map((cap, i) => ({
  n: i + 1,
  cap: cap
}));

// Memories app: each card uses one of the images
const MEMORIES = [
  {
    img: 1,
    title: 'Little Acts of Kindness',
    quote: 'The smallest things you do somehow leave the biggest warmth behind.',
    story: 'There are moments when you probably don\'t even realize how kind you are. A small gesture, checking if someone is okay, sharing something without being asked, or simply being there when it matters. Those little things may seem ordinary to you, but they\'re exactly the things people remember.'
  },
  {
    img: 2,
    title: 'That Unfairly Cute Smile',
    quote: 'Some smiles don\'t just brighten a face; they brighten the whole room.',
    story: 'There is something about your smile that makes it impossible to stay serious for too long. Even when you\'re pretending to be annoyed, that little smile eventually gives you away. And honestly, it\'s one of those tiny things that makes you, you.'
  },
  {
    img: 3,
    title: 'The Soft Heart',
    quote: 'Behind all the teasing and chaos is a heart softer than you let people see.',
    story: 'You may act strong, sarcastic, stubborn, or completely unbothered sometimes. But underneath all of that is someone who genuinely cares. You notice things. You worry about people. You feel more than you say. And that\'s one of the most beautiful things about you.'
  },
  {
    img: 4,
    title: 'Sunshine in Disguise',
    quote: 'You don\'t always realize it, but you bring a little sunshine wherever you go.',
    story: 'Some people enter a room and simply occupy it. Others somehow change its entire mood. You\'re one of those people. Whether it\'s through a random joke, your laugh, your energy, or just being around, you have this strange little ability to make ordinary moments feel warmer.'
  },
  {
    img: 5,
    title: 'The Beautiful Chaos',
    quote: 'Life with you isn\'t always peaceful… but it is never boring.',
    story: 'There are the random conversations, unnecessary arguments, ridiculous jokes, dramatic reactions, and moments where both of us probably wonder how things became this chaotic. But somewhere inside all that madness are some of the memories I\'d never want to trade for anything.'
  },
  {
    img: 6,
    title: 'Someone Worth Celebrating',
    quote: 'Some people deserve flowers not because it\'s their birthday, but because they make life feel a little brighter.',
    story: 'Today may be your birthday, but celebrating you shouldn\'t need a special date. You\'re someone whose presence has quietly become part of so many good moments, laughs, memories, and little pieces of life. So today, the flowers are for you — not just because you\'re growing another year older, but because you\'re becoming someone even more wonderful. 🌻'
  }
];

// Sibling Intelligence Test — every answer is "acceptable" (it's a joke test)
const QUIZ = [
  { q: 'Who is more likely to steal the last piece of food?',
    a: [['Me', 'Confession accepted. The system is not surprised. 😂'],
        ['Juu', 'Interesting answer. I have recorded your statement. 📝'],
        ['Both of us', 'Teamwork makes the crime work. 🤝'],
        ['Whoever gets there first', 'A true sibling answer. Fastest hands win. ⚡']] },
  { q: 'What is the most dangerous sibling combination?',
    a: [['Too much free time', 'Nothing good has ever happened after "I\'m bored". 😬'],
        ['A family function', 'Matching eye-rolls from across the room. 🙄'],
        ['One inside joke', 'And nobody else understands why we\'re laughing. 🤣'],
        ['All of the above', 'Correct. The system has filed a safety warning. ⚠️']] },
  { q: 'Who deserves the “best sibling” badge?',
    a: [['Obviously Juu', 'Accepted. No further questions. 🏅'],
        ['Obviously me', 'Rejected. Please try again in 10 years. ❌'],
        ['The system decides', 'The system has decided: Juu. 🏆'],
        ['This question is unfair', 'Correct enough for sibling court. 😌']] },
  { q: 'What happens when one of us says “I’m fine”?',
    a: [['We\'re definitely fine', 'The system detects a lie. 🕵️'],
        ['The other one knows immediately', 'Sibling radar: 100% accurate. 📡'],
        ['Snacks get involved', 'Snacks solve 83% of problems. 🍫'],
        ['We talk later', 'Wise. Emotional maturity detected. 🌱']] },
  { q: 'What is Juu’s superpower?',
    a: [['Making everyone laugh', 'A rare and powerful ability. 😂'],
        ['Being annoying on purpose', 'Level: legendary. 🎖️'],
        ['Always being there', 'The correct answer. Quietly the strongest one. 💛'],
        ['Finding my hidden snacks', 'Terrifying. Respect. 🔍']] }
];

const TRACKS = [   // sample songs — replace with songs that mean something to you two
  { title: 'Kodiyile Malliyapoo',               artist: 'Ilayaraja',               note: 'For the "I\'ve got you" moments.' },
  { title: 'Thendral Vandhu ',                 artist: 'Ilayaraja',     note: 'Obviously. It had to be here.' },
  { title: 'Partha Mudhal Naal',                artist: 'Harris Jayaraj',             note: 'Even when you feel sad.' },
  { title: 'Oka Maru', artist: 'Harris Jayaraj',             note: 'The favourite version you often Listen to.' },
  { title: 'Annul Maelae',       artist: 'Harris Jayaraj',         note: 'Song for the soul where every phase of life hits different' }
];

const MESSAGES = [   // the chat on the Messages app
  'Hey Juu 👋',
  'I made this whole little world for you.',
  'Before you say anything: yes, I put effort in. No, I will not be taking questions.',
  "No matter how much we argue, tease each other or get on each other's nerves, you will always be one of the people I want to see happy. That's non-negotiable. 💛",
  'Finish the Project: Birthday mission. The best part is waiting at the end 🌻'
];

const MISSIONS = [
  { key: 'memory', n: '01', name: 'Memory Test',          sub: 'Match every photo pair.' },
  { key: 'decode', n: '02', name: 'Decode',               sub: 'Crack the code.' },
  { key: 'hidden', n: '03', name: 'Hidden Sunflowers',    sub: 'Find all fifteen flowers in the garden.' },
  { key: 'quiz',   n: '04', name: 'Sibling Intelligence', sub: 'Survive the five-question test.' }
];

/* ---------- 2. HELPERS ---------- */
const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
const imgSrc = n => `${CONFIG.imageFolder}img${n}.${CONFIG.imageExt}`;
const photo = (n, cls = '', alt = '') => `<span class="ph ${cls}"><img src="${imgSrc(n)}" alt="${esc(alt)}" loading="lazy" decoding="async"></span>`;
const isMobile = () => window.matchMedia('(max-width:800px)').matches;
const reduceMotion = window.matchMedia('(prefers-reduced-motion:reduce)').matches;

// If a photo is missing, show the gradient + flower instead of a broken icon
document.addEventListener('error', e => {
  const t = e.target;
  if (!t || t.tagName !== 'IMG') return;
  const frame = t.parentElement;
  t.remove();
  if (frame) {
    frame.classList.add('no-img');
    if (frame.classList.contains('polaroid-ph') && frame.parentElement) frame.parentElement.remove();
  }
}, true);

/* ---------- 3. STATE (saved in the browser) ---------- */
const KEY = 'sunflower_os_juu_v1';
const defaults = () => ({ missions: { memory: false, decode: false, hidden: false, quiz: false }, found: [], replies: [] });
let S = load();
function load() {
  try {
    const r = JSON.parse(localStorage.getItem(KEY));
    if (r && r.missions) {
      const d = defaults();
      return { ...d, ...r, missions: { ...d.missions, ...r.missions }, found: Array.isArray(r.found) ? r.found : [], replies: Array.isArray(r.replies) ? r.replies : [] };
    }
  } catch (e) { /* storage unavailable: run in memory */ }
  return defaults();
}
function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }
const missionCount = () => Object.values(S.missions).filter(Boolean).length;
const allDone = () => missionCount() === 4;

/* ---------- 4. TOAST / CLOCK / PETALS ---------- */
let toastT;
function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastT);
  toastT = setTimeout(() => t.classList.remove('show'), 2400);
}
let lastClock = '';
function tickClock() {
  const s = new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  if (s !== lastClock) { $('#clock').textContent = s; lastClock = s; }
}
setInterval(tickClock, 5000); tickClock();

(function petals() {
  if (reduceMotion) return;
  const box = $('#petals'), frag = document.createDocumentFragment();
  const count = isMobile() ? 9 : 14;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('i');
    p.className = 'petal';
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDuration = (9 + Math.random() * 9) + 's';
    p.style.animationDelay = (-Math.random() * 14) + 's';
    p.style.opacity = (.5 + Math.random() * .5).toFixed(2);
    frag.appendChild(p);
  }
  box.appendChild(frag);
})();

document.querySelectorAll('.sisterName').forEach(n => n.textContent = CONFIG.sisterName);

/* ---------- 5. MISSIONS ---------- */
function updateMissionUI() {
  const done = missionCount(), all = done === 4;
  const st = $('#missionStatus');
  st.textContent = all ? '🎁 Project unlocked' : `Mission ${done}/4`;
  st.classList.toggle('ready', all);
  $$('[data-app="project"]').forEach(b => {
    if (b.closest('#dock')) { b.textContent = all ? '🎁' : '🔐'; b.classList.toggle('ready', all); }
    if (b.classList.contains('desktop-icon')) {
      b.classList.toggle('locked', !all); b.classList.toggle('ready', all);
      const sm = $('small', b); if (sm) sm.textContent = all ? 'Unlocked!' : `${done}/4 done`;
      const ic = $('.icon', b); if (ic) ic.textContent = all ? '🎁' : '🔐';
    }
  });
}
function setMission(key) {
  if (S.missions[key]) return;
  S.missions[key] = true; save();
  updateMissionUI();
  refreshApp('project'); refreshApp('finder');
  if (allDone()) toast('🎁 All missions complete — Project: Birthday unlocked!');
  else toast(`✅ Mission complete (${missionCount()}/4)`);
}

/* ---------- 6. WINDOW MANAGER ---------- */
const layer = $('#windowLayer');
const wins = new Map();
let zTop = 10, cascade = 0;

function openApp(id, opts = {}) {
  const def = APPS[id]; if (!def) return;
  let w = wins.get(id);
  if (!w) {
    w = createWindow(id, def);
    wins.set(id, w);
    def.render(w, opts);
  } else {
    if (w.min) { w.min = false; w.el.classList.remove('min'); }
    if (Object.keys(opts).length) def.render(w, opts);
  }
  focusWin(id); syncDock();
  return w;
}

function createWindow(id, def) {
  const el = document.createElement('section');
  el.className = 'window';
  el.dataset.app = id;
  el.setAttribute('aria-label', def.title);
  el.innerHTML =
    `<header class="window-header"><div class="window-controls">
       <button class="wc close" data-wc="close" aria-label="Close"></button>
       <button class="wc min" data-wc="min" aria-label="Minimize"></button>
       <button class="wc max" data-wc="max" aria-label="Maximize"></button></div>
       <div class="window-title">${def.icon} ${esc(def.title)}</div></header>
     <div class="window-content${def.flush ? ' flush' : ''}"></div>`;
  const lw = layer.clientWidth, lh = layer.clientHeight;
  const W = Math.min(def.w, lw - 16), H = Math.min(def.h, lh - 100);
  const off = (cascade++ % 6) * 26;
  el.style.width = W + 'px'; el.style.height = H + 'px';
  // keep the desktop icons (left ~380px) uncovered when there is room
  const minLeft = (!isMobile() && lw - 380 >= W + 40) ? 380 : 8;
  el.style.left = clamp((lw - W) / 2 - 70 + off, minLeft, Math.max(8, lw - W - 8)) + 'px';
  el.style.top  = clamp((lh - H) / 2 - 36 + off, 8, Math.max(8, lh - H - 84)) + 'px';
  layer.appendChild(el);

  const w = { id, el, body: $('.window-content', el), min: false, max: false, closing: false, token: 0 };

  el.addEventListener('pointerdown', () => focusWin(id), true);
  $('.window-controls', el).addEventListener('click', e => {
    const b = e.target.closest('[data-wc]'); if (!b) return;
    ({ close: closeWin, min: minWin, max: maxWin })[b.dataset.wc](id);
  });
  const hdr = $('.window-header', el);
  hdr.addEventListener('dblclick', e => { if (!e.target.closest('.wc') && !isMobile()) maxWin(id); });
  hdr.addEventListener('pointerdown', e => {
    if (e.target.closest('.wc') || isMobile() || w.max || e.button !== 0) return;
    const sx = e.clientX, sy = e.clientY, ox = el.offsetLeft, oy = el.offsetTop;
    let nx = ox, ny = oy, raf = 0;
    try { hdr.setPointerCapture(e.pointerId); } catch (_) {}
    el.classList.add('dragging');
    const apply = () => { raf = 0; el.style.left = nx + 'px'; el.style.top = ny + 'px'; };
    const move = ev => {
      nx = clamp(ox + ev.clientX - sx, 120 - el.offsetWidth, layer.clientWidth - 120);
      ny = clamp(oy + ev.clientY - sy, 0, layer.clientHeight - 60);
      if (!raf) raf = requestAnimationFrame(apply);
    };
    const up = () => {
      hdr.removeEventListener('pointermove', move);
      hdr.removeEventListener('pointerup', up);
      hdr.removeEventListener('pointercancel', up);
      if (raf) cancelAnimationFrame(raf);
      apply(); el.classList.remove('dragging');
      try { hdr.releasePointerCapture(e.pointerId); } catch (_) {}
    };
    hdr.addEventListener('pointermove', move);
    hdr.addEventListener('pointerup', up);
    hdr.addEventListener('pointercancel', up);
  });
  return w;
}
function focusWin(id) {
  const w = wins.get(id); if (!w) return;
  w.el.style.zIndex = ++zTop;
  wins.forEach(o => o.el.classList.toggle('focused', o === w));
  w.focusedAt = zTop;
}
function closeWin(id) {
  const w = wins.get(id); if (!w || w.closing) return;
  w.closing = true; w.token++;
  APPS[id].destroy && APPS[id].destroy(w);
  w.el.classList.add('closing');
  wins.delete(id); syncDock();
  setTimeout(() => w.el.remove(), 150);
  // focus the next top-most visible window
  let top = null; wins.forEach(o => { if (!o.min && (!top || o.focusedAt > top.focusedAt)) top = o; });
  if (top) focusWin(top.id);
}
function minWin(id) {
  const w = wins.get(id); if (!w) return;
  w.min = true; w.el.classList.add('min'); w.el.classList.remove('focused'); syncDock();
}
function maxWin(id) {
  const w = wins.get(id); if (!w) return;
  w.max = !w.max; w.el.classList.toggle('maximized', w.max);
}
function syncDock() {
  $$('#dock button').forEach(b => b.classList.toggle('open', wins.has(b.dataset.app)));
}
function refreshApp(id) {
  const w = wins.get(id);
  if (w && APPS[id].refresh) APPS[id].refresh(w);
}
window.addEventListener('resize', () => {
  wins.forEach(w => {
    if (isMobile() || w.max) return;
    const el = w.el;
    el.style.left = clamp(el.offsetLeft, 120 - el.offsetWidth, Math.max(0, layer.clientWidth - 120)) + 'px';
    el.style.top  = clamp(el.offsetTop, 0, Math.max(0, layer.clientHeight - 60)) + 'px';
  });
});

/* ---------- 7. LIGHTBOX ---------- */
const LB = { list: [], i: 0 };
function lbOpen(list, i) {
  LB.list = list; LB.i = i; lbShow();
  $('#lightbox').classList.remove('hidden');
  $('#lbClose').focus({ preventScroll: true });
}
function lbShow() {
  const it = LB.list[LB.i], frame = $('.lb-img', $('#lightbox'));
  frame.classList.remove('no-img');
  frame.textContent = '';
  const img = document.createElement('img');
  img.id = 'lbImg'; img.alt = it.cap; img.decoding = 'async'; img.src = imgSrc(it.n);
  frame.appendChild(img);
  $('#lbCap').textContent = `${it.cap}  ·  ${LB.i + 1} / ${LB.list.length}`;
  $('#lbPrev').style.visibility = $('#lbNext').style.visibility = LB.list.length > 1 ? 'visible' : 'hidden';
}
const lbStep = d => { LB.i = (LB.i + d + LB.list.length) % LB.list.length; lbShow(); };
const lbClose = () => $('#lightbox').classList.add('hidden');
$('#lbClose').onclick = lbClose;
$('#lbPrev').onclick = () => lbStep(-1);
$('#lbNext').onclick = () => lbStep(1);
$('#lightbox').addEventListener('click', e => { if (e.target.id === 'lightbox') lbClose(); });
document.addEventListener('keydown', e => {
  if (!$('#lightbox').classList.contains('hidden')) {
    if (e.key === 'Escape') lbClose();
    else if (e.key === 'ArrowLeft') lbStep(-1);
    else if (e.key === 'ArrowRight') lbStep(1);
  } else if (e.key === 'Escape' && !$('#celebration').classList.contains('hidden')) closeCelebration();
});

/* ---------- 8. APPS ---------- */
const APPS = {};

/* ----- Finder ----- */
APPS.finder = {
  title: 'Finder', icon: '🔍', w: 640, h: 500,
  desc: 'Find everything.',
  render(w) {
    const apps = ['project','memories','gallery','games','garden','messages','music','sister','terminal'];
    const all = allDone();
    w.body.innerHTML =
      `<h2>Welcome back, ${esc(CONFIG.sisterName)}.</h2>
       <p class="lead">Everything important is hiding somewhere in this little system. Mission progress: <b>${missionCount()}/4</b>.</p>
       <div class="app-grid">${apps.map(id => {
         const a = APPS[id], lock = id === 'project' && !all;
         return `<button class="app-card${lock ? ' locked' : ''}" data-open="${id}">
                   <span class="emoji">${id === 'project' ? (all ? '🎁' : '🔐') : a.icon}</span>
                   <b class="ac-t">${esc(a.title)}</b><span class="ac-d">${esc(a.desc)}</span></button>`;
       }).join('')}</div>`;
    w.body.onclick = e => { const b = e.target.closest('[data-open]'); if (b) openApp(b.dataset.open); };
  },
  refresh(w) { const st = w.body.scrollTop; this.render(w); w.body.scrollTop = st; }
};

/* ----- Memories ----- */
APPS.memories = {
  title: 'Memories', icon: '💛', w: 680, h: 540, desc: 'Little pieces of us.',
  render(w, opts) {
    if (opts && opts.view !== undefined) w.view = opts.view;
    if (w.view === undefined) w.view = -1;
    if (w.view >= 0) {
      const m = MEMORIES[w.view];
      w.body.innerHTML =
        `<button class="back-btn" data-back>← All memories</button>
         <div class="story">
           <div class="story-img ph" data-zoom><img src="${imgSrc(m.img)}" alt="${esc(m.title)}" decoding="async"></div>
           <h2>${esc(m.title)}</h2>
           <blockquote>“${esc(m.quote)}”</blockquote>
           <p>${esc(m.story)}</p>
         </div>`;
    } else {
      w.body.innerHTML =
        `<h2>Little pieces of us.</h2>
         <p class="lead">Tap a memory to open it.</p>
         <div class="memory-grid">${MEMORIES.map((m, i) =>
           `<button class="memory-card" data-i="${i}">${photo(m.img, '', m.title)}
              <span class="mc-body"><b class="mc-t">${esc(m.title)}</b><span class="mc-q">“${esc(m.quote)}”</span></span></button>`).join('')}</div>`;
    }
    w.body.scrollTop = 0;
    w.body.onclick = e => {
      const card = e.target.closest('[data-i]');
      if (card) { w.view = +card.dataset.i; this.render(w); return; }
      if (e.target.closest('[data-back]')) { w.view = -1; this.render(w); return; }
      if (e.target.closest('[data-zoom]')) { const m = MEMORIES[w.view]; lbOpen([{ n: m.img, cap: m.title }], 0); }
    };
  }
};

/* ----- Gallery ----- */
APPS.gallery = {
  title: 'Gallery', icon: '🖼️', w: 680, h: 540, desc: `${PHOTOS.length} photos. Tap to enlarge.`,
  render(w) {
    w.body.innerHTML =
      `<h2>Gallery</h2><p class="lead">${PHOTOS.length} photos. Tap any one to view it larger, then use ← → to browse.</p>
       <div class="photo-grid">${PHOTOS.map((p, i) =>
         `<button class="photo-tile ph" data-i="${i}" aria-label="${esc(p.cap)}"><img src="${imgSrc(p.n)}" alt="${esc(p.cap)}" loading="lazy" decoding="async"><span>${esc(p.cap)}</span></button>`).join('')}</div>`;
    w.body.onclick = e => { const t = e.target.closest('[data-i]'); if (t) lbOpen(PHOTOS, +t.dataset.i); };
  }
};

/* ----- Games (Memory Match + Quiz) ----- */
const quiz = { i: 0, locked: false, picked: -1, reaction: '', done: false };
let match = null;
function newMatch() {
  const ids = [1, 2, 3, 4, 5, 6];
  match = { cards: shuffle([...ids, ...ids]).map((n, i) => ({ n, i, flip: false, done: false })), open: [], moves: 0, lock: false, won: false, gen: (match ? match.gen : 0) + 1 };
}
APPS.games = {
  title: 'Games', icon: '🎮', w: 640, h: 560, desc: 'Memory match & the sibling quiz.',
  render(w, opts) {
    if (opts && opts.tab) w.tab = opts.tab;
    if (!w.tab) w.tab = 'match';
    if (!match) newMatch();
    const tabs = `<div class="tabs" role="tablist">
        <button class="tab${w.tab === 'match' ? ' active' : ''}" data-tab="match" role="tab">🃏 Memory Match</button>
        <button class="tab${w.tab === 'quiz' ? ' active' : ''}" data-tab="quiz" role="tab">🧠 Sibling Quiz</button></div>`;
    w.body.innerHTML = tabs + (w.tab === 'match' ? matchHTML() : quizHTML());
    w.body.onclick = e => {
      const tab = e.target.closest('[data-tab]');
      if (tab) { w.tab = tab.dataset.tab; this.render(w); return; }
      if (w.tab === 'match') {
        const c = e.target.closest('.mcard'); if (c) return matchClick(w, +c.dataset.i);
        if (e.target.closest('[data-newmatch]')) { newMatch(); this.render(w); }
      } else {
        const o = e.target.closest('.option'); if (o) return quizAnswer(w, +o.dataset.a);
        if (e.target.closest('[data-restart]')) { Object.assign(quiz, { i: 0, locked: false, picked: -1, reaction: '', done: false }); this.render(w); }
      }
    };
  }
};
function matchHTML() {
  const m = match;
  return `<div class="match-bar"><span>Find all 6 pairs. Moves: <b id="moves">${m.moves}</b></span>
            <button class="ghost-btn dark small" data-newmatch style="padding:6px 14px;font-size:12px">↻ New game</button></div>
          <div class="match-grid">${m.cards.map(c =>
            `<button class="mcard${c.flip ? ' flip' : ''}${c.done ? ' done' : ''}" data-i="${c.i}" aria-label="Card ${c.i + 1}">
               <span class="inner"><span class="mface mfront">🌻</span>
               <span class="mface mback ph" data-n="${c.n}"><img src="${imgSrc(c.n)}" alt="" decoding="async"></span></span></button>`).join('')}</div>
          ${m.won ? `<div class="win-banner">🎉 All pairs found in ${m.moves} moves${S.missions.memory ? '. Mission 01 complete!' : '.'}</div>` : ''}`;
}
function setCardEl(w, i) {
  const el = $(`.mcard[data-i="${i}"]`, w.body); if (!el) return;
  const c = match.cards[i];
  el.classList.toggle('flip', c.flip); el.classList.toggle('done', c.done);
}
function matchClick(w, i) {
  const m = match, c = m.cards[i];
  if (!c || m.lock || c.flip || c.done || m.won) return;
  c.flip = true; m.open.push(i); setCardEl(w, i);
  if (m.open.length < 2) return;
  m.moves++;
  const mv = $('#moves', w.body); if (mv) mv.textContent = m.moves;
  const [a, b] = m.open.map(k => m.cards[k]);
  if (a.n === b.n) {
    a.done = b.done = true; m.open = [];
    setCardEl(w, a.i); setCardEl(w, b.i);
    if (m.cards.every(x => x.done)) {
      m.won = true; const gen = m.gen;
      setTimeout(() => {
        setMission('memory');
        if (match && match.gen === gen && wins.get('games') && wins.get('games').tab === 'match') APPS.games.render(wins.get('games'));
      }, 700);
    }
  } else {
    m.lock = true; const gen = m.gen;
    setTimeout(() => {
      if (!match || match.gen !== gen) return;
      a.flip = b.flip = false; m.open = []; m.lock = false;
      const gw = wins.get('games');
      if (gw) { setCardEl(gw, a.i); setCardEl(gw, b.i); }
    }, 850);
  }
}
function quizHTML() {
  if (quiz.done) {
    return `<div class="quiz"><div class="big-result"><div class="big">🏆</div><h3>Test complete!</h3>
      <p>Sibling Intelligence score: <b>100%</b>. (The test was rigged in your favour. ${S.missions.quiz ? 'Mission 04 complete.' : ''})</p>
      <button class="primary-btn small" data-restart>↻ Play again</button></div></div>`;
  }
  const q = QUIZ[quiz.i];
  return `<div class="quiz"><div class="qnum"><span>SIBLING INTELLIGENCE TEST</span><span>${quiz.i + 1}/${QUIZ.length}</span></div>
    <h3>${esc(q.q)}</h3>
    <div class="options">${q.a.map((x, i) => `<button class="option${quiz.picked === i ? ' picked' : ''}" data-a="${i}" ${quiz.locked ? 'disabled' : ''}>${esc(x[0])}</button>`).join('')}</div>
    <div class="result" id="quizResult">${esc(quiz.reaction)}</div>
    <div class="qdots">${QUIZ.map((_, i) => `<i class="${i < quiz.i || (i === quiz.i && quiz.locked) ? 'on' : ''}"></i>`).join('')}</div></div>`;
}
function quizAnswer(w, a) {
  if (quiz.locked || quiz.done) return;
  quiz.locked = true; quiz.picked = a; quiz.reaction = QUIZ[quiz.i].a[a][1];
  APPS.games.render(w);
  setTimeout(() => {
    quiz.i++; quiz.locked = false; quiz.picked = -1; quiz.reaction = '';
    if (quiz.i >= QUIZ.length) { quiz.done = true; quiz.i = 0; setMission('quiz'); }
    const gw = wins.get('games'); if (gw && gw.tab === 'quiz') APPS.games.render(gw);
  }, 1400);
}

/* ----- Garden ----- */
const FLOWERS = 15;

APPS.garden = {
  title: 'Sunflower Garden',
  icon: '🌻',
  w: 720,
  h: 600,
  desc: 'Find the 15 hidden sunflowers.',

  render(w) {

    // ---------------------------------------------------------
    // CREATE MANY RANDOM DECORATIVE ELEMENTS
    // ---------------------------------------------------------

    const cells = [];

    // Generate 15 possible flower locations
    for (let i = 0; i < FLOWERS; i++) {

      cells.push({
        x: 3 + Math.random() * 92,
        y: 4 + Math.random() * 88
      });

    }

    const pos = shuffle(cells);

    // Lots of natural garden decorations
    const leaves = [
      '🌿',
      '🍃',
      '🌱',
      '🍀',
      '🌾',
      '🌿',
      '🍂',
      '🌱',
      '🌿',
      '🍃'
    ];

    let decor = '';

    // Increase decoration from 22 → 70
    for (let i = 0; i < 70; i++) {

      const size = 14 + Math.random() * 22;

      decor += `
        <span
          class="leaf garden-drift"
          style="
            left:${Math.random() * 96}%;
            top:${Math.random() * 92}%;
            font-size:${size}px;
            animation-delay:${Math.random() * -8}s;
            animation-duration:${5 + Math.random() * 7}s;
            --drift-x:${-12 + Math.random() * 24}px;
            --drift-y:${-10 + Math.random() * 20}px;
          "
          aria-hidden="true"
        >
          ${leaves[i % leaves.length]}
        </span>
      `;
    }

    // ---------------------------------------------------------
    // ADD SMALL DISTRACTOR FLOWERS
    // ---------------------------------------------------------

    const distractorFlowers = [
      '🌼',
      '🌸',
      '🌺',
      '💮',
      '🌷'
    ];

    for (let i = 0; i < 35; i++) {

      decor += `
        <span
          class="tiny-flower"
          style="
            left:${Math.random() * 96}%;
            top:${Math.random() * 92}%;
            font-size:${10 + Math.random() * 12}px;
            opacity:${0.35 + Math.random() * 0.45};
            animation-delay:${Math.random() * -6}s;
          "
          aria-hidden="true"
        >
          ${distractorFlowers[i % distractorFlowers.length]}
        </span>
      `;

    }

    // ---------------------------------------------------------
    // PREVIOUSLY FOUND FLOWERS
    // ---------------------------------------------------------

    const found = new Set(S.found);

    // ---------------------------------------------------------
    // BUILD UI
    // ---------------------------------------------------------

    w.body.innerHTML = `

      <div class="garden-top">

        <div>

          <h2>
            🌻 Find the hidden sunflowers
          </h2>

          <p class="lead" style="margin:0">
            They're hiding somewhere in the garden...
          </p>

        </div>

        <button
          class="ghost-btn dark small"
          data-hint
          style="
            padding:7px 14px;
            font-size:12px;
            flex:none
          "
        >
          💡 Hint
        </button>

      </div>

      <div class="progress-line">
        <i id="gProg"></i>
      </div>

      <div
        class="garden"
        id="garden"
        tabindex="0"
        aria-label="Interactive sunflower garden"
      >

        ${decor}

        ${pos.map((p, i) => `

          <button
            class="garden-flower hidden-flower ${
              found.has(i) ? 'found' : ''
            }"
            data-f="${i}"

            style="
              left:${p.x}%;
              top:${p.y}%;

              animation-delay:${Math.random() * -5}s;

              --float-x:${-8 + Math.random() * 16}px;
              --float-y:${-10 + Math.random() * 20}px;
            "

            aria-label="Hidden sunflower ${i + 1}"
          >
            🌻
          </button>

        `).join('')}

      </div>

      <p
        class="lead"
        id="gCount"
        style="margin-top:12px"
      ></p>

      <div
        class="garden-tip"
        style="
          margin-top:8px;
          font-size:11px;
          opacity:.65;
          text-align:center;
        "
      >
        📱 Tilt or gently move your phone &nbsp;•&nbsp;
        🖱️ Move your mouse around the garden
      </div>
    `;

    this.paint(w);

    // ---------------------------------------------------------
    // FLOWER CLICK
    // ---------------------------------------------------------

    w.body.onclick = e => {

      // Hint
      if (e.target.closest('[data-hint]')) {

        const left =
          $$('.garden-flower:not(.found)', w.body);

        if (!left.length)
          return toast('You found them all! 🌻');

        const f =
          left[Math.random() * left.length | 0];

        f.classList.add('pulse');

        setTimeout(() => {
          f.classList.remove('pulse');
        }, 2000);

        return;
      }

      // Flower click
      const f =
        e.target.closest('.garden-flower');

      if (!f ||
          f.classList.contains('found'))
        return;

      const id = +f.dataset.f;

      if (!S.found.includes(id))
        S.found.push(id);

      f.classList.add('found');

      save();

      this.paint(w);

      if (S.found.length >= FLOWERS) {

        toast('🌻 Garden complete!');

        setMission('hidden');

      } else {

        toast(
          `${S.found.length}/${FLOWERS} sunflowers found 🌻`
        );

      }

    };


    // ---------------------------------------------------------
    // LAPTOP / MOUSE PARALLAX
    // ---------------------------------------------------------

    const garden =
      $('#garden', w.body);

    let targetX = 0;
    let targetY = 0;

    let currentX = 0;
    let currentY = 0;

    garden.addEventListener('mousemove', e => {

      const rect =
        garden.getBoundingClientRect();

      const x =
        (e.clientX - rect.left) /
        rect.width;

      const y =
        (e.clientY - rect.top) /
        rect.height;

      targetX =
        (x - 0.5) * 18;

      targetY =
        (y - 0.5) * 14;

    });


    // ---------------------------------------------------------
    // TOUCH MOVEMENT
    // ---------------------------------------------------------

    garden.addEventListener('touchmove', e => {

      if (!e.touches.length)
        return;

      const rect =
        garden.getBoundingClientRect();

      const touch =
        e.touches[0];

      const x =
        (touch.clientX - rect.left) /
        rect.width;

      const y =
        (touch.clientY - rect.top) /
        rect.height;

      targetX =
        (x - 0.5) * 20;

      targetY =
        (y - 0.5) * 16;

    }, {
      passive: true
    });


    // ---------------------------------------------------------
    // SMOOTH PARALLAX ANIMATION
    // ---------------------------------------------------------

    function animateGarden() {

      currentX +=
        (targetX - currentX) * 0.05;

      currentY +=
        (targetY - currentY) * 0.05;

      garden.style.setProperty(
        '--garden-x',
        `${currentX}px`
      );

      garden.style.setProperty(
        '--garden-y',
        `${currentY}px`
      );

      requestAnimationFrame(animateGarden);

    }

    animateGarden();


    // ---------------------------------------------------------
    // PHONE MOTION / ACCELEROMETER
    // ---------------------------------------------------------

    this.enableDeviceMotion(w);

  },


  // ===========================================================
  // DEVICE MOTION
  // ===========================================================

  enableDeviceMotion(w) {

    const garden =
      $('#garden', w.body);

    if (!garden)
      return;

    let shakeX = 0;
    let shakeY = 0;
    let targetShakeX = 0;
    let targetShakeY = 0;

    const motionHandler = event => {
      const acc = event.accelerationIncludingGravity;
      if (!acc) return;

      // Gravity + acceleration are intentionally used together so a gentle
      // tilt moves the garden while a real shake creates a stronger sway.
      targetShakeX = clamp((acc.x || 0) * 3.2, -34, 34);
      targetShakeY = clamp((acc.y || 0) * 3.2, -30, 30);
    };

    const motionLoop = () => {
      shakeX += (targetShakeX - shakeX) * 0.12;
      shakeY += (targetShakeY - shakeY) * 0.12;
      garden.style.setProperty('--shake-x', `${shakeX}px`);
      garden.style.setProperty('--shake-y', `${shakeY}px`);
      garden.style.setProperty('--motion-x', `${shakeX * 0.55}px`);
      garden.style.setProperty('--motion-y', `${shakeY * 0.55}px`);
      if (wins.get('garden') === w) requestAnimationFrame(motionLoop);
    };
    motionLoop();


    // ---------------------------------------------------------
    // iOS PERMISSION
    // ---------------------------------------------------------

    if (
      typeof DeviceMotionEvent !== 'undefined' &&
      typeof DeviceMotionEvent.requestPermission === 'function'
    ) {

      const permissionButton =
        document.createElement('button');

      permissionButton.textContent =
        '📱 Enable motion';

      permissionButton.className =
        'ghost-btn dark small';

      permissionButton.style.margin =
        '8px auto';

      permissionButton.onclick =
        async () => {

          try {

            const permission =
              await DeviceMotionEvent
                .requestPermission();

            if (permission === 'granted') {

              window.addEventListener(
                'devicemotion',
                motionHandler
              );

              permissionButton.remove();

              toast(
                '🌻 Motion enabled — tilt your phone!'
              );

            }

          } catch (err) {

            console.log(
              'Motion permission unavailable',
              err
            );

          }

        };

      w.body
        .querySelector('.garden-tip')
        ?.after(permissionButton);

    }

    else {

      // Android / supported browsers
      window.addEventListener(
        'devicemotion',
        motionHandler
      );

    }

  },


  // ===========================================================
  // PROGRESS
  // ===========================================================

  paint(w) {

    const n =
      Math.min(
        S.found.length,
        FLOWERS
      );

    const p =
      $('#gProg', w.body);

    const c =
      $('#gCount', w.body);

    if (p) {

      p.style.transform =
        `scaleX(${n / FLOWERS})`;

    }

    if (c) {

      c.textContent =
        n >= FLOWERS

          ? '✅ All 15 found. Mission 03 complete!'

          : `${n} of ${FLOWERS} found. Keep searching... 🌻`;

    }

  }

};

/* ----- Messages ----- */
APPS.messages = {
  title: 'Messages', icon: '💌', w: 540, h: 560, desc: 'Words for you.',
  render(w) {
    const tok = ++w.token;
    const alive = () => wins.get('messages') === w && w.token === tok;
    w.body.innerHTML =
      `<h2>Messages</h2><p class="lead">A private little corner for words that don't get said every day.</p>
       <div class="chat" id="chat"></div>
       <div class="reply-box"><input id="replyIn" maxlength="200" placeholder="Reply to me…" aria-label="Write a reply" autocomplete="off">
       <button class="primary-btn small" id="replyBtn">Send</button></div>`;
    const chat = $('#chat', w.body);
    const add = (cls, text) => { const b = document.createElement('div'); b.className = 'bubble ' + cls; b.textContent = text; chat.appendChild(b); w.body.scrollTo({ top: w.body.scrollHeight }); return b; };
    let i = 0;
    const next = () => {
      if (!alive()) return;
      if (i >= MESSAGES.length) { S.replies.forEach(r => add('me', r)); return; }
      const ty = document.createElement('div'); ty.className = 'typing'; ty.innerHTML = '<i></i><i></i><i></i>';
      chat.appendChild(ty);
      setTimeout(() => {
        if (!alive()) return;
        ty.remove();
        add('them' + (i === 3 ? ' big' : ''), MESSAGES[i]); i++;
        setTimeout(next, 350);
      }, i === 0 ? 450 : 750);
    };
    next();
    const send = () => {
      const inp = $('#replyIn', w.body), v = inp.value.trim(); if (!v) return;
      inp.value = ''; add('me', v);
      S.replies.push(v); if (S.replies.length > 20) S.replies.shift(); save();
      const ty = document.createElement('div'); ty.className = 'typing'; ty.innerHTML = '<i></i><i></i><i></i>'; chat.appendChild(ty);
      w.body.scrollTo({ top: w.body.scrollHeight });
      setTimeout(() => { if (!alive()) return; ty.remove(); add('them', 'Message received. Saved in my heart. 💛'); }, 1000);
    };
    w.body.onclick = e => { if (e.target.closest('#replyBtn')) send(); };
    w.body.onkeydown = e => { if (e.key === 'Enter' && e.target.id === 'replyIn') send(); };
  },
  destroy(w) { w.token++; }
};

/* ----- Music ----- */
APPS.music = {
  title: 'My Playlist', icon: '🎵', w: 560, h: 520, desc: 'Songs that sound like you.',
  render(w) {
    w.body.innerHTML =
      `<h2>My Playlist</h2><p class="lead">Songs that remind me of us. Tap one to listen on YouTube.</p>
       <div class="row-actions"><button class="primary-btn small" data-shuffle>🔀 Surprise me</button></div>
       <div class="mission-list">${TRACKS.map((t, i) =>
         `<a class="track" id="tr${i}" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/results?search_query=${encodeURIComponent(t.title + ' ' + t.artist)}">
            <span class="num">0${i + 1}</span><div class="t"><b>${esc(t.title)}</b><span>${esc(t.artist)}</span><em>${esc(t.note)}</em></div>
            <span class="play">▶</span></a>`).join('')}</div>`;
    w.body.onclick = e => {
      if (!e.target.closest('[data-shuffle]')) return;
      $$('.track', w.body).forEach(t => t.classList.remove('hl'));
      const t = $('#tr' + (Math.random() * TRACKS.length | 0), w.body);
      t.classList.add('hl'); t.scrollIntoView({ block: 'center', behavior: 'smooth' });
      toast('Try this one 🎧');
    };
  }
};

/* ----- Sister AI ----- */
const AI_STATS = [['Kindness', 96], ['Drama', 50], ['Food stealing', 100], ['Annoyingness', 100], ['Bestest Ever', 101]];
APPS.sister = {
  title: 'Akka AI', icon: '🧠', w: 560, h: 540, desc: 'A scientifically questionable analysis.',
  render(w) {
    const tok = ++w.token;
    w.body.innerHTML =
      `<h2>Akka AI</h2><p class="lead">Subject: <b>${esc(CONFIG.sisterName)}</b>. Results are scientifically suspicious but emotionally accurate.</p>
       <div class="ai-status" id="aiStatus">Initialising…</div>
       ${AI_STATS.map((s, i) => `<div class="ai-meter"><label><span>${s[0]}</span><b id="aiv${i}">0%</b></label><div class="ai-bar"><i id="aib${i}"></i></div></div>`).join('')}
       <div class="conclusion" id="aiEnd">System conclusion: <strong>irreplaceable.</strong></div>
       <div style="text-align:center;margin-top:16px"><button class="ghost-btn dark small" data-rerun style="padding:8px 16px;font-size:12px">↻ Re-run analysis</button></div>`;
    w.body.onclick = e => { if (e.target.closest('[data-rerun]')) this.render(w); };
    const alive = () => wins.get('sister') === w && w.token === tok;
    const msgs = ['Scanning kindness levels…', 'Measuring drama output…', 'Counting stolen snacks…', 'Calibrating annoyance sensors…', 'Verifying sister status…'];
    AI_STATS.forEach((s, i) => {
      setTimeout(() => {
        if (!alive()) return;
        $('#aiStatus', w.body).textContent = msgs[i];
        $('#aib' + i, w.body).style.transform = `scaleX(${Math.min(s[1], 100) / 100})`;
        const el = $('#aiv' + i, w.body), t0 = performance.now();
        const step = t => {
          if (!alive()) return;
          const p = Math.min(1, (t - t0) / 1000);
          el.textContent = Math.round(s[1] * p) + '%';
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }, 350 + i * 750);
    });
    setTimeout(() => {
      if (!alive()) return;
      $('#aiStatus', w.body).textContent = 'Analysis complete. ✔';
      $('#aiEnd', w.body).classList.add('show');
    }, 350 + AI_STATS.length * 750 + 500);
  },
  destroy(w) { w.token++; }
};

/* ----- Terminal ----- */
function mountTerminal(root, opts = {}) {
  root.innerHTML =
    `<div class="term"><div class="term-out"></div>
     <div class="term-line"><span class="prompt">sunflower@os:~$</span>
     <input class="term-in" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" aria-label="Terminal command"></div></div>`;
  const term = $('.term', root), out = $('.term-out', root), inp = $('.term-in', root);
  const hist = []; let hi = 0;
  const print = (text, cls = '') => {
    String(text).split('\n').forEach(line => {
      const p = document.createElement('p'); if (cls) p.className = cls; p.textContent = line; out.appendChild(p);
    });
    while (out.children.length > 200) out.firstChild.remove();
    out.scrollTop = out.scrollHeight;
  };
  const t = { print, clear: () => { out.textContent = ''; }, focus: () => inp.focus({ preventScroll: true }) };
  print('Sunflower OS terminal v1.0', 'dim');
  print('Type "help" to see what I can do.', 'dim');
  term.addEventListener('click', () => { if (!getSelection().toString()) inp.focus({ preventScroll: true }); });
  inp.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const v = inp.value.trim(); inp.value = '';
      const line = document.createElement('p');
      line.innerHTML = `<span class="prompt">sunflower@os:~$</span> ${esc(v)}`; out.appendChild(line);
      if (v) { hist.push(v); hi = hist.length; runCommand(v, t); }
      out.scrollTop = out.scrollHeight;
    } else if (e.key === 'ArrowUp') { e.preventDefault(); if (hi > 0) inp.value = hist[--hi]; }
    else if (e.key === 'ArrowDown') { e.preventDefault(); inp.value = hi < hist.length - 1 ? hist[++hi] : (hi = hist.length, ''); }
    else if (e.key === 'l' && e.ctrlKey) { e.preventDefault(); t.clear(); }
  });
  return t;
}
const TERM_APPS = ['memories','gallery','games','garden','messages','music','sister','terminal','project','finder'];
function runCommand(raw, t) {
  const [cmd, ...args] = raw.toLowerCase().split(/\s+/);
  const name = CONFIG.sisterName;
  switch (cmd) {
    case 'help':
      t.print('Commands:\n  help        show this list\n  whoami      who are you?\n  status      mission progress\n  hint        a nudge for the missions\n  ls          list apps\n  open <app>  open an app (e.g. open garden)\n  date        today\n  clear       clear the screen\n  birthday    ...try it\n  reset       reset all progress');
      break;
    case 'whoami': t.print(`You are ${name}. Role: Best Sister. Replaceable: FALSE.`, 'ok'); break;
    case 'status': {
      const m = S.missions;
      t.print(`Mission progress: ${missionCount()}/4\n  [${m.memory ? 'x' : ' '}] 01 Memory Test\n  [${m.decode ? 'x' : ' '}] 02 Decode\n  [${m.hidden ? 'x' : ' '}] 03 Hidden Sunflowers (${S.found.length}/${FLOWERS})\n  [${m.quiz ? 'x' : ' '}] 04 Sibling Intelligence`);
      break;
    }
    case 'hint': {
      const m = S.missions;
      if (!m.memory) t.print('01: open Games → Memory Match.');
      else if (!m.decode) t.print('02: open Project: Birthday → Decode. It is a flower.');
      else if (!m.hidden) t.print('03: open Garden. Look carefully between the leaves — or use the 💡 Hint button.');
      else if (!m.quiz) t.print('04: open Games → Quiz. There are no wrong answers. Mostly.');
      else t.print('All missions done. Try the command: birthday', 'ok');
      break;
    }
    case 'ls': t.print(TERM_APPS.join('  ')); break;
    case 'open': {
      const a = args[0];
      if (a && APPS[a]) { openApp(a); t.print(`Opening ${a}…`, 'ok'); }
      else t.print(`Unknown app. Try: ${TERM_APPS.join(', ')}`, 'err');
      break;
    }
    case 'date': t.print(new Date().toString()); break;
    case 'clear': t.clear(); break;
    case 'garden': t.print(`🌻 The garden is hiding something. Find all ${FLOWERS}. Tilt your phone or move your mouse to make the garden sway.`); break;
    case 'love': case 'hug': t.print('💛 Hug sent. Delivered : infinite.', 'ok'); break;
    case 'sudo': t.print(`Nice try, ${name}. 😌`, 'err'); break;
    case 'birthday':
      if (allDone()) { t.print('ACCESS GRANTED 🌻', 'ok'); setTimeout(celebrate, 500); }
      else t.print(`ACCESS DENIED. Complete Project: Birthday first (${missionCount()}/4).`, 'err');
      break;
    case 'reset': resetProgress(); t.print('Progress reset.', 'ok'); break;
    case 'echo': t.print(args.join(' ')); break;
    default: t.print(`command not found: ${cmd}. Type "help".`, 'err');
  }
}
APPS.terminal = {
  title: 'Terminal', icon: '💻', w: 600, h: 420, flush: true, desc: 'For people who like typing.',
  render(w) {
    w.body.style.background = 'rgba(22,29,20,.97)';
    w.term = mountTerminal(w.body);
    setTimeout(() => w.term && w.term.focus(), 60);
  }
};

/* ----- Project: Birthday ----- */
APPS.project = {
  title: 'Project: Birthday', icon: '🔐', w: 600, h: 560, desc: 'The secret mission. Locked.',
  render(w) {
    w.ui = w.ui || { decode: false, msg: '' };
    const m = S.missions, done = missionCount(), all = done === 4;
    w.body.innerHTML =
      `<h2>Project: Birthday</h2>
       <p class="lead">CLASSIFIED · OBJECTIVE: MAKE ${esc(CONFIG.sisterName.toUpperCase())} SMILE · ${all ? '<b>FINAL ACCESS GRANTED</b>' : 'Complete all four missions.'}</p>
       <div class="progress-line"><i style="transform:scaleX(${done / 4})"></i></div>
       <div class="mission-list">${MISSIONS.map(x =>
         `<div class="mission${m[x.key] ? ' done' : ''}"><div><b>${x.n} · ${x.name}</b><div class="sub">${x.sub}</div></div>
            ${m[x.key] ? '<span class="status">✓ Done</span>' : `<button class="primary-btn small" data-mission="${x.key}">Start</button>`}</div>`).join('')}</div>
       ${w.ui.decode && !m.decode ? `<div class="decode-panel"><b>Mission 02 · Decode</b><div class="cipher">${CONFIG.decodeCipher}</div>
          <small style="color:#78806f">Hint:Your Favourite (You are using it). 🌻</small><br>
          <input class="code-input" id="decodeIn" maxlength="20" placeholder="TYPE ANSWER" autocomplete="off" aria-label="Decoded word">
          <button class="primary-btn small" data-check>Unlock</button>
          <div class="decode-msg" id="decodeMsg">${esc(w.ui.msg)}</div></div>` : ''}
       <div class="final-wrap">${all ? '<button class="primary-btn" data-final>🔓 Open Birthday Final</button>'
         : '<small>Somewhere in this OS, the final file is waiting.</small>'}</div>`;
    const check = () => {
      const inp = $('#decodeIn', w.body); if (!inp) return;
      const v = inp.value.trim().toUpperCase();
      if (v === CONFIG.decodeAnswer) { w.ui.decode = false; w.ui.msg = ''; setMission('decode'); }
      else {
        w.ui.msg = v ? 'Not quite. Check each number against the alphabet.' : 'Type your answer first.';
        $('#decodeMsg', w.body).textContent = w.ui.msg;
        inp.classList.remove('shake'); void inp.offsetWidth; inp.classList.add('shake'); inp.focus();
      }
    };
    w.body.onclick = e => {
      const b = e.target.closest('[data-mission]');
      if (b) {
        const k = b.dataset.mission;
        if (k === 'memory') openApp('games', { tab: 'match' });
        else if (k === 'quiz') openApp('games', { tab: 'quiz' });
        else if (k === 'hidden') openApp('garden');
        else if (k === 'decode') { w.ui.decode = !w.ui.decode; this.render(w); const i = $('#decodeIn', w.body); if (i) i.focus(); }
        return;
      }
      if (e.target.closest('[data-check]')) check();
      else if (e.target.closest('[data-final]')) celebrate();
    };
    w.body.onkeydown = e => { if (e.key === 'Enter' && e.target.id === 'decodeIn') check(); };
  },
  refresh(w) { const st = w.body.scrollTop; this.render(w); w.body.scrollTop = st; }
};

/* ---------- 9. DESKTOP + DOCK BUILD ---------- */
const DESKTOP_ICONS = ['memories','gallery','games','garden','messages','music','sister','terminal','project'];
const DOCK_ICONS = ['finder','memories','gallery','games','garden','messages','terminal','project'];
$('#desktopIcons').innerHTML = DESKTOP_ICONS.map(id => {
  const a = APPS[id];
  return `<button class="desktop-icon${id === 'project' ? ' locked' : ''}" data-app="${id}"><span class="icon">${a.icon}</span><b>${esc(a.title === 'Sunflower Garden' ? 'Garden' : a.title)}</b>${id === 'project' ? '<small>0/4 done</small>' : ''}</button>`;
}).join('');
$('#dock').innerHTML = DOCK_ICONS.map(id => `<button data-app="${id}" title="${esc(APPS[id].title)}" aria-label="${esc(APPS[id].title)}">${APPS[id].icon}</button>`).join('');
$('#desktop').addEventListener('click', e => {
  const b = e.target.closest('[data-app]');
  if (!b || b.closest('.window')) return;
  const id = b.dataset.app, w = wins.get(id);
  if (w && !w.min && w.el.classList.contains('focused') && b.closest('#dock')) minWin(id);
  else openApp(id);
});

/* ---------- 10. BOOT ---------- */
(function boot() {
  const bar = $('#bootProgress'), status = $('#bootStatus'), btn = $('#enterSystem');
  const start = Date.now(), DUR = 2800;
  let finished = false;
  const stages = [[0, 'Waking the garden…'], [.35, 'Loading memories…'], [.7, 'Preparing something special…']];
  const timer = setInterval(() => {
    const p = Math.min(1, (Date.now() - start) / DUR);
    bar.style.transform = `scaleX(${p})`;
    status.textContent = [...stages].reverse().find(s => p >= s[0])[1];
    if (p >= 1) {
      clearInterval(timer); finished = true;
      status.textContent = `System ready. Welcome, ${CONFIG.sisterName}.`;
      btn.disabled = false; btn.focus();
    }
  }, 50);
  const enter = () => {
    if (!finished) return;
    const bs = $('#bootScreen'); if (!bs || bs.classList.contains('leaving')) return;
    bs.classList.add('leaving');
    $('#desktop').classList.remove('hidden');
    setTimeout(() => bs.remove(), 650);
    updateMissionUI();
    mountTerminal($('#terminalWidgetBody'));
    toast(`Welcome to Sunflower OS, ${CONFIG.sisterName} 🌻`);
    if (missionCount() > 0) setTimeout(() => toast(`Welcome back! Progress restored (${missionCount()}/4).`), 2800);
  };
  btn.addEventListener('click', enter);
  document.addEventListener('keydown', e => { if (e.key === 'Enter' && finished && document.activeElement !== btn) enter(); });
})();

/* ---------- 11. RESET ---------- */
function resetProgress() {
  S = defaults(); save();
  [...wins.keys()].forEach(closeWin);
  Object.assign(quiz, { i: 0, locked: false, picked: -1, reaction: '', done: false });
  match = null;
  updateMissionUI();
}

/* ---------- 12. CELEBRATION ---------- */
const cel = { raf: 0, type: 0, parts: [], running: false };
function celebrate() {
  if (!allDone()) { toast('Complete all missions first.'); return; }
  const root = $('#celebration');
  root.classList.remove('hidden');
  $('#finalMessage').textContent = '';

  // polaroids: placed around the edges so they never cover the text
  const spots = [[4,8,-8],[78,6,7],[2,50,6],[83,50,-6],[15,71,-4],[67,72,5],[38,1,4]];
  const ids = shuffle([1,2,3,4,5,6,7,8,9,10,11,12]).slice(0, spots.length);
  $('#polaroids').innerHTML = spots.map((s, i) =>
    `<div class="polaroid" style="left:${s[0]}%;top:${s[1]}%;--r:${s[2]}deg;--d:${(i * .25).toFixed(2)}s"><div class="ph polaroid-ph"><img src="${imgSrc(ids[i])}" alt="" decoding="async"></div></div>`).join('');

  startConfetti();
  typeMessage(CONFIG.finalMessage);
  $('#closeCelebration').focus();
}
function typeMessage(text) {
  const el = $('#finalMessage'); let i = 0;
  clearInterval(cel.type);
  if (reduceMotion) { el.textContent = text; return; }
  setTimeout(() => {
    cel.type = setInterval(() => {
      i += 2; el.textContent = text.slice(0, i);
      if (i >= text.length) { el.textContent = text; clearInterval(cel.type); }
    }, 32);
  }, 900);
}
function startConfetti() {
  cancelAnimationFrame(cel.raf);
  const cv = $('#confetti'), ctx = cv.getContext('2d');
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const fit = () => { cv.width = innerWidth * dpr; cv.height = innerHeight * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); };
  fit(); cel.fit = fit; addEventListener('resize', fit);
  const colors = ['#f7c948', '#e7a928', '#fff3b0', '#9bbf7a', '#fff8e8', '#f0a04b'];
  const N = reduceMotion ? 0 : (isMobile() ? 45 : 80);
  cel.parts = Array.from({ length: N }, () => ({
    x: Math.random() * innerWidth, y: -Math.random() * innerHeight,
    w: 6 + Math.random() * 8, h: 10 + Math.random() * 10,
    vy: 1.2 + Math.random() * 2.2, vx: -.6 + Math.random() * 1.2,
    r: Math.random() * 6.28, vr: -.06 + Math.random() * .12,
    sw: Math.random() * 6.28, c: colors[Math.random() * colors.length | 0]
  }));
  cel.running = true;
  const loop = () => {
    if (!cel.running) return;
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for (const p of cel.parts) {
      p.y += p.vy; p.sw += .03; p.x += p.vx + Math.sin(p.sw) * .6; p.r += p.vr;
      if (p.y > innerHeight + 20) { p.y = -20; p.x = Math.random() * innerWidth; }
      ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r);
      ctx.fillStyle = p.c; ctx.beginPath(); ctx.ellipse(0, 0, p.w / 2, p.h / 2, 0, 0, 6.2832); ctx.fill();
      ctx.restore();
    }
    cel.raf = requestAnimationFrame(loop);
  };
  loop();
}
function stopConfetti() {
  cel.running = false; cancelAnimationFrame(cel.raf); clearInterval(cel.type);
  if (cel.fit) removeEventListener('resize', cel.fit);
}
function closeCelebration() {
  stopConfetti();
  $('#celebration').classList.add('hidden');
  $('#polaroids').innerHTML = '';
  toast('Welcome back. The garden remembers. 🌻');
}
$('#closeCelebration').onclick = closeCelebration;
$('#replayCelebration').onclick = () => { stopConfetti(); celebrate(); };

})();
