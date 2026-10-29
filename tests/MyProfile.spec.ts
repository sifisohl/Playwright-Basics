import { test as base } from '@playwright/test';
import { HomePage } from '../Pages/HomePage';
import { LoginPage } from '../Pages/LoginPage';
import { DashboardPage } from '../Pages/DashboardPage'; 
import { validUsername } from '../TestData/TestData';
import { userProfile } from '../TestData/TestData';
import { MyProfilePage } from '../Pages/MyProfilePage';
import { test } from '../Fixture/CustomFixture';




test.describe('My Profile Page Tests', () => {
    test('update gitUsername', async ({ dashboardPage, loginPage, homePage, myProfilePage }) => {
        await homePage.openNdosiPage();
        await homePage.navigateToLoginPage();
        await loginPage.userLogin(validUsername.student.username, validUsername.student.password);
        await dashboardPage.ClickElement(dashboardPage.page.getByRole('button', { name: 'Menu' }));
        await dashboardPage.clickOnMyProfile();
        await myProfilePage.updateProfileDetails();
    
    });
});

