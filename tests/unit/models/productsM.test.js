const chai = require('chai');
const sinon = require('sinon');

const { expect } = require('chai');

const connections = require('../../../src/models/connection');
const productModel = require('../../../src/models/products.mdl');
const { productMock, idProductMock, changeProductMock, } = require('../../mock/productMock');

describe("Testa Product Model", function () {
   
    it('Teste productsbyid', async function ()  {
      sinon.stub(connections, 'execute').resolves(productMock);
      const getIdProduct = await productModel.productsById(1);
      expect(getIdProduct).to.be.deep.equal(idProductMock);
    });
  
    it('Teste addprduct', async function () {
      sinon.stub(connections, 'execute').resolves([{ newId: 1 }]);
      const insertProducts = await productModel.addProduct("ProdutoX");
      expect(insertProducts).to.be.deep.equal(1);
    });
  
    it('Teste updateproduct', async function () {
      sinon.stub(connections, 'execute').resolves([[changeProductMock]])
      const result = await productModel.productUpdate(1, "Martelo do Batman");
      expect(result).to.be.deep.equal(changeProductMock);
    });
  
  
    afterEach(function () {
      sinon.restore();
    });
  });