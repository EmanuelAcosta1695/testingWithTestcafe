# Proyecto de TestCafe
![Logo](https://codecept.io/img/testcafe.png)

## Descripción
Este es un proyecto base de TestCafe, una herramienta de automatización de pruebas end-to-end que permite realizar pruebas funcionales en aplicaciones web. TestCafe es una solución potente, fácil de usar y flexible que no requiere configuraciones complicadas ni extensiones del navegador.

## ¿Qué es TestCafe?
TestCafe es un framework de pruebas automatizadas que permite a los desarrolladores y equipos de QA crear y ejecutar pruebas funcionales de extremo a extremo para aplicaciones web. A diferencia de otras herramientas, TestCafe no depende de extensiones del navegador, lo que lo hace ideal para realizar pruebas en diferentes navegadores y plataformas.

## Características del Proyecto Base
Este proyecto base de TestCafe incluye:

Configuración básica para ejecutar pruebas en varios navegadores.
Ejemplo de prueba de muestra que interactúa con elementos de una página web.
Organización de pruebas en el directorio tests para una mejor estructura y escalabilidad.
Un README con instrucciones para configurar y ejecutar las pruebas en tu entorno local.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalados los siguientes programas en tu máquina:

- [Node.js](https://nodejs.org) (versión 12 o superior)
- [npm](https://nodejs.org) (versión 12 o superior)
- [Git](https://git-scm.com/)

## Instalación y Ejecución

Sigue estos pasos para configurar el proyecto localmente:

1. Clona el repositorio:

```bash
git clone https://github.com/anibal317/testCafeAutomationExample.git 
```
2. Moverte al directorio del repositorio clonado
```bash
cd testCafeAutomationExample
```
3. Instalar las dependencias necesarias para el proyecto
```bash
npm i
```

# Ejecución de pruebas
```bash
   npm run test
```
<br>

# Estructura del Proyecto y Page Object Model (POM)

## Page Object Model (POM)
El patrón Page Object Model (POM) es una técnica de diseño que ayuda a mantener una estructura organizada y sostenible para las pruebas automatizadas. En nuestro proyecto, cada página o componente de la aplicación tiene su propia clase dentro del directorio page_objects. Estas clases encapsulan los elementos de la página y las acciones que se pueden realizar en ella.

Por ejemplo, aquí hay un ejemplo simple de una clase LoginPage utilizando POM:

```javascript
import { Selector, t } from 'testcafe';

export default class LoginPage {
    constructor() {
        this.usernameInput = Selector('input#user-name');
        this.passwordInput = Selector('input#password');
        this.loginButton = Selector('#login-button');
    }

    async login(username, password) {
        await t.typeText(this.usernameInput, username)
               .typeText(this.passwordInput, password)
               .click(this.loginButton);
    }
}
```
## Estructura del Proyecto
El proyecto sigue una estructura organizada que facilita la gestión de las pruebas y su mantenimiento. A continuación, se detalla la estructura del proyecto:

```bash
.
├── pages
│   ├── LoginPage.js
│   ├── HomePage.js
│   └── ...
├── test
│    ├── login.test.js
│    └── ...
├── utils
│    └── testcafe-helpers.js
├── package.json
├── package-lock.json
└── README.md
```


# Documentacion oficial
Para obtener más información sobre TestCafe y cómo aprovechar todas sus capacidades, consulta la [documentación de TestCafé](https://testcafe.io/documentation)

