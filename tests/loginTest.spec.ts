import { test, expect, type Page, Locator } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { setbrowserContext } from 'econ-test-framework/projectutils/PageUtils';
import { AssertionUtilsPage } from '../pages/assertionUtilsPage';
import { HomePage } from '../pages/homePage';

var page: any;
test.describe('Test Login Function', {
    tag: '@Regression',
}, () => {

    test.beforeEach('set prerequisit data', async ({ browser }) => {
        page = await browser.newPage();
        setbrowserContext(page);

    });

    test('Test login with empty values.', async ({  }) => {

        let assertUtils = new AssertionUtilsPage();
        await page.goto("http://localhost:3000/");

        var loginpage = new LoginPage();
        await loginpage.setLocators();
        await loginpage.startBtn.elementClick();
        await loginpage.emailText.type("");
        await loginpage.passwordText.type("");
        await loginpage.loginBtn.elementClick();

        assertUtils.softAssertElementTextEquals(await loginpage.getEmailErrorByLocator(), "Email is required", "");
        assertUtils.softAssertElementTextEquals(await loginpage.getPasswordErrorByLocator(), "Password is required", "");

    });

    test('Test login with invalid email and password', async ({  }) => {

       let assertUtils = new AssertionUtilsPage();
        setbrowserContext(page);
        await page.goto("http://localhost:3000/");

        var loginpage = new LoginPage();
        await loginpage.setLocators();
        await loginpage.startBtn.elementClick();
        await loginpage.emailText.type("test");
        await loginpage.passwordText.type("test");
        await loginpage.loginBtn.elementClick();

        assertUtils.softAssertElementTextEquals(await loginpage.getEmailErrorByLocator(), "Invalid email address", "");
        assertUtils.softAssertElementTextEquals(await loginpage.getPasswordErrorByLocator(), "Password must be at least 6 characters long.", "");

    });

    test('Test login with valid email and password', async ({  }) => {

        let assertUtils = new AssertionUtilsPage();
        setbrowserContext(page);
        await page.goto("http://localhost:3000/");

        var loginpage = new LoginPage();
        await loginpage.setLocators();
        await loginpage.startBtn.elementClick();
        await loginpage.emailText.type(process.env.userName);
        await loginpage.passwordText.type(process.env.password);
        await loginpage.loginBtn.elementClick();

        var homepage = new HomePage();
        await homepage.setLocators();
        assertUtils.softAssertTrue(await homepage.dashBoardText.isVisible(), "");


    });

});