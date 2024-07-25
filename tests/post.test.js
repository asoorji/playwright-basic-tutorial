const { test, expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');

test('POST /users', async ({ request }) => {
  const newUser = {
    name: faker.person.firstName(),
    email: faker.internet.email(),
    phone: faker.phone.number()
  };

  const response = await request.post('https://jsonplaceholder.typicode.com/users', {
    data: newUser
  });

  expect(response.status()).toBe(201);
  const user = await response.json();
  expect(user.name).toBe(newUser.name);

//   console.log('Post Users',user);
  
});



