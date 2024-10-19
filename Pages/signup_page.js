import BasePage from "./base_page.js";

import * as config from "../config.js";

import * as signup_loc from "../Locators/signup_page_locator.js"

import { expect } from "@playwright/test";

class SignupPage extends BasePage {
  constructor(page) {
    super(page);
  }

  async openWebsite() {
    await this.open(config.PageUrl);
  }

  async pageUrl() {
    const url = await this.getUrl();
    console.log("Page Url: " + url);
    await expect(this.page).toHaveURL();
  }

  async pageTitle() {
    const title = await this.getTitle();
    console.log("Page Title: " + title);
    await expect(this.page).toHaveTitle();
  }
}

export default SignupPage;
