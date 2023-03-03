const chai = require("chai");
const sinon = require('sinon');
const sinonChai = require("sinon-chai");

const salesService = require('../../../src/services/sales.srvc');
const salesModel = require('../../../src/models/sales.mdl');
const { saleMock, saleIdMock } = require('../../mock/salesMock');

const { expect } = require('chai');
chai.use(sinonChai);

describe('Test salesService', function () {
  it('Test sale', async function () {
    sinon.stub(salesModel, 'sale').resolves(saleMock);
    const response = await salesService.allSales();
    expect(response).to.be.deep.equal(saleMock);
  });

  it('Test saleId', async function () {
    sinon.stub(salesModel, 'saleId').resolves({ salesById: 1, allSales: "a venda" });
    const response = await salesModel.salesById({ id: 1 });
    expect(response).to.be.deep.equal({ salesById: 1, allSales: "a venda" });
  });
});