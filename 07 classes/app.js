class Greet
{
    constructor()
    {
       
        this.greeting = "Greetings!";
    }
 
    showGreeting()
    {
        console.log("greeting van binnen: " +this.greeting);
    }
 
 
}
 
 
let greet = new Greet()
console.log(greet.greeting);
greet.showGreeting();
 
class GoodBye
{
    constructor()
    {
       this.farewell = "Goodbye";
    }
 
 
    showFarewell()
    {
        console.log("greeting van buiten: " +this.farewell);
    }
 
 
}
 
let bye = new GoodBye();
console.log(bye.farewell);
bye.showFarewell();
 
bye.showFarewell();
greet.showGreeting();
 
bye.showFarewell();
greet.showGreeting();
 
bye.showFarewell();
greet.showGreeting();
 
bye.showFarewell();
greet.showGreeting();