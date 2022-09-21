import express, { Application } from 'express';
import morgan from 'morgan';
import { Routes } from "../routes/index";

var cors = require("cors"); // install en node y types


export class App {
    public routePrv: Routes = new Routes();
    app: Application;

    constructor(
        private port?: number | string
    ) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    private settings() {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    private middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(express.json()); // leer json raw
        this.app.use(express.urlencoded({ extended: false })); //leer json form
    }

    routes() {
        this.routePrv.clienteRoutes.routes(this.app);
    }

   async listen() {
        await this.app.listen(this.app.get('port'));
        // await this.app.listen(this.port);
        // console.log('Server on port', this.port);
        // console.log('Server on port', this.app.get('port'));
        console.log('Levantado el servidor en el puerto', this.app.get('port'));
    }

}
