import * as pageUtils from 'econ-test-framework/projectutils/PageUtils';
import { BasePage } from "./basePage";


export class HomePage extends BasePage {

    dashBoardText:any;
    constructor() {
        super(pageUtils.getPage());
    
      }
    

    async setLocators() {
        this.dashBoardText = await this.uilocator("HomePage.dashBoardText");
    }
}
    

    