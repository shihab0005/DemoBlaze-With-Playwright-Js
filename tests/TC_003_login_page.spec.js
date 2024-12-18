/* Scenario 1: 
   Verify Verify Login functionality.

Scenario Description: 
-Verify login with valid credentials.


Test Steps:
1.	Open website and verify url and title of the page.
2.	Verify open website and check url and title.
3.	Login With Valid Credentials and Verify Successfully login.

*/
import test from "../TestFixture/fixture";

test.describe.serial("Verify Login functionality", () => {
  test("Verify login with valid credentials", async ({
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
  });
});
