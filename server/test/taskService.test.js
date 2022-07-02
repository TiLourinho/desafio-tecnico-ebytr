const { expect } = require('chai');
const sinon = require('sinon');
const TaskModel = require('../src/models/TaskModel');
const TaskService = require('../src/services/TaskService');

describe('2 - TaskService layer', () => {
  describe('Tests if "create" function', () => {
    const data = {
      "text": "test",
    };

    before(() => {
      sinon.stub(TaskModel, 'create').resolves(data);
    });

    after(() => {
      TaskModel.create.restore();
    });

    it('returns an object', async () => {
      const result = await TaskService.create(data);
      expect(result).to.be.an('object');
    });

    it('returns an object that has the key "text"', async () => {
      const result = await TaskService.create(data);
      expect(result).to.have.all.keys('text');
    });
  });

  describe('Tests if "getAll" function', () => {
    const data = {
      "id": 1,
      "name": "test",
      "status": "test",
      "register_date": "test"
    };

    before(() => {
      sinon.stub(TaskModel, 'getAll').resolves(data);
    });

    after(() => {
      TaskModel.getAll.restore();
    });

    it('returns an object', async () => {
      const result = await TaskService.getAll(data);
      expect(result).to.be.an('object');
    });

    it('returns an object that has the keys "id", "name", "status", "register_date"', async () => {
      const result = await TaskModel.getAll(data);
      expect(result).to.have.all.keys('id', 'name', 'status', 'register_date');
    });
  });

  describe('Tests if "remove" function', () => {
    const data = {
      "id": 1
    };

    before(() => {
      sinon.stub(TaskModel, 'remove').returns(data);
    });

    after(() => {
      TaskModel.remove.restore();
    });

    it('returns an object', async () => {
      const result = await TaskService.remove(data);
      expect(result).to.be.an('object');
    });

    it('returns an object not empty', async () => {
      const result = await TaskService.remove(data);
      expect(result).to.be.not.empty;
    });
  });

  describe('Tests if "updateText" function', () => {
    const data = {
      "text": "test",
    };

    before(() => {
      sinon.stub(TaskModel, 'updateText').returns(data);
    });

    after(() => {
      TaskModel.updateText.restore();
    });

    it('returns an object', async () => {
      const result = await TaskService.updateText(data);
      expect(result).to.be.an('object');
    });

    it('returns an object that has the key "text"', async () => {
      const result = await TaskService.updateText(data);
      expect(result).to.have.all.keys('text');
    });
  });

  describe('Tests if "updateStatus" function', () => {
    const data = {
      "status": "test",
    };

    before(() => {
      sinon.stub(TaskModel, 'updateStatus').returns(data);
    });

    after(() => {
      TaskModel.updateStatus.restore();
    });

    it('returns an object', async () => {
      const result = await TaskService.updateStatus(data);
      expect(result).to.be.an('object');
    });

    it('returns an object that has the key "text"', async () => {
      const result = await TaskService.updateStatus(data);
      expect(result).to.have.all.keys('status');
    });
  });
});