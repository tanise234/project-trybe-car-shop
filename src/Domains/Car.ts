import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

export default class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor(objCar: ICar) {
    super(objCar);
    this.doorsQty = objCar.doorsQty;
    this.seatsQty = objCar.seatsQty;
  }
}