class App
{
    runApplication()
    {
        this.appNaam = "The App";
        this.versienummer = 0.9;
        this.versiedatum = "14/12/2023";
        this.autheur = "Adrian Marin";
        this.copyright = "A3AN";
        this.distributeur = "Troy";
        this.darkmode = true;
        this.greeting = "Starting up";
        let antword = false;
        let naam = "Hendrik";
        let leeftijd = 17;
        console.log (antword, naam,leeftijd);
        this.school = true;
        this.land = "Spanje";
        this.hoogteCM = 1,93;
        console.log (this.school, this.land, this.hoogteCM)
    }
}

let app = new App();
app.runApplication();

console.log(app.greeting);
console.log("AppNaam: " + app.appNaam);
console.log("Versienummer: " + app.versienummer);
console.log("Versiedatum: " + app.versiedatum);
console.log("Autheur: " + app.autheur);
console.log("Copyright: " + app.copyright);
console.log("Distributeur: " + app.distributeur);
console.log("Darkmode: " + app.darkmode)