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

  async click_laptop_category() {
    await this.waitAndClick(home_page_loc.category_laptops);
  }
  async click_monitor_category() {
    await this.waitAndClick(home_page_loc.nav_home);
    await this.waitAndClick(home_page_loc.category_monitors);
  }
  async find_laptop_from_list() {
    await this.findElecmentFromList(
      home_page_loc.all_items,
      config.laptopItem
    );
  }
  async find_monitor_from_list() {
    await this.findElecmentFromList(
      home_page_loc.all_items,
      config.monitorItem
    );
  }

  async verify_selected_itme_successfully_display() {
    await this.verifyElementContainsText(
      home_page_loc.item_title,
      config.laptopItem
    );
  }

  async click_add_to_cart_btn() {
    await this.waitAndClick(home_page_loc.addtoCart);
  }
  async click_cart_nav() {
    await this.waitAndClick(home_page_loc.nav_cart);
  }
  async click_place_order_btn() {
    await this.waitAndClick(home_page_loc.place_order_btn);
  }

  async purchase_name() {
    await this.waitAndFill(home_page_loc.place_order_name, config.username1);
  }
  async purchase_country() {
    await this.waitAndFill(home_page_loc.place_order_country, config.country);
  }
  async purchase_city() {
    await this.waitAndFill(home_page_loc.place_order_city, config.city);
  }
  async purchase_credit_card() {
    await this.waitAndFill(home_page_loc.place_order_card, config.card);
  }
  async purchase_month() {
    await this.waitAndFill(home_page_loc.place_order_month, config.month);
  }
  async purchase_year() {
    await this.waitAndFill(home_page_loc.place_order_year, config.year);
  }

  async click_purchase_btn() {
    await this.waitAndClick(home_page_loc.place_order_purchase_btn);
  }

  async verify_welcome_msg() {
    await this.verifyElementContainsText(
      home_page_loc.thanks_msg_loc,
      config.welcome_text
    );
  }

  async click_on_ok_btn() {
    await this.waitAndClick(home_page_loc.ok_btn);
  }

  async verify_card_number() {
    await this.verifyElementContainsText(
      home_page_loc.purches_details_loc,
      config.card
    );
  }

  async verify_customer_name() {
    await this.verifyElementContainsText(
      home_page_loc.purches_details_loc,
      config.username1
    );
  }
}
export default HomePage;
