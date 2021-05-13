//wk1-2 countdown timer should run countdown from 10 to blastoff
function startcountdown(){
    var countdown = 10;
    //the countdowntimer should display 10
    document.getElementById("countdowntimer").innerHTML = countdown;
    countdown = countdown - 1;

    setTimeout(function(){
        //after 1 sec, will run code in here
        //the countdowntimer should display 9
        document.getElementById("countdowntimer").innerHTML = countdown;
        //decrease the count by 1
        countdown = countdown - 1;
    }, 1000); //set the wait time as 1 sec

    setTimeout(function(){
        //the countdowntimer should display 8
        document.getElementById("countdowntimer").innerHTML = countdown;
        //decrease the count by 1
        countdown = countdown - 1;
    }, 2000); //set the wait time as 2 sec

    setTimeout(function(){
        //the countdowntimer should display 7
        document.getElementById("countdowntimer").innerHTML = countdown;
        //decrease the count by 1
        countdown = countdown - 1;
    }, 3000); //set the wait time as 3 sec

    setTimeout(function(){
        //the countdowntimer should display 6
        document.getElementById("countdowntimer").innerHTML = countdown;
        //decrease the count by 1
        countdown = countdown - 1;
    }, 4000); //set the wait time as 4 sec

    setTimeout(function(){
        //the countdowntimer should display 5
        document.getElementById("countdowntimer").innerHTML = countdown;
        //decrease the count by 1
        countdown = countdown - 1;
    }, 5000); //set the wait time as 5 sec

    setTimeout(function(){
        //the countdowntimer should display 4
        document.getElementById("countdowntimer").innerHTML = countdown;
        //decrease the count by 1
        countdown = countdown - 1;
    }, 6000); //set the wait time as 6 sec

    setTimeout(function(){
        //the countdowntimer should display 3
        document.getElementById("countdowntimer").innerHTML = countdown;
        //decrease the count by 1
        countdown = countdown - 1;
    }, 7000); //set the wait time as 7 sec
    
    setTimeout(function(){
        //the countdowntimer should display 2
        document.getElementById("countdowntimer").innerHTML = countdown;
        //decrease the count by 1
        countdown = countdown - 1;
    }, 8000); //set the wait time as 8 sec

    setTimeout(function(){
        //the countdowntimer should display 1
        document.getElementById("countdowntimer").innerHTML = countdown;
        //decrease the count by 1
        countdown = countdown - 1;
    }, 9000); //set the wait time as 9 sec

    setTimeout(function(){
        //the countdowntimer should display Blastoff!!!
        document.getElementById("countdowntimer").innerHTML = "Blastoff!!!";
    }, 10000);
}