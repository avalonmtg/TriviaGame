$(document).ready(function () {

    var timer;

    $("#start").on("click", function () {
        game.startGame()
        console.log("test")
    })

    var game = {
        incorrect: 0,
        correct: 0,
        timer: 90,

        countdown: function () {
            game.timer--;
            $("#count").html(game.timer);
            console.log("inside of countdown")
            if (game.timer === 0) {
                game.done()


            }
        },
        startGame: function () {
            console.log("startgamefunction")
            timer = setInterval(game.countdown, 1000)
            console.log(timer)
            console.log(triviaQuestions.length)
            $("#wrapper2").prepend("<h3>Time Remaining: <span id='count'> 90</span> seconds</h3>")
            $("#start").remove();
            for (var i = 0; i < triviaQuestions.length; i++) {
                $('#wrapper2').append('<h2>' + triviaQuestions[i].question + '</h2');
                for (var m = 0; m < triviaQuestions[i].answers.length; m++) {
                    $("#wrapper2").append("<input type='radio' name='question-" + i + "' value='" + triviaQuestions[i].answers[m] + "'>" + triviaQuestions[i].answers[m]);
                }
            }
        },
        done: function () {
            console.log("donefunction")
            for (var i = 0; i < 5; i++) {
                $.each($("input[name='question-" + i + "']:checked"), function () {
                    console.log($(this).val())
                    console.log(questions[i].correctAnswer)
                    if ($(this).val() == questions[i].correctAnswer) {
                        game.correct++;
                    } else {
                        game.incorrect++;
                    }
                });

            }
        },

    }


    var triviaQuestions = [
        {
            question: "The most expensive coffee in the world comes from which of the following?",
            choices: ["A sacred tree in Peru", "beans processed with gold flakes", "Cat Poop", "Monks that grow and process the beans by hand"],
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