
const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Inititalization", () => {
        it("should create an object called Employee with the arguments 'name', 'id', and 'email'", () => {
            const name = 'Sarah';
            const obj = new Employee(name);
            expect(obj.name).toEqual(name);
        });
    });

    describe("getName", () => {
        it("should return key of name'", () => {
            const name = 'Sarah';
            const obj = new Employee(name)
            const getName = obj.getName();
            expect(getName).toEqual(name);
        });
    })
})