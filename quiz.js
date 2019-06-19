
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





