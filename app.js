
const levels = [
    { id: 'letters', title: 'Учим буквы', icon: '🅰️', color: 'blue' },
    { id: 'syllables', title: 'Читаем слоги', icon: '🧩', color: 'green' },
    { id: 'words', title: 'Первые слова', icon: '🐱', color: 'orange' },
    { id: 'texts', title: 'Рассказы', icon: '📖', color: 'purple' }
];

const data = {
    letters: [
        { char: 'А', word: 'Арбуз', emoji: '🍉' },
        { char: 'Б', word: 'Барабан', emoji: '🥁' },
        { char: 'В', word: 'Вишня', emoji: '🍒' }
    ],
    syllables: [
        { char: 'МА', word: 'МА-МА' },
        { char: 'ПА', word: 'ПА-ПА' },
        { char: 'РО', word: 'РО-ЗА' }
    ],
    words: [
        { char: 'КОТ', emoji: '🐈' },
        { char: 'ДОМ', emoji: '🏠' },
        { char: 'ЛЕС', emoji: '🌲' }
    ],
    texts: [
        { char: 'Мама мыла раму.', word: '' },
        { char: 'У кота есть мяч.', word: '' }
    ]
};

let currentScreen = 'menu';
let currentLevel = null;
let itemIndex = 0;

const app = document.getElementById('app');

function render() {
    if (currentScreen === 'menu') renderMenu();
    else renderGame();
}

function renderMenu() {
    app.innerHTML = `
        <div class="menu-screen">
            <h1 style="color: #58CC02; margin-bottom: 30px;">Мой путь чтения</h1>
            ${levels.map(lvl => `
                <div class="level-card" onclick="startLevel('${lvl.id}')">
                    <div class="level-icon">${lvl.icon}</div>
                    <div class="level-info">
                        <div class="level-title">${lvl.title}</div>
                        <div style="color: #999">Этап пройден на 0%</div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function renderGame() {
    const items = data[currentLevel];
    const currentItem = items[itemIndex];
    const progress = ((itemIndex + 1) / items.length) * 100;

    app.innerHTML = `
        <div class="game-screen">
            <button class="btn-back" onclick="goBack()">🔙</button>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${progress}%"></div>
            </div>
            
            <div class="main-content">
                <div class="big-display">${currentItem.emoji || ''}</div>
                <div class="word-display">${currentItem.char}</div>
                <button class="btn-main" onclick="handleAction()">🔊 СЛУШАТЬ</button>
            </div>
            
            <div style="margin-top: 20px;">
                <button class="btn-main" style="background: var(--blue); border-bottom-color: var(--blue-dark)" onclick="nextItem()">ДАЛЬШЕ ➡️</button>
            </div>
        </div>
    `;
    // Автоматическая озвучка при входе
    speak(currentItem.char + (currentItem.word ? "... " + currentItem.word : ""));
}

function startLevel(id) {
    currentLevel = id;
    currentScreen = 'game';
    itemIndex = 0;
    render();
}

function goBack() {
    currentScreen = 'menu';
    render();
}

function nextItem() {
    const items = data[currentLevel];
    if (itemIndex < items.length - 1) {
        itemIndex++;
        render();
    } else {
        alert("Ура! Уровень пройден! ⭐");
        goBack();
    }
}

function handleAction() {
    const item = data[currentLevel][itemIndex];
    speak(item.char + (item.word ? "... " + item.word : ""));
}

function speak(text) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ru-RU';
    utterance.rate = 0.8;
    utterance.pitch = 1.2;
    window.speechSynthesis.speak(utterance);
}

render();
