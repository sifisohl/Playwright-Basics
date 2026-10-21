import { BasePage } from "../Utils/BasePage";



export class DashboardPage extends BasePage {

async openNdosiPage(){
    await this.GoToUrl('/');
    }

    async clickOnMenu() {
        await this.ClickElement(this.page.getByRole('button', { name: 'Menu' }));
    };

}