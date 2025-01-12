import { expect } from "@playwright/test";
// base Page
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

  async waitAndFill(selector, text) {
    return await this.page.fill(selector, text);
  }
  async waitAndClick(selector) {
    return await this.page.click(selector);
  }

  async handleDialogs() {
    this.page.on("dialog", async (dialog) => {
      if (dialog.type() === "alert") {
        await dialog.accept();
      } else if (dialog.type() === "confirm") {
        await dialog.accept(); // or dialog.dismiss();
      } else if (dialog.type() === "prompt") {
        await dialog.accept("Shihab"); // or dialog.dismiss();
      }
    });
  }

  async verifyElementContainsText(selector, text) {
    await this.page.locator(selector).waitFor();
    return await expect(this.page.locator(selector)).toContainText(text);
  }

  async findElecmentFromList(select, text) {
    const items = this.page.locator(select);

    for (let i = 0; i < (await items.count()); i++) {
      const getText = await items.nth(i).textContent();
      console.log(getText);
      if (getText.includes(text)) {
        await items.nth(i).click();
      }
    }
  }
}

export default BasePage;
