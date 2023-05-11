export class Burger{
    #el;
    #options;
    #button;

    constructor(selector, options){
        this.#el = document.querySelector(selector);
        this.#options = options;

        this.#setup();
    }

    #setup(){
        this.#button = document.querySelector(".menu__icon");

        this.bindEventListeners();
    }

    bindEventListeners(){
        this.clickHandler = this.clickHandler.bind(this);
        this.#button.addEventListener("click", this.clickHandler);
    }

    get isOpen(){
        return this.#el.classList.contains("_open");
    }
    clickHandler(event){
        this.isOpen ? this.close() : this.open();
    }
    open(){
        this.#button.classList.add("_open");
        this.#el.classList.add("_open");
        document.body.classList.add("_lock");
    }
    close(){
        this.#button.classList.remove("_open");
        this.#el.classList.remove("_open");
        document.body.classList.remove("_lock");
    }
}
