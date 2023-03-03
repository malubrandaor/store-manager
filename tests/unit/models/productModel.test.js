const chai = require('chai');
const sinon = require('sinon');

const { expect } = require('chai');

const connections = require('../../../src/models/connection');
const productModel = require('../../../src/models/products.mdl');
const { productsMock, oneProduct } = require('../../mocks.product');

describe("Testa Product Model", function () {
  afterEach(sinon.restore);

  it('Teste allProducts', async function ()  {
      sinon.stub(connections, 'execute').resolves([productsMock]);
      const getIdProduct = await productModel.allProducts();
      expect(getIdProduct).to.be.deep.equal(productsMock[0]);
    }); 
    it('Teste productsbyid', async function ()  {
      sinon.stub(connections, 'execute').resolves([oneProduct]);
      const getIdProduct = await productModel.productsById(1);
      expect(getIdProduct).to.be.deep.equal(oneProduct[0][1]);
    });
    // it("should return a message when the product is not found", async function () {
    //   sinon.stub(connections, "execute").resolves([[]]);
  
    //   const response = await productModel.productsById(1);
    //   expect(response).to.be.deep.equal(undefined);
    // });
  
    // it('Teste addprduct', async function () {
    //   sinon.stub(connections, 'execute').resolves({ newId: 1 });
    //   const insertProducts = await productModel.addProduct(productsMock.name);
    //   expect(insertProducts).to.be.deep.equal({ newId: 1 });
    // });
  
    // it('Teste updateproduct', async function () {
    //   sinon.stub(connections, 'execute').resolves([oneProduct])
    //   const result = await productModel.productUpdate(1, "Martelo do Batman");
    //   expect(result).to.be.deep.equal(oneProduct);
    // });
  
  
    // afterEach(function () {
    //   sinon.restore();
    // });
  });