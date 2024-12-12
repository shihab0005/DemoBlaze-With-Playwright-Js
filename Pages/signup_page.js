import BasePage from "./base_page.js";

import * as config from "../config.js";

import * as signup_loc from "../Locators/signup_page_locator.js";
import * as home_loc from "../Locators/home_page_locator.js";

import { expect } from "@playwright/test";

class SignupPage extends BasePage {
  constructor(page) {
    super(page);
  }

  async verify_all_nav_isVisible() {
    await this.isElementVisible(home_loc.nav_home, config.notVisibleText);
    await this.isElementVisible(home_loc.nav_aboutus, config.notVisibleText);
    await this.isElementVisible(home_loc.nav_contact, config.notVisibleText);
    await this.isElementVisible(home_loc.nav_login, config.notVisibleText);
    await this.isElementVisible(home_loc.nav_signin, config.notVisibleText);
    await this.isElementVisible(home_loc.nav_cart, config.notVisibleText);
  }

  async verify_all_nav_isEnable() {
    await this.isElementEnabled(home_loc.nav_home, config.notEnabledText);
    await this.isElementEnabled(home_loc.nav_aboutus, config.notEnabledText);
    await this.isElementEnabled(home_loc.nav_cart, config.notEnabledText);
    await this.isElementEnabled(home_loc.nav_cart, config.notEnabledText);
    await this.isElementEnabled(home_loc.nav_contact, config.notEnabledText);
    await this.isElementEnabled(home_loc.nav_login, config.notEnabledText);
    await this.isElementEnabled(home_loc.nav_signin, config.notEnabledText);
  }

  async open_signup_form(){
    await this.waitAndClick(signup_loc.signup_nav)
  }


  async enter_username() {
    await this.waitAndFill(signup_loc.signup_username, config.username);
  }

  async enter_password() {
    await this.waitAndFill(signup_loc.signup_password, config.password);
  }

  async handleAlert() {
    await this.handleDialogs();
  }
  async click_signup_btn() {
    await this.waitAndClick(signup_loc.signup_signupBtn);
  }
}

export default SignupPage;
