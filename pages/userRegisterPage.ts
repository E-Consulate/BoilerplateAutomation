import { Locator } from "@playwright/test";
import { BasePage } from "./basePage";
import * as pageUtils from 'econ-test-framework/projectutils/PageUtils';

export class UserRegisterPage extends BasePage {

    firstName: any;
    lastName: any;
    email: any;
    password: any;
    confirmPassword: any;
    registerBtn: any
    firstNameErrorMsg: any
    lastNameErrorMsg: any
    emailErrorMsg: any
    passwordErrorMsg: any;
    confirmPasswordErrorMsg: any;


    constructor() {
        super(pageUtils.getPage());

    }


    async setLocators() {
        this.firstName = await this.uilocator("RegisterPage.firstName");
        this.lastName = await this.uilocator("RegisterPage.lastName");
        this.email = await this.uilocator("RegisterPage.email");
        this.password = await this.uilocator("RegisterPage.password");
        this.confirmPassword = await this.uilocator("RegisterPage.confirmPassword");
        this.registerBtn = await this.uilocator("RegisterPage.registerBtn");
        this.firstNameErrorMsg = await this.uilocator("RegisterPage.firstNameErrorMsg");
        this.lastNameErrorMsg = await this.uilocator("RegisterPage.lastNameErrorMsg");
        this.emailErrorMsg = await this.uilocator("RegisterPage.emailErrorMsg");
        this.passwordErrorMsg = await this.uilocator("RegisterPage.passwordErrorMsg");
        this.confirmPasswordErrorMsg = await this.uilocator("RegisterPage.confirmPasswordErrorMsg");

    }


    async getFirstNameErrorByLocator(): Promise<Locator> {
        return this.firstNameErrorMsg.getLocator();
    }

    async getLastNameErrorByLocator(): Promise<Locator> {
        return this.lastNameErrorMsg.getLocator();
    }

    async getEmailErrorByLocator(): Promise<Locator> {
        return this.emailErrorMsg.getLocator();
    }

    async getPasswordErrorByLocator(): Promise<Locator> {
        return this.passwordErrorMsg.getLocator();
    }

    async getConfirmPasswordErrorByLocator(): Promise<Locator> {
        return this.confirmPasswordErrorMsg.getLocator();
    }






}