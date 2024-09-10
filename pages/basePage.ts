import { Browser, Page, Locator, Frame } from "@playwright/test";
import { BasePageActions } from "econ-test-framework/elementcore/BasePageActions";
import * as AlertHandlerUtils from "econ-test-framework/baseUtils/AlertHandlerUtils";
import * as path from "path";
import { DefaultData } from "../enums/defaultData";

export class BasePage extends BasePageActions {

  constructor(page: Page) {
    super(page, path.resolve(DefaultData.locatorsFilePath));
  }

}