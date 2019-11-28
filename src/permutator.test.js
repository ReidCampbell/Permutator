const permutator = require("./permutator");

it("should create an array of permutations", () => {
    expect(permutator.createPermutations("LABA").length).toEqual(12);
});

it("should find the correct index of inputted string", () => {
    expect(permutator.findIndex("LABA")).toEqual(10);
});
