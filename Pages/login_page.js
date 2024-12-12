import BasePage from "./base_page";

import * as loign_loc from "../Locators/login_page_locator";
import * as config from "../config.js";

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
  }

  async open_login_page() {
    await this.waitAndClick(loign_loc.login_nav);
  }

  async enter_username() {
    await this.waitAndFill(loign_loc.login_username, config.username1);
  }

  async enter_password() {
    await this.waitAndFill(loign_loc.login_password, config.password);
  }
  async click_login_btn() {
    await this.waitAndClick(loign_loc.login_loginBtn);
  }
}

export default LoginPage;
