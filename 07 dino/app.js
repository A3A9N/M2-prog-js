class Plant {
    constructor(naam) {
        this.naam = naam;
        this.leeft = true;
    }
}


class Dino {
    constructor(naam, vleeseter, leeftijd) {

        this.naam = naam;
        this.vleeseter = vleeseter;
        this.leeftijd = leeftijd;
        this.leeft = true;
        this.honger = true;
    }
}
const nieuweDino = new Dino("T-Rex", true, 20);

console.log(nieuweDino);
const andereDino = new Dino("Velociraptor", false, 15);
console.log(andereDino);


class App {
    runApplication() {
        console.log("hello world")

        let dino = new Dino();
        console.log(dino);
        const trex = new Dino("T-Rex", true, 20);
        const triceratops = new Dino("Triceratops", false, 15);

        console.log(trex);
        console.log(triceratops);

        console.log(trex);
        console.log(triceratops);
        const gras = new Plant("Gras");
        const struik = new Plant("Struik");

        console.log(gras);
        console.log(struik);
        console.log(trex);
        console.log(triceratops);
        console.log(gras);
        console.log(struik);

    }
}

let app = new App();
app.runApplication();
