// Homepage content
let userName;
const user_name_btn = document.getElementById("user_name_btn");
const user_name_input = document.getElementById("user_name_input");
const pipesAndCisterns = document.getElementById("prod1");
const probability = document.getElementById("prod2");
const ProblemsOnAge = document.getElementById("prod3");
const ProfitAndLoss = document.getElementById("prod4");
const home_page = document.querySelector(".home_page");
const home_page_footer= document.querySelector(".home_page_footer");

// Rulespage content
const rules_page = document.querySelector(".rules_page");
const rules_next = document.getElementById("rules_next");
const rules_back = document.getElementById("rules_back");

// Quizpage content
const quiz_page = document.querySelector(".quiz_page");
let topic = document.querySelector(".topic");
const result_page = document.querySelector(".result_page")
const quiz_question = document.querySelector("#question");
const optionList = document.querySelector(".quiz_options");
const timer = document.querySelector("#timer");
const nextQuestionBtn = document.getElementById("next_Question");
let question_num = document.querySelector("#question_num");
const total_question = document.getElementById("total_question");
let currentquestion = 0;


// Resultpage content
const goToResultBtn = document.querySelector(".goToResults");
const correctAnswer = quiz_page.querySelector(".score");
const inCorrectAnswer = result_page.querySelector("#inCorrect");
const correct = result_page.querySelector('#correct');
const attempt = result_page.querySelector("#attempt");
const tQ = result_page.querySelector("#tQ");
const percentage = result_page.querySelector("#percentage");
const timeTaken = result_page.querySelector("#timeTaken");
let timeValue = 10;
let timeStartHere;
let playerName = document.querySelector("#playerName");
let score = 0;
let wrongAnswer = 0;
let countVAl;
let totalTime;
let countStart = 0;
let tot;
const startAgainBtn = result_page.querySelector("#startAgain");
const homeBtn = result_page.querySelector('#home');


// Player Info + Enter Button
user_name_btn.addEventListener("click",()=>{
    if(user_name_input.value.length==0){
        alert("Please enter a name");
    }
    else{
        playerName.innerHTML = user_name_input.value;
        userName = user_name_input.value;
        home_page_footer.style.display="block";
    }
})




// Catogories
pipesAndCisterns.addEventListener("click", () => {
    countVAl = 0;
    topic.innerHTML = "Pipes and Cisterns";
    homeToRules();
    rulesToQuiz();
});

probability.addEventListener("click", () => {
    countVAl = 1;
    topic.innerHTML = "Probability";
    homeToRules();
    rulesToQuiz();
});
ProblemsOnAge.addEventListener("click", () => {
    countVAl = 2;
    topic.innerHTML = "Problems on age";
    homeToRules();
    rulesToQuiz();
});

ProfitAndLoss.addEventListener("click", () => {
    countVAl = 3;
    topic.innerHTML = "Profit and loss";
    homeToRules();
    rulesToQuiz();
});


// Home to rules function
function homeToRules() {
    home_page.classList.add("hidden");
    rules_page.classList.add("active");
}

// Rules to quiz and rules to home function
function rulesToQuiz() {
    rules_next.addEventListener("click", () => {
        rules_page.classList.remove("active");
        quiz_page.classList.add("active");
        questionToResul();
    });
    rules_back.addEventListener("click", () => {
        home_page.classList.remove("hidden");
        rules_page.classList.remove("active");
    });
};


// Quiz to result function
function questionToResul() {
    buttonInterchangeAgain();
    setTimer(timeValue);
    totTime(countStart);
    getQuestion();
    nextQuestionBtn.addEventListener("click", () => {
        nextQues();
    });
    goToResultBtn.addEventListener("click", () => {
        clearInterval(timeStartHere);
        clearInterval(totalTime);
        quiz_page.classList.remove("active");
        result_page.classList.add("active");
        result();
    });
}


// Getting question here
function getQuestion() {
    let data = quizData[countVAl];
    let currentQuizData = data[currentquestion];

    // Getting pagination here
    pagination();

    quiz_question.innerHTML = `<h3>${currentQuizData.question}</h3>`;

    let optionTag = '<div class="option">' + currentQuizData.options[0] + '<span></span></div>'
        + '<div class="option">' + currentQuizData.options[1] + '<span></span></div>'
        + '<div class="option">' + currentQuizData.options[2] + '<span></span></div>'
        + '<div class="option">' + currentQuizData.options[3] + '<span></span></div>';

    optionList.innerHTML = optionTag


    // Add attributes to all option
    const option = optionList.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");

    };

    // pagination function
    function pagination() {
        total_question.innerHTML = data.length;
        question_num.innerHTML = currentQuizData.num;
    };

};

// Check answer and disable option
function optionSelected(answer) {
    let userAnswer = answer.textContent;
    let correctAnswerForQuiz = quizData[countVAl][currentquestion].answer;
    let selectOneAns = optionList.children.length;
    if (userAnswer == correctAnswerForQuiz) {
        score++;
        correctAnswer.innerHTML = score;
        answer.classList.remove("option");
        answer.classList.add("correct");
    } else {
        wrongAnswer++;
        answer.classList.remove("option");
        answer.classList.add("wrong");
        for (let i = 0; i < selectOneAns; i++) {
            if (optionList.children[i].textContent == correctAnswerForQuiz) {
                optionList.children[i].setAttribute("class", "correct");
            }

        }
    };

    // Add classList disable
    for (let i = 0; i < selectOneAns; i++) {
        optionList.children[i].classList.add("disable");
    }
};

// Total timer function
function totTime(count) {
    totalTime = setInterval(totalTimeStarts, 1000);
    function totalTimeStarts() {
        count++;
        tot = count;
    };
};

// Next question function
function nextQues() {
    if (currentquestion < quizData[countVAl].length - 1) {
        clearInterval(timeStartHere);
        currentquestion++;;
        getQuestion();
        setTimer(timeValue);
        if (currentquestion === quizData[countVAl].length - 1) {
            buttonInterchange();
        };
    };

};

// Timer for each question
function setTimer(time) {
    timeStartHere = setInterval(timeStart, 1000);
    function timeStart() {
        timer.innerHTML = time;
        if (time < 10) {
            timer.innerHTML = '0' + time;
        };
        if (time == 0) {
            if (currentquestion >= quizData[countVAl].length - 1) {
                end();
            } else {
                clearInterval(timeStartHere);
                currentquestion++;
                getQuestion();
                setTimer(timeValue);
            }

        };
        time--;
    };
};


// button interchange here
function buttonInterchange() {
    nextQuestionBtn.classList.add("hidden");
    goToResultBtn.classList.add("active");
};

// button interchange here
function buttonInterchangeAgain() {
    nextQuestionBtn.classList.remove("hidden");
    goToResultBtn.classList.remove("active");
};

// End function here
function end() {
    quiz_page.classList.remove("active");
    result_page.classList.add("active");
    result();
};

// Result function here
function result() {
    // Incorrect answer
    inCorrectAnswer.innerHTML = wrongAnswer;
    if (wrongAnswer < 10) {
        inCorrectAnswer.innerHTML = `0${wrongAnswer}`;
    };

    // Correct answer
    correct.innerHTML = score;
    if (score < 10) {
        correct.innerHTML = `0${score}`;
    };

    // Attemt question
    if ((score + wrongAnswer) < 10) {
        attempt.innerHTML = `0${score + wrongAnswer}`;
    } else {
        attempt.innerHTML = score + wrongAnswer;
    }

    // Total question
    if (quizData[countVAl].length < 10) {
        tQ.innerHTML = `0${quizData[countVAl].length}`;
    } else {
        tQ.innerHTML = quizData[countVAl].length;
    };

    // Percentage 
    let per = `${(score / quizData[countVAl].length) * 100}%`;
    percentage.innerHTML = per;

    // Total time taken
    if (tot < 10) {
        timeTaken.innerHTML = `0${tot}`;
    } else {
        timeTaken.innerHTML = tot;
    };
};

// startAgain function
startAgainBtn.addEventListener("click", () => {
    location.reload();
});

// homeBtn function
homeBtn.addEventListener("click", () => {
    location.reload();
});