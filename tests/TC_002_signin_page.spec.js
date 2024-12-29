import test from "../TestFixture/fixture";

test.describe("Verify all functionality of Sign Up Page", async () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.open_url();
    await homePage.page_url_verification();
    await homePage.page_title_verification();
  });

  test("@smoke:Verify All element of Navbars are visible and enabled to click", async ({
    signupPage,
  }) => {
    await signupPage.verify_all_nav_isVisible();
    await signupPage.verify_all_nav_isEnable();
  });

  test("Login with valid credentials and handle Alert Popup", async ({
    signupPage,
  }) => {
    await signupPage.open_signup_form();
    await signupPage.enter_username();
    await signupPage.enter_password();
    await signupPage.handleAlert();
    await signupPage.click_signup_btn();
  });
});
