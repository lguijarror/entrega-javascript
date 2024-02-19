const getTrivia = async (nQuestions) => {

    const response = await fetch('https://opentdb.com/api.php?amount=' + nQuestions);

    const questions = await response.json();

    drawQuestions(questions);
};

const startTrivia = () => {
    let nQuestions = document.querySelector('input[data-function="questions-number"]');
    let startButton = document.querySelector('button[data-function="start-game"]');

    if (nQuestions.value != "") {

        startButton.addEventListener('click', () => getTrivia(nQuestions.value));
    }
};

const checkGame = (questions) => {

    let checkButton = document.querySelector('button[data-function="check-game"]');

    checkButton.addEventListener('click', () => getResultTrivia(questions));
};

const drawQuestions = (questions) => {

    let gameboard = document.querySelector('div[data-function="gameboard"]');

    if (gameboard.textContent.trim() === '') {

        for (let i = 0; i < questions.results.length; i++) {
            let questionContainer = document.createElement('div');
            questionContainer.className = 'question-container';

            drawCategories(questionContainer, questions.results[i]);
            drawQuestion(questionContainer, questions.results[i]);
            drawAnswers(questionContainer, questions.results[i], i);

            gameboard.appendChild(questionContainer);
        }

        checkGame(questions);
    }

};

const drawCategories = (questionContainer, question) => {

    let categoriesDiv = document.createElement('div');
    categoriesDiv.className = 'categories';
    let categorySpan = document.createElement('span');
    let categoryText = document.createTextNode(question.category);

    categorySpan.appendChild(categoryText);
    categorySpan.className = 'category';

    categoriesDiv.appendChild(categorySpan);

    questionContainer.appendChild(categoriesDiv);
};

const drawQuestion = (questionContainer, question) => {
    let questionDiv = document.createElement('div');
    questionDiv.className = 'question';

    let questionParagraph = document.createElement('p');
    let questionText = document.createTextNode(question.question);

    questionParagraph.appendChild(questionText);
    questionDiv.appendChild(questionParagraph);

    questionContainer.appendChild(questionParagraph);
};

const drawAnswers = (questionContainer, question, index) => {
    //Creamos un array con todas las respuestas para pintar
    let allAnswers = [...question.incorrect_answers, question.correct_answer];
    //Ordenamos aleatoriamente las respuestas
    allAnswers = shuffleAnswers(allAnswers);

    let answersDiv = document.createElement('div');
    answersDiv.className = 'answers';

    for (let answer of allAnswers) {
        let answerDiv = document.createElement('div');
        answerDiv.className = 'answer';

        let answerInput = document.createElement('input');
        answerInput.setAttribute('name', 'answer-' + index);
        answerInput.setAttribute('type', 'radio');
        answerInput.setAttribute('value', answer);

        let answerText = document.createTextNode(answer);

        answerDiv.appendChild(answerInput);
        answerDiv.appendChild(answerText);

        answersDiv.appendChild(answerDiv);

    }

    questionContainer.appendChild(answersDiv);
};

const shuffleAnswers = (answers) => {
    return answers.sort(() => Math.random() - 0.5);
};

const getResultTrivia = (questions) => {

    let answersCorrect = 0;
    let check = true;
    let resultDiv = document.querySelector('.results');

    if (resultDiv == null) {

        resultDiv = document.createElement('div');
        resultDiv.className = 'results';
    }

    let errorP = document.querySelector('.error');
    let resultP = document.querySelector('.result');

    for (let i = 0; i < questions.results.length; i++) {
        let answers = document.querySelectorAll('input[name="answer-' + i + '"]');

        if(checkAnswers(answers)){
            let selectedAnswer = document.querySelector('input[name="answer-' + i + '"]:checked');
        
            if (selectedAnswer.value == questions.results[i].correct_answer) {
                answersCorrect++;
            }
        }else{
            if(errorP == null){
                errorP = document.createElement('p');
                errorP.className = 'error';
    
                let errorText = document.createTextNode('Please, answer all questions');
                errorP.appendChild(errorText);
    
                resultDiv.appendChild(errorP);
            }  
            check = false;  
            break;    
        }
    }

    if(check){
        if(errorP != null){
            errorP.remove();
        }

        if(resultP == null){
        
            resultP = document.createElement('p');
            resultP.className = 'result';
            let resultText = document.createTextNode('Correct answers: ' + answersCorrect + '/' + questions.results.length);
            resultP.appendChild(resultText);
    
            resultDiv.appendChild(resultP);
        }
    }
   
    document.querySelector('div[data-function="gameboard"]').appendChild(resultDiv);
};

const checkAnswers = (answers) => {
    let checked = false;

    for(let answer of answers){
        if(answer.checked){
            checked = true;
            break;
        }
    }

    return checked;
};

const init = async () => {
    startTrivia();
};

init();