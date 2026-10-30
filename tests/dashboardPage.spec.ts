import { test } from '../Fixture/CustomFixture';
import { validUsername } from '../TestData/TestData';

test.describe('Dashboard Page Tests', () => {
    test('should display dashboard page', async ({ dashboardPage, loginPage, homePage, myProfilePage }) => {
        // await homePage.openNdosiPage();
        // await homePage.navigateToLoginPage();
        // await loginPage.userLogin(validUsername.student.username, validUsername.student.password);
        await dashboardPage.ClickElement(dashboardPage.page.getByRole('button', { name: 'Menu' }));
    });
});
