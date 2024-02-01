class User {
    constructor(name) {
        this.name = name;
    }
    wieBenIk() {
        console.log(this.name);
    }
}

class App {
    runApplication() {
        console.log("hello world!");

        let user1 = new User("Efe");
        let user2 = new User("Sydney");
        let user3 = new User("Dragan");
        let user4 = new User("Fehmi");
        let user5 = new User("Jamal");
        let user6 = new User("Mehmet");

        user1.wieBenIk();
        user2.wieBenIk();
        user3.wieBenIk();
        user4.wieBenIk();
        user5.wieBenIk();
        user6.wieBenIk();

    }
}
let app = new App();
app.runApplication();

