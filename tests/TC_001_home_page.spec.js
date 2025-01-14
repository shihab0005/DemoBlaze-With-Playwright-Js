/* Scenario 1: 
verify all the element of the home page of the website.

Scenario Description: 
User open the website and verifies all the elements of the home page.This is like a Smoke test. 

Test Steps:
1.	Open website and verify url and title of the page.
2.	Verify site Logo is visible & enable to click or not.
3.	Verify sit navbar and carosol are visible or not.
4.	Verify Product Category and Products are visible or not.
5.	Verify all content of footer section are visible or not

*/

import test from "../TestFixture/fixture";

test.describe.serial("@smoke: verify the home page of the website", () => {
  test("Verify All the element of the home page", async ({ homePage }) => {
    await test.step("Open website and verify url and title", async () => {
      await homePage.open_url();
      await homePage.page_url_verification();
      await homePage.page_title_verification();
    });

    await test.step("Verify site Logo is visible & enable to click", async () => {
      await homePage.verify_site_logo_isvisible();
      await homePage.verify_site_logo_isEnable();
    });
    await test.step("Verify sit navbar and carosol are visible or not", async () => {
      await homePage.site_navbar_isvisible();
      await homePage.carosol_isvisible();
    });

    await test.step("Verify Product Category and Products are visible or not", async () => {
      await homePage.verify_category_list_isvisible();
      await homePage.verify_category_list_isEnable();
    });

    await test.step("Verify all content of footer section are visible or not", async () => {
      await homePage.footer_container_isVisible();
      await homePage.footer_about_us_isVisible();
      await homePage.footer_get_is_touch_isVisible();
      await homePage.footer_logo_isVisible();
    });
  });
});
