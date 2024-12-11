import BasePage from "./base_page";
import * as config from "../config";
import { expect } from "@playwright/test";

import * as home_page_loc from "../Locators/home_page_locator";

class HomePage extends BasePage {
  constructor(page) {
    super(page);
  }
// open url git commit -a -m "text1"
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
    await this.isElementVisible(home_page_loc.site_logo, config.notVisibleText);
  }

  async verify_site_logo_isEnable() {
    await this.isElementEnabled(home_page_loc.site_logo, config.notEnabledText);
  }

  async verify_category_list_isvisible() {
    await this.isElementVisible(
      home_page_loc.category_list,
      config.notVisibleText
    );
  }
  async verify_category_list_isEnable() {
    await this.isElementEnabled(
      home_page_loc.category_list,
      config.notEnabledText
    );
  }

  async site_navbar_isvisible() {
    await this.isElementVisible(
      home_page_loc.site_navbar,
      config.notVisibleText
    );
  }
  async carosol_isvisible() {
    await this.isElementVisible(
      home_page_loc.site_carousel,
      config.notVisibleText
    );
  }

  async footer_container_isVisible() {
    await this.isElementVisible(
      home_page_loc.footer_container,
      config.notVisibleText
    );
  }
  async footer_about_us_isVisible() {
    await this.isElementVisible(
      home_page_loc.footer_about_us,
      config.notVisibleText
    );
  }
  async footer_get_is_touch_isVisible() {
    await this.isElementVisible(
      home_page_loc.footer_get_in_touch,
      config.notVisibleText
    );
  }
  async footer_logo_isVisible() {
    await this.isElementVisible(
      home_page_loc.footer_logo,
      config.notVisibleText
    );
  }
}
export default HomePage;
