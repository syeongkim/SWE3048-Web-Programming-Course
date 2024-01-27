$(document).ready(function(){
    // pass the variable from the local storage to the html
    if (document.getElementById('count') != null) {
        document.getElementById('count').textContent = localStorage.getItem('count');
    };
    if (document.getElementById('scorenum') != null) {
        document.getElementById('scorenum').textContent = localStorage.getItem('score');
    };
    if (document.getElementById('progressbar') != null) {
        document.getElementById('progressbar').value = localStorage.getItem('value');
    };
    if (document.getElementById('totalscore') != null) {
        document.getElementById('totalscore').textContent = "Total score: " + localStorage.getItem('score');
    };

    // set the initial value of the local storage
    if (window.localStorage.getItem('count') == null) {
        const randnumlist = ["1", "2", "3", "4", "5"];
        window.localStorage.setItem('randnumlist', JSON.stringify(randnumlist));
        window.localStorage.setItem('count', 1);
        window.localStorage.setItem('value', 25);
        window.localStorage.setItem('score', 0);
    }

    // if the player clicks the 'start quiz' button, then the quiz starts
    $('#startbtn').click(function(){
        location.href = 'quiz'+getRandom()+'.html'; // quiz starts with random question
    })

    // if the player clicks the 'play again' button, then the quiz starts again
    $('#restartbtn').click(function(){
        window.localStorage.clear(); // clear the local storage
        if (window.localStorage.getItem('count') == null) {
            const randnumlist = ["1", "2", "3", "4", "5"];
            window.localStorage.setItem('randnumlist', JSON.stringify(randnumlist));
            window.localStorage.setItem('count', 1);
            window.localStorage.setItem('value', 25);
            window.localStorage.setItem('score', 0);
        }
        location.href = 'quiz'+getRandom()+'.html'; // quiz starts with random question
    })

    // function of get random number from the rest questions and update the local storage
    function getRandom() {
        randnumlist = JSON.parse(window.localStorage.getItem('randnumlist'));
        const randidx = Math.floor(Math.random() * randnumlist.length);
        const randnum = randnumlist[randidx];
        randnumlist.splice(randidx, 1);
        window.localStorage.setItem('randnumlist', JSON.stringify(randnumlist));
        return randnum;
    }

    // if the player clicks wrong answer, then the background color of the clicked button turns red
    $('.wrongans').click(function(e){
        e.preventDefault();
        e.target.style.backgroundColor = 'red';
        window.localStorage.setItem('count', parseInt(window.localStorage.getItem('count'))+1); // count of the question increases by 1
        window.localStorage.setItem('value', parseInt(window.localStorage.getItem('count'))*25); // value of the progress bar increases by 25
        var count = window.localStorage.getItem('count');
        var value = window.localStorage.getItem('value');
        if (count == 5) { // if the player has answered 4 questions, then the quiz ends and go to the total score page
            setTimeout(() => location.href = 'totalscore.html', 1000);
        }
        else { // if the player has not answered 4 questions yet, then the quiz continues with random question
            setTimeout(() => location.href = 'quiz'+getRandom()+'.html', 1000);
        }
    });

    // if the player clicks correct answer, then the background color of the clicked button turns green
    $('.correctans').click(function(e){
        e.preventDefault();
        e.target.style.backgroundColor = 'green';
        window.localStorage.setItem('score', parseInt(window.localStorage.getItem('score'))+1); // score increases by 1
        window.localStorage.setItem('count', parseInt(window.localStorage.getItem('count'))+1); // count of the question increases by 1
        window.localStorage.setItem('value', parseInt(window.localStorage.getItem('count'))*25); // value of the progress bar increases by 25
        var count = window.localStorage.getItem('count');
        var value = window.localStorage.getItem('value');
        var score = window.localStorage.getItem('score');
        if (count == 5) { // if the player has answered 4 questions, then the quiz ends and go to the total score page
            setTimeout(() => location.href = 'totalscore.html', 1000); 
        }
        else { // if the player has not answered 4 questions yet, then the quiz continues with random question
            setTimeout(() => location.href = 'quiz'+getRandom()+'.html', 1000);
        }
    });
})