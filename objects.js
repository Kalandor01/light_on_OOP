
function resize(size) {
    $("#field").height($("#field").width());
    $(".light").css("width", `${100/size}%`);
}

class Field {
    constructor(element_name, size=3, info_div_name) {
        this.size = size;
        this.element_name = element_name;
        this.element = $(element_name);
        this.info_div_name = info_div_name;
        this.try_num = 0;
        this.won = false;
        $(`${this.info_div_name}>p`).text("");
        this.lamps = [];
        this.generate();
    }

    generate() {
        for (let x = 0; x < this.size*this.size; x++) {
            this.lamps.push(new Light(x, this.element_name));
            //trigger count
            let last_lamp = $(this.element_name).children(".light:last-child");
            last_lamp.on("click", ()=>{
                this.count();
            });
        }
        resize(this.size);
    }

    count() {
        this.try_num++;
        if(this.element.children(".on").length >= this.size*this.size)
        {
            $(`${this.info_div_name}>p`).text("You win!");
            this.won = true;
        }
        else
        {
            $(`${this.info_div_name}>p`).text("");
            this.won = false;
        }
    }
}

class Light {
    constructor(id, p_element) {
        this.id = id;
        this.on = false;
        const elem = `<div class="light"></div>`;
        $(p_element).append(elem);
        this.element = $(p_element).children(".light:last-child");
        this.element.on("click", ()=>{
            this.switch();
        });
        if(Math.random() * 100 < 20)
            this.switch();
    }

    switch() {
        this.on = !this.on;
        this.element.toggleClass("on");
    }
}

export {Field, resize};