import test from "../TestFixture/fixture";


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
            await homePage.verify_selected_itme_successfully_display();
            await signupPage.handleAlert();
            await homePage.click_add_to_cart_btn();
            await homePage.click_cart_nav();
          });

          await test.step("Back to the home page and select category Moitor and a monitor to the cart",async()=>{

            await homePage.click_monitor_category();
            await homePage.find_monitor_from_list();
            await homePage.verify_selected_itme_successfully_display();
            await signupPage.handleAlert();
            await homePage.click_add_to_cart_btn();
            await homePage.click_cart_nav();
          })

    })
})