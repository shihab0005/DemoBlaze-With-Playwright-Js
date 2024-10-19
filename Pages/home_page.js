import BasePage from "./base_page";
import fs from "fs";
import * as config from "../config";
import { expect } from "@playwright/test";
const testData = JSON.parse(fs.readFileSync(`./data/users.json`, `utf-8`));
import * as home_page_loc from "../Locators/home_page_locator";

class HomePage extends BasePage {
  constructor(page) {
    super(page);
  }

  async open_url() {
    await this.open(config.PageUrl);
  }

  async page_url_verification() {
    const page_url = await this.getUrl();
    expect(this.page).toHaveURL(page_url);
  }
  async page_title_verification() {
    const page_title = await this.getTitle();
    expect(this.page).toHaveTitle(page_title);
  }
  async verify_site_logo_isvisible() {
    await this.isElementVisible(
      home_page_loc.site_logo,
      testData.notVisibleText
    );
  }

  async verify_site_logo_isEnable() {
    await this.isElementEnabled(
      home_page_loc.site_logo,
      testData.notEnabledText
    );
  }
}
export default HomePage;
