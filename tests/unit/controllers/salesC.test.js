const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const salesController = require('../../../src/controllers/sales.cntrll');
const salesService = require('../../../src/services/sales.srvc');
const { salesMock, oneSale } = require("../../mocks.sales");

describe('Testa a camada controller para a função "allSales"', function () {
  it("Busca por todas os produtos cadastrados", async function () {
    const req = {};
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon
      .stub(salesService, "allSales")
      .resolves({ type: null, message: salesMock });

    await salesController.allSales(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(salesMock);
  });
});

// const { saleMock,
//     saleIdMock, } = require('../../mock/productMock');
  
//   describe('Test salesController', function () {
//     it('Test sale', async function () {
//       const req = {};
//       const res = {};
//       res.status = sinon.stub().returns(res);
//       res.json = sinon.stub().returns();
  
//       sinon.stub(salesService, "sale").resolves(saleMock);
//       await salesController.allSales(req, res);
//       expect(res.status).to.have.been.calledWith(200);
//       expect(res.json).to.have.been.calledWith(saleMock);
//     });
//     afterEach(sinon.restore)
// });