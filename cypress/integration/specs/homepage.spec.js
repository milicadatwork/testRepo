
import { HomePage } from "../../support/pageObjects/homepage.js";

describe("First test suite", () => {
    const home = new HomePage();
    it("First test case", () => {
        home.navigateTo()
    })

    it("Check page title", () => {
        home.getPageTitle()
    })

    it("Check headline", () => {
        home.getHeadline()
    })

    it("Check logo is displayed", () => {
        home.getLogo()
    })
})

describe("Second test suite", () => {
    const home = new HomePage();
    it("Second test case", () => {
        home.navigateTo()
    })
    it("Click on W&C logo", () => {
        home.clickLogo()
    })
    it("Check page URL grid", () => {
        home.checkPageURL('https://work.co/grid/')
    })

})