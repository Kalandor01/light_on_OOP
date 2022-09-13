import {Field, resize} from "./objects.js";

$(window).resize(function() {
    resize(size);
});

var size = 3;
var size_limit = 100;
const field_name = "#field";

$(function () {
    //make field
    make_field();
    //set up size change
    $("#size_field").val("3");
    $("#size_button").on("click", function() {
        let new_size = $("#size_field").val();
        if(isFinite(new_size) && new_size % 1 == 0 && new_size > 0)
        {
            if(new_size <= size_limit)
            {
                size = new_size;
                make_field(true);
            }
            else
                $("#size_field").val("stop it");
        }
        else
            $("#size_field").val(size);
    });
});

function make_field(remake=false) {
    if(remake)
        $(field_name).empty();
    const field = new Field(field_name, size);
}