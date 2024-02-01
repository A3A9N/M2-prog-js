class App {
  runApplication() {
    console.log("Hello world!");

    const uiButton = document.getElementById("myButton");

    {
      const para = document.createElement("p");
      const node = document.createTextNode("This is new.");
      para.appendChild(node);
      document.body.appendChild(para);
    }
    
    let localFunction = function (e) {
      console.log("click!");
    };
    uiButton.addEventListener("click", localFunction);

    const btn1 = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");
    const div = document.getElementById("clickDiv");

    btn1.addEventListener("click", () => {
      const para = document.createElement("p");
      para.textContent = "Tekst toegevoegd door knop 1";
      document.body.appendChild(para);
    });

    btn2.addEventListener("click", () => {
      const header = document.createElement("h1");
      header.textContent = "Een header";

      const para = document.createElement("p");
      para.textContent = "Een paragraaf met tekst";

      const img = document.createElement("img");
      img.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ec545603-cf4e-48e0-936d-5376ea12fdc0/dfwg1gd-d487e7ae-2a95-4f60-bb8b-e576904c9bcc.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VjNTQ1NjAzLWNmNGUtNDhlMC05MzZkLTUzNzZlYTEyZmRjMFwvZGZ3ZzFnZC1kNDg3ZTdhZS0yYTk1LTRmNjAtYmI4Yi1lNTc2OTA0YzliY2MucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.mrHF3wYj3VvK75GnUnMNpQBaR_rL1AwT7iS7FUoWU58"; 
      img.style.width = "50px";  
      img.style.height = "50px"; 

      document.body.appendChild(header);
      document.body.appendChild(para);
      document.body.appendChild(img);
    });

    div.addEventListener("click", () => {
      const header = document.createElement("h1");
      header.textContent = "Clicked a div";

      document.body.appendChild(header);

      document.body.style.backgroundColor = "red";
    });
  }
}

let app = new App();
app.runApplication();
