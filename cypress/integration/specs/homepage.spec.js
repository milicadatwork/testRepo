
import { HomePage } from "../../support/pageObjects/homepage.js";

describe("First test suite", () => {
    const home = new HomePage();
    it("First test case", () => {
        home.navigateTo()
    })

    it("Check page title", () => {
        home.getTitle()
    })

    it("Check logo is displayed", () => {
        home.getLogo()
    })
})