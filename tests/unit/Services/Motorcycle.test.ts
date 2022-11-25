import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import {
  Id,
  OneMotorcycleInput,
  OneMotorcycleOutput,
  ListOfMotorcyclesOutput,
  InvalidId,
  InexistentId,
  UpdateInput,
} from './Motorcycle.Mocks';
import Exception from '../../../src/Exception';

const validId = Id;
const invalidId = InvalidId;
const inexistentId = InexistentId;
const oneMotorcycleInput = OneMotorcycleInput;
const oneMotorcycleOutput = OneMotorcycleOutput;
const listOfMotorcyclesOutput = ListOfMotorcyclesOutput;
const updateInput = UpdateInput;
const EXCEPTION_INVALID_ID = 'Invalid mongo id';
const EXCEPTION_MOTORCYCLE_NOT_FOUND = 'Motorcycle not found';

describe('MotorcycleService', function () {
  describe('Testar a rota POST /Motorcycles', function () {
    it('Criar uma moto com SUCESSO', async function () {
      sinon.stub(Model, 'create').resolves(oneMotorcycleOutput);

      const service = new MotorcycleService();
      const result = await service.create(oneMotorcycleInput);

      expect(result).to.be.deep.equal(oneMotorcycleOutput);
    });
  });

  describe('Testar a rota GET /Motorcycles', function () {
    it('Listar todas as motos', async function () {
      sinon.stub(Model, 'find').resolves(listOfMotorcyclesOutput);
      
      const service = new MotorcycleService();
      const result = await service.getAll();

      expect(result).to.be.deep.equal(listOfMotorcyclesOutput);
    });
    it('Listar a moto que tiver o id fornecido', async function () {
      sinon.stub(Model, 'findById').resolves(oneMotorcycleOutput);
      
      const service = new MotorcycleService();
      const result = await service.getById(validId);

      expect(result).to.be.deep.equal(oneMotorcycleOutput);
    });
    it(
      'Retornar a mensagem "Invalid mongo id", caso o id fornecido seja inválido',
      async function () {
        sinon.stub(Model, 'findById').resolves(null);
        
        try {
          const service = new MotorcycleService();
          await service.getById(invalidId);
        } catch (error) {
          expect((error as Exception).message).to.be.equal(EXCEPTION_INVALID_ID);
          expect((error as Exception).status).to.be.equal(422);
        }
      },
    );
    it(
      'Retornar a mensagem "Motorcycle not found", caso o id fornecido seja inexistente',
      async function () {
        sinon.stub(Model, 'findById').resolves(null);
        
        try {
          const service = new MotorcycleService();
          await service.getById(inexistentId);
        } catch (error) {
          expect((error as Error).message).to.be.equal(EXCEPTION_MOTORCYCLE_NOT_FOUND);
          expect((error as Exception).status).to.be.equal(404);
        }
      },
    );
  });

  describe('Testar a rota PUT /Motorcycles/:id', function () {
    it('Atualizar a moto que tiver o id fornecido', async function () {
      sinon.stub(Model, 'findByIdAndUpdate').resolves(oneMotorcycleOutput);
        
      const service = new MotorcycleService();
      const result = await service.updateById(validId, updateInput);
  
      expect(result).to.be.deep.equal(oneMotorcycleOutput);
    });
    it(
      'Retornar a mensagem "Invalid mongo id", caso o id fornecido seja inválido',
      async function () {
        sinon.stub(Model, 'findByIdAndUpdate').resolves(null);
          
        try {
          const service = new MotorcycleService();
          await service.updateById(invalidId, updateInput);
        } catch (error) {
          expect((error as Exception).message).to.be.equal(EXCEPTION_INVALID_ID);
          expect((error as Exception).status).to.be.equal(422);
        }
      },
    );
    it(
      'Retornar a mensagem "Motorcycle not found", caso o id fornecido seja inexistente',
      async function () {
        sinon.stub(Model, 'findByIdAndUpdate').resolves(null);
          
        try {
          const service = new MotorcycleService();
          await service.updateById(inexistentId, updateInput);
        } catch (error) {
          expect((error as Error).message).to.be.equal(EXCEPTION_MOTORCYCLE_NOT_FOUND);
          expect((error as Exception).status).to.be.equal(404);
        }
      },
    );
  });
  
  afterEach(function () {
    sinon.restore();
  });
});
