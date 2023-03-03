const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const productController = require('../../../src/controllers/products.cntrll');
const productService = require('../../../src/services/products.srvc');
const { productsMock, oneProduct } = require("../../mocks.product");
// const productModel = require('../../../src/models/products.mdl');
// const { productMock,
//     productsListMock,
//     idProductMock,
//     newProductMock,
//     changeProductMock,
//      } = require('../../mock/productMock');

  //   describe('Teste productController', function () {
  //       it('Teste getAll', async function () {
  //         const req = {};
  //         const res = {};
  //         res.status = sinon.stub().returns(res);
  //         res.json = sinon.stub().returns();
  //         sinon.stub(productService, 'allProducts').resolves(productsListMock);
  //         await productController.allProducts(req, res);
  //         expect(res.status).to.have.been.calledWith(200);
  //         expect(res.json).to.have.been.calledWith(productsListMock);
  //       });
  //       afterEach(sinon.restore)
  // });
  describe('Testa a camada controller para a rota "/products', function () {
    afterEach(function () {
      sinon.restore();
    });
  
    describe('Testa a camada controller para a função "getAllProducts"', function () {
      it("Busca por todas os produtos cadastrados", async function () {
        const req = {};
        const res = {};
  
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();
  
        sinon
          .stub(productService, "allProducts")
          .resolves({ type: null, message: productsMock });
  
        await productController.allProducts(req, res);
  
        expect(res.status).to.have.been.calledWith(200);
        expect(res.json).to.have.been.calledWith(productsMock);
      });
    });
  
    describe('Testa a camada controller para a função "productsById"', function () {
      it("Busca por um produto pelo ID valido", async function () {
        const req = {
          params: {
            id: "1",
          },
        };
        const res = {};
  
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();
  
        sinon.stub(productService, "productsById").resolves({
          type: null,
          message: oneProduct,
        });
        await productController.productsById(req, res);
  
        expect(res.status).to.have.been.calledWith(200);
        expect(res.status().json).to.have.been.calledWith(oneProduct);
      });
  
      it("Busca por um produto pelo ID invalido", async function () {
        const req = {
          params: {
            id: "1500",
          },
        };
        const res = {};
  
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();
  
        sinon
          .stub(productService, "productsById")
          .resolves({ type: 404, message: "Product not found" });
        await productController.productsById(req, res);
  
        expect(res.status).to.have.been.calledWith(404);
        expect(res.status().json).to.have.been.calledWith({
          message: "Product not found",
        });
      });
    });
  
    describe('Testa a camada controller para a função "productUpdate"', function () {
      it("Faz o update de um produto pelo id", async function () {
        const req = { params: { id: 1 }, body: { name: "jabuticaba saborosa" } };
        const res = {};
  
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();
  
        sinon
          .stub(productService, "productUpdate")
          .resolves({ type: null, message: 1 });
  
        await productController.productUpdate(req, res);
  
        expect(res.status).to.have.been.calledWith(200);
        expect(res.json).to.have.been.calledWith(1);
      });
  
      it("Testa fazer o update de um produto de id inexistente", async function () {
        const req = { params: { id: 77 } };
        const res = {};
  
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();
  
        sinon
          .stub(productService, "productUpdate")
          .resolves({ type: 404, message: "Product not found" });
  
        await productController.productUpdate(req, res);
  
        expect(res.status).to.have.been.calledWith(404);
        expect(res.json).to.have.been.calledWith({
          message: "Product not found",
        });
      });
    });
    describe('Testa a camada controller para a função "addProduct"', function () {
      it("Insere um produto com sucesso", async function () {
        const expectedProduct = {
          name: "ProdutoX",
        };
        const stubInsert = sinon.stub(productsModel, "addProduct");
  
        const req = { body: expectedProduct };
        const res = {
          status: sinon.stub().returnsThis(),
          json: sinon.stub(),
        };
        await productController.addProduct(req, res);
        expect(stubInsert).to.have.been.calledOnceWithExactly(expectedProduct);
        expect(res.status).to.have.been.calledOnceWithExactly(201);
      });
          it("Insere um produto com id invalido", async function () {
        const expectedProduct = {
          name: "ProdutoX",
        };
  
        sinon
          .stub(productService, "addProduct")
          .resolves({ type: 404, message: "Product not found" });
  
        const req = { body: expectedProduct };
        const res = {
          status: sinon.stub().returnsThis(),
          json: sinon.stub(),
        };
        await productController.addProduct(req, res);
        expect(res.status).to.have.been.calledWith(404);
      });
    });
  });