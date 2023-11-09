describe("about typed functions", () => {
  it("should be typed values", () => {
    type SayHello = _ => _;
    const sayHello: _ = (name) => _;

    expect(sayHello("TypeScript")).toEqual("Hello TypeScript");
  });

  it("should accept optional arguments", () => {
    function sayHello(name: string) {
      return `Hello ${name || "World"}`;
    }

    expect(sayHello()).toEqual("Hello World");
  });

  it("should work with default values", () => {
    type SayHello = _ => _;
    const sayHello: SayHello = (msg = "Hello", name) => `${msg} ${name}`;

    expect(sayHello(undefined, "World")).toEqual(_);
  });

  it("should accept any number of parameters", () => {
    const join = (separator: _, ..._: _) => el.join(separator);

    expect(join(", ", "Hello", "TypeScript")).toEqual("Hello, TypeScript");
  });
});
