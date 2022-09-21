# NodeJS

## Requisitos Previos
* Install Windows Subsystem for Linux
* Set up Visual Studio Code
* Node Js

## Crear un proyecto
```ts
mkdir sitealmacen
cd sitealmacen

npm init -y                 (Con esto se crea el archivo package.json, donde se alojan las diferentes extensiones y librarías del proyecto)
npm i –D typescript         (Instalar typescript dentro del proyecto [-g Global | -D Desarrollo, osease localmente])

npx tsc -init               (Ahora crear el archivo tsconfig.json)

En el archivo tsconfig.json, cambiar
    "target": "es2016", 
    "outDir": "./dist",


Crear paquete express para Node y Para TypeScript (Instalando [libreria-framework] express, permite hacer las peticiones cliente servidor. Se instala uno para el Node y a la vez Node pero para typescript)
(-D es para Desarrollo, al desplegar todo esto de ver las peticiones en la terminal no funcionará)
    npm i express
    npm i -D @types/express


Crear los archivos 
    src/config/index.ts

        import express, { Application } from 'express';

        export class App {
            app: Application;

            constructor(
                private port?: number | string
            ) {
                this.app = express();
                this.settings();
            }

            private settings() {
                this.app.set('port', this.port || process.env.PORT || 3000);
            }

        async listen() {
                await this.app.listen(this.app.get('port'));
                // await this.app.listen(this.port);
                // console.log('Server on port', this.port);
                console.log('Server on port', this.app.get('port'));
            }

        }



    src/server.ts

        import { App } from './config/index';

        async function main() {
            const app = new App(4000);
            await app.listen();
        }

        main();


Luego, ejecutamos con
    npx tsc
    npx tsc -w              (Para que se guarde siempre solo)
    node dist/server.js

El inconveniente hasta este punto, radica que cada cambio que hagamos debemos ejecutar reirerativamente estos dos comandos
Para evitar esto y que al guardar automáticamente compile y genera los javascript correspondientes utilizamos la librería Nodemon, así.
    npm i -D nodemon
    npm i ts-node

Y se configura en package.json      (Puedes borrar )
    "scripts": {
        "build": "tsc",
        "dev": "nodemon src/server.ts --exec ts-node"
    },

Y se ejecuta con            (Ya no usaremos los comandos de arriba)
    npm run dev


Si nos dirigimos al navegador y en la URL, colocamos
    localhost:4000
    
Nos muestra lo siguiente:
    Cannot GET /

Esto nos indica que ya está escuchando peticiones, si detienes con (Ctrl-C) 
Ya está escuchando el puerto 4000, para las diferentes peticiones.
Luego, se instala el paquete Morgan para ver las peticiones en pantalla para que nos muestre en el terminal
    npm i morgan
    npm i @types/morgan

Seguidamente, se configura en el archivo src/config/index.ts
donde se importa la librería morgan, se llama el método dentro del constructor:

    this.middlewares()
    
 y se crea el método respectivo
    
    private middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(express.json()); // leer json raw
        this.app.use(express.urlencoded({ extended: false })); //leer json form
    }


MODULOS:
CREAR BASE DE DATOS
Update your Ubuntu packages: 
    sudo apt update

Once the packages have updated, install MySQL with: 
    sudo apt install mysql-server

Confirm installation and get the version number: 
    mysql --version

PARA EL FUTURO (No funciona la contraseña del 1 al 8)
    You may also want to run the included security script. This changes some of the less secure default options for things like remote root logins and sample users. To run the security script:

    Start a MySQL server: 
        sudo /etc/init.d/mysql start
    
    Start the security script prompts: 
        sudo mysql_secure_installation
    
    The first prompt will ask whether you’d like to set up the Validate Password Plugin, which can be used to test the strength of your MySQL password. You will then set a password for the MySQL root user, decide whether or not to remove anonymous users, decide whether to allow the root user to login both locally and remotely, decide whether to remove the test database, and, lastly, decide whether to reload the privilege tables immediately.
    To open the MySQL prompt, enter: 
        sudo mysql

    More info on (https://askubuntu.com/questions/1312977/logging-in-mysql-as-root-works-only-on-sudo)

Start a MySQL server: 
    sudo /etc/init.d/mysql start

Si aparece este mensaje * Starting MySQL database server mysqld *  quiere decir que ya esta inicializado.
    
ABRIR MYSQL
    sudo mysql -u root -p
    show databases; Para mostrar las bases de datos que tiene creadas
    create database almacen2022_mysql_nodejs;
        Debe aparecer en pantalla, para indicar que ha sido creada.
            Query OK, 1 row affected (0.01 sec)


Una vez creada la base de datos físicamente y haber levantado el servidor, procedemos a los modelos

Crear archivo 
    src/database/db.ts

    const Sequelize = require('sequelize');

    const DB_NAME = 'almacen2022_mysql_nodejs';

    const DB_USER = 'root';

    const DB_PASS = 'MiNiCo57**';



    export const database = new Sequelize(
        DB_NAME,
        DB_USER,
        DB_PASS,

        {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306
        }

    );


    async function generateDb() {
        await database.sync({ force: true })
        console.log('Base de datos y tablas creada');
    }

    generateDb();



Instalación paquetes
    npm i sequelize mysql2 @types/sequelize
```

## MODELO CLIENTE
Seguidamente, se procede a crear los modelos.
Nota: Se recomienda iniciar por aquellos modelos que no tengan llaves foráneas.

Por cada modelo crear: controlador, ruta, definir el en config.

```ts
Crear el archivo con el nombre del Modelo en 
    src/models/Cliente.ts

import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Cliente extends Model {
  public nombreCliente!: string;
  public direccionCliente!: string;
  public telefonoCliente!: string;
  public correoCliente!: string;
  public passwordCliente!: string;

}

export interface ClienteI {
    nombreCliente: string;
    direccionCliente: string;
    telefonoCliente: string;
    correoCliente: string;
    passwordCliente: string;
}

Cliente.init(
  {
    nombreCliente: {
        type: DataTypes.STRING,
        allowNull: false
      },
    direccionCliente: {
        type: DataTypes.STRING,
        allowNull: false
      },
    telefonoCliente: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
    correoCliente: {
        type: DataTypes.STRING,
        allowNull: false
      },
    passwordCliente: {
        type: DataTypes.STRING,
        allowNull: false
      } 
  },
  {
    tableName: "clientes",
    sequelize: database,
    timestamps: true
  }
);

```


## Controlador Cliente
```ts
Crear el archivo 
    src/controllers/cliente.controller.ts

    import {  Request, Response } from 'express';
    import { where } from 'sequelize/types';

    import { Cliente, ClienteI } from '../models/Cliente';

    export class ClienteController {


        public async test(req: Request, res:Response){
            try {
                res.send('hola, metodo test para Cliente')
            } catch (error) {

            }
        }

        public async getAllCliente(req: Request, res:Response){
            try {
                const cliente: ClienteI[] = await Cliente.findAll(
                    {
                        where: {activo: true}
                    }
                ) // select * from clientes;
                res.status(200).json({cliente})
            } catch (error) {

            }
        }
    }
```


## Rutas de Cliente
```ts
Crear el archivo 
    src/routes/cliente.ts

    import { Request, Response, Application, Router } from "express";

    import { ClienteController } from '../controllers/cliente.controller';

    export class UsuarioRoutes {
        public clienteController: ClienteController =  new ClienteController();

        public routes(app: Application): void {
            app.route("/clientes/test").get(this.clienteController.test)
            app.route("/clientes").get(this.clienteController.getAllCliente)
        }
    }


Luego indexamos esta rutas en
En caso que no exista, crear el archivo 
    src/routes/index.ts

    import { ClienteRoutes } from './cliente';

    export class Routes {
        public clienteRoutes: ClienteRoutes = new ClienteRoutes();
    }
```


## Definir Cliente en Config
Primeramente debemos instalar el paquete de Cors para que pueda hacer peticiones desde el cliente
```ts
    npm i cors

Posteriormente, luego en el archivo 
    src/config/index.ts
    
    Importar
        import { Routes } from "../routes/index";
    
    Antes de la clase, debajo de importar
    var cors = require("cors"); // install en node y types

    Sobre app: Application;
        public routePrv: Routes = new Routes();

    En el constructor:
        this.routes();

    Antes del async
        private routes() {
            this.routePrv.clienteRoutes.routes(this.app);
        }


```