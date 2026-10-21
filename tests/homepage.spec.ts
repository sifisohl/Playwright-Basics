import { test } from "../Fixture/CustomFixture";



test.describe('Home Page Tests', () => {

    test('Navigate to Login page', async ({ homePage }) => {
        await homePage.openNdosiPage();
        await homePage.navigateToLoginPage();
        await homePage.verifyLoginButtonIsVisible();
        await homePage.getLoginHeaderText();
        await homePage.page.evaluate((text) => console.log(text), await homePage.getLoginHeaderText())
    });

});