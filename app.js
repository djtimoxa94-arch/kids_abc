/* ═══════════════════════════════════════════════════════════
   АЗБУКА: ОСТРОВ СОКРОВИЩ  — app.js v9
═══════════════════════════════════════════════════════════ */

// ─────────────────────────────────────────
// ДАННЫЕ
// ─────────────────────────────────────────
const DATA = {
    letters: [
        {t:'А', w:'АРБУЗ',    e:'🍉'},
        {t:'Б', w:'БАРАБАН',  e:'🥁'},
        {t:'В', w:'ВИШНЯ',    e:'🍒'},
        {t:'Г', w:'ГИТАРА',   e:'🎸'},
        {t:'Д', w:'ДОМ',      e:'🏠'},
        {t:'Е', w:'ЕНОТ',     e:'🦝'},
        {t:'Ё', w:'ЁЖИК',     e:'🦔'},
        {t:'Ж', w:'ЖИРАФ',    e:'🦒'},
        {t:'З', w:'ЗЕБРА',    e:'🦓'},
        {t:'И', w:'ИГОЛКА',   e:'🪡'},
        {t:'Й', w:'ЙОГУРТ',   e:'🥛'},
        {t:'К', w:'КОТ',      e:'🐈'},
        {t:'Л', w:'ЛЕВ',      e:'🦁'},
        {t:'М', w:'МЯЧ',      e:'⚽'},
        {t:'Н', w:'НОС',      e:'👃'},
        {t:'О', w:'ОБЛАКО',   e:'☁️'},
        {t:'П', w:'ПЕТУХ',    e:'🐓'},
        {t:'Р', w:'РЫБА',     e:'🐟'},
        {t:'С', w:'СЛОН',     e:'🐘'},
        {t:'Т', w:'ТОРТ',     e:'🎂'},
        {t:'У', w:'УТКА',     e:'🦆'},
        {t:'Ф', w:'ФЛАГ',     e:'🚩'},
        {t:'Х', w:'ХЛЕБ',     e:'🍞'},
        {t:'Ц', w:'ЦВЕТОК',   e:'🌸'},
        {t:'Ч', w:'ЧАСЫ',     e:'⌚'},
        {t:'Ш', w:'ШАРИК',    e:'🎈'},
        {t:'Щ', w:'ЩЁТКА',    e:'🪥'},
        {t:'Ъ', w:'ОБЪ-ЕКТ', e:'📦', special: true},  // твёрдый знак
        {t:'Ы', w:'МЫ-ЛО',   e:'🧼', special: true},  // ы в середине
        {t:'Ь', w:'МЕДВЕДЬ',  e:'🐻'},
        {t:'Э', w:'ЭКРАН',    e:'📺'},
        {t:'Ю', w:'ЮБКА',     e:'👗'},
        {t:'Я', w:'ЯБЛОКО',   e:'🍎'},
    ],
    syllables: [
        // А-слоги
        {t:'МА', w:'МА-МА',    e:'👩'},
        {t:'ПА', w:'ПА-ПА',    e:'👨'},
        {t:'БА', w:'БА-БА',    e:'👵'},
        {t:'ДА', w:'ДА-ЧА',    e:'🏡'},
        {t:'КА', w:'КА-ША',    e:'🍲'},
        {t:'РА', w:'РА-ДУ-ГА', e:'🌈'},
        {t:'ЛА', w:'ЛА-ПА',    e:'🐾'},
        {t:'СА', w:'СА-НИ',    e:'🛷'},
        {t:'ТА', w:'ТА-ЧКА',   e:'🚜'},
        {t:'НА', w:'НА-ЧА-ЛО', e:'🌟'},
        // О-слоги
        {t:'МО', w:'МО-РЕ',    e:'🌊'},
        {t:'КО', w:'КО-ШКА',   e:'🐈'},
        {t:'ДО', w:'ДО-ЖДЬ',   e:'🌧️'},
        {t:'РО', w:'РО-ЗА',    e:'🌹'},
        {t:'ПО', w:'ПО-ЛЕ',    e:'🌾'},
        {t:'СО', w:'СО-КОЛ',   e:'🦅'},
        {t:'НО', w:'НОЖ',      e:'🔪'},
        {t:'ЛО', w:'ЛОБ',      e:'😊'},
        // У-слоги
        {t:'МУ', w:'МУ-ХА',    e:'🪰'},
        {t:'КУ', w:'КУ-КЛА',   e:'🪆'},
        {t:'ЛУ', w:'ЛУ-НА',    e:'🌙'},
        {t:'РУ', w:'РУ-КА',    e:'✋'},
        {t:'ТУ', w:'ТУ-ЧА',    e:'⛈️'},
        {t:'ДУ', w:'ДУБ',      e:'🌳'},
        // И-слоги
        {t:'МИ', w:'МИ-ШКА',   e:'🧸'},
        {t:'НИ', w:'НИ-ТКА',   e:'🧵'},
        {t:'РИ', w:'РИС',      e:'🍚'},
        {t:'КИ', w:'КИТ',      e:'🐋'},
        // Е-слоги
        {t:'МЕ', w:'МЕД',      e:'🍯'},
        {t:'НЕ', w:'НЕ-БО',    e:'☀️'},
        {t:'РЕ', w:'РЕ-КА',    e:'🏞️'},
        {t:'ЛЕ', w:'ЛЕС',      e:'🌲'},
        {t:'ДЕ', w:'ДЕ-РЕ-ВО', e:'🌴'},
    ],
    words: [
        {t:'МАМА',    e:'👩'},
        {t:'ПАПА',    e:'👨'},
        {t:'БАБА',    e:'👵'},
        {t:'КОТ',     e:'🐈'},
        {t:'ПЁС',     e:'🐕'},
        {t:'ДОМ',     e:'🏠'},
        {t:'ЛЕС',     e:'🌲'},
        {t:'РЫБА',    e:'🐟'},
        {t:'ЛУНА',    e:'🌙'},
        {t:'РУКА',    e:'✋'},
        {t:'НОГА',    e:'🦵'},
        {t:'РОЗА',    e:'🌹'},
        {t:'МУХА',    e:'🪰'},
        {t:'КУКЛА',   e:'🪆'},
        {t:'НЕБО',    e:'☁️'},
        {t:'РЕКА',    e:'🏞️'},
        {t:'КАША',    e:'🍲'},
        {t:'ЛАПА',    e:'🐾'},
        {t:'НИТКА',   e:'🧵'},
        {t:'РАДУГА',  e:'🌈'},
        {t:'САНКИ',   e:'🛷'},
        {t:'КОШКА',   e:'🐱'},
        {t:'СОБАКА',  e:'🐶'},
        {t:'МЕДВЕДЬ', e:'🐻'},
        {t:'ЯБЛОКО',  e:'🍎'},
    ]
};

const BADGES = [
    { id: 'letters_done',   e: '🔤', name: 'Знаток Букв',      cond: s => s.completed.includes('letters') },
    { id: 'syllables_done', e: '📖', name: 'Мастер Слогов',    cond: s => s.completed.includes('syllables') },
    { id: 'words_done',     e: '📚', name: 'Читатель',          cond: s => s.completed.includes('words') },
    { id: 'streak_3',       e: '🔥', name: 'Серия 3 дня',       cond: s => s.streak >= 3 },
    { id: 'xp_100',         e: '⭐', name: 'Первая Сотня',      cond: s => s.xp >= 100 },
    { id: 'xp_300',         e: '🚀', name: 'Суперзнайка',       cond: s => s.xp >= 300 },
];

// ─────────────────────────────────────────
// СОСТОЯНИЕ
// ─────────────────────────────────────────
let state = JSON.parse(localStorage.getItem('abc_v9_save')) || {
    xp: 0,
    robotName: '',
    unlocked: ['letters'],
    completed: [],
    progress: { letters: 0, syllables: 0, words: 0 },
    badges: [],
    streak: 0,
    lastPlayDate: null,
};

let curLvl  = null;
let curIdx  = 0;
let correctAnswer = null;

// ─────────────────────────────────────────
// АУДИО (Web Audio API, без файлов)
// ─────────────────────────────────────────
function playSound(type) {
    try {
        const ac = new (window.AudioContext || window.webkitAudioContext)();
        if (type === 'correct') {
            [[523,0],[659,.12],[784,.24]].forEach(([f,d]) => {
                const o = ac.createOscillator(), g = ac.createGain();
                o.connect(g); g.connect(ac.destination);
                o.frequency.value = f;
                g.gain.setValueAtTime(0.22, ac.currentTime+d);
                g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime+d+0.35);
                o.start(ac.currentTime+d);
                o.stop(ac.currentTime+d+0.35);
            });
        } else if (type === 'wrong') {
            const o = ac.createOscillator(), g = ac.createGain();
            o.type = 'sawtooth'; o.connect(g); g.connect(ac.destination);
            o.frequency.setValueAtTime(240, ac.currentTime);
            o.frequency.exponentialRampToValueAtTime(110, ac.currentTime+0.35);
            g.gain.setValueAtTime(0.2, ac.currentTime);
            g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime+0.35);
            o.start(ac.currentTime); o.stop(ac.currentTime+0.35);
        } else if (type === 'victory') {
            [[523,0],[659,.18],[784,.36],[1047,.54]].forEach(([f,d]) => {
                const o = ac.createOscillator(), g = ac.createGain();
                o.connect(g); g.connect(ac.destination);
                o.frequency.value = f;
                g.gain.setValueAtTime(0.22, ac.currentTime+d);
                g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime+d+0.45);
                o.start(ac.currentTime+d);
                o.stop(ac.currentTime+d+0.45);
            });
        } else if (type === 'tap') {
            const o = ac.createOscillator(), g = ac.createGain();
            o.frequency.value = 440; o.connect(g); g.connect(ac.destination);
            g.gain.setValueAtTime(0.08, ac.currentTime);
            g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime+0.08);
            o.start(ac.currentTime); o.stop(ac.currentTime+0.08);
        }
    } catch(e) {}
}

// ─────────────────────────────────────────
// ВИБРАЦИЯ
// ─────────────────────────────────────────
function vib(pattern) {
    try { if ('vibrate' in navigator) navigator.vibrate(pattern); } catch(e) {}
}

// ─────────────────────────────────────────
// ОЗВУЧКА (TTS с fallback)
// ─────────────────────────────────────────
function speak(text) {
    try {
        if (!window.speechSynthesis) return;
        window.speechSynthesis.cancel();
        const ut = new SpeechSynthesisUtterance(text.replace(/-/g, ' '));
        ut.lang = 'ru-RU'; ut.rate = 0.78; ut.pitch = 1.25;
        window.speechSynthesis.speak(ut);
    } catch(e) {}
}

// ─────────────────────────────────────────
// СОХРАНЕНИЕ
// ─────────────────────────────────────────
function save() {
    localStorage.setItem('abc_v9_save', JSON.stringify(state));
}

// ─────────────────────────────────────────
// СТРИК (серия дней)
// ─────────────────────────────────────────
function updateStreak() {
    const today     = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    if (state.lastPlayDate === today) return;
    state.streak = (state.lastPlayDate === yesterday) ? state.streak + 1 : 1;
    state.lastPlayDate = today;
}

// ─────────────────────────────────────────
// ЗНАЧКИ
// ─────────────────────────────────────────
function checkBadges() {
    let newBadge = null;
    BADGES.forEach(b => {
        if (!state.badges.includes(b.id) && b.cond(state)) {
            state.badges.push(b.id);
            if (!newBadge) newBadge = b;
        }
    });
    return newBadge;
}

function renderBadges() {
    const panel = document.getElementById('badges-panel');
    if (!panel) return;
    const earned = BADGES.filter(b => state.badges.includes(b.id));
    panel.innerHTML = earned.length === 0 ? '' :
        '<div class="badges-title">Мои значки</div>' +
        earned.map(b => `<div class="badge-chip">${b.e} ${b.name}</div>`).join('');
}

// ─────────────────────────────────────────
// КАРТА
// ─────────────────────────────────────────
function updateMap() {
    const { robotName, xp, streak, unlocked, completed, progress } = state;
    document.getElementById('robot-name-display').textContent = robotName;
    document.getElementById('xp-display').textContent = xp;
    document.getElementById('streak-display').textContent = streak;
    document.getElementById('robot-icon').textContent = xp >= 300 ? '🚀' : xp >= 100 ? '🤖' : '⚙️';

    ['syllables','words'].forEach(id => {
        const el = document.getElementById('isl-'+id);
        if (unlocked.includes(id)) el.classList.remove('locked');
        else el.classList.add('locked');
    });

    ['letters','syllables','words'].forEach(id => {
        const el = document.getElementById('prog-'+id);
        if (!el) return;
        const done  = progress[id] || 0;
        const total = DATA[id].length;
        if (completed.includes(id)) {
            el.textContent = '✅'; el.style.display = 'block';
        } else if (done > 0) {
            el.textContent = `${done}/${total}`; el.style.display = 'block';
        } else {
            el.style.display = 'none';
        }
    });

    renderBadges();
}

// ─────────────────────────────────────────
// НАВИГАЦИЯ
// ─────────────────────────────────────────
function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function showMap() {
    if (curLvl) { state.progress[curLvl] = curIdx; save(); }
    showScreen('screen-map');
    updateMap();
}

function goMap() {
    playSound('tap'); vib([30]);
    showMap();
}

// ─────────────────────────────────────────
// НАСТРОЙКА
// ─────────────────────────────────────────
function saveRobotName() {
    const val = document.getElementById('robot-name-input').value.trim();
    if (!val) { alert('Дай мне имя! 🤖'); return; }
    playSound('tap'); vib([50]);
    state.robotName = val;
    updateStreak(); save();
    speak(`Привет! Я ${val}. Давай учиться читать вместе!`);
    showMap();
}

// ─────────────────────────────────────────
// ИГРОВОЙ ПОТОК
// ─────────────────────────────────────────
function startLevel(id) {
    if (id !== 'letters' && !state.unlocked.includes(id)) {
        vib([100,50,100]);
        speak('Этот остров ещё закрыт! Пройди предыдущий!');
        return;
    }
    curLvl = id;
    curIdx = state.progress[id] || 0;
    if (curIdx >= DATA[id].length) curIdx = 0;
    updateStreak(); save();
    showScreen('screen-game');
    showPhase('card');
    renderCard();
}

function renderCard() {
    const item = DATA[curLvl][curIdx];

    // Adjust big-char font size for long tokens (syllables/words)
    const charEl = document.getElementById('card-char');
    charEl.textContent = item.t;
    const len = item.t.length;
    charEl.style.fontSize = len >= 6 ? '3.5rem' : len >= 4 ? '5rem' : len >= 2 ? '6.5rem' : '9rem';

    document.getElementById('card-emoji').textContent = item.e;
    document.getElementById('card-word').textContent  = item.w || '';
    document.getElementById('progress-tag').textContent = `${curIdx+1} / ${DATA[curLvl].length}`;

    const speechText = item.special
        ? `Буква ${item.t}. Слово ${item.w ? item.w.replace(/-/g,' ') : ''}`
        : `${item.t}${item.w ? '... ' + item.w.replace(/-/g,' ') : ''}`;
    speak(speechText);
}

function speakCurrent() {
    vib([30]);
    if (curLvl) renderCard();
}

function showPhase(name) {
    ['card','quiz','feedback'].forEach(p => {
        const el = document.getElementById('phase-'+p);
        el.classList.toggle('hidden', p !== name);
    });
}

// ─────────────────────────────────────────
// ВИКТОРИНА
// ─────────────────────────────────────────
function startQuiz() {
    playSound('tap'); vib([30]);

    const item = DATA[curLvl][curIdx];
    correctAnswer = item.t;

    // 3 уникальных неправильных варианта
    const pool = DATA[curLvl]
        .filter((_, i) => i !== curIdx)
        .map(x => x.t)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

    const options = [...pool, item.t].sort(() => Math.random() - 0.5);

    // Вопрос
    const qMap = { letters: 'С какой буквой эта картинка? 🤔', syllables: 'Найди нужный слог! 📖', words: 'Что на картинке? 🖼️' };
    document.getElementById('quiz-prompt').textContent = qMap[curLvl];
    document.getElementById('quiz-emoji').textContent  = item.e;

    // Кнопки вариантов
    const grid = document.getElementById('quiz-options');
    grid.innerHTML = options.map(opt => {
        const sizeClass = opt.length >= 6 ? 'text-xs' : opt.length >= 4 ? 'text-sm' : '';
        return `<button class="opt-btn ${sizeClass}" onclick="checkAnswer('${opt}')">${opt}</button>`;
    }).join('');

    showPhase('quiz');
    speak(qMap[curLvl]);
}

function checkAnswer(chosen) {
    const correct = chosen === correctAnswer;

    // Блокируем все кнопки и подсвечиваем
    document.querySelectorAll('.opt-btn').forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === correctAnswer) btn.classList.add('correct');
        if (btn.textContent === chosen && !correct) btn.classList.add('wrong');
    });

    if (correct) {
        playSound('correct'); vib([50]);
        state.xp += 10;
    } else {
        playSound('wrong'); vib([120, 60, 120]);
        state.xp += 3;   // XP участия
    }

    const badge = checkBadges();
    save();

    setTimeout(() => showFeedback(correct, badge), 700);
}

function showFeedback(correct, badge) {
    const praises = ['Правильно!','Молодец!','Супер!','Отлично!','Так держать!'];
    document.getElementById('fb-icon').textContent = correct ? '🎉' : '💪';
    document.getElementById('fb-text').textContent = correct
        ? praises[Math.floor(Math.random() * praises.length)]
        : `Правильный ответ: ${correctAnswer}`;

    let sub = correct ? '+10 ⭐' : '+3 ⭐';
    if (badge) sub += `   ${badge.e} Новый значок!`;
    document.getElementById('fb-sub').textContent = sub;

    showPhase('feedback');
    speak(correct ? praises[Math.floor(Math.random()*praises.length)] : `Правильно: ${correctAnswer}`);
}

// ─────────────────────────────────────────
// СЛЕДУЮЩИЙ ШАГ
// ─────────────────────────────────────────
function nextStep() {
    playSound('tap'); vib([30]);

    if (curIdx < DATA[curLvl].length - 1) {
        curIdx++;
        state.progress[curLvl] = curIdx;
        save();
        showPhase('card');
        renderCard();
    } else {
        // Уровень пройден
        state.progress[curLvl] = 0;
        if (!state.completed.includes(curLvl)) state.completed.push(curLvl);
        if (curLvl === 'letters'   && !state.unlocked.includes('syllables')) state.unlocked.push('syllables');
        if (curLvl === 'syllables' && !state.unlocked.includes('words'))     state.unlocked.push('words');
        state.xp += 50;
        const badge = checkBadges();
        save();
        showVictory(badge);
    }
}

// ─────────────────────────────────────────
// ПОВТОР
// ─────────────────────────────────────────
function replayLevel() {
    playSound('tap'); vib([30]);
    curIdx = 0;
    state.progress[curLvl] = 0;
    save();
    showScreen('screen-game');
    showPhase('card');
    renderCard();
}

// ─────────────────────────────────────────
// ПОБЕДА
// ─────────────────────────────────────────
function showVictory(badge) {
    const names = { letters: 'Острова Букв', syllables: 'Острова Слогов', words: 'Города Слов' };
    document.getElementById('vic-icon').textContent  = '🏆';
    document.getElementById('vic-title').textContent = `${names[curLvl]} пройден!`;
    document.getElementById('vic-xp').textContent    = '+50 ⭐ Бонус!';
    document.getElementById('vic-badge').innerHTML   = badge
        ? `<div class="new-badge">${badge.e} Новый значок: ${badge.name}!</div>` : '';

    showScreen('screen-victory');
    playSound('victory');
    vib([100,50,100,50,200]);
    speak('Ура! Ты справился! Молодец!');
    launchConfetti();
}

// ─────────────────────────────────────────
// КОНФЕТТИ
// ─────────────────────────────────────────
function launchConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx    = canvas.getContext('2d');
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const W = canvas.width, H = canvas.height;

    const colors = ['#FF6B6B','#FFE66D','#A8E6CF','#88D8EA','#FF8B94','#B388FF','#80DEEA','#FFCC99'];
    const pieces = Array.from({length:130}, () => ({
        x:  Math.random() * W,
        y: -20 - Math.random() * 120,
        w:  Math.random() * 12 + 6,
        h:  Math.random() * 7 + 4,
        c:  colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 5,
        vy: Math.random() * 4 + 1.5,
        rot: Math.random() * 360,
        rv:  (Math.random() - 0.5) * 9,
        op:  1,
    }));

    let t = 0;
    function draw() {
        ctx.clearRect(0, 0, W, H);
        let alive = false;
        pieces.forEach(p => {
            if (p.op <= 0) return;
            ctx.save();
            ctx.globalAlpha = p.op;
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rot * Math.PI / 180);
            ctx.fillStyle = p.c;
            ctx.fillRect(-p.w/2, -p.h/2, p.w, p.h);
            ctx.restore();
            p.x  += p.vx + Math.sin(t * 0.03 + p.y * 0.01) * 0.6;
            p.y  += p.vy;
            p.vy += 0.055;
            p.rot += p.rv;
            if (p.y > H * 0.75) p.op -= 0.018;
            if (p.op > 0) alive = true;
        });
        t++;
        if (alive) requestAnimationFrame(draw);
    }
    draw();
}

// ─────────────────────────────────────────
// СЕРВИС-ВОРКЕР
// ─────────────────────────────────────────
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').catch(() => {});
    });
}

// ─────────────────────────────────────────
// СТАРТ
// ─────────────────────────────────────────
if (state.robotName) {
    updateStreak();
    save();
    showMap();
}
