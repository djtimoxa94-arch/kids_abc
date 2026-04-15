const alphabet = [
    { letter: 'А', word: 'Арбуз', emoji: '🍉' },
    { letter: 'Б', word: 'Барабан', emoji: '🥁' },
    { letter: 'В', word: 'Волк', emoji: '🐺' },
    { letter: 'Г', word: 'Гриб', emoji: '🍄' },
    { letter: 'Д', word: 'Дом', emoji: '🏠' },
    { letter: 'Е', word: 'Енот', emoji: '🦝' }
    // Ты можешь добавить остальные буквы по аналогии
];

let currentIndex = 0;

const letterDisplay = document.getElementById('letter-display');
const wordDisplay = document.getElementById('word-display');
const emojiDisplay = document.getElementById('emoji-display');
const btnPlay = document.getElementById('play-sound');
const btnNext = document.getElementById('btn-next');
const btnPrev = document.getElementById('btn-prev');

function updateUI() {
    const currentData = alphabet[currentIndex];
    letterDisplay.textContent = currentData.letter;
    wordDisplay.textContent = currentData.word;
    emojiDisplay.textContent = currentData.emoji;
}

// Используем Web Speech API для озвучки
function speak(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ru-RU'; // Устанавливаем русский язык
        utterance.rate = 0.8; // Чуть медленнее, чтобы было понятно ребенку
        utterance.pitch = 1.2; // Чуть выше голос, чтобы звучало добрее
        window.speechSynthesis.speak(utterance);
    } else {
        alert("Ваш браузер не поддерживает синтез речи 😔");
    }
}

btnNext.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % alphabet.length;
    updateUI();
});

btnPrev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + alphabet.length) % alphabet.length;
    updateUI();
});

btnPlay.addEventListener('click', () => {
    // Сначала произносим букву, потом слово
    const currentData = alphabet[currentIndex];
    speak(currentData.letter + "... " + currentData.word);
});

// Инициализация при загрузке
updateUI();
