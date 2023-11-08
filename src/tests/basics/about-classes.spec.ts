describe("about classes", () => {
  it("your first class", () => {
    class SuperHero {
      constructor() {}
      talk() {
        return "toto";
      }
    }

    const hero = new SuperHero("Bruce", "Wayne");
    expect(hero.talk()).toEqual("Hi my name is Bruce Wayne");
  });

  it("you can use getter and setters", () => {
    class Person {
      constructor() {}
      public get fullName(): string {
        return "write code";
      }
      public set fullName(value: string) {}
    }

    const person = new Person("John", "Doe");
    expect(person.fullName).toEqual("John Doe");
    person.fullName = "Jane Doe";
    expect(person.firstName).toEqual("Jane");
  });

  it("implement an interface", () => {
    interface IDeveloper {}

    class Developer implements IDeveloper {
      constructor(private _favLang: string) {}
    }

    const developer: IDeveloper = new Developer("TypeScript");
    expect(developer.favouriteLanguage).toEqual("TypeScript");
  });

  it("extend another class", () => {
    abstract class Citizen {}
    class SuperHero extends Citizen {
      public talk() {
        return `write code`;
      }
    }

    class Sidekick extends SuperHero {
      constructor(
        name: string,
        alias: string,
        ability: string,
        private master: SuperHero
      ) {
        super(name, alias, ability);
      }
      public talk() {
        return `${super.talk()} and my master is ${this.master.alias}`;
      }
    }

    const batman = new SuperHero("Bruce Wayne", "Batman", "Martial arts");
    const robin = new Sidekick("Dick Grayson", "Robin", "Stick", batman);
    expect(robin.talk()).toEqual(
      "I fight against evil with Stick and my master is Batman"
    );
  });
});
