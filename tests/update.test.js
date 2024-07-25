const { test, expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');

test('PUT /users/:id', async ({ request }) => {
    const updatedUser = {
        name: faker.person.firstName(),
        email: faker.internet.email(),
        phone: faker.phone.number()
    };
  
    const response = await request.put('https://jsonplaceholder.typicode.com/users/1', {
      data: updatedUser
    });
  
    expect(response.status()).toBe(200);
    const user = await response.json();
    expect(user.name).toBe(updatedUser.name);
    expect(user.email).toBe(updatedUser.email);
    expect(user.phone).toBe('1111111111');

        // console.log('Users', users);

  });
  