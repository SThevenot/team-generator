
const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("office testing", () => {
      it("should be able to present office number/string", () => {
        const name = "Sarah";
        const id = 3;
        const email = "gmail.com";
        const officeVal = 13;
        const obj = new Manager(name, id, email, officeVal);
        expect(obj.office).toEqual(officeVal);
      });
    });
    it("should be able to return the office number through the getOffice();", () => {
      const office = this.office;
     const obj = new Manager();
      const getOffice = obj.getOffice();
      expect(getOffice).toEqual(office);
    });
  });
  