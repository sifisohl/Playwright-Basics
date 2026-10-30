import { LoginPage } from "../Pages/LoginPage"
import { test as setup} from '@playwright/test'
import { HomePage } from "../Pages/HomePage"; 
import { validUsername } from "../TestData/TestData";  

const authFile = 'playright/.auth/user.json';

setup('authenticate', async({page}) => {

const loginPage = new LoginPage(page);
const homePage = new HomePage(page);
    await loginPage.openNdosiPage();
          await homePage.navigateToLoginPage();
          await loginPage.userLogin(validUsername.student.username, validUsername.student.password);

    await page.context().storageState({

        path: authFile
    });

})