const app = require('../src/app.js')
const request = require('supertest')

describe('POST /users', () => {
  describe('Given a username and password', () => {
    test('Should respond with 200 status code', async () => {
      const response = await request(app).post('/users').send({
        username: 'beta',
        password: 'password',
      })
      expect(response.statusCode).toBe(200)
    })

    test('Should specify JSON in the content type header', async () => {
      const response = await request(app).post('/users').send({
        username: 'beta',
        password: 'password',
      })
      expect(response.headers['content-type']).toEqual(expect.stringContaining('json'))
    })

    test('Response must has userId', async () => {
      const response = await request(app).post('/users').send({
        username: 'beta',
        password: 'password',
      })
      expect(response.body.userId).toBeDefined()
    })
  })
  describe('When username and password are missing', () => {
    test('Should respond with 401 status code', async () => {
      const reqBodyData = [{ username: 'beta' }, { password: 'password' }, {}]
      for (const reqBody of reqBodyData) {
        const response = await request(app).post('/users').send(reqBody)
        expect(response.statusCode).toBe(401)
      }
    })
  })
})
