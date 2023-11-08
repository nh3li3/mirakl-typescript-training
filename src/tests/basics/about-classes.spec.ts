describe("about classes", () => {
  it("your first class", () => {
    class SuperHero {
      constructor(
        private fname: string,
        private lname: string
      ) {}
      talk() {
        return `Hi my name is ${this.fname} ${this.lname}`;
      }
    }

    const hero = new SuperHero("Bruce", "Wayne");
    expect(hero.talk()).toEqual("Hi my name is Bruce Wayne");
  });

  it("you can use getter and setters", () => {
    class Person {
      constructor(
        public firstName: string,
        public lastName: string
      ) {}
      public get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
      }
      public set fullName(value: string) {
        [this.firstName, this.lastName] = value.split(" ");
      }
    }

    const person = new Person("John", "Doe");
    expect(person.fullName).toEqual("John Doe");
    person.fullName = "Jane Doe";
    expect(person.firstName).toEqual("Jane");
  });

  it("implement an interface", () => {
    interface IDeveloper {
      readonly favouriteLanguage: string;
    }

    class Developer implements IDeveloper {
      constructor(private _favLang: string) {}
      get favouriteLanguage() {
        return this._favLang;
      }
    }

    const developer: IDeveloper = new Developer("TypeScript");
    expect(developer.favouriteLanguage).toEqual("TypeScript");
  });

  it("extend another class", () => {
    abstract class Citizen {
      constructor(protected name: string) {}
      abstract talk(): string;
    }
    class SuperHero extends Citizen {
      constructor(
        name: string,
        public alias: string,
        public ability: string
      ) {
        super(name);
      }
      public talk() {
        return `I fight against evil with ${this.ability}`;
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
