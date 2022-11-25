import Car from '../Domains/Car';
import Exception from '../Exception';
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
    const newCar = await this.carODM.create(car);
    return this.createCarDomain(newCar);
  }

  public async getAll() {
    const cars = await this.carODM.getAll();
    return cars.map((car) => this.createCarDomain(car));
  }

  public async getById(id: string) {
    const car = await this.carODM.getById(id);
    if (!car) throw new Exception(404, 'Car not found');
    return this.createCarDomain(car);
  }

  public async updateById(id: string, info: Partial<ICar>) {
    const car = await this.carODM.updateById(id, info);
    if (!car) throw new Exception(404, 'Car not found');
    return this.createCarDomain(car);
  }
}
