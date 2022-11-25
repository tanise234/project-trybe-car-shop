import Car from '../../../src/Domains/Car';
import ICar from '../../../src/Interfaces/ICar';

const Id = '6348513f34c397abcad040b2';
const InvalidId = 'invalid_id';
const InexistentId = '111111222222333333444444';

const OneCarInput: ICar = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};
const OneCarOutput: ICar = {
  id: '6348513f34c397abcad040b2',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};
const ListOfCarsOutput: Car[] = [
  {
    id: '634852326b35b59438fbea2f',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.99,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '634852326b35b59438fbea31',
    model: 'Tempra',
    year: 1995,
    color: 'Black',
    buyValue: 39,
    doorsQty: 2,
    seatsQty: 5,
  },
].map((car) => new Car(car));
  
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
  OneCarInput,
  OneCarOutput,
  ListOfCarsOutput,
  UpdateInput,
};