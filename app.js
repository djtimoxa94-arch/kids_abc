const alphabet = [
    { letter: 'А', word: 'Арбуз', emoji: '🍉' },
    { letter: 'Б', word: 'Барабан', emoji: '🥁' },
    { letter: 'В', word: 'Вишня', emoji: '🍒' },
    { letter: 'Г', word: 'Гитара', emoji: '🎸' },
    { letter: 'Д', word: 'Дом', emoji: '🏠' },
    { letter: 'Е', word: 'Енот', emoji: '🦝' },
    { letter: 'Ё', word: 'Ёжик', emoji: '🦔' },
    { letter: 'Ж', word: 'Жираф', emoji: '🦒' },
    { letter: 'З', word: 'Зебра', emoji: '🦓' },
    { letter: 'И', word: 'Иголка', emoji: '🪡' },
    { letter: 'Й', word: 'Йогурт', emoji: '🍦' },
    { letter: 'К', word: 'Кот', emoji: '🐈' },
    { letter: 'Л', word: 'Лев', emoji: '🦁' },
    { letter: 'М', word: 'Мяч', emoji: '⚽' },
    { letter: 'Н', word: 'Носки', emoji: '🧦' },
    { letter: 'О', word: 'Очки', emoji: '👓' },
    { letter: 'П', word: 'Петух', emoji: '🐓' },
    { letter: 'Р', word: 'Рыба', emoji: '🐟' },
    { letter: 'С', word: 'Слон', emoji: '🐘' },
    { letter: 'Т', word: 'Торт', emoji: '🎂' },
    { letter: 'У', word: 'Утка', emoji: '🦆' },
    { letter: 'Ф', word: 'Флаг', emoji: '🚩' },
    { letter: 'Х', word: 'Хлеб', emoji: '🍞' },
    { letter: 'Ц', word: 'Цветок', emoji: '🌸' },
    { letter: 'Ч', word: 'Часы', emoji: '⌚' },
    { letter: 'Ш', word: 'Шарик', emoji: '🎈' },
    { letter: 'Щ', word: 'Щетка', emoji: '🪥' },
    { letter: 'Ъ', word: 'Объезд', emoji: '🚧' },
    { letter: 'Ы', word: 'Мышь', emoji: '🐭' },
    { letter: 'Ь', word: 'Медведь', emoji: '🧸' },
    { letter: 'Э', word: 'Экран', emoji: '📺' },
    { letter: 'Ю', word: 'Юбка', emoji: '👗' },
    { letter: 'Я', word: 'Яблоко', emoji: '🍎' }
];

let currentIndex = 0;

const card = document.getElementById('main-card');
const letterDisplay = document.getElementById('letter-display');
const wordDisplay = document.getElementById('word-display');
const emojiDisplay = document.getElementById('emoji-display');
const currentNum = document.getElementById('current-num');
const btnPlay = document.getElementById('play-sound');
const btnNext = document.getElementById('btn-next');
const btnPrev = document.getElementById('btn-prev');

function updateUI() {
    const data = alphabet[currentIndex];
    
    // Анимация карточки
    card.classList.remove('animate');
    void card.offsetWidth; // Триггер рефлоу
    card.classList.add('animate');

    letterDisplay.textContent = data.letter;
    wordDisplay.textContent = data.word;
    emojiDisplay.textContent = data.emoji;
    currentNum.textContent = currentIndex + 1;
}

function speak(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel(); // Остановить текущую речь
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ru-RU';
        utterance.rate = 0.9;
        utterance.pitch = 1.1;
        window.speechSynthesis.speak(utterance);
    }
}

function hapticFeedback() {
    if ('vibrate' in navigator) {
        navigator.vibrate(40); // Легкая вибрация
    }
}

btnNext.addEventListener('click', () => {
    hapticFeedback();
    currentIndex = (currentIndex + 1) % alphabet.length;
    updateUI();
});

btnPrev.addEventListener('click', () => {
    hapticFeedback();
    currentIndex = (currentIndex - 1 + alphabet.length) % alphabet.length;
    updateUI();
});

btnPlay.addEventListener('click', () => {
    hapticFeedback();
    const data = alphabet[currentIndex];
    speak(data.letter + ". " + data.word);
});

// Первичная загрузка
updateUI();
