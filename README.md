# API Rest de Usuários e Transferências

Esta API foi desenvolvida em Node.js/Express para fins de aprendizado de testes e automação de API. O banco de dados é em memória (variáveis). A documentação Swagger está disponível em `/api-docs` após iniciar o servidor.

## Instalação

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Inicie o servidor:
   ```bash
   node server.js
   ```

## Endpoints

- `POST /api/users/register` — Registro de usuário
- `POST /api/users/login` — Login de usuário
- `GET /api/users` — Consulta de usuários
- `POST /api/transfers` — Transferência de valores
- `GET /api-docs` — Documentação Swagger

## Regras de Negócio
- Não é permitido registrar usuários duplicados.
- Login e senha são obrigatórios para login.
- Transferências para destinatários não favorecidos só podem ser realizadas se o valor for menor que R$ 5.000,00.

## Estrutura do Projeto
- `controllers/` — Lógica das rotas
- `services/` — Regras de negócio e manipulação de dados
- `models/` — (Reservado para futuras implementações)

## Testes
Para testar a API, utilize ferramentas como Postman, Insomnia ou automação com Supertest.

---

Documentação completa dos endpoints disponível em `/api-docs`.
