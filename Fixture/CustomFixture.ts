import { HomePage } from '../Pages/HomePage';
import { test as base } from '@playwright/test';


type CustomFixture = {
    homePage: HomePage;
};

export const test = base.extend<CustomFixture>({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    }
});
