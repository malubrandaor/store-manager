const chai = require("chai");
const sinon = require('sinon');
const sinonChai = require("sinon-chai");

const connections = require('../../../src/models/connection')
const salesService = require('../../../src/services/sales.srvc');
const salesModel = require('../../../src/models/sales.mdl');
const { salesMock, oneSale } = require('../../mocks.sales');

const { expect } = require('chai');
chai.use(sinonChai);

describe('Test salesService', function () {
  afterEach(sinon.restore);

  it('Test allSales', async function () {
    sinon.stub(salesModel, 'allSales').resolves(salesMock);
    const response = await salesService.allSales();
    expect(response).to.be.deep.equal(salesMock);
  });

  it('Test salesById', async function () {
    sinon.stub(salesModel, 'salesById').resolves({ salesById: 1, allSales: "a venda" });
    const response = await salesModel.salesById({ id: 1 });
    expect(response).to.be.deep.equal({ salesById: 1, allSales: "a venda" });
  });

  it("should return a message when the sale is not found", async function () {
    sinon.stub(connections, "execute").resolves([[]]);

    const response = await salesService.salesById(1);
    expect(response).to.be.deep.equal({ status: 404, message: "Sale not found" });
  });
});