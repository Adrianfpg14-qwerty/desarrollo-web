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
