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
function runQuiz() {
    var correct = questionsArr.answer
    for (var i = 0; i < questionsArr.length; i++) {
        var quizQuestion = questionsArr[i]
        var quizAnswer = confirm(quizQuestion)
        if (quizAnswer) {
            correct++
        }
    }   
}