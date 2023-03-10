const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const { productsMock, oneProduct } = require('../../mocks.product');
const productModel = require('../../../src/models/products.mdl');
const productService = require('../../../src/services/products.srvc');

describe("Testa productService", function () {
  afterEach(sinon.restore);

  it('should return a list of products', async function() {
    sinon.stub(connection, 'execute').resolves([productsMock]);
    const products = await productService.allProducts();
    expect(products).to.be.deep.equal(productsMock);
  });

  it('should return a product by id', async function () {
    sinon.stub(connection, 'execute').resolves([[oneProduct]]);
    const products = await productService.productsById(1);
    expect(products).to.be.deep.equal(oneProduct);
    // const response = await productServices.productsById(1);
    // expect(response).to.be.deep.equal(productsMock);
  });
  it('should return a message when the product is not found', async function () {
    sinon.stub(connection, 'execute').resolves([[]]);

    const response = await productService.productsById(1);
    expect(response).to.be.deep.equal({ message: 'Product not found' });
  });

  // it('Teste addProduct', async function() {
  //   sinon.stub(productModel, 'addProduct').resolves(1);
  //   const response = await productService.addProduct({ name: "ProdutoX" });
  //   expect(response).to.be.deep.equal(productsMock)
  // });
  // it('Teste productupdate', async function () {
  //   const update = { id: 1, name: "Martelo do Batman" };
  //   sinon.stub(productModel, 'productsById').resolves(update);
  //   sinon.stub(productModel, 'productUpdate').resolves({ id: 1, name: "Martelo do Batman" });
  //   const response = await productService.productUpdate(1, "Martelo do Batman");
  //   expect(response).to.be.deep.equal(update);
  // });

 // afterEach(sinon.restore);

});