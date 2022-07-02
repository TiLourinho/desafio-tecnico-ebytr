const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../src/models/connection');
const TaskModel = require('../src/models/TaskModel');

describe('1 - TaskModel layer', () => {
  describe('Tests if "create" function', () => {
    const data = [
      {
        "text": "test",
      }
    ];

    before(() => {
      sinon.stub(connection, 'execute').resolves([data]);
    });

    after(() => {
      connection.execute.restore();
    });

    it('returns an object', async () => {
      const result = await TaskModel.create(data);
      expect(result).to.be.an('object');
    });

    it('returns an object that has the key "text"', async () => {
      const result = await TaskModel.create(data);
      expect(result).to.have.all.keys('text');
    });
  });

  describe('Tests if "getAll" function', () => {
    const data = [
      {
        "id": 1,
        "name": "test",
        "status": "test",
        "register_date": "test"
      }
    ];

    before(() => {
      sinon.stub(connection, 'execute').resolves([data]);
    });

    after(() => {
      connection.execute.restore();
    });

    it('returns an array', async () => {
      const result = await TaskModel.getAll(data);
      expect(result).to.be.an('array');
    });

    it('returns at least one object', async () => {
      const [result] = await TaskModel.getAll(data);
      expect(result).to.be.an('object');
    });

    it('returns an object that has the keys "id", "name", "status", "register_date"', async () => {
      const [result] = await TaskModel.getAll(data);
      expect(result).to.have.all.keys('id', 'name', 'status', 'register_date');
    });
  });

  describe('Tests if "remove" function', () => {
    const data = [
      {
        "id": 1
      }
    ];

    before(() => {
      sinon.stub(connection, 'execute').returns([data]);
    });

    after(() => {
      connection.execute.restore();
    });

    it('returns an object', async () => {
      const [result] = await TaskModel.remove(data);
      expect(result).to.be.an('object');
    });

    it('returns an object not empty', async () => {
      const result = await TaskModel.remove(data);
      expect(result).to.be.not.empty;
    });
  });

  describe('Tests if "updateText" function', () => {
    const data = [
      {
        "text": "test",
      }
    ];

    before(() => {
      sinon.stub(connection, 'execute').returns([data]);
    });

    after(() => {
      connection.execute.restore();
    });

    it('returns an object', async () => {
      const result = await TaskModel.updateText(data);
      expect(result).to.be.an('object');
    });

    it('returns an object that has the key "text"', async () => {
      const result = await TaskModel.updateText(data);
      expect(result).to.have.all.keys('text');
    });
  });

  describe('Tests if "updateStatus" function', () => {
    const data = [
      {
        "status": "test",
      }
    ];

    before(() => {
      sinon.stub(connection, 'execute').returns([data]);
    });

    after(() => {
      connection.execute.restore();
    });

    it('returns an object', async () => {
      const result = await TaskModel.updateStatus(data);
      expect(result).to.be.an('object');
    });

    it('returns an object that has the key "text"', async () => {
      const result = await TaskModel.updateStatus(data);
      expect(result).to.have.all.keys('status');
    });
  });
});