import { Browser, Page, Locator, Frame } from "@playwright/test";
import { BasePageActions } from "econ-test-framework/elementcore/BasePageActions";
import * as AlertHandlerUtils from "econ-test-framework/baseUtils/AlertHandlerUtils";
import * as path from "path";
import { DefaultData } from "../enums/defaultData";
import { BasePage } from "./basePage";
import * as pageUtils from 'econ-test-framework/projectutils/PageUtils';

export class LoginPage extends BasePage {

  startBtn: any;
  emailLabel: any;
  emailText: any;
  passwordLabel: any;
  passwordText: any;
  loginBtn: any;
  invalidEmailError: any;
  invalidPasswordError: any;
  registerUser: any;

  constructor() {
    super(pageUtils.getPage());

  }

  async setLocators() {
    this.emailLabel = await this.uilocator("LoginPage.emailLabel");
    this.emailText = await this.uilocator("LoginPage.emailText");
    this.passwordLabel = await this.uilocator("LoginPage.passwordLabel");
    this.passwordText = await this.uilocator("LoginPage.passwordText");
    this.loginBtn = await this.uilocator("LoginPage.loginBtn");
    this.startBtn = await this.uilocator("LoginPage.startBtn");
    this.invalidEmailError = await this.uilocator("LoginPage.invalidEmailError");
    this.invalidPasswordError = await this.uilocator("LoginPage.invalidPasswordError");
    this.registerUser = await this.uilocator("LoginPage.registerUser");
  }

  async getEmailErrorByLocator(): Promise<Locator> {
    return this.invalidEmailError.getLocator();
  }

  async getPasswordErrorByLocator(): Promise<Locator> {
    return this.invalidPasswordError.getLocator();
  }
}