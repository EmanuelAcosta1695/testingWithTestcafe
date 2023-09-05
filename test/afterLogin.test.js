import { Selector, t } from 'testcafe';
import BuyFLow from '../pages/BuyFlow';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';

// crear un flujo que se logee con el user bueno, 
// agrege elementos al carrito
// acceda al carrito
// testear que en el carrito esta el elemento agregado
// vuelva a seguir comprando
// acceda al menu desplegable
// hacer logout

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

    await buyFlow.logout();
});