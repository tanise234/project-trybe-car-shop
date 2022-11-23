import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  private carODM = new CarODM();

  constructor() {
    this.carODM = new CarODM();
  }

  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  } 

  public async create(car: ICar) {
    // if (await carService.getByValue(car.id)) {
    const newCar = await this.carODM.create(car);
    return this.createCarDomain(newCar);
    // }
    // throw new Error('Key not found');
  }
}
