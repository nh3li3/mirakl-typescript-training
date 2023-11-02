describe("about typed functions", () => {
  it("should be typed values", () => {
    type SayHello = (name: string) => string;
    const sayHello: SayHello = (name) => `Hello ${name}`;

    expect(sayHello("TypeScript")).toEqual("Hello TypeScript");
  });

  it("should accept optional arguments", () => {
    function sayHello(name?: string) {
      return `Hello ${name || "World"}`;
    }

    expect(sayHello()).toEqual("Hello World");
  });

  it("should work with default values", () => {
    type SayHello = (msg: string | undefined, name: string) => string;
    const sayHello: SayHello = (msg = "Hello", name) => `${msg} ${name}`;

    expect(sayHello(undefined, "World")).toEqual("Hello World");
  });

  it("should accept any number of parameters", () => {
    const join = (separator: string, ...elm: string[]) => elm.join(separator);

    expect(join(", ", "Hello", "TypeScript")).toEqual("Hello, TypeScript");
  });

  it("lambda should not loose their this", () => {
    const donald = {
      name: "Donald",
      greet(msg: string) {
        return () => `${this.name} says hello ${msg}`;
      },
    };

    const donaldGreets = donald.greet("world");
    expect(donaldGreets()).toEqual("Donald says hello world");
  });
});
