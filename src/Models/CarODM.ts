import { Model, Schema, model, models, isValidObjectId } from 'mongoose';
import Exception from '../Exception';
import ICar from '../Interfaces/ICar';

export default class CarODM {
  private schema: Schema;
  private model: Model<ICar>;

  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, default: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    this.model = models.Car || model('Car', this.schema);
  }

  private validateId(id: string) {
    if (!isValidObjectId(id)) throw new Exception(422, 'Invalid mongo id');
  }

  public async create(car: ICar): Promise<ICar> {
    return this.model.create({ ...car });
  }

  public async getAll(): Promise<(ICar | null)[]> {
    return this.model.find();
  }

  public async getById(id: string): Promise<ICar | null> {
    this.validateId(id);
    return this.model.findById(id);
  }

  public async updateById(id: string, info: Partial<ICar>): Promise<ICar | null> {
    this.validateId(id);
    return this.model.findByIdAndUpdate({ _id: id }, { ...info }, { new: true });
  }
}