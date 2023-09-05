import { Selector, t } from 'testcafe';

export default class LoginPage {
    constructor() {
        this.usernameInput = Selector('input#user-name');
        this.passwordInput = Selector('input#password');
        this.loginButton = Selector('#login-button');

        this.errorMessageBox = Selector('h3[data-test="error"]');
    }

    async login(username, password) {

        // Los if estan para poder hacer la pruebas de no username o password
        // testcafe no acepta empty string entonces cuando intente ingresar los valores arrojara error
        if (username !== null && username !== undefined && username !== '') {
            await t.typeText(this.usernameInput, username);
          }
        
        if (password !== null && password !== undefined && password !== '') {
            await t.typeText(this.passwordInput, password);
          }
        
        await t.click(this.loginButton);

    }

    // mensaje de error en logeo de users
    async checkErrorMessage() {
        console.log(this.errorMessageBox.innerText);
        return this.errorMessageBox.innerText;
    }
}
