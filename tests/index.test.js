import request from 'supertest';
import server from '../index.js'; // Adjust the path as needed

describe('GET /', () => {
    it('responds with the content of home.html', async () => {
        const response = await request(server).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.text).toContain('<html>'); // Adjust this based on your actual HTML content
    });

    // Additional tests...
});
