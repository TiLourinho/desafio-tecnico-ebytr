const { expect } = require('chai');
const sinon = require('sinon');
const TaskService = require('../src/services/TaskService');
const TaskController = require('../src/controllers/TaskController');

describe('3 - TaskController layer', () => {
  describe('Tests if "create" function', () => {
    const request = {};
    const response = {};

    before(() => {
      request.body = {
        "text": "test"
      };
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(TaskService, 'create').resolves(request.body);
    });

    after(() => {
      TaskService.create.restore();
    });

    it('returns method "status" passing 201', async () => {
      await TaskController.create(request, response);
      expect(response.status.calledWith(201)).to.be.equal(true);
    });

    it('returns a "json" containing an object', async () => {
      await TaskController.create(request, response);
      expect(response.json.calledWith(sinon.match.object)).to.be.equal(true);
    });
  });

  describe('Tests if "getAll" function', () => {
    const request = {};
    const response = {};

    before(() => {
      request.body = [
        {
          "id": 1,
          "name": "test",
          "status": "test",
          "register_date": "test"
        }
      ];
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(TaskService, 'getAll').resolves(request.body);
    });

    after(() => {
      TaskService.getAll.restore();
    });

    it('returns method "status" passing 200', async () => {
      await TaskController.getAll(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('returns a "json" containing an array', async () => {
      await TaskController.getAll(request, response);
      expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
    });
  });

  describe('Tests if "remove" function', () => {
    const request = {};
    const response = {};

    before(() => {
      request.body = {
        "message": "test"
      }
      request.params = { id: 1 };
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(TaskService, 'remove').resolves();
    });

    after(() => {
      TaskService.remove.restore();
    });

    it('returns method "status" passing 204', async () => {
      await TaskController.remove(request, response);
      expect(response.status.calledWith(204)).to.be.equal(true);
    });

    it('returns a "json" containing an object', async () => {
      await TaskController.remove(request, response);
      expect(response.json.calledWith(sinon.match.object)).to.be.equal(true);
    });
  });

  describe('Tests if "updateText" function', () => {
    const request = {};
    const response = {};

    before(() => {
      request.body = {
        "text": "test"
      };
      request.params = { id: 1 };
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(TaskService, 'updateText').resolves(request.body);
    });

    after(() => {
      TaskService.updateText.restore();
    });

    it('returns method "status" passing 200', async () => {
      await TaskController.updateText(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('returns a "json" containing an object', async () => {
      await TaskController.updateText(request, response);
      expect(response.json.calledWith(sinon.match.object)).to.be.equal(true);
    });
  });

  describe('Tests if "updateStatus" function', () => {
    const request = {};
    const response = {};

    before(() => {
      request.body = {
        "status": "test"
      };
      request.params = { id: 1 };
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(TaskService, 'updateStatus').resolves(request.body);
    });

    after(() => {
      TaskService.updateStatus.restore();
    });

    it('returns method "status" passing 200', async () => {
      await TaskController.updateStatus(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('returns a "json" containing an object', async () => {
      await TaskController.updateStatus(request, response);
      expect(response.json.calledWith(sinon.match.object)).to.be.equal(true);
    });
  });
});