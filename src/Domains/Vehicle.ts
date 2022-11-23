import IVehicle from '../Interfaces/IVehicle';

export default class Vehicle {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean | undefined;
  protected buyValue: number;

  constructor(objVehicle: IVehicle) {
    this.id = objVehicle.id;
    this.model = objVehicle.model;
    this.year = objVehicle.year;
    this.color = objVehicle.color;
    this.status = objVehicle.status;
    this.buyValue = objVehicle.buyValue;
  }
}
