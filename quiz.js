
var start = function () {
    var questions = [
        {
            prompt: "What color is the sky? \n(a)Green\n(b)Blue\n(c)Red",
            answer: "b"
        },
        {
            prompt: "What color is PJ's hair? \n(a)Green\n(b)Blue\n(c)Red\n(d)Brown",
            answer: "d"
        },

    ]


    var score = 0;

    for (var i = 0; i < questions.length; i++) {
        var response = window.prompt(questions[i].prompt);
        if (response == questions[i].answer) {
            score++;
            alert("Correct");
        }
        else {
            alert("You need to rethink some things!");
        }
    }
    var finalScore = ("You got " + score + "/" + questions.length + " questions right!");

    document.body.appendChild(document.createElement('p'));
    document.querySelector("body p:last-child").id = "jstext";
    document.querySelector("#jstext").innerHTML = finalScore;
}



// var start = function () {

//     var correct = 0;
//     var incorrect = 0;
//     var question = "none";
//     var input = "none";
//     var answer = "none";

//     var ask = function(){
//         input = prompt(question);
//     }

//     var score = function(){
//         if(input == answer){
//             correct = correct + 1;
//             alert("Correct");
//         }else{
//             incorrect = incorrect + 1;
//             alert("Incorrect");
//         }
//     };
//     var lazy = function(){
//         ask();
//         score();
//     }
//     alert("Welcome to my game!");

//     question = "What is the matrix?";
//     answer = "There is no matrix";
//     lazy();



//     alert("Well done, you got " + correct + " out of 10");

