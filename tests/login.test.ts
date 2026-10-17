import  {test,expect} from '@playwright/test';


test.describe('Positive Login Tests',()=>{

test.beforeEach(async({page})=>{
    await page.goto('/');
})
test('@regression Login to Ndosi with valid credentials',async({page}, testInfo)=>{

    // await page.goto('https://ndosisimplifiedautomation.vercel.app/');

    await page.getByRole('button', { name: 'Login' }).click();

    await page.getByRole('textbox', { name: 'Email' }).fill('SifisoH@gmail.com');

    await page.getByRole('textbox', { name: 'Password' }).fill('@12345678');

    await page.getByRole('button', { name: 'Login' }).click();

    await page.waitForTimeout(5000);

    await expect(page.getByRole('heading', { name: 'Welcome back, Sifiso' })).toBeVisible();

    await page.screenshot({ path: 'screenshots/Login-Success.png', fullPage: true });

    await testInfo.attach('Login-Success', { path: 'screenshots/Login-Success.png', contentType: 'image/png' });





});

})


test.describe('Negative Login Tests',()=>{

test.beforeEach(async({page})=>{
    await page.goto('/');
})

test('@regression @smoke Login to Ndosi with invalid password',async({page})=>{

    // await page.goto('/');

    await page.click('text=Login');

    await page.fill('input[name="loginEmail"]', 'SifisoH@gmail.com');

    await page.fill('input[name="loginPassword"]', '@123456789');

// wait for the dialog event to be triggered

    const dialogPromise = page.waitForEvent('dialog');

    await page.locator('#login-submit').click();

    const dialog = await dialogPromise;

    // assert the dialog message

    await expect(dialog.message()).toBe('Invalid credentials. Please try again.');

    // accept the dialog to close it

    await dialog.accept();

    console.log('Message from the dialog:', dialog.message());

    // await page.waitForTimeout(5000);

    // await expect(page.getByRole('heading', { name: 'Welcome back, Sifiso' })).toBeVisible();

});

})

test.describe('Negative Login Tests',()=>{

    test.beforeEach(async({page})=>{
    await page.goto('/');
})

test('@regression @smoke Login to Ndosi with invalid email',async({page})=>{

    // await page.goto('https://ndosisimplifiedautomation.vercel.app/');

    await page.click('text=Login');

    await page.fill('input[name="loginEmail"]', 'Sifiso@gmail.com');

    await page.fill('input[name="loginPassword"]', '@12345678');

// wait for the dialog event to be triggered

    const dialogPromise = page.waitForEvent('dialog');

    await page.locator('#login-submit').click();

    const dialog = await dialogPromise;

    // assert the dialog message

    await expect(dialog.message()).toBe('Invalid credentials. Please try again.');

    // accept the dialog to close it

    await dialog.accept();

    console.log('Message from the dialog:', dialog.message());


})

})