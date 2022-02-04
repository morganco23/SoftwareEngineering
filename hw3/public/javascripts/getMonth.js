//Author: Connor Morgan
$(function() {
    $("#drpdown-class").on("click", "a", function(){
        $('#drpdown').html($(this).text());
    });
});