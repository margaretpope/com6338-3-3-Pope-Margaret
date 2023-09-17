var questionsArr = [
    {
        question: "Birmingham is in Alabama.",
        answer: true
    },
    {
        question: "Birmingham is the capital of Alabama.",
        answer: false
    },
    {
        question: "Birmingham was founded in 1871.",
        answer: true
    },
    {   
        question: "Martin Luther King, Jr. never came to Birmingham.",
        answer: false
    },
    {   
        question: "Michael Jordan played for the Birmingham Barons.",
        answer: true
    },
    {
        question: "Birmingham is called the Magic City.",
        answer: true
    },
];
var correctAnswer = 0
function runQuiz() {
    for (var i = 0; i < questionsArr.length; i++) {
        var quizQuestion = questionsArr[i].question
        var quizAnswer = questionsArr[i].answer
        var response = confirm(quizQuestion)
        if(response === quizAnswer) {
            correctAnswer++
        }
    }
    var score = Math.round((correctAnswer / questionsArr.length) * 100)
    alert("Your score is " + score + "%.")
}
       