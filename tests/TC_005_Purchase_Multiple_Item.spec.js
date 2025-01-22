import test from "../TestFixture/fixture";
import * as config from "../config";

import * as home_page_loc from "../Locators/home_page_locator";

test.describe.serial("Successful Purchase Multiple Item",()=>{
    test("Successfully Purchase multiple item from different Category",async({
        homePage,
        loginpage,
        signupPage
    })=>{
        await test.step("Open website and Verify url and title", async()=>{
            await homePage.open_url();
            await homePage.page_url_verification();
            await homePage.page_title_verification();
        })

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
             await homePage.verify_selected_itme_successfully_display(
                      home_page_loc.item_title,
                      config.laptopItem);
             await signupPage.handleAlert();
             await homePage.click_add_to_cart_btn();
             await homePage.click_on_home_nav();
          });

          await test.step("Find and select Monitor from list",async()=>{

             await homePage.click_monitor_category();
             await homePage.find_monitor_from_list();
             await homePage.verify_selected_itme_successfully_display(
                home_page_loc.item_title,
                config.monitorItem);
            //await signupPage.handleAlert();
            await homePage.click_add_to_cart_btn();
            await homePage.click_cart_nav();
            await homePage.click_place_order_btn();
          })

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

    })
})