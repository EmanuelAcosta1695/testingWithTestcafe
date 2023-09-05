import { Selector, t } from 'testcafe';

export default class LoginPage {
    constructor() {
        
        /* Cart */

        // button to add 'sauce labs backpack' to cart
        this.addItemToCart = Selector('#add-to-cart-sauce-labs-backpack');
       
        // cart
        this.shoppingCartContainer = Selector('#shopping_cart_container');

        // cart list
        this.cartList = Selector('.cart_list');


        /* Buying flow */

        // button continue shopping
        this.checkout = Selector('#checkout');

        this.firstName = Selector('input#first-name');
        this.lastName = Selector('input#last-name');
        this.postalCode = Selector('input#postal-code');

        this.continue = Selector('#continue');

        this.finish = Selector('#finish');

        this.completeMessage = Selector('.complete-header');

        this.backToProducts = Selector('#back-to-products');
        

        /* Log out */

        // dropdown menu
        this.burgerButton = Selector('#react-burger-menu-btn')

        // Selector para el elemento que contiene el enlace de Logout
        this.menuContainer = Selector('#menu_button_container');

        // button continue shopping
        //this.continueShopping = Selector('#continue-shopping');
    }


    async getCompleteMessage() {
        return this.completeMessage.innerText;
    }


    // add item to cart 
    async click() {
        await t.click(this.addItemToCart);
    }


    async cart() {
        // find <a> into <div> cart
        //const shoppingCartLink = shoppingCartContainer.find('a');

        // acces to cart
        await t.click(this.shoppingCartContainer);
    }


    async cartList() {
        // check if there are items in the cart
        await t.expect(cartList.exists).ok();

        // find element 'sauce labs backpack' in the cart
        const cartItem = cartList.find('[data-test="add-to-cart-sauce-labs-backpack"]');
        
        // check if the element 'sauce labs backpack' is in the cart
        await t.expect(cartItem.exists).ok();
    }


    async buy(firstName, lastName, postalCode) {
        
        await t.click(this.checkout);

        // introduce personal data
        await t.typeText(this.firstName, firstName);
        await t.typeText(this.lastName, lastName);
        await t.typeText(this.postalCode, postalCode);

        await t.click(this.continue);

        // finalize purchase
        await t.click(this.finish);
    }


    async logout() {
        // back to list of items
        await t.click(this.backToProducts);

        // Click the button that opens the menu
        await t.click(this.burgerButton);

        // Wait for the dropdown menu to fully open
        await t.wait(1000); // Wait for 2 seconds

        // Selector for the Logout link within the dropdown menu
        const logoutLink = Selector('#logout_sidebar_link');

        // Click the Logout link
        await t.click(logoutLink);
    }

}
