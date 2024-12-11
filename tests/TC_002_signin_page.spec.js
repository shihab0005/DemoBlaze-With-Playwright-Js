import test from "../TestFixture/fixture";

test.describe("Verify all functionality of Sign Up Page", async () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.open_url();
    await homePage.page_url_verification();
    await homePage.page_title_verification();
  });

  test("Verify All element of Navbars are visible and enabled to click", async ({
    signupPage,
  }) => {
    await signupPage.verify_all_nav_isVisible();
    await signupPage.verify_all_nav_isEnable();
  });
});
