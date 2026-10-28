import { BasePage } from '../Utils/BasePage';

export class MyProfilePage extends BasePage {

    async openNdosiPage(){
        await this.GoToUrl('/');
    }

    async clickOnMenu() {
        await this.ClickElement(this.page.getByRole('button', { name: 'Menu' }));
    }   

    async clickOnMyProfile() {
        await this.ClickElement(this.page.locator('xpath=//span[contains(.,"My Profile")]'))    ;
    }
}