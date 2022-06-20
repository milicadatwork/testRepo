
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

describe("Third test suite", () => {
    const home = new HomePage();
    it("Third test case", () => {
        home.navigateTo()
    })
    it("Click on W&C logo", () => {
        home.clickLogo()
    })
    it("Click on Select CLients", () => {
        home.clickSelectClients()
    })

    it("Check page URL clients", () => {
        home.checkPageURL('https://work.co/clients/')
    })

})