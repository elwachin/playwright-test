// @ts-check
const { test, expect , chromium} = require('@playwright/test');

const username = 'alan.epanno@gmail.com';
const pass = '123456';

test.beforeEach(async ({ page }) => {
  await page.goto('https://m.apuestas.codere.es/deportes/index.htm#/HomePage');
  await expect(page).toHaveTitle(/Apuestas en Directo /);
  await expect(page.getByRole('button', { name: 'ACEPTAR' })).toBeVisible();
  await page.getByRole('button', { name: 'ACEPTAR' }).click({ force: true });

  await expect(page.getByText('Acceder')).toBeVisible();

  await page.getByText('Acceder').click({ force: true });
});


test('Should open login modal and insert username and password and validate it', async ({ page }) => {

  await expect(page.locator('login-page')).toBeVisible();
  await expect(page.getByRole('textbox', {name:'username'})).toBeVisible();
  await page.getByRole('textbox', {name:'username'}).fill(username);
  await page.locator('id=viewPass').fill(pass);
  await page.getByRole('button', { name: 'Acceder' }).click();
  await expect(page.getByText('dashboard')).toBeVisible();

});

test('Should try access with wrong email and pass', async ({page}) => {
  await expect(page.locator('login-page')).toBeVisible();
  await expect(page.getByRole('textbox', {name:'username'})).toBeVisible();
  await page.getByRole('textbox', {name:'username'}).fill('alan@yopmail.com');
  await page.locator('id=viewPass').fill('pass');
  await page.getByRole('button', { name: 'Acceder' }).click();
  await expect(page.getByText('error')).toBeVisible();
  await expect(page.getByText('error')).toContain('hubo un error en las credenciales');
})