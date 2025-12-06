// Quiz Data
const quizData = {
    easy: {
        sports: [
            { q: "How many players are on a basketball team?", options: ["5", "6", "7", "8"], correct: 0 },
            { q: "Which country won the FIFA World Cup 2018?", options: ["Brazil", "Germany", "France", "Argentina"], correct: 2 },
            { q: "How many rings are in the Olympic symbol?", options: ["3", "4", "5", "6"], correct: 2 },
            { q: "What sport is played at Wimbledon?", options: ["Cricket", "Tennis", "Golf", "Football"], correct: 1 },
            { q: "How many holes are on a standard golf course?", options: ["9", "12", "18", "21"], correct: 2 }
        ],
        coding: [
            { q: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlinks Text Mark Language"], correct: 0 },
            { q: "Which language is used for styling web pages?", options: ["HTML", "Python", "CSS", "JavaScript"], correct: 2 },
            { q: "What does CSS stand for?", options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"], correct: 1 },
            { q: "Which symbol is used for comments in JavaScript?", options: ["//", "#", "/*", "<!--"], correct: 0 },
            { q: "What is the full form of API?", options: ["Application Programming Interface", "Advanced Programming Interface", "Application Process Interface", "Automated Programming Interface"], correct: 0 }
        ],
        general: [
            { q: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], correct: 2 },
            { q: "How many continents are there?", options: ["5", "6", "7", "8"], correct: 2 },
            { q: "What is the largest ocean?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], correct: 3 },
            { q: "How many days are in a leap year?", options: ["364", "365", "366", "367"], correct: 2 },
            { q: "What is the smallest prime number?", options: ["0", "1", "2", "3"], correct: 2 }
        ],
        history: [
            { q: "In which year did World War II end?", options: ["1943", "1944", "1945", "1946"], correct: 2 },
            { q: "Who was the first President of the USA?", options: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"], correct: 1 },
            { q: "The Great Wall of China was built in which country?", options: ["Japan", "Korea", "China", "Mongolia"], correct: 2 },
            { q: "Who discovered America?", options: ["Marco Polo", "Christopher Columbus", "Vasco da Gama", "Ferdinand Magellan"], correct: 1 },
            { q: "In which year did India gain independence?", options: ["1945", "1946", "1947", "1948"], correct: 2 }
        ]
    },
    medium: {
        sports: [
            { q: "Who has won the most Grand Slam titles in tennis?", options: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Pete Sampras"], correct: 2 },
            { q: "What is the national sport of Japan?", options: ["Karate", "Judo", "Sumo Wrestling", "Kendo"], correct: 2 },
            { q: "How long is an Olympic swimming pool?", options: ["25 meters", "50 meters", "75 meters", "100 meters"], correct: 1 },
            { q: "Which country hosted the 2016 Summer Olympics?", options: ["China", "UK", "Brazil", "Russia"], correct: 2 },
            { q: "What is the maximum break in snooker?", options: ["147", "155", "180", "200"], correct: 0 }
        ],
        coding: [
            { q: "Which data structure uses LIFO?", options: ["Queue", "Stack", "Array", "Tree"], correct: 1 },
            { q: "What is the time complexity of binary search?", options: ["O(n)", "O(log n)", "O(n²)", "O(1)"], correct: 1 },
            { q: "Which language is known as the mother of all languages?", options: ["C", "Assembly", "FORTRAN", "COBOL"], correct: 0 },
            { q: "What does OOP stand for?", options: ["Object Oriented Programming", "Object Oriented Process", "Order Of Precedence", "Overhead Operation Protocol"], correct: 0 },
            { q: "Which protocol is used for secure data transmission?", options: ["HTTP", "FTP", "HTTPS", "SMTP"], correct: 2 }
        ],
        general: [
            { q: "What is the speed of light?", options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"], correct: 0 },
            { q: "Who wrote Romeo and Juliet?", options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"], correct: 1 },
            { q: "What is the currency of Japan?", options: ["Yuan", "Won", "Yen", "Ringgit"], correct: 2 },
            { q: "How many bones are in the human body?", options: ["196", "206", "216", "226"], correct: 1 },
            { q: "What is the largest planet in our solar system?", options: ["Saturn", "Jupiter", "Neptune", "Uranus"], correct: 1 }
        ],
        history: [
            { q: "Who was the first person to walk on the moon?", options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "John Glenn"], correct: 1 },
            { q: "In which year did the Berlin Wall fall?", options: ["1987", "1988", "1989", "1990"], correct: 2 },
            { q: "Who was known as the Iron Lady?", options: ["Indira Gandhi", "Margaret Thatcher", "Angela Merkel", "Golda Meir"], correct: 1 },
            { q: "The French Revolution began in which year?", options: ["1776", "1789", "1799", "1804"], correct: 1 },
            { q: "Who built the Taj Mahal?", options: ["Akbar", "Shah Jahan", "Aurangzeb", "Jahangir"], correct: 1 }
        ]
    },
    hard: {
        sports: [
            { q: "What is the diameter of a basketball hoop in inches?", options: ["16", "18", "20", "22"], correct: 1 },
            { q: "Who holds the record for most centuries in cricket?", options: ["Ricky Ponting", "Sachin Tendulkar", "Virat Kohli", "Jacques Kallis"], correct: 1 },
            { q: "In which year were the first modern Olympic Games held?", options: ["1892", "1896", "1900", "1904"], correct: 1 },
            { q: "What is the maximum score in bowling?", options: ["200", "250", "300", "350"], correct: 2 },
            { q: "How many meters is a marathon?", options: ["40,195", "41,195", "42,195", "43,195"], correct: 2 }
        ],
        coding: [
            { q: "What is the worst-case time complexity of QuickSort?", options: ["O(n log n)", "O(n²)", "O(log n)", "O(n)"], correct: 1 },
            { q: "Which design pattern ensures a class has only one instance?", options: ["Factory", "Singleton", "Observer", "Adapter"], correct: 1 },
            { q: "What does SOLID stand for in programming?", options: ["Software Object Language Interface Design", "Single responsibility, Open-closed, Liskov substitution, Interface segregation, Dependency inversion", "System Oriented Logic Interface Development", "Structured Object Level Interface Design"], correct: 1 },
            { q: "Which sorting algorithm is most efficient for small datasets?", options: ["Merge Sort", "Quick Sort", "Insertion Sort", "Heap Sort"], correct: 2 },
            { q: "What is a deadlock in operating systems?", options: ["Program crash", "Infinite loop", "Circular wait for resources", "Memory leak"], correct: 2 }
        ],
        general: [
            { q: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Platinum"], correct: 2 },
            { q: "Who developed the theory of relativity?", options: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Niels Bohr"], correct: 1 },
            { q: "What is the smallest country in the world?", options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"], correct: 1 },
            { q: "How many elements are in the periodic table?", options: ["108", "116", "118", "120"], correct: 2 },
            { q: "What is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], correct: 1 }
        ],
        history: [
            { q: "Who was the first Emperor of Rome?", options: ["Julius Caesar", "Augustus", "Nero", "Caligula"], correct: 1 },
            { q: "In which year did the Titanic sink?", options: ["1910", "1911", "1912", "1913"], correct: 2 },
            { q: "Who wrote The Communist Manifesto?", options: ["Lenin", "Stalin", "Karl Marx", "Mao Zedong"], correct: 2 },
            { q: "The Hundred Years War was between which countries?", options: ["England and France", "Spain and Portugal", "Germany and Russia", "Italy and Austria"], correct: 0 },
            { q: "Who was the longest reigning British monarch before Elizabeth II?", options: ["Victoria", "George III", "Henry VIII", "Edward VII"], correct: 0 }
        ]
    }
};

// Game State
let currentDifficulty = '';
let currentCategory = '';
let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 15;
let timer = null;
let selectedAnswer = null;
let lifelines = {
    fiftyFifty: false,
    audiencePoll: false
};
let hiddenOptions = [];
let answeredQuestions = [];

// Category Icons
const categoryIcons = {
    sports: '🏆',
    coding: '💻',
    general: '💡',
    history: '🏛️'
};

// Screen Navigation
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

function selectDifficulty(difficulty) {
    currentDifficulty = difficulty;
    document.getElementById('selectedDifficulty').textContent = difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
    loadCategories();
    showScreen('categoryScreen');
}

function loadCategories() {
    const categoryGrid = document.getElementById('categoryGrid');
    categoryGrid.innerHTML = '';
    
    Object.keys(quizData[currentDifficulty]).forEach((category, index) => {
        const card = document.createElement('button');
        card.className = 'card';
        card.style.animationDelay = `${index * 0.1}s`;
        card.onclick = () => selectCategory(category);
        card.innerHTML = `
            <div class="card-icon">${categoryIcons[category]}</div>
            <h3>${category.charAt(0).toUpperCase() + category.slice(1)}</h3>
            <p>${quizData[currentDifficulty][category].length} Questions</p>
        `;
        categoryGrid.appendChild(card);
    });
}

function selectCategory(category) {
    currentCategory = category;
    questions = [...quizData[currentDifficulty][currentCategory]];
    startQuiz();
}

function goBack(screen) {
    showScreen(screen + 'Screen');
}

// Quiz Functions
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    answeredQuestions = [];
    lifelines = { fiftyFifty: false, audiencePoll: false };
    
    document.getElementById('totalQuestions').textContent = questions.length;
    document.getElementById('fiftyFiftyBtn').disabled = false;
    document.getElementById('audiencePollBtn').disabled = false;
    
    showScreen('quizScreen');
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResults();
        return;
    }

    const question = questions[currentQuestionIndex];
    selectedAnswer = null;
    hiddenOptions = [];
    timeLeft = 15;
    
    // Update UI
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
    document.getElementById('questionNum').textContent = currentQuestionIndex + 1;
    document.getElementById('questionText').textContent = question.q;
    document.getElementById('currentScore').textContent = score;
    document.getElementById('attemptedQuestions').textContent = currentQuestionIndex;
    
    // Update progress bar
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    
    // Load options
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.style.animationDelay = `${index * 0.1}s`;
        btn.onclick = () => selectAnswer(index);
        btn.innerHTML = `
            <span class="option-letter">${String.fromCharCode(65 + index)}</span>
            <span class="option-text">${option}</span>
        `;
        optionsContainer.appendChild(btn);
    });
    
    // Start timer
    startTimer();
}

function startTimer() {
    clearInterval(timer);
    updateTimerDisplay();
    
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            handleTimeout();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const timerElement = document.getElementById('timerDisplay');
    document.getElementById('timeLeft').textContent = timeLeft;
    
    if (timeLeft <= 5) {
        timerElement.classList.add('warning');
    } else {
        timerElement.classList.remove('warning');
    }
}

function selectAnswer(index) {
    if (selectedAnswer !== null || hiddenOptions.includes(index)) return;
    
    clearInterval(timer);
    selectedAnswer = index;
    
    const question = questions[currentQuestionIndex];
    const isCorrect = index === question.correct;
    
    // Update button styles
    const buttons = document.querySelectorAll('.option-btn');
    buttons[index].classList.add(isCorrect ? 'correct' : 'wrong');
    
    if (!isCorrect) {
        buttons[question.correct].classList.add('correct');
    }
    
    // Disable all buttons
    buttons.forEach(btn => btn.disabled = true);
    
    // Update score and record
    if (isCorrect) score++;
    answeredQuestions.push({
        question: currentQuestionIndex,
        correct: isCorrect,
        answered: true,
        userAnswer: index
    });
    
    // Move to next question
    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 2000);
}

function handleTimeout() {
    answeredQuestions.push({
        question: currentQuestionIndex,
        correct: false,
        answered: false
    });
    
    // Show correct answer
    const question = questions[currentQuestionIndex];
    const buttons = document.querySelectorAll('.option-btn');
    buttons[question.correct].classList.add('correct');
    buttons.forEach(btn => btn.disabled = true);
    
    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 2000);
}

// Lifeline Functions
function useFiftyFifty() {
    if (lifelines.fiftyFifty) return;
    
    lifelines.fiftyFifty = true;
    document.getElementById('fiftyFiftyBtn').disabled = true;
    
    const question = questions[currentQuestionIndex];
    const wrongOptions = [0, 1, 2, 3].filter(i => i !== question.correct);
    
    // Shuffle and take 2 wrong options
    const toHide = wrongOptions.sort(() => Math.random() - 0.5).slice(0, 2);
    hiddenOptions = toHide;
    
    // Hide options
    const buttons = document.querySelectorAll('.option-btn');
    toHide.forEach(index => {
        buttons[index].disabled = true;
    });
}

function useAudiencePoll() {
    if (lifelines.audiencePoll) return;
    
    lifelines.audiencePoll = true;
    document.getElementById('audiencePollBtn').disabled = true;
    
    const question = questions[currentQuestionIndex];
    const pollData = generatePollData(question.correct);
    
    // Display poll results
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach((btn, index) => {
        if (!hiddenOptions.includes(index)) {
            // Add poll bar
            const pollBar = document.createElement('div');
            pollBar.className = 'poll-bar';
            pollBar.style.width = pollData[index] + '%';
            btn.insertBefore(pollBar, btn.firstChild);
            
            // Add percentage
            const pollPercentage = document.createElement('span');
            pollPercentage.className = 'poll-percentage';
            pollPercentage.textContent = pollData[index] + '%';
            btn.appendChild(pollPercentage);
        }
    });
}

function generatePollData(correctIndex) {
    const data = [0, 0, 0, 0];
    let remaining = 100;
    
    // Give correct answer 40-70% votes
    data[correctIndex] = 40 + Math.floor(Math.random() * 30);
    remaining -= data[correctIndex];
    
    // Distribute remaining votes
    const availableIndices = [0, 1, 2, 3].filter(i => i !== correctIndex && !hiddenOptions.includes(i));
    
    availableIndices.forEach((index, i) => {
        if (i === availableIndices.length - 1) {
            data[index] = remaining;
        } else {
            const votes = Math.floor(Math.random() * remaining / 2);
            data[index] = votes;
            remaining -= votes;
        }
    });
    
    return data;
}

// Results
function showResults() {
    clearInterval(timer);
    const percentage = Math.round((score / questions.length) * 100);
    
    document.getElementById('finalScore').textContent = score + '/' + questions.length;
    document.getElementById('finalPercentage').textContent = percentage + '%';
    
    // Determine grade
    let grade = 'D';
    if (percentage >= 90) grade = 'A+';
    else if (percentage >= 80) grade = 'A';
    else if (percentage >= 70) grade = 'B';
    else if (percentage >= 60) grade = 'C';
    
    document.getElementById('resultGrade').textContent = grade;
    
    // Set message
    let message = 'Keep Practicing! 💪';
    if (percentage >= 70) message = 'Excellent Performance! 🎉';
    else if (percentage >= 40) message = 'Good Effort! 👍';
    
    document.getElementById('resultMessage').textContent = message;
    
    // Show breakdown
    const breakdown = document.getElementById('resultsBreakdown');
    breakdown.innerHTML = '';
    
    answeredQuestions.forEach((result, index) => {
        const div = document.createElement('div');
        div.className = 'result-item';
        div.style.animationDelay = `${index * 0.05}s`;
        
        const question = questions[index];
        const status = result.correct ? 'correct' : 'wrong';
        const icon = result.correct ? 'fa-check-circle' : 'fa-times-circle';
        const text = result.correct ? 'Correct' : (result.answered ? 'Wrong' : 'Timeout');
        
        let detailsHTML = '';
        if (!result.answered) {
            detailsHTML = '<div class="result-item-details">Timeout</div>';
        } else if (!result.correct) {
            detailsHTML = `<div class="result-item-details">Your answer: ${question.options[result.userAnswer]} | Correct: ${question.options[question.correct]}</div>`;
        }
        
        div.innerHTML = `
            <div class="result-item-left">
                <div class="result-item-number ${status}">${index + 1}</div>
                <div class="result-item-info">
                    <div class="result-item-question">${question.q}</div>
                    ${detailsHTML}
                </div>
            </div>
            <div class="result-item-status ${status}">
                <i class="fas ${icon}"></i>
                <span>${text}</span>
            </div>
        `;
        
        breakdown.appendChild(div);
    });
    
    showScreen('resultScreen');
}

function playAgain() {
    currentDifficulty = '';
    currentCategory = '';
    clearInterval(timer);
    showScreen('difficultyScreen');
}

// Add Question Modal
function showAddQuestionModal() {
    document.getElementById('modalCategory').textContent = currentCategory;
    document.getElementById('modalDifficulty').textContent = currentDifficulty;
    document.getElementById('addQuestionModal').classList.add('active');
    document.getElementById('addQuestionForm').reset();
}

function closeAddQuestionModal() {
    document.getElementById('addQuestionModal').classList.remove('active');
}

// Handle form submission
document.getElementById('addQuestionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const questionText = document.getElementById('questionInput').value;
    const options = [
        document.getElementById('option0').value,
        document.getElementById('option1').value,
        document.getElementById('option2').value,
        document.getElementById('option3').value
    ];
    const correct = parseInt(document.querySelector('input[name="correct"]:checked').value);
    
    // Add question to quiz data
    quizData[currentDifficulty][currentCategory].push({
        q: questionText,
        options: options,
        correct: correct
    });
    
    closeAddQuestionModal();
    
    // Show success message (you can customize this)
    alert('Question added successfully! It will appear in future quizzes of this category.');
});

// Close modal when clicking outside
document.getElementById('addQuestionModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeAddQuestionModal();
    }
});

// Initialize
window.onload = function() {
    showScreen('difficultyScreen');
};