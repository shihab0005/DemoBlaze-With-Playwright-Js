import test from "../TestFixture/fixture";


test.describe.serial("Verify Successfully Delete Item From Cart",()=>{
    test("Successfully Delete Added Item in The Cart",async({homePage,loginpage,cartPage})=>{

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

          await test.step("Navigate To Cart Nav And verify Is there Any Product Already adder in the Cart Nav Or Not",async()=>{
            await homePage.click_cart_nav();
            await cartPage.verify_product_available_in_cart()

          })

    })
})