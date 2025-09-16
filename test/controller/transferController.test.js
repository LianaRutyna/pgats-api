const request = require('supertest');
const sinon = require('sinon');
const { expect } = require('chai');

//aplicacao
const app = require('../../app');
//mock
const transferService = require('../../service/transferService');

describe('Transfer Controller', () => {
       describe('POST /transfer', () => {
        it('Quando remetente e destinatario inexistente recebo 400', async () => {
            const res = await request(app)
                .post('/api/transfers')
                .send({
                    from: "Liana",
                    to: "Mara",
                    value: 100
                });
            
            expect(res.status).to.equal(400); 
            expect(res.body).to.have.property('error', 'Usuário remetente ou destinatário não encontrado');
        });  
        
        it('Usando mocks: Quando remetente e destinatario inexistente recebo 400', async () => {
            //mock função tranfer do service
            const transferServiceMock = sinon.stub(transferService, 'transfer');
            transferServiceMock.throws(new Error('Usuário remetente ou destinatário não encontrado'));

            const res = await request(app)
                .post('/api/transfers')
                .send({
                    from: "Liana",
                    to: "Mara",
                    value: 100
                });
            
            expect(res.status).to.equal(400); 
            expect(res.body).to.have.property('error', 'Usuário remetente ou destinatário não encontrado');

            //reset do mock
            sinon.restore();
        }); 

            it.only('Usando mocks: Quando informo valores validos eu tenho sucesso com 201 CREATED', async () => {
            //mock função tranfer do service
            const transferServiceMock = sinon.stub(transferService, 'transfer');
            transferServiceMock.returns({
                from: "Liana",
                to: "Mara",
                value: 100,
                date: new Date().toISOString()
            });

            const res = await request(app)
                .post('/api/transfers')
                .send({
                    from: "Liana",
                    to: "Mara",
                    value: 100
                });
            
            expect(res.status).to.equal(201); 
            
            //validaçao com fixture
            const respostaEsperada = require('../fixture/respostas/quandoInformoValoresValidosEuTenhoSucessoCom201.json')
            delete res.body.date;
            delete respostaEsperada.date;
            expect(res.body).to.deep.equal(respostaEsperada);
            
            //reset do mock
            sinon.restore();
        });
    });

    describe('GET /transfer', () => {
         it('should be implemented', () => {});
    });

});


