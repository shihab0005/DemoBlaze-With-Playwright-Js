import HomePage from "../Pages/home_page";
import SignupPage from "../Pages/signup_page";
import { test as fixture } from "@playwright/test";

const test = fixture.extend({
  signupPage: async ({ page }, use) => {
    await use(new SignupPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  signupPage: async ({ page }, use) => {
    await use(new SignupPage(page));
  },
});

export default test;
