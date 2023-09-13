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
    {   question: "Martin Luther King, Jr. never came to Birmingham.",
        answer: false
    },
    {   question: "Michael Jordan played for the Birmingham Barons.",
        answer: true
    },    
];
var correct = 0
function runQuiz() {
    for (var question in questionsArr) {
        var quizAnswer = confirm(question)    
    if (quizAnswer = questionsArr[answer]) {
            correct++
        }
    }   
}