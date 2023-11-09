describe("TS types", () => {
  it("should be the same as in JavaScript for primitve types", () => {
    const aBoolean: boolean = true;
    const aString: string = "abc";
    const aNumber: number = 42;

    expect(aBoolean).toBeTruthy();
    expect(aString).toEqual("abc");
    expect(aNumber).toEqual(42);
  });

  it("should have a special notation for arrays", () => {
    const aList: number[] = [1, 2, 3];

    expect(aList).toMatchObject([1, 2, 3]);
  });

  it("should allow for putting different things in an array", () => {
    const aList: (string | number)[] = [1, "2"];

    expect(aList).toMatchObject([1, "2"]);
  });

  it("should have a notation for tuples (fixed sized arrays)", () => {
    const aTemperature: [number, "C" | "F"] = [32, "F"];

    // descructuring declaration - we'll cover this soon
    const [val, unit] = aTemperature;
    expect(val).toEqual(32);
    expect(unit).toEqual("F");
  });

  it("include enum types", () => {
    enum myFirstEnum {
      red,
      blue = 2,
    }

    expect(myFirstEnum.red).toEqual(0);
    expect(myFirstEnum[2]).toEqual("blue");
  });

  it("should help you with null and undefined", () => {
    const nullable: string | null = null;
    const undefinable: number | undefined = undefined;

    expect(nullable).toBeNull();
    expect(undefinable).toBeUndefined();
  });

  it("should allow for typing function arguments too", () => {
    function sayHello(name: string) {
      return "Hello ".concat(name);
    }
    expect(sayHello("TypeScript")).toEqual("Hello TypeScript");
  });
});
