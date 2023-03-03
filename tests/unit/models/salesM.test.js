const { expect } = require('chai');
const sinon = require('sinon');
const connections = require('../../../src/models/connection');
const salesModel = require('../../../src/models/sales.mdl');
const { saleMock, saleIdMock } = require('../../mock/salesMock');


describe('Teste Sales Model', function () {
  it('Test getAll', async function () {
    sinon.stub(connections, 'execute').resolves([saleMock]);
    const salesList = await salesModel.allSales();
    expect(salesList).to.be.deep.equal(saleMock);
  });

  it('Teste saleID', async function () {
    sinon.stub(connections, 'execute').resolves([saleIdMock[0]]);
    const salesIdList = await salesModel.salesById(1);
    expect(salesIdList).to.be.deep.equal(saleMock[0]);
  });

  afterEach(function () {
    sinon.restore();
  });
});