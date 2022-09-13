import {Field} from "./objects.js";

$(window).resize(function() {
    resize();
});

function resize() {
    $("#field").height($("#field").width());
    $(".light").css("width", `${100/size}%`);
}

var size = 3;

$(function () {
    const field = new Field("#field", size);
});

export default resize;