var p1Score = 0;
var p2Score = 0;
var tie = 0;
var turn = 1;

function checkWinX(){
    if ($(".row-1 .box.x").length === 3
    || $(".row-2 .box.x").length === 3
    || $(".row-3 .box.x").length === 3
    || $(".col-1.x").length === 3
    || $(".col-2.x").length === 3
    || $(".col-3.x").length === 3
    || $("#1").hasClass("x")
    && $("#5").hasClass("x")
    && $("#9").hasClass("x")
    || $("#3").hasClass("x")
    && $("#5").hasClass("x")
    && $("#7").hasClass("x")){
        return true
    }
}
function checkWinO(){
    if ($(".row-1 .box.o").length === 3
    || $(".row-2 .box.o").length === 3
    || $(".row-3 .box.o").length === 3
    || $(".col-1.o").length === 3
    || $(".col-2.o").length === 3
    || $(".col-3.o").length === 3
    || $("#1").hasClass("o")
    && $("#5").hasClass("o")
    && $("#9").hasClass("o")
    || $("#3").hasClass("o")
    && $("#5").hasClass("o")
    && $("#7").hasClass("o")){
        return true
    }
}

$(".box").click(function(){
    if (turn === 1){
        $(this).text("x")
        $(this).addClass("x")
        turn = 2;
        $("#turn").text(2)
        if(checkWinX()){
            p1Score++
            $("#p1-score").text(p1Score)
        };
    }
    else
    {
        $(this).text("o")
        $(this).addClass("o")
        turn = 1;
        $("#turn").text(1)
        if(checkWinO()){
            p2Score++
            $("#p2-score").text(p2Score)
        }
    }
})