class Game {
    area: HTMLCanvasElement;
    canvasCtx: CanvasRenderingContext2D | null;
    constructor() {
        this.area = <HTMLCanvasElement>document.createElement("CANVAS");
        document.body.insertBefore(this.area, null);
        this.canvasCtx = this.area.getContext("2d");

        this.area.style.position = 'absolute';
        this.area.style.left = "0px"
        this.area.style.top = "0px"
        this.area.style.padding = "0px"

        document.documentElement.style.overflow = 'hidden';  // firefox, chrome

        this.area.width = window.innerWidth;
        this.area.height = window.innerHeight;

        if(this.canvasCtx) {
            this.canvasCtx.fillStyle = 'red';
        }
        this.canvasCtx?.fillRect(0,0,this.area.width,this.area.height);
    }
}

const game = new Game();