$(document).ready(function () {
    var card = $("#quiz");
    var results = $("#results");
    var timer;
    //start game with onclick
    $("#start").on("click", function () {
        game.startGame()
        console.log("test")
    })
    //var to hold the game
    var game = {
        incorrect: 0,
        correct: 0,
        timer: 60,
        //timer and start game with questions and answer
        countdown: function () {
            game.timer--;
            $("#count").html(game.timer);
            console.log("inside of countdown")
            if (game.timer === 0) {
                game.done();
                console.log("done")
            }
        },
        startGame: function () {
            console.log("startgamefunction")
            timer = setInterval(game.countdown, 1000)
            console.log(timer)
            console.log(triviaQuestions.length)
            $("#wrapper2").prepend("<h3>Time Remaining: <span id='count'> 60</span> seconds</h3>")
            $("#start").remove();
            for (var i = 0; i < triviaQuestions.length; i++) {
                card.append('<h2>' + triviaQuestions[i].question + '</h2');
                for (var m = 0; m < triviaQuestions[i].choices.length; m++) {
                    card.append("<input type='radio' name='question-" + i + "' value='" + triviaQuestions[i].choices[m] + "'>" + triviaQuestions[i].choices[m]);
                }
            }
        },

        //done to stop the timer and put in the score
        done: function () {
            console.log("donefunction")
            var input = card.children("input:checked")
            for (var i = 0; i < input.length; i++) {

                if ($(input[i]).val() === triviaQuestions[i].answer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            };

            clearInterval(timer)
            $("#wrapper2").remove();

            results.html(`<h1>You are Done!</h1>`)
            results.append(`<h2>Correct Answers: ${game.correct}</h2>`)
            results.append(`<h2>Incorrect Answers: ${game.incorrect}</h2>`)

        }
    }

    //questions and answers
    var triviaQuestions = [
        {
            question: "The most expensive coffee in the world comes from which of the following?",
            choices: ["A sacred tree in Peru", "Beans processed with gold flakes", "Cat Poop", "Monks that grow and process the beans by hand"],
            answer: "Cat Poop"
        },

        {
            question: "What color is a ripe coffee bean?",
            choices: ["Black", "Brown", "Red", "Beige"],
            answer: "Red"
        },

        {
            question: "What country drinks the most coffee?",
            choices: ["United States", "Columbia", "Finland", "Italy"],
            answer: "Finland"
        },

        {
            question: "What state produces the most coffee?",
            choices: ["Utah", "Oregon", "California", "Hawaii"],
            answer: "Hawaii"
        },

        {
            question: "How many new stores does Starbucks open each day?",
            choices: ["1", "2", "3", "4"],
            answer: "2"
        },

        {
            question: "Black coffee has how many calories",
            choices: ["1", "10", "17", "21"],
            answer: "1"
        }
    ]
})   
