class Food{
    element: HTMLElement
    constructor(){
        this.element = document.getElementById("food")!;
    }

    get X(){
        return this.element.offsetLeft;
    } 
    get Y(){
        return this.element.offsetTop;
    }
    changePosition(){
        let posx = Math.round(Math.random()*29)*10 + "px";
        let posy = Math.round(Math.random()*29)*10 +"px";
        this.element.style.left = posx;
        this.element.style.top = posy;
    }
}

export default Food;