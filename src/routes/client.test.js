const req = require('supertest');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const app = require('../app');

describe('client', () => {
  beforeEach(async () => {
    for (let collection in mongoose.connection.collections) {
      await mongoose.connection.collections[collection].deleteMany({});
    }
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  it('should GET a list of clients', async (done) => {
    const res = await req(app).get('/clients/all');

    expect(res.statusCode).toBe(200);
    done();
  });

  it("shouldn't GET a list of clients", async (done) => {
    const res = await req(app).get('/clients/all');

    expect(res.statusCode).toBe(500);
    done();
  });

  it('should signup a new client ', async (done) => {
    const client = {
      clientEmail: 'sara@test.com',
      name: 'Sara',
      lastname: 'Marín',
      password: '12345',
    };
    const res = await req(app).post('/clients/create').send(client);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');
    done();
  });

  it("shoudn't singup a new client if email already exist", async (done) => {
    const client = {
      clientEmail: 'sara@test.com',
      password: '12345',
      name: 'Sara',
      lastname: 'Marín',
    };
    await mongoose.models.Client.create(client);
    const res = await req(app).post('/clients/create').send(client);

    expect(res.statusCode).toBe(400);
    expect(res.body.message).toMatch('El email ya existe');
    done();
  });

  it('should show a client by id ', async (done) => {
    const client = await mongoose.modelds.Client.create({
      clientEmail: 'sara@test.com',
      password: '12345',
      name: 'Sara',
      lastname: 'Marín',
    });
    const res = await req(app).post(`/clients/${client.body._id}`);

    expect(res.statusCode).toBe(200);
    done();
  });

  it('should update a client ', async (done) => {
    const client = await mongoose.modelds.Client.create({
      clientEmail: 'sara@test.com',
      password: '12345',
      name: 'Sara',
      lastname: 'Marín',
    });
    const res = await req(app).put(`/clients/${client.body._id}`);

    expect(res.statusCode).toBe(200);
    done();
  });

  it('should delete a client ', async (done) => {
    const client = await mongoose.modelds.Client.create({
      clientEmail: 'sara@test.com',
      password: '12345',
      name: 'Sara',
      lastname: 'Marín',
    });
    const res = await req(app).delete(`/clients/${client.body._id}`);

    expect(res.statusCode).toBe(200);
    done();
  });
});
