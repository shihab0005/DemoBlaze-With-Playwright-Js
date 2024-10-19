import { expect } from "@playwright/test";

class BasePage {
  constructor(page) {
    this.page = page;
  }

  async open(url) {
    return await this.page.goto(url);
  }

  async getTitle() {
    return await this.page.title();
  }

  async getUrl() {
    return await this.page.url();
  }

  async pagePause() {
    return await this.page.pause();
  }

  async isElementVisible(selector, errorMessage) {
    const element = this.page.locator(selector);
    try {
      const isVisible = await element.isVisible();
      expect(isVisible).toBeTruthy();
    } catch (error) {
      throw new Error(`${errorMessage}`);
    }
  }

  async isElementEnabled(selector, errorMessage) {
    const element = this.page.locator(selector);
    try {
      const isEnabled = await element.isEnabled();
      expect(isEnabled).toBeTruthy();
    } catch (error) {
      throw new Error(`${errorMessage}`);
    }
  }
}

export default BasePage;
