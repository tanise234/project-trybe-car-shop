import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

export default class Motorcycle extends Vehicle {
  private category: 'Street' | 'Custom' | 'Trail';
  private engineCapacity: number;

  constructor(objMoto: IMotorcycle) {
    super(objMoto);
    this.category = objMoto.category;
    this.engineCapacity = objMoto.engineCapacity;
  }
}