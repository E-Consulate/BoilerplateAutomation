import { test, expect, type Page, Locator } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { setbrowserContext } from 'econ-test-framework/projectutils/PageUtils';
import { AssertionUtilsPage } from '../pages/assertionUtilsPage';
import * as userRegisterDetails from '../functions/systemfunctions/userRegisterDetails';
import { JsonUtils } from 'econ-test-framework/projectutils/JsonUtils';
import { DefaultData } from '../enums/defaultData';
import { UserRegisterData } from '../databuilder/userRegisterData';
import { UserRegisterPage } from '../pages/userRegisterPage';

var page: any;
test.describe('Test Login Function', {
    tag: '@Regression',
}, () => {

    test.beforeEach('set prerequisit data', async ({ browser }) => {
        page = await browser.newPage();
        setbrowserContext(page);

    });

    test('Test login with empty values.', async ({ }) => {
        let assertUtils = new AssertionUtilsPage();
        await page.goto("http://localhost:3000/");

        var jsonutils = await new JsonUtils(DefaultData.testDataFilePath);
        const testdata = await jsonutils.readJsonArray();

        var userRegisterData = await new UserRegisterData();

        userRegisterData.setFirstName(testdata.UserRegisterData.firstName);
        userRegisterData.setLastName(testdata.UserRegisterData.lastName);
        userRegisterData.setUserEmail(testdata.UserRegisterData.email);
        userRegisterData.setUPW(testdata.UserRegisterData.password1);

        var loginpage = new LoginPage();
        await loginpage.setLocators();
        await loginpage.startBtn.elementClick();
        await loginpage.registerUser.elementClick();

        await userRegisterDetails.registerUser(userRegisterData);


    });

    test('Test User Register with empty values.', async ({ }) => {
        let assertUtils = new AssertionUtilsPage();
        await page.goto("http://localhost:3000/");

        var loginpage = new LoginPage();
        await loginpage.setLocators();
        await loginpage.startBtn.elementClick();
        await loginpage.registerUser.elementClick();

        var userRegisterPage = new UserRegisterPage();
        await userRegisterPage.setLocators();

        assertUtils.softAssertElementTextEquals(await userRegisterPage.getFirstNameErrorByLocator(), "First Name is required", "");
        assertUtils.softAssertElementTextEquals(await userRegisterPage.getLastNameErrorByLocator(), "Last Name is required", "");
        assertUtils.softAssertElementTextEquals(await userRegisterPage.getEmailErrorByLocator(), "Email is required", "");
        assertUtils.softAssertElementTextEquals(await userRegisterPage.getPasswordErrorByLocator(), "Password is required", "");
        assertUtils.softAssertElementTextEquals(await userRegisterPage.getConfirmPasswordErrorByLocator(), "Please confirm your password", "");


    });

    test('Test User Register with invalid  Email', async ({ }) => {
        let assertUtils = new AssertionUtilsPage();
        await page.goto("http://localhost:3000/");

        var jsonutils = await new JsonUtils(DefaultData.testDataFilePath);
        const testdata = await jsonutils.readJsonArray();

        var userRegisterData = await new UserRegisterData();

        userRegisterData.setFirstName(testdata.UserRegisterData.firstName);
        userRegisterData.setLastName(testdata.UserRegisterData.lastName);
        userRegisterData.setUserEmail("usertest");
        userRegisterData.setUPW(testdata.UserRegisterData.password1);

        var loginpage = new LoginPage();
        await loginpage.setLocators();
        await loginpage.startBtn.elementClick();
        await loginpage.registerUser.elementClick();

        await userRegisterDetails.registerUser(userRegisterData);

        var userRegisterPage = new UserRegisterPage();
        await userRegisterPage.setLocators();
        assertUtils.softAssertElementTextEquals(await userRegisterPage.getEmailErrorByLocator(), "Email is required", "");


    });

});