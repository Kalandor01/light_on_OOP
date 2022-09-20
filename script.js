import {Field, resize} from "./objects.js";

$(window).resize(function() {
    resize(size);
});

var size = 3;
var size_limit = 100;
const field_name = "#field";

var field;
var play_num = 0;

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
                if(field.won)
                {
                    play_num++;
                    $("#leader_board>p").append(`${play_num}. game(${field.size}x${field.size}): ${field.try_num} move${(field.size==1?"":"s")}\n`);
                }
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
    field = new Field(field_name, size, "#info");
}