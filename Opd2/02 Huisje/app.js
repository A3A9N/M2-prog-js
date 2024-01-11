class App {
    runApplication() {
    console.log("hello world")                    
    let canvas = document.getElementById("canvasId");
    console.log(canvas);

    let g = canvas.getContext("2d");
    g.fillStyle = "white";
    g.fillRect(0,0,canvas.width,canvas.height);

    //dak van het huis//
    g.beginPath()
    g.fillStyle = "red";
    g.moveTo(30,10);
    g.lineTo(70,20);
    g.lineTo(60,40);
    g.lineTo(20,30);
    g.closePath();
    g.fill()

    //driehoek op het huis//    
    g.beginPath()
    g.fillStyle = "gray";
    g.moveTo(70,20);
    g.lineTo(60,40);
    g.lineTo(80,30);
    g.closePath();
    g.fill()

    g.beginPath()
    g.fillStyle = "gray";
    g.moveTo(60,40);
    g.lineTo(80,30);
    g.lineTo(80,50);
    g.lineTo(60,60);
    g.closePath();
    g.fill()

    g.beginPath()
    g.fillStyle = "gray";
    g.moveTo(60,40);
    g.lineTo(60,60);
    g.lineTo(20,50);
    g.lineTo(20,30);
    g.closePath();
    g.fill()

}
}
let app = new App()
app.runApplication();