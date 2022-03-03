const Goal : Array<number> = [10, 20 , 50 ,100 , 200 , 500 ,1000]

class ScorePanel{
    score:number = 0;
    level:number = 1;
    maxlevel:number; 
    scoreEle:HTMLElement;
    levelEle:HTMLElement;
    constructor( maxlevel : number = 7){
        this.levelEle = document.getElementById("level")!; 
        this.scoreEle = document.getElementById("score")!;
        if(maxlevel<1){
            maxlevel = 1
        }else if(maxlevel>7){
            maxlevel = 7
        }
        this.maxlevel = maxlevel;
    }
    addScore(){
        this.score= this.level+this.score ;
        if(this.score >= Goal[this.level-1]){
            this.LevelUp();
        }
        this.scoreEle.innerHTML = this.score + ""
    }
    LevelUp(){
        if(this.level<this.maxlevel){
            this.level++;
        }
        this.levelEle.innerHTML = this.level + ""
    }
}

export default ScorePanel;