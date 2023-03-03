const chai = require("chai");
const sinon = require('sinon');
const sinonChai = require("sinon-chai");

const salesService = require('../../../src/services/sales.srvc');
const salesModel = require('../../../src/models/sales.mdl');
const { salesMock, oneSale } = require('../../mocks.sales');

const { expect } = require('chai');
chai.use(sinonChai);

describe('Test salesService', function () {
  afterEach(sinon.restore);
  
  it('Test sale', async function () {
    sinon.stub(salesModel, 'sale').resolves(salesMock);
    const response = await salesService.allSales();
    expect(response).to.be.deep.equal(salesMock);
  });

  it('Test saleId', async function () {
    sinon.stub(salesModel, 'saleId').resolves({ salesById: 1, allSales: "a venda" });
    const response = await salesModel.salesById({ id: 1 });
    expect(response).to.be.deep.equal({ salesById: 1, allSales: "a venda" });
  });

  it("should return a message when the sale is not found", async function () {
    sinon.stub(connection, "execute").resolves([[]]);

    const response = await salesService.salesById(1);
    expect(response).to.be.deep.equal({
      status: 404,
      message: "Sale not found",
    });
  });
});