import BasePage from "./base_page";
import * as config from '../config';
import * as cart_page_loc from '../Locators/cart_page_locator';


class CartPage extends BasePage{
    constructor(page){
        super(page);
    }

    async verify_product_available_in_cart(){
        await this.waitForLocator(cart_page_loc.product_table)
        await this.isElementVisible(cart_page_loc.product_table,config.notVisibleText)

    }
}


export default CartPage;