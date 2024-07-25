const { test, expect } = require('@playwright/test');

test('DELETE /users/:id', async ({ request }) => {
    const response = await request.delete('https://jsonplaceholder.typicode.com/users/1');
    expect(response.status()).toBe(200);
  });
  