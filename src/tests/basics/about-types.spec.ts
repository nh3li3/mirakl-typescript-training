describe("TS types", () => {
  it("should be the same as in JavaScript for primitve types", () => {
    const aBoolean: _ = _;
    const aString: _ = _;
    const aNumber: _ = _;

    expect(aBoolean).toBeTruthy();
    expect(aString).toEqual("abc");
    expect(aNumber).toEqual(42);
  });

  it("should have a special notation for arrays", () => {
    const aList: _ = _;

    expect(aList).toMatchObject([1, 2, 3]);
  });

  it("should allow for putting different things in an array", () => {
    const aList: _ = _;

    expect(aList).toMatchObject([1, "2"]);
  });

  it("should have a notation for tuples (fixed sized arrays)", () => {
    const aTemperature: _ = _;

    // descructuring declaration like useState of React
    const [val, unit] = aTemperature;
    expect(val).toEqual(32);
    expect(unit).toEqual("F");
  });

  it("should help you with null and undefined", () => {
    const stringNullable: string = _;
    const numberUndefinable: number = _;

    expect(stringNullable).toBeNull();
    expect(numberUndefinable).toBeUndefined();
  });

  it("should allow for typing function arguments too", () => {
    function sayHello(name: _) {
      return "Hello ".concat(name);
    }
    expect(sayHello("TypeScript")).toEqual("Hello TypeScript");
  });
});
