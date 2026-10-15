import { test } from "../Fixture/CustomFixture";



test.describe('Home Page Tests', () => {

    test('Navigate to Login page', async ({ homePage }) => {
        await homePage.openNdosiPage();
        await homePage.navigateToLoginPage();
      
    });
});