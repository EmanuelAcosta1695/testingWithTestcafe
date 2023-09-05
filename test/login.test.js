import { Selector } from 'testcafe';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';

fixture`Login`.page`https://www.saucedemo.com/`;

const loginPage = new LoginPage();
const homePage = new HomePage();


// Prueba de inicio de sesión exitoso
test('Iniciar sesión exitosamente con user: standard_user', async (t) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await t.expect(await homePage.getWelcomeMessage()).eql('Swag Labs');
});


// VER SI PUEDO AÑADIRLE UN CHEQUEO DE TIEMPO
// Prueba de inicio de sesión exitoso con user: performance_glitch_user
test('Iniciar sesión exitosamente con user: performance_glitch_user', async (t) => {
    // Registra el tiempo de inicio
    const startTime = new Date();

    await loginPage.login("performance_glitch_user", "secret_sauce");

    // Registra el tiempo de finalización
    const endTime = new Date();

    // Calcula el tiempo transcurrido en milisegundos
    const elapsedTime = endTime - startTime;

    const maxAllowedTime = 2000; // Tiempo máximo permitido en milisegundos (en este caso, 2 segundos)

    if (elapsedTime > maxAllowedTime) {
        // aserción menor que
        await t.expect(elapsedTime).lt(maxAllowedTime)
    }
});



// muestra mal las imagenes en el inicio luego de logearse
// Prueba de inicio de sesión exitoso con user: problem_user
test('Iniciar sesión exitosamente con user: problem_user', async (t) => {
    await loginPage.login('problem_user', 'secret_sauce');
    await t.expect(await homePage.getWelcomeMessage()).eql('Swag Labs');
});


// ------------------------------------------------------
/* ERROR */


// Prueba de fallo de inicio de sesión con user: locked_out_user
// Usuario bloqueado
test('Fallo inicio de sesión con user: locked_out_user', async (t) => {
    await loginPage.login('locked_out_user', 'secret_sauce');

    await t.expect(await loginPage.checkErrorMessage()).eql('Epic sadface: Sorry, this user has been locked out.');
  
});


// Prueba de intento de inicio de sesión sin username
test('Intento de inicio de sesión sin username', async (t) => {

    await loginPage.login('', 'secret_sauce');

    await t.expect(await loginPage.checkErrorMessage()).eql('Epic sadface: Username is required');
});


// Prueba de intento de inicio de sesión sin password
test('Intento de inicio de sesión sin password', async (t) => {

    await loginPage.login('standard_user', '');

    await t.expect(await loginPage.checkErrorMessage()).eql('Epic sadface: Password is required');
});