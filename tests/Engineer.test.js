/** @format */

const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("super testing", () => {
    it("should import 'name', 'id', and 'email' from Employee", () => {
      const name = "Sarah";
      const id = 4;
      const email = "something@yahoo.com";
      const github = "Garrett";
      const obj = new Engineer(name, id, email, github);
      expect(obj.email).toBe(email);
    });
  });
  describe("getRole", () => {
    it("should return 'Engineer'", () => {
      const obj = new Engineer();
      const getRole = obj.getRole();
      expect(getRole).toEqual("Engineer");
    });
  });
});
