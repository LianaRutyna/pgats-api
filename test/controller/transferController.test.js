const request = require('supertest');
const sinon = require('sinon');
const { expect } = require('chai');

const app = require('../../app');

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
    });

    describe('GET /transfer', () => {
        //its 
    });

});


