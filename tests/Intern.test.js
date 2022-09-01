/** @format */

const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("school testing", () => {
    it("should be able to present school string", () => {
      const name = "Sarah";
      const id = 3;
      const email = "gmail.com";
      const schoolVal = "Rochester High School";
      const obj = new Intern(name, id, email, schoolVal);
      expect(obj.school).toEqual(schoolVal);
    });
  });
  it("should be able to return the school through the getSchool();", () => {
    const school = this.school;
   const obj = new Intern();
    const getSchool = obj.getSchool();
    expect(getSchool).toEqual(school);
  });
});
