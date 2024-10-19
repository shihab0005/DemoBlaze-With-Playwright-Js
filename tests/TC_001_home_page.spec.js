/* Scenario 1: 
Login as a standard user to verify the products page and logout from the application

Scenario Description: 
User logs into the website and verifies all the elements on the products page and logs out from the application. 
This is like a Smoke test.

Test Steps:
1.	User is on the Login Page
2.	Verify the Logo, title, url, username, password fields, login button, login and password credentials on the login page
3.	Login as a standard user
4.	User is on the Landing/Products page. Verify the Landing page logo and URL
5.	Verify the PRODUCTS title and peek image visible on the home page
6.	Verify all the options Burger menu item, ALL ITEMS; ABOUT; LOGOUT AND RESET APP STATE are visible on inventory sidebar links on left side of the page
7.	Verify the shopping cart icon and product sort container visible on the top right of the page
8.	Verify the Inventory Product item list is visible
9.	Verify the footer text and swag bot footer is visible
10.	Click on “About” navbar link from the “inventory sidebar panel” and check whether user is navigated to saucelabs page
11.	Verify the Facebook logo visible 
12.	Click on Facebook social link and verify user is navigated to Facebook page
13.	User logout from the application and verify the login page
*/

import test from "../TestFixture/fixture";

test.describe.serial("@smoke: verify the home page of the website", () => {
  test("Verify All the element of the home page", async ({ homePage }) => {
    await test.step("Verify open website and check url and title", async () => {
      await homePage.open_url();
      await homePage.page_url_verification();
      await homePage.page_title_verification();
    });

    await test.step("Verify site Logo is visible & enable to click", async () => {
      await homePage.verify_site_logo_isvisible();
      await homePage.verify_site_logo_isEnable();
    });
  });
});
