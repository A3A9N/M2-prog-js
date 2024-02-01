class App {
    runApplication() {
        console.log("hello world");

        let title = document.getElementById("newstitle");
        console.log(title);

        let random = Math.random();
        console.log(random);
        if (random < 0.2) {
            title.style.backgroundColor = getRandomColor();
        } else if (random > 0.75) {
            title.style.backgroundColor = "blue";
        }

        let newsitems = document.getElementsByClassName("gamenews");
        let newsitem1 = newsitems[0];
        let newsitem2 = newsitems[1];

        newsitem1.style.backgroundColor = getRandomColor();
        newsitem2.style.backgroundColor = getRandomColor();
    }
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let app = new App();
app.runApplication();
