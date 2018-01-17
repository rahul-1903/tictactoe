$(document).ready(function() {
    //alert("Javascript has loaded!");
    var x = "table tr td";
    var move = 1;
    var play = false;
    var axe = "X";
    var zero = "O";
    var king, queen;
    $("#first").click(function() {
        king = "X";
        queen = "O";
        $("#over-lay").hide();
        $("#game").fadeIn();
    });
    $("#second").click(function() {
        king = "O";
        queen = "X";
        $("#over-lay").hide();
        $("#game").fadeIn();
    })
    
    $("#start").click(function() {
        $("#start").hide();
        move = 1;
        play = true;
        $("#begin").hide();
        $("#pause").show();
    });
    $("#play").click(function() {
        play = true;
        $("#play").hide();
        $("#pause").show();
    });
    $("#pause").click(function() {
        $("#pause").hide();
        $("#play").show();
        play = false;
    });
    $("#reset").click(function() {
        reset();
        move = 1;
        play = false;
        $("#begin").show();
        $("#start").show();
        $("#play").hide();
        $("#pause").hide();
        $("#game").hide();
        $("#over-lay").fadeIn();
    });
    $(x).on('click', function() {
        if ($(this).text()=="" && play) {
            if ((move%2)==1) {$(this).append(king);}
            else {$(this).append(queen);}
            ++move;
            var res = checkForWinner();
            if (res != -1 && res != "") {
                if (checkForWinner()==king) {alert("Player 1 wins.");}
                else {alert("Player 2 wins.");}
                reset();
            }
        }
        else if(move <= 9 && play == true) {
            alert("Choose another cell.")
        }
        if (move > 9) {
            alert("Draw!\nThe Game will be reset.");
            move = 1;
            reset();
        }
    });
    function checkForWinner() {
        var sp1 = $("#board tr:nth-child(1) td:nth-child(1)").text();
        var sp2 = $("#board tr:nth-child(1) td:nth-child(2)").text();
        var sp3 = $("#board tr:nth-child(1) td:nth-child(3)").text();
        var sp4 = $("#board tr:nth-child(2) td:nth-child(1)").text();
        var sp5 = $("#board tr:nth-child(2) td:nth-child(2)").text();
        var sp6 = $("#board tr:nth-child(2) td:nth-child(3)").text();
        var sp7 = $("#board tr:nth-child(3) td:nth-child(1)").text();
        var sp8 = $("#board tr:nth-child(3) td:nth-child(2)").text();
        var sp9 = $("#board tr:nth-child(3) td:nth-child(3)").text();
        // for row
        if      ((sp1==sp2) && (sp2==sp3)) {return sp3;}
        else if ((sp4==sp5) && (sp5==sp6)) {return sp6;}
        else if ((sp7==sp8) && (sp8==sp9)) {return sp9;}
        // for column
        else if ((sp1==sp4) && (sp4==sp7)) {return sp7;}
        else if ((sp2==sp5) && (sp5==sp8)) {return sp8;}
        else if ((sp3==sp6) && (sp6==sp9)) {return sp9;}
        // for diagonal
        else if ((sp1==sp5) && (sp5==sp9)) {return sp9;}
        else if ((sp3==sp5) && (sp5==sp7)) {return sp7;}
        // for nothing
        return -1;
    }
    function reset() {
        play = false;
        move = 1;
        $("#begin").show();
        $("#start").show();
        $("#play").hide();
        $("#pause").hide();
        $("#game").hide();
        $("#over-lay").fadeIn();
       $('table tr').each(function() {
            $(this).find('td').each(function() {
                $(this).empty();
            })
        })
    }
});
