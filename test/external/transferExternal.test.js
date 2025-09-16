const request = require('supertest');
const { expect } = require('chai');



describe('Transfer Controller', () => {
   
    describe('POST /transfer', () => {
        it('Quando remetente e destinatario inexistente recebo 400 via http', async () => {
            const res = await request('http://localhost:3000')
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
});          