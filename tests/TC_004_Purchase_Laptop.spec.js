import test from "../TestFixture/fixture";

test.describe.serial("Successful laptop Purchase", () => {
  test("Purchase Laptop and verify Successfully Purchase", async ({
    loginpage,
    homePage,
    signupPage,
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

    await test.step("Verify Successfully item add to cart for order place", async () => {
      await homePage.verify_selected_itme_successfully_display();
      await signupPage.handleAlert();
      await homePage.click_add_to_cart_btn();
      await homePage.click_cart_nav();
      await homePage.click_place_order_btn();
    });

    await test.step("Verify Successfully confirm order by fillup form", async () => {
      await homePage.purchase_name();
      await homePage.purchase_country();
      await homePage.purchase_city();
      await homePage.purchase_credit_card();
      await homePage.purchase_month();
      await homePage.purchase_year();
      await homePage.click_purchase_btn();
    });

    await test.step("Verify Order is successfully confirmed", async () => {
      await homePage.verify_welcome_msg();
      await homePage.verify_card_number();
      await homePage.verify_customer_name();
      await homePage.click_on_ok_btn();
    });
  });
});
