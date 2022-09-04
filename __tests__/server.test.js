`use strict`;

const supertest = require('supertest');
const server = require('../server');
const request = supertest(server.app);

describe('server test', () => {
    it('page work', async () => {
        const res = await request.get('/');
        expect(res.status).toEqual(200);
        expect(res.text).toEqual('Hello World')
    })

    it('add person information', async () => {
        const res = await request.post("/person?name=qais&age=22&gender=male")
        expect(res.status).toEqual(201);
        expect(res.text).toEqual('27')
    })
})