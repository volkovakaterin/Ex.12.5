/* eslint-disable linebreak-style */
// import puppetteer from 'puppeteer';

// jest.setTimeout(30000);// default puppeteer timeout
// describe('INN/OGRN form', () => {
//   let browser = null;
//   let page = null;
//   const baseUrl = 'http://localhost:9000';
//   beforeAll(async () => {
//     browser = await puppetteer.launch({
//       headless: false, // show gui
//       slowMo: 100,
//       devtools: true, // show devTools
//     });
//     page = await browser.newPage();
//   });
//   afterAll(async () => {
//     await browser.close();
//   }); // test code here (next page)
//   describe('INN/OGRN form', () => {
//     test('should add .valid class for valid inn', async () => {
//       await page.goto(baseUrl);
//       const form = await page.$('.form]');
//       const input = await form.$('.btn]');
//       // await input.type('7715964180');
//       // const submit = await form.$('[data-id=innogrn-submit]');
//       input.submit();
//       await page.waitForSelector('[data-id=innogrn-input].valid');
//     });
//   });
// });
