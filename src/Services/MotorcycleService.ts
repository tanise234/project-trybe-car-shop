import Motorcycle from '../Domains/Motorcycle';
import Exception from '../Exception';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

export default class MotorcycleService {
  private motorcycleODM = new MotorcycleODM();

  constructor() {
    this.motorcycleODM = new MotorcycleODM();
  }

  private createMotorcycleDomain(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }
    return null;
  } 

  public async create(motorcycle: IMotorcycle) {
    const newMotorcycle = await this.motorcycleODM.create(motorcycle);
    return this.createMotorcycleDomain(newMotorcycle);
  }

  public async getAll() {
    const motorcycles = await this.motorcycleODM.getAll();
    return motorcycles.map((motorcycle) => this.createMotorcycleDomain(motorcycle));
  }

  public async getById(id: string) {
    const motorcycle = await this.motorcycleODM.getById(id);
    if (!motorcycle) throw new Exception(404, 'Motorcycle not found');
    return this.createMotorcycleDomain(motorcycle);
  }

  public async updateById(id: string, info: Partial<IMotorcycle>) {
    const motorcycle = await this.motorcycleODM.updateById(id, info);
    if (!motorcycle) throw new Exception(404, 'Motorcycle not found');
    return this.createMotorcycleDomain(motorcycle);
  }
}
