import { Page } from "@playwright/test";
import * as pageUtils from 'econ-test-framework/projectutils/PageUtils';
import { UserRegisterData } from "../../databuilder/userRegisterData";
import { UserRegisterPage } from "../../pages/userRegisterPage";

export async function registerUser(userRegisterData: UserRegisterData) {
  var userRegisterPage = new UserRegisterPage();
  await userRegisterPage.setLocators();
  await userRegisterPage.firstName.type(userRegisterData.getFirstName());
  await userRegisterPage.lastName.type(userRegisterData.getLastName());
  await userRegisterPage.email.type(userRegisterData.getUserEmail());
  await userRegisterPage.password.type("Test@123");
  await userRegisterPage.confirmPassword.type("Test@123");
  await userRegisterPage.registerBtn.elementClick();
}