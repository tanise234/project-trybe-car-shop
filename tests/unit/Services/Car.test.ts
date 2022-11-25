import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import {
  Id,
  OneCarInput,
  OneCarOutput,
  ListOfCarsOutput,
  InvalidId,
  InexistentId,
  UpdateInput,
} from './Car.Mocks';
import Exception from '../../../src/Exception';

const validId = Id;
const invalidId = InvalidId;
const inexistentId = InexistentId;
const oneCarInput = OneCarInput;
const oneCarOutput = OneCarOutput;
const listOfCarsOutput = ListOfCarsOutput;
const updateInput = UpdateInput;
const EXCEPTION_INVALID_ID = 'Invalid mongo id';
const EXCEPTION_CAR_NOT_FOUND = 'Car not found';

describe('CarService', function () {
  describe('Testar a rota POST /cars', function () {
    it('Criar um carro com SUCESSO', async function () {
      sinon.stub(Model, 'create').resolves(oneCarOutput);

      const service = new CarService();
      const result = await service.create(oneCarInput);

      expect(result).to.be.deep.equal(oneCarOutput);
    });
  });

  describe('Testar a rota GET /cars', function () {
    it('Listar todos os carros', async function () {
      sinon.stub(Model, 'find').resolves(listOfCarsOutput);
      
      const service = new CarService();
      const result = await service.getAll();

      expect(result).to.be.deep.equal(listOfCarsOutput);
    });
    it('Listar o carro que tiver o id fornecido', async function () {
      sinon.stub(Model, 'findById').resolves(oneCarOutput);
      
      const service = new CarService();
      const result = await service.getById(validId);

      expect(result).to.be.deep.equal(oneCarOutput);
    });
    it(
      'Retornar a mensagem "Invalid mongo id", caso o id fornecido seja inválido',
      async function () {
        sinon.stub(Model, 'findById').resolves(null);
        
        try {
          const service = new CarService();
          await service.getById(invalidId);
        } catch (error) {
          expect((error as Exception).message).to.be.equal(EXCEPTION_INVALID_ID);
          expect((error as Exception).status).to.be.equal(422);
        }
      },
    );
    it(
      'Retornar a mensagem "Car not found", caso o id fornecido seja inexistente',
      async function () {
        sinon.stub(Model, 'findById').resolves(null);
        
        try {
          const service = new CarService();
          await service.getById(inexistentId);
        } catch (error) {
          expect((error as Error).message).to.be.equal(EXCEPTION_CAR_NOT_FOUND);
          expect((error as Exception).status).to.be.equal(404);
        }
      },
    );
  });

  describe('Testar a rota PUT /cars/:id', function () {
    it('Atualizar o carro que tiver o id fornecido', async function () {
      sinon.stub(Model, 'findByIdAndUpdate').resolves(oneCarOutput);
        
      const service = new CarService();
      const result = await service.updateById(validId, updateInput);
  
      expect(result).to.be.deep.equal(oneCarOutput);
    });
    it(
      'Retornar a mensagem "Invalid mongo id", caso o id fornecido seja inválido',
      async function () {
        sinon.stub(Model, 'findByIdAndUpdate').resolves(null);
          
        try {
          const service = new CarService();
          await service.updateById(invalidId, updateInput);
        } catch (error) {
          expect((error as Exception).message).to.be.equal(EXCEPTION_INVALID_ID);
          expect((error as Exception).status).to.be.equal(422);
        }
      },
    );
    it(
      'Retornar a mensagem "Car not found", caso o id fornecido seja inexistente',
      async function () {
        sinon.stub(Model, 'findByIdAndUpdate').resolves(null);
          
        try {
          const service = new CarService();
          await service.updateById(inexistentId, updateInput);
        } catch (error) {
          expect((error as Error).message).to.be.equal(EXCEPTION_CAR_NOT_FOUND);
          expect((error as Exception).status).to.be.equal(404);
        }
      },
    );
  });
  
  afterEach(function () {
    sinon.restore();
  });
});
