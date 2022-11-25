import Motorcycle from '../../../src/Domains/Motorcycle';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';

const Id = '6348513f34c397abcad040b2';
const InvalidId = 'invalid_id';
const InexistentId = '111111222222333333444444';

const OneMotorcycleInput: IMotorcycle = {
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};
const OneMotorcycleOutput: IMotorcycle = {
  id: '6348513f34c397abcad040b2',
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};
const ListOfMotorcyclesOutput: Motorcycle[] = [
  {
    id: '634852326b35b59438fbea2f',
    model: 'Honda Cb 1500f Hornet',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  },
  {
    id: '634852326b35b59438fbea31',
    model: 'Honda Cbr 1000rr',
    year: 2011,
    color: 'Orange',
    status: true,
    buyValue: 59.900,
    category: 'Street',
    engineCapacity: 1000,
  },
].map((motorcycle) => new Motorcycle(motorcycle as IMotorcycle));
  
const UpdateInput = {
  model: 'Marea',
  year: 1992,
  color: 'Red',
  status: true,
  buyValue: 12.000,
  doorsQty: 2,
  seatsQty: 5,
};

export { 
  Id,
  InvalidId,
  InexistentId,
  OneMotorcycleInput,
  OneMotorcycleOutput,
  ListOfMotorcyclesOutput,
  UpdateInput,
};