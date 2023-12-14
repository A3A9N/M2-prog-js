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
        console.log (this.appNaam , this.versienummer);
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