import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

class GameControll{
    private snake: Snake;
    private food:Food;
    private scorepanel:ScorePanel;
    private direction: string = "";
    private nopause:boolean = true;
    private islive: boolean = true ;
    constructor(level?:number){
        this.food= new Food();
        this.snake = new Snake();
        this.scorepanel = new ScorePanel(level)

        this.init()
    }
    private move(){
        let X = this.snake.X;
        let Y = this.snake.Y;
        switch (this.direction) {
            case 'ArrowLeft':
            case 'Left':
                X-=10;
                break
            case 'ArrowRight':
            case 'Right':
                X+=10;
                break;
            case 'ArrowUp':
            case 'Up':
                Y-=10;
                break;
            case 'ArrowDown':
            case 'Down':
                Y+=10;
                break;
            default:
                break;
        };
        this.checkEat(X,Y);

        try {
            this.snake.X= X;
            this.snake.Y= Y;
            
        } catch (error) {
            this.islive = false
            console.log(error);
            alert(error)
        }
       
        
       this.islive && this.nopause && setTimeout(this.move.bind(this), 300 - (this.scorepanel.level*30));

    }
    private checkEat (x:number,y:number){
        if(this.food.X === x&& this.food.Y=== y ){
            this.food.changePosition();
            this.snake.addbodylength();
            this.scorepanel.addScore();
        }
    }

    private init(){
        document.addEventListener("keydown",this.KeydownHandler.bind(this));
        this.move();
    }
    private KeydownHandler(event: KeyboardEvent){
        if(event.key == ' ' && this.islive){
            (this.nopause =!this.nopause)&&this.move()
        }
                            
       
        if(this.islive&&this.nopause){
            switch (this.direction) {
                    case 'ArrowUp':
                    case 'Up':
                    case 'ArrowDown':
                    case 'Down':
                        switch (event.key) {
                            case 'ArrowLeft':
                            case 'ArrowRight':
                            case 'Left':
                            case 'Right': 
                                this.direction = event.key;
                            break;
                            default:
                            break;
                        }
                    break;
                    case 'ArrowLeft':
                    case 'Left':
                    case 'ArrowRight':
                    case 'Right':
                        switch (event.key) {
                            case 'ArrowDown':
                            case 'Down':
                            case 'ArrowUp':
                            case 'Up':  
                                this.direction = event.key;                                
                            break;
                            default:
                            break;
                        }
                    break;     
                    default:                                  
                        switch (event.key) {
                        case 'ArrowDown':
                        case 'Down':
                        case 'ArrowUp':
                        case 'Up':  
                        case 'ArrowLeft':
                        case 'ArrowRight':
                        case 'Left':
                        case 'Right':
                            this.direction = event.key;                                
                        break;
                        default:
                        break;
                    }                              
                            
                    break;
            }
           

        }
    } 
 }
export default GameControll;