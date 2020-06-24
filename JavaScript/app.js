window.onload = function() {
    show(0);
}

function submitForm(event) {
    event.preventDefault();
    let name = document.forms["wellcome_form"]["input"].value
    sessionStorage.setItem("name", name);
    location.href = "quiz.html";
    console.log(name);
}


let questions = [{
        id: 1,
        question: "Whats Is The Full Form Of RAM ?",
        answer: "Random Access Memory",
        options: [
            "Random Access Memory",
            "Randomly Accessable Memory",
            "Run Accept Memory",
            "None Of Them"
        ]
    },
    {
        id: 2,
        question: "Whats Is The Full Form Of CPU ?",
        answer: "Central Proccessing Unit ",
        options: [
            "Central program Unit ",
            "Central Proccessing Unit ",
            "Central Preload Unit ",
            "None Of Them"
        ]
    },
    {
        id: 3,
        question: "Whats Is The Full Form Of E-MAIl ?",
        answer: "Electronic Mail",
        options: [
            "Engine Mail",
            "Electric Mail",
            "Electronic Mail",
            "None Of Them"
        ]
    }
]


let question_count = 0;
let points = 0;

function next() {
    let userAnswer = document.querySelector("li.option.active");
    if (userAnswer == null) {
        alert("Please Select Any One Option");
        return;
    }
    if (userAnswer)
        if (userAnswer.innerHTML == questions[question_count].answer) {
            points += 10;
            // console.log("correct");
            sessionStorage.setItem("point", points);
            console.log("Current POInts :", points);
        }
    if (question_count == questions.length - 1) {
        alert("Your Quiz End Press Ok To See Your Result");
        location.href = "end.html";
        return;
    }
    question_count++;
    show(question_count);
}
let qno = document.querySelector(".timess");

function show(count) {
    let question = document.getElementById('questions');
    if (question) {
        if (qno)
            qno.innerHTML = `${question_count+1} / ${questions.length}`;
        question.innerHTML = `<h2>Q${question_count+1} ${questions[count].question}</h2> 
    <ul class="option_group">
    <li class="option">${questions[count].options[0]}</li>
    <li class="option">${questions[count].options[1]}</li>
    <li class="option">${questions[count].options[2]}</li>
    <li class="option">${questions[count].options[3]}</li>
    </ul>`
    }
    touchKrw();
}

function touchKrw() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function() {
            for (let i = 0; i < option.length; i++) {
                if (option[i].classList.contains("active")) {
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}

let nameshow = sessionStorage.getItem("name");
let point = sessionStorage.getItem("point");

console.log("Current User:", nameshow);
console.log("User Points:", point);

let runname = document.querySelector(".name");
if (runname)
    runname.innerHTML = nameshow;

let runpoint = document.querySelector(".points");
// if (runpoint)
if (point == null) {
    if (runpoint)
        runpoint.innerHTML = "0";
} else {
    if (runpoint)
        runpoint.innerHTML = point;
}
let result = document.querySelector(".result");
if (result)
    result.innerHTML = `Result Percentage: ${point *100 / 30} %`