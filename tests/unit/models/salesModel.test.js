const { expect } = require('chai');
const sinon = require('sinon');
const connections = require('../../../src/models/connection');
const salesModel = require('../../../src/models/sales.mdl');
const { oneSale, salesMock } = require('../../mocks.sales');


describe('Teste Sales Model', function () {
  it('Test allSales', async function () {
    sinon.stub(connections, 'execute').resolves([salesMock]);
    const salesList = await salesModel.allSales();
    expect(salesList).to.be.deep.equal(salesMock);
  });

  it('Teste salesById', async function () {
    sinon.stub(connections, 'execute').resolves([salesMock]);
    const salesIdList = await salesModel.salesById(1);
    expect(salesIdList).to.be.deep.equal(salesMock);
  });

  afterEach(function () {
    sinon.restore();
  });
});