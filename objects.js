
class Field {
    constructor(element, size=3) {
        this.id = id;
        this.on = false;
        this.element = $(element);
        console.log(this.element);
        this.generate();
    }

    generate() {
        for (let x = 0; x < this.size*this.size; x++) {
            
        }
    }
}

class Lamp {
    constructor(id, pElement) {
        this.id = id;
        this.on = false;
        const elem = `<div class="lamp"></div>`;
        $(pElement).append(elem);
        console.log(pElement);
        this.element = $(pElement).children(".lamp:last-child");
        console.log(this.element);
        this.element.on("click", ()=>{
            this.switch();
        })
    }

    switch() {
        this.on = !this.on;
        this.element.toggleClass("on");
    }
}

export {Lamp, Field};