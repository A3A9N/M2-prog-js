class App {
    runApplication() {
      console.log("hello world");
      let canvas = document.getElementById("canvasId");
      console.log(canvas);
  
      let g = canvas.getContext("2d");
      g.fillStyle = "white";
      g.fillRect(0, 0, canvas.width, canvas.height);
  
      // Dak van het huis
      g.beginPath();
      g.fillStyle = "red";
      g.moveTo(300, 100);
      g.lineTo(700, 200);
      g.lineTo(600, 400);
      g.lineTo(200, 300);
      g.closePath();
      g.fill();
  
      // Driehoek op het huis
      g.beginPath();
      g.fillStyle = "gray";
      g.moveTo(700, 200);
      g.lineTo(600, 400);
      g.lineTo(800, 300);
      g.closePath();
      g.fill();
  
      g.beginPath();
      g.fillStyle = "gray";
      g.moveTo(600, 400);
      g.lineTo(800, 300);
      g.lineTo(800, 500);
      g.lineTo(600, 600);
      g.closePath();
      g.fill();
  
      g.beginPath();
      g.fillStyle = "gray";
      g.moveTo(600, 400);
      g.lineTo(600, 600);
      g.lineTo(200, 500);
      g.lineTo(200, 300);
      g.closePath();
      g.fill();
 
      let randomLight = Math.random();
  
      if (randomLight < 0.5) {
        g.fillStyle = "yellow"; 
      } else {
        g.fillStyle = "black";
      }
  
  
      g.fillRect(400, 400, 80, 60);
      
    }
  }
  
  let app = new App();
  app.runApplication();
  




 
