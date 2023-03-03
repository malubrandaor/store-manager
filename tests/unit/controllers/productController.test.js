const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const productController = require('../../../src/controllers/products.cntrll');
const productService = require('../../../src/services/products.srvc');
const { productsMock, oneProduct } = require('../../mocks.product');

  describe('Testa a camada controller para a rota "/products', function () {
    afterEach(sinon.restore);
  
      it("Busca por todas os produtos cadastrados", async function () {
        const req = {};
        const res = {};
  
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();
  
        sinon
          .stub(productService, "allProducts")
          .resolves(productsMock);
  
        await productController.allProducts(req, res);
  
        expect(res.status).to.have.been.calledWith(200);
        expect(res.json).to.have.been.calledWith(productsMock);
      });
  
      it("Busca por um produto pelo ID valido", async function () {
        const req = {
          params: {
            id: "1",
          },
        };
        const res = {};
  
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();
  
        sinon.stub(productService, "productsById").resolves(oneProduct);
        await productController.productsById(req, res);
  
        expect(res.status).to.have.been.calledWith(200);
        expect(res.status().json).to.have.been.calledWith(oneProduct);
      });
  
      it("Busca por um produto pelo ID invalido", async function () {
        const req = {
          params: {
            id: 1000,
          },
        };
        const res = {};
  
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();
  
        sinon
          .stub(productService, "productsById")
          .resolves(!oneProduct);
        await productController.productsById(req, res);
  
        expect(res.status).to.have.been.calledWith(404);
        expect(res.status().json).to.have.been.calledWith({
          message: "Product not found",
        });
      });
  
    // describe('Testa a camada controller para a função "productUpdate"', function () {
    //   it("Faz o update de um produto pelo id", async function () {
    //     const req = { params: { id: 1 }, body: { name: "jabuticaba saborosa" } };
    //     const res = {};
  
    //     res.status = sinon.stub().returns(res);
    //     res.json = sinon.stub().returns();
  
    //     sinon
    //       .stub(productService, "productUpdate")
    //       .resolves({ type: null, message: 1 });
  
    //     await productController.productUpdate(req, res);
  
    //     expect(res.status).to.have.been.calledWith(200);
    //     expect(res.json).to.have.been.calledWith(1);
    //   });
  
    //   it("Testa fazer o update de um produto de id inexistente", async function () {
    //     const req = { params: { id: 89 } };
    //     const res = {};
  
    //     res.status = sinon.stub().returns(res);
    //     res.json = sinon.stub().returns();
  
    //     sinon
    //       .stub(productService, "productUpdate")
    //       .resolves({ type: 404, message: "Product not found" });
  
    //     await productController.productUpdate(req, res);
  
    //     expect(res.status).to.have.been.calledWith(404);
    //     expect(res.json).to.have.been.calledWith({
    //       message: "Product not found",
    //     });
    //   });
    // });
    // describe('Testa a camada controller para a função "addProduct"', function () {
    //   it("Insere um produto com sucesso", async function () {
    //     const expectedProduct = {
    //       name: "ProdutoX",
    //     };
    //     const stubInsert = sinon.stub(productsModel, "addProduct");
  
    //     const req = { body: expectedProduct };
    //     const res = {
    //       status: sinon.stub().returnsThis(),
    //       json: sinon.stub(),
    //     };
    //     await productController.addProduct(req, res);
    //     expect(stubInsert).to.have.been.calledOnceWithExactly(expectedProduct);
    //     expect(res.status).to.have.been.calledOnceWithExactly(201);
    //   });
    //       it("Insere um produto com id invalido", async function () {
    //     const expectedProduct = {
    //       name: "ProdutoX",
    //     };
  
    //     sinon
    //       .stub(productService, "addProduct")
    //       .resolves({ type: 404, message: "Product not found" });
  
    //     const req = { body: expectedProduct };
    //     const res = {
    //       status: sinon.stub().returnsThis(),
    //       json: sinon.stub(),
    //     };
    //     await productController.addProduct(req, res);
    //     expect(res.status).to.have.been.calledWith(404);
    //   });
    // });
  });