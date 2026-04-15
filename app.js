
const alphabet = [
    { letter: 'А', word: 'Арбуз', emoji: '🍉' }, { letter: 'Б', word: 'Барабан', emoji: '🥁' },
    { letter: 'В', word: 'Вишня', emoji: '🍒' }, { letter: 'Г', word: 'Гитара', emoji: '🎸' },
    { letter: 'Д', word: 'Дом', emoji: '🏠' }, { letter: 'Е', word: 'Енот', emoji: '🦝' },
    { letter: 'Ё', word: 'Ёж', emoji: '🦔' }, { letter: 'Ж', word: 'Жираф', emoji: '🦒' },
    { letter: 'З', word: 'Зебра', emoji: '🦓' }, { letter: 'И', word: 'Иголка', emoji: '🪡' },
    { letter: 'Й', word: 'Йогурт', emoji: '🍦' }, { letter: 'К', word: 'Кот', emoji: '🐈' },
    { letter: 'Л', word: 'Лев', emoji: '🦁' }, { letter: 'М', word: 'Мяч', emoji: '⚽' },
    { letter: 'Н', word: 'Носки', emoji: '🧦' }, { letter: 'О', word: 'Очки', emoji: '👓' },
    { letter: 'П', word: 'Петух', emoji: '🐓' }, { letter: 'Р', word: 'Рыба', emoji: '🐟' },
    { letter: 'С', word: 'Слон', emoji: '🐘' }, { letter: 'Т', word: 'Торт', emoji: '🎂' },
    { letter: 'У', word: 'Утка', emoji: '🦆' }, { letter: 'Ф', word: 'Флаг', emoji: '🚩' },
    { letter: 'Х', word: 'Хлеб', emoji: '🍞' }, { letter: 'Ц', word: 'Цветок', emoji: '🌸' },
    { letter: 'Ч', word: 'Часы', emoji: '⌚' }, { letter: 'Ш', word: 'Шарик', emoji: '🎈' },
    { letter: 'Щ', word: 'Щетка', emoji: '🪥' }, { letter: 'Ъ', word: 'Объезд', emoji: '🚧' },
    { letter: 'Ы', word: 'Мышь', emoji: '🐭' }, { letter: 'Ь', word: 'Медведь', emoji: '🧸' },
    { letter: 'Э', word: 'Экран', emoji: '📺' }, { letter: 'Ю', word: 'Юбка', emoji: '👗' },
    { letter: 'Я', word: 'Яблоко', emoji: '🍎' }
];

let currentIndex = 0;
let synth = window.speechSynthesis;

function updateUI() {
    const data = alphabet[currentIndex];
    document.getElementById('letter-display').textContent = data.letter;
    document.getElementById('word-display').textContent = data.word;
    document.getElementById('emoji-display').textContent = data.emoji;
    document.getElementById('current-num').textContent = currentIndex + 1;
}

function speak() {
    if (synth.speaking) synth.cancel();
    
    const data = alphabet[currentIndex];
    const utterance = new SpeechSynthesisUtterance(`${data.letter}... ${data.word}`);
    utterance.lang = 'ru-RU';
    
    // Пытаемся найти лучший женский или детский голос в системе
    const voices = synth.getVoices();
    const ruVoice = voices.find(v => v.lang.includes('ru') && v.name.includes('Google')) || voices.find(v => v.lang.includes('ru'));
    if (ruVoice) utterance.voice = ruVoice;

    utterance.rate = 0.8;
    utterance.pitch = 1.2;

    utterance.onstart = () => document.body.classList.add('speaking');
    utterance.onend = () => document.body.classList.remove('speaking');

    synth.speak(utterance);
}

document.getElementById('btn-next').onclick = () => { currentIndex = (currentIndex + 1) % alphabet.length; updateUI(); };
document.getElementById('btn-prev').onclick = () => { currentIndex = (currentIndex - 1 + alphabet.length) % alphabet.length; updateUI(); };
document.getElementById('play-sound').onclick = speak;
document.getElementById('letter-display').onclick = speak;

// Чтобы голоса загрузились
window.speechSynthesis.onvoiceschanged = () => {};

updateUI();
