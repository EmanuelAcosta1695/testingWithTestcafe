import { Selector, t } from 'testcafe';
import BuyFLow from '../pages/BuyFlow';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';

fixture`BuyFlow`.page`https://www.saucedemo.com/`;

const loginPage = new LoginPage();
const buyFlow = new BuyFLow();
const homePage = new HomePage();

test('Testear productos, carrito y menu desplegable.', async (t) => {
    // login
    await loginPage.login('standard_user', 'secret_sauce');

    // homepage message
    await t.expect(await homePage.getWelcomeMessage()).eql('Swag Labs');

    // add item to cart: "Sauce Labs Backpack"
    await buyFlow.click();

    // access to cart
    await buyFlow.cart();

    // check if the item that was added to the cart is there
    await buyFlow.cartList();

    // finish buying flow
    await buyFlow.buy('Esteban', 'Gonzalez', '8549');

    // tester successful purchase message
    await t.expect(await buyFlow.getCompleteMessage()).eql('Thank you for your order!');

    await buyFlow.logout();
});