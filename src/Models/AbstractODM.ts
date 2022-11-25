import { Model, Schema, model, models, isValidObjectId } from 'mongoose';
import Exception from '../Exception';

export default class AbstractODM<I> {
  protected schema: Schema;
  protected model: Model<I>;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  private validateId(id: string): void {
    if (!isValidObjectId(id)) throw new Exception(422, 'Invalid mongo id');
  }

  public async create(vehicle: I): Promise<I> {
    return this.model.create({ ...vehicle });
  }

  public async getAll(): Promise<(I | null)[]> {
    return this.model.find();
  }

  public async getById(id: string): Promise<I | null> {
    this.validateId(id);
    return this.model.findById(id);
  }

  public async updateById(id: string, info: Partial<I>): Promise<I | null> {
    this.validateId(id);
    return this.model.findByIdAndUpdate({ _id: id }, { ...info }, { new: true });
  }
}