import test from "../TestFixture/fixture";

test.describe.serial("Successful laptop Purchase", () => {
  test("Purchase Laptop and verify Successfully Purchase", async ({
    loginpage,
    homePage,
  }) => {
    await test.step("Open website and Verify url and title", async () => {
      await homePage.open_url();
      await homePage.page_url_verification();
      await homePage.page_title_verification();
    });

    await test.step("Login With Valid Credentials and Verify Successfully login", async () => {
      await loginpage.open_login_form();
      await loginpage.enter_username();
      await loginpage.enter_password();
      await loginpage.click_login_btn();
      await loginpage.verify_login_successfully();
    });

    await test.step("Find and select Laptop from list", async () => {
      await homePage.click_laptop_category();
      await homePage.find_laptop_from_list();
    });
  });
});
