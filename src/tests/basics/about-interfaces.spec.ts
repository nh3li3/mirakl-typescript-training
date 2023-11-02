describe("TS interfaces", () => {
  it("should describe the shape of an object", () => {
    const person: { firstName: string } = {
      firstName: "John",
    };
    expect(person.firstName).toEqual("John");
  });

  it("can be declared just as JS bindings", () => {
    interface IPerson {
      lastName: string;
    }

    const person: IPerson = {
      lastName: "Doe",
    };
    expect(person.lastName).toEqual("Doe");
  });

  it("should be extendable by simply redeclaring them", () => {
    interface IPerson {
      gender: "male" | "female";
    }

    interface IPerson {
      name: string;
    }

    const person: IPerson = {
      gender: "male",
      name: "Chuck",
    };
    expect(person.gender).toEqual("male");
    expect(person.name).toEqual("Chuck");
  });

  it("should be extendable with the extends keyword", () => {
    interface IPerson {
      gender: "male" | "female" | "other";
    }

    interface INamedPerson extends IPerson {
      name: string;
    }

    const person: INamedPerson = {
      gender: "other",
      name: "Conchita",
    };

    expect(person.gender).toEqual("other");
    expect(person.name).toEqual("Conchita");
  });

  it("can have optional properties", () => {
    interface IPerson {
      firstName: string;
      lastName?: string;
    }

    const person: IPerson = {
      firstName: "John",
    };

    if (person.lastName) {
      person.lastName = person.lastName.toUpperCase();
    }

    expect(person.firstName).toEqual("John");
    expect(person.lastName).toBeUndefined();
  });

  it("can have readonly properties", () => {
    interface IPerson {
      firstName: string;
    }

    let error: boolean = false;
    const person: IPerson = {
      get firstName() {
        return "John";
      },
    };

    try {
      person.firstName = "Jane";
    } catch (e) {
      error = true;
    }

    expect(error).toBeTruthy();
    expect(person.firstName).toEqual("John");
  });

  it("can describe maps", () => {
    interface IPerson {
      firstName: string;
    }

    interface IContacts {
      [index: string]: IPerson;
    }

    const contacts: IContacts = {
      johnId: { firstName: "John" },
      janeId: { firstName: "Jane" },
    };

    ["johnId", "janeId"].forEach((id) =>
      expect(contacts[id].firstName).toBeDefined()
    );
  });
});
