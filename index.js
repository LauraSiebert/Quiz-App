// Questions & Answers =======================================

const questionBank = [{
        questionLocation: 1,
        questionString: 'What is the phrase called within the letra, where the singer is not singing, and 1-2 compas is available for a desplante?',
        ans1: 'Aliento',
        ans2: 'Respiro',
        ans3: 'Rabieta',
        ans4: 'Descanso'
    },
    {
        questionLocation: 2,
        questionString: 'Across all palos, what is the structure of the melody?',
        ans1: '1 compas for both the melody and resolution of the melody.',
        ans2: '6 beats for the melody and 6 beats for the resolution',
        ans3: 'There is no structure to the melody.',
        ans4: '1 compas to develop the melody and 1 compas for the resolution of the melody.'
    },
    {
        questionLocation: 3,
        questionString: 'Especially in a tablao, why is it so important to do a recoje before every llamada, major desplante, and escobilla?',
        ans1: 'The singer and guitarist also start on the 1. If there is no signal, there can be a conflict.',
        ans2: 'It sounds better.',
        ans3: 'Usually recojes include really sharp pellizcos that get the audience excited.',
        ans4: 'It gives the dancer a time to rest before the intense parts of the piece.'
    },
    {
        questionLocation: 4,
        questionString: 'At the time that you have little to no rehearsals with the musicians, what is the single most important thing to establish?',
        ans1: 'The speed of the piece.',
        ans2: 'The length of the piece. ',
        ans3: 'The structure of the piece.',
        ans4: 'The letras of the piece.'
    },
    {
        questionLocation: 5,
        questionString: 'What is a basic structure for most palos?',
        ans1: 'Intro, Letra, Falseta, Letra, Escobilla, Letra, Coletilla',
        ans2: 'Letra, Falseta, Letra, Escobilla, Letra, Coletilla',
        ans3: 'Intro, Letra, Falseta, Letra, Escobilla, Letra, Estribillo/Salida.',
        ans4: 'Intro, Letra, Falseta, Macho, Escobilla, Letra, Estribillo/Salida.'
    },
    {
        questionLocation: 6,
        questionString: 'In a tablao setting, when you are done with your piece, what should you do?',
        ans1: 'Go the the dressing room/bathroom to stretch.',
        ans2: "Catch your breath and support the next artist's piece with jaleo and palmas.",
        ans3: 'Head the the dressing room/bathroom to reapply makeup and do a costume change.',
        ans4: "Sit in your spot and do palmas SOFTLY and don't do any jaleo, because typically you don't know exactly what the other artists will be doing."
    },
    {
        questionLocation: 7,
        questionString: 'During fin de fiesta, what is the expected protocol?',
        ans1: 'Let the singer sing a few letras to start.',
        ans2: 'The singer or director of the show will look at you for your turn to dance.',
        ans3: 'Dance a SHORT pataita with no long escobillas (unless you are the guest artist). Get in and get out.',
        ans4: 'All of the above.'
    },
    {
        questionLocation: 8,
        questionString: 'Is improvisation a requirement to dance in a tablao setting?',
        ans1: 'Yes, to a point; You should be comfortable enough with the compas to move from mistake to recovery smoothly.',
        ans2: 'No. All dances should be set, rehearsed, and choreographed.',
        ans3: 'Yes. In a tablao setting, you should be ready to dance any palo, with any structure, at any time.',
        ans4: 'Yes. You should be able to improvise a complete dance in order to start dancing in a tablao setting.'
    },
    {
        questionLocation: 9,
        questionString: 'What is the job of the dancer in a tablao setting?',
        ans1: 'Dancers are only responsible for mounting and directing their own pieces.',
        ans2: 'Dancers are responsible for mounting and directing their own pieces, sound checking the footwork, doing palmas throughout the show, doing jaleo throughout the show, and supporting the entire cuadro to their best ability.',
        ans3: 'Dancers are responsible for whatever the singer assigns them to do.',
        ans4: 'Dancers are only responsible for loading in and out, sound checking the footwork, and mounting and directing their own pieces.'
    },
    {
        questionLocation: 10,
        questionString: 'What is the best way to improve your skills for dancing in a tablao?',
        ans1: 'Focus on the perfecting each choreography from start to finish and in order.',
        ans2: 'Work on increasing the difficulty of your pieces.',
        ans3: 'Dance in a tablao setting as much as you can, understanding that mistakes will be made, but are also learning opportunites.',
        ans4: 'Practice staying focused on you your choreography and structure, regardless of what the musicians are doing.'
    }
];

const answers = [
    'Respiro',
    '1 compas to develop the melody and 1 compas for the resolution of the melody.',
    'The singer and guitarist also start on the 1. If there is no signal, there can be a conflict.',
    'The structure of the piece.',
    'Intro, Letra, Falseta, Letra, Escobilla, Letra, Estribillo/Salida.',
    "Catch your breath and support the next artist's piece with jaleo and palmas.",
    'All of the above.',
    'Yes, to a point; You should be comfortable enough with the compas to move from mistake to recovery smoothly.',
    'Dancers are responsible for mounting and directing their own pieces, sound checking the footwork, doing palmas throughout the show, doing jaleo throughout the show, and supporting the entire cuadro to their best ability.',
    'Dance in a tablao setting as much as you can, understanding that mistakes will be made, but are also learning opportunites.',
];

let questionPosition = 1;

let correctAnswer = 0;

// Render Quiz Questions, Structure ===================
function renderQuizTemplate(correctAnswer, question, questionAnswer) {
    return `<section class="quiz-container js-quiz-main" id="quiz-grid" role="main">
    <div class="current-score-container js-current-score">Your current score is:<br>${correctAnswer}/${questionAnswer}</div>
    <div class="quiz-location-container js-quiz-location"><h2 id="score-text">You are on question<br>${questionPosition} of 10<h2></div>
    <div class="question-container">
        <h1 class="question-title">Question:</h1>
        <h2 id="question"> ${question.questionString}</h2>
    </div>
    <div class="answer-container">
        <form class="answers">
            <fieldset class="answer-box">
                <legend>Answer Options for Flamenco Quiz</legend>
                    <label class="answer-option">
                        <input type="radio" class="answer-button" id="answer1" value=${question.ans1}name="answer">
                        <span>${question.ans1}</span><br><br>
                    </label>  
                    <label class="answer-option">
                        <input type="radio" class="answer-button" id="answer2" value=${question.ans2}name="answer">
                        <span>${question.ans2}</span><br><br>
                    </label>                  
                    <label class="answer-option">
                        <input type="radio" class="answer-button" id="answer3" value=${question.ans3} name="answer">
                        <span>${question.ans3}</span><br><br>
                    </label> 
                    <label class="answer-option">
                        <input type="radio" class="answer-button" id="answer4" value=${question.ans4} name="answer">
                        <span>${question.ans4}</span><br><br>
                    </label> 
            </fieldset>
            <button type="submit" class="submit-Button js-submit-button">Submit</button>
        </form>
    </div>
</section>`
}

function nextQuestion() {
    const question = questionBank[questionPosition - 1];
    const questionAnswer = questionPosition - 1;
    $('.container').html(renderQuizTemplate(correctAnswer, question, questionAnswer));
}

// Buttons ===========================

function handleStartButton() {
    $('.js-quiz-start').click(function (event) {
        nextQuestion();
    });
}

function handleSubmitButton() {
    $('.container').on('click', '.js-submit-button', function(event){
        event.preventDefault()

        const answer = $('input:checked').siblings('span');

        const correctUserAnswer = checkUserAnswer(answer);
        if (correctUserAnswer) {
            correctAnswerFeedback();
        } else {
            incorrectAnswerFeedback();
        }
    });
}

function handleNextButton() {
    $('.container').on('click', '.js-next-button', function(event){
        if (questionPosition === 10) {
            renderResults(correctAnswer);
        } else {
            iterateQuestions();
            nextQuestion();
        }  
    });
}

function handleRestartButton () {
    $('main').on('click', '#js-restart-button', function (event) {
      location.reload();
    });
  }


  // Checks & Iterations =============================

function checkUserAnswer(answer) {
    return answer.text() === answers[questionPosition - 1] ? true : false
}

function iterateQuestions() {
    questionPosition++;
}

function iterateAnswers() {
    correctAnswer++;
}

function renderResults(correctAnswer){
    if (`${correctAnswer}` >= 10) {
        $('.container').html(`
        <section id="final-page">
            <div class="feedback-container">
                <h1>OLE!</h1>
                <img src="https://media.giphy.com/media/Y4tW36ZIXAfRLisTwZ/giphy.gif" alt="Vintage flamenco duo animated gif" id="correct-photo">
                <h2>You got ${correctAnswer} / 10</h2>
                <p>You're ready to schedule your first tablao performance!</p>
                <button id="js-restart-button">Restart Quiz</button>
            </div>
        </section>
        `);
    } else if (`${correctAnswer}` < 8 && `${correctAnswer}` >= 5) {
        $('.container').html(`
        <section id="final-page">
            <div class="feedback-container">
                <h1>Good Job!</h1>
                <img src="https://media.giphy.com/media/Y4tW36ZIXAfRLisTwZ/giphy.gif" alt="Vintage flamenco duo animated gif" id="correct-photo">
                <h2>You got ${correctAnswer} / 10</h2>
                <p>Though you passed, you should shore up your structure and tablao knowledge and come back again to score higher! Either way, you are ready to start accompanying with palmas and jaleo, and participate in fin de fiesta!</p>
                <button id="js-restart-button">Restart Quiz</button>
            </div>
        </section>
        `);
    } else {
        $('.container').html(`
        <section id="final-page">
            <div class="feedback-container">
                <h1>Stay Dedicated!</h1>
                <img src="https://media.giphy.com/media/1m7pNrik7VA9q/giphy.gif" alt="Flamenco dancer with flowers being thrown at her." id="correct-photo">
                <h2>You got ${correctAnswer} / 10</h2>
                <p>Your interest in taking this quiz shows your respect and passion for the art of Flamenco! With that being said, you still need to study hard before heading to the tablao. It is recommended to work on Bulerias first. Once you have a solid structural understanding of a basic pataita, you can apply those principals to all other palos of flamenco. Good luck! </p>
                <button id="js-restart-button">Restart Quiz</button>
            </div>
        </section>
        `);
    }
}

// Feedback handling ====================

function correctAnswerFeedback() {
    $('.container').html(`<section class="feedback-page" role="main">
    <div class="feedback-container">
        <h1>You Got it!</h1>
        <img src="http://i68.tinypic.com/11hxfdc.jpg" alt="Flamenco dancer saying 'Ole Tu'" id="correct-photo">
        <button class="js-next-button">Next</button>
    </div>
    </section>`);
    iterateAnswers();
}

function createIncorrectPage(questionPosition) {
    return `
    <section class="feedback-page" role="main">
    <div class="feedback-container">
        <h1>Incorrect</h1>
        <img src="http://i68.tinypic.com/2u6e3xe.jpg" alt="It's flamenco, not flamingo" id="incorrect-photo">
        <h2>The correct answer is "${answers[questionPosition - 1]}!"</h2>
        <button class="js-next-button">Next</button>
    </div>
    </section>`;
}

function incorrectAnswerFeedback() {
  $('.container').html(createIncorrectPage(questionPosition));
}

function createResultsPage(correctAnswer) {
    $('#container').html(`
      <section id="final-page">
        <h2>Your final score is: ${correctAnswer} out of 10</h2>
        <button id="js-restart-button">Play Again?</button>
      </section>
    `);
}

// Render Quiz in it's entirety ===========
function createQuiz() {
    handleStartButton();
    handleSubmitButton();
    handleNextButton();
    handleRestartButton();
}

createQuiz();