import { test } from "../Fixture/CustomFixture";
import { validUsername } from "../TestData/TestData";


test.describe('Login Page Tests', () => {
    test ('should display login page', async ({ loginPage, homePage }) => {
        await loginPage.openNdosiPage();
        await homePage.navigateToLoginPage();
        await loginPage.userLogin(validUsername.student.username, validUsername.student.password);
        await loginPage.VerifyElementVisible(loginPage.page.getByRole('heading', { name: 'Welcome' }));

    });

});