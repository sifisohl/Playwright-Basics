import { BasePage } from '../Utils/BasePage';

export class MyProfilePage extends BasePage {

    async openNdosiPage(){
        await this.GoToUrl('/');
    }

    async updateProfileDetails() {
        await this.ClickElement(this.page.locator('css=button:has-text("✏️ Edit Profile")'));
        await this.EnterText(this.page.getByPlaceholder('e.g., octocat'), 'GitUsername');
        await this.ClickElement(this.page.locator('css=button:has-text("Save Changes")'));
    }

    
}