
function resize(size) {
    $("#field").height($("#field").width());
    $(".light").css("width", `${100/size}%`);
}

class Field {
    constructor(elementName, size=3) {
        this.size = size;
        this.elementName = elementName;
        this.lamps = [];
        this.generate();
    }

    generate() {
        for (let x = 0; x < this.size*this.size; x++) {
            this.lamps.push(new Light(x, this.elementName));
        }
        resize(this.size);
    }
}

class Light {
    constructor(id, pElement) {
        this.id = id;
        this.on = false;
        const elem = `<div class="light"></div>`;
        $(pElement).append(elem);
        this.element = $(pElement).children(".light:last-child");
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