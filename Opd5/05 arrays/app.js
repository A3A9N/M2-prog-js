class App
{
    runApplication()
    {
        console.log("hello world")
          
            let appNaam = "MijnApp";
            let versienummer = 1; // double
            let versiedatum = new Date().toLocaleDateString(); // Datum als string
            let auteur = "Desley puttileihalat";
            let copyright = "leerling";
            let distributeur = "leerling";
            let darkmode = false;
            let isBoolean = true;
            let textString = "Dit is een string";
            let aNumber = 42;
    }
}
let artiesten = ["Ed Sheeran", "Coldplay", "Imagine Dragons"];
 
function runApplication() {
 console.log(artiesten);
 
 for (let i = 0; i < artiesten.length; i++) {
   console.log(artiesten[i]);
 }
 
 let nummers = [2, 5, 7];
 console.log(nummers);
 
 for (let i = 0; i < nummers.length; i++) {
   console.log(nummers[i] + 1);
 }
 
 for (let i = 0; i < artiesten.length; i++) {
   console.log(i + 1 + ": " + artiesten[i]);
 }
}
console.log(artiesten);
 
artiesten.push("Bob Dylan");
artiesten.push("Prince");
 
for (let i = 0; i < artiesten.length; i++) {
 console.log(artiesten[i]);
}
 
let indexToRemove = artiesten.indexOf("Bob Dylan");
artiesten.splice(indexToRemove, 1);
 
indexToRemove = artiesten.indexOf("Prince");  
artiesten.splice(indexToRemove, 1);
 
artiesten.push("Armin van Buuren");
artiesten.push("Swedish House Mafia");
 
for (let i = 0; i < artiesten.length; i++) {
 console.log(artiesten[i]);
}
 
 
let headers = document.getElementsByTagName("h1");
 
for (let i = 0; i < headers.length; i++) {
  console.log(headers[i]);
}
let data = ["Game review", "Upcoming releases", "Industry news", "Top 10 RPGs", "New shooter games"];
 
let headers1 = document.querySelectorAll("h1");
 
for (let i = 0; i < data.length; i++) {
 headers[i].innerText = i + 1 + ": " + data[i];
}
 
 
let headersByCssClass = document.getElementsByClassName("game-header");
 
for (let i = 0; i < headersByCssClass.length; i++) {
  console.log(headersByCssClass[i]);  
}
 
for (let i = 0; i < headersByCssClass.length; i++) {
  console.log(headersByCssClass[i].innerText);
}
 
for (let i = 0; i < headersByCssClass.length; i++) {
  headersByCssClass[i].innerText = "huh????";
}
 
headersByCssClass[0].innerText = "nieuws";
headersByCssClass[1].innerText = "reviews";
headersByCssClass[2].innerText = "commentaar";
headersByCssClass[3].innerText = "top 10";
headersByCssClass[4].innerText = "nieuwe games";
 
 
 
 
 
runApplication();