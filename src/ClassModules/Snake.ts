
class Snake {
    element: HTMLElement;
    head: HTMLElement;
    bodies:HTMLCollection;
    
    constructor (){
        this.element = document.getElementById("snake")!;
        this.head = document.querySelector("#snake>div") as HTMLElement;
        this.bodies = this.element.getElementsByTagName("div");
    }

    get X(){
        return this.head.offsetLeft;
    }
    get Y(){
        return this.head.offsetTop;
    }
    set X(value: number ){
        if( this.X === value ){
            return;
        }
        if(value<0||value>290){
            throw new Error('游戏结束!');
        }
        this.moveBody();
        this.head.style.left = value + "px";
        this.checkEatBody()
    }
    set Y(value: number ){
        if( this.Y === value ){
            return;
        }
        if( value < 0 || value > 290){
            throw new Error("游戏结束!");
        }
        this.moveBody();
        this.head.style.top = value + "px";
        this.checkEatBody()
    }
    addbodylength(){
        let div = document.createElement("div")
        this.element.insertAdjacentElement("beforeend",div)
    }
    moveBody(){
        for(let i=this.bodies.length-1;i>0;i--){
            (this.bodies[i] as HTMLElement).style.left =  (this.bodies[i-1] as HTMLElement).style.left;
            (this.bodies[i] as HTMLElement).style.top =  (this.bodies[i-1] as HTMLElement).style.top;
        }
    }
    checkEatBody(){
        let length = this.bodies.length-1
        
        for(let i = 1 ;i<length; i++ ){
            let bd = this.bodies[i] as HTMLElement;
            if(this.X==bd.offsetLeft && this.Y==bd.offsetTop){
                throw new Error('游戏结束！');
            }
        }
    }
}
export default Snake ; 