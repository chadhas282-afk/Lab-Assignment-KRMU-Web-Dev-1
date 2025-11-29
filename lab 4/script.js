alert("Welcome to the Programming Basics Quiz! Let's test your knowledge.");
const programmingQuizData = [
    { 
        questionText: "What does HTML stand for?", 
        correctAnswer: "HyperText Markup Language" 
    },
    { 
        questionText: "What is the primary purpose of CSS?", 
        correctAnswer: "Styling" 
    },
    { 
        questionText: "Which keyword is used to declare a constant in JavaScript?", 
        correctAnswer: "const" 
    },
    { 
        questionText: "What symbol is used for comments in single-line JavaScript?", 
        correctAnswer: "//" 
    },
    { 
        questionText: "Is JavaScript case-sensitive? (Type: yes or no)", 
        correctAnswer: "yes" 
    }
]; 
function startQuiz() {
    let correctAnswersCount = 0; 
    for (let i = 0; i < programmingQuizData.length; i++) {
        const currentQuizItem = programmingQuizData[i];
        const participantResponse = prompt(currentQuizItem.questionText);
        if (participantResponse === null) {
            alert("Quiz cancelled. Goodbye!");
            return; 
        }
        const normalizedParticipantResponse = participantResponse.toLowerCase().trim();
        const normalizedCorrectAnswer = currentQuizItem.correctAnswer.toLowerCase().trim();
        if (normalizedParticipantResponse === normalizedCorrectAnswer) {
            alert("Awesome! That is correct!"); 
            correctAnswersCount++; 
        } else {

            alert(`Oops! Wrong answer. The correct answer was: ${currentQuizItem.correctAnswer}`);
        }
    }
    alert(`Quiz Complete! Your final score is ${correctAnswersCount} out of ${programmingQuizData.length}.`);
}
startQuiz();