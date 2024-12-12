import test from "../TestFixture/fixture";

test.describe.serial("Verify Login functionality", () => {
  test("Verify login with valid credentials", async ({
    loginpage,
    homePage,
  }) => {
    await test.step("Verify open website and check url and title", async () => {
      await homePage.open_url();
      await homePage.page_url_verification();
      await homePage.page_title_verification();
    });

    await test.step("Login With Valid Credentials", async () => {
      await loginpage.open_login_page();
      await loginpage.enter_username();
      await loginpage.enter_password();
      await loginpage.click_login_btn();
    });
  });
});
