import { BasePage } from '../Utils/BasePage';

export class LoginPage extends BasePage {

async openNdosiPage(){
    await this.GoToUrl('/');
}

    async userLogin(username: string, password: string) {

        await this.EnterText(this.page.locator('#login-email'), username);
        await this.EnterText(this.page.locator('#login-password'), password);
        await this.ClickElement(this.page.getByRole('button', { name: 'Login' }));
        await this.VerifyElementVisible(this.page.getByRole('heading', { name: 'Welcome' }));
    }

}