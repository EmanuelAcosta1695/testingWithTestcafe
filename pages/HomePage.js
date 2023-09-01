import { Selector, t } from 'testcafe';

export default class HomePage {
    constructor() {
        this.welcomeMessage = Selector('.app_logo');
        // Otros elementos y acciones de la página de inicio
    }

    async getWelcomeMessage() {
        return this.welcomeMessage.innerText;
    }
}
