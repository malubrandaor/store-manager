const { expect } = require('chai');
const sinon = require('sinon');
const { productMock, productListMock, idProductMock, newProductMock, changeProductMock, deleteProductMock } = require('../../mock/productMock');
const productModel = require('../../../src/models/products.mdl');
const productService = require('../../../src/services/products.srvc');

describe("Testa productService", function () {

  it('test productbyid', async function() {
    sinon.stub(productModel, 'idProduct').resolves(idProductMock);
    const response = await productService.productsById(1);
    expect(response).to.be.deep.equal(idProductMock);
  });

  it('Teste addProduct', async function() {
    sinon.stub(productModel, 'newProduct').resolves(1);
    const response = await productService.addProduct({ name: "ProdutoX" });
    expect(response).to.be.deep.equal(newProductMock.product)
  });
  it('Teste productupdate', async function () {
    const update = { id: 1, name: "Martelo do Batman" };
    sinon.stub(productModel, 'idProduct').resolves(update);
    sinon.stub(productModel, 'changeProduct').resolves({ id: 1, name: "Martelo do Batman" });
    const response = await productService.productUpdate(1, "Martelo do Batman");
    expect(response).to.be.deep.equal(update);
  });

  afterEach(sinon.restore)

});