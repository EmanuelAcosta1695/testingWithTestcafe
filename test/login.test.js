import { Selector } from 'testcafe';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';

fixture`Login`.page`https://www.saucedemo.com/`;

const loginPage = new LoginPage();
const homePage = new HomePage();

// Función de manejo de error
// async function handleErrors(testFunction) {
//   try {
//     await testFunction();
//   } catch (error) {
//     console.error('Se produjo un error:', error);
//   }
// }

// Prueba de inicio de sesión exitoso
test('Iniciar sesión exitosamente con user: standard_user', async (t) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await t.expect(await homePage.getWelcomeMessage()).eql('Swag Labs');
});

// // VER SI PUEDO AÑADIRLE UN CHEQUEO DE TIEMPO
// // Prueba de inicio de sesión exitoso con user: performance_glitch_user
// test('Iniciar sesión exitosamente con user: performance_glitch_user', async (t) => {
//     await loginPage.login('performance_glitch_user', 'secret_sauce');
//     await t.expect(await homePage.getWelcomeMessage()).eql('Swag Labs');
// });


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