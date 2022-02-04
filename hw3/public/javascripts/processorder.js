//Author: Connor Morgan
eventHandler = function(event) {
    var notes = $("#Notes").val();
    var number = $("#number").val();
    var plain = $("#plain").is(":checked");
    var cherry = $("#cherry").is(":checked");
    var chocolate = $("#chocolate").is(":checked");
    if (notes.indexOf("vegan") >= 0) {
        alert("Note these cheesecakes contain dairy!");
    }
    else {
        var topping = "plain";
        if(cherry == true) {
            topping = "cherry";
        } else if (chocolate == true){
            topping = "chocolate";
        } else {
            topping = "plain";
        }
        alert("Thank you! Your order has been placed: \nDetails of your order:\nNumber of cakes: " + number + "\nFlavor: " + topping + "\nNotes: " + notes);
    }
}

$(function() {
    $("#Order").click(eventHandler);
});