describe("TS interfaces", () => {
  it("should describe the shape of an object", () => {
    const person: _ = _;
    expect(person.firstName).toEqual("John");
  });

  it("can be declared just as JS bindings", () => {
    type _ = {
      _: _;
    };

    const person: _ = _;
    expect(person.lastName).toEqual("Doe");
  });

  it("should be extendable by simply redeclaring them", () => {
    interface IPerson {
      gender: "male" | "female";
    }

    interface _ {
      _: _;
    }

    const person: IPerson = {
      gender: "male",
      _: _,
    };
    expect(person.gender).toEqual("male");
    expect(person.name).toEqual("Chuck");
  });

  it("should be extendable with the extends keyword", () => {
    type Person = {
      gender: "male" | "female" | "other";
    };

    interface _ extends _ {
      _: _;
    }

    const person: _ = {
      _: _,
      _: _,
    };

    expect(person.gender).toEqual("other");
    expect(person.name).toEqual("Conchita");
  });

  it("can have optional properties", () => {
    type Person = {
      firstName: string;
      lastName?: string;
    };

    const person: Person = {
      firstName: _,
    };

    if (_) {
      person.lastName = person.lastName.toUpperCase();
    }

    expect(person.firstName).toEqual("John");
    expect(person.lastName).toBeUndefined();
  });

  it("can describe maps", () => {
    type Person = {
      firstName: string;
    };

    type _ = {
      _: _;
    };

    const contacts: Contacts = {
      johnId: { firstName: _ },
      _: { _: "Jane" },
    };

    ["johnId", "janeId"].forEach((id) =>
      expect(contacts[id].firstName).toBeDefined()
    );
  });
});
