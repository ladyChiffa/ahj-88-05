import puppeteer from 'puppeteer';

// describe - для группировки тестов
describe('Inn form', () => {
    let browser;
    let page;

    beforeAll( async () => {
        browser = await puppeteer.launch({ // конфигурация браузера
            headless: true, // браузер без интерфейса
            slowMo: 100,
            devtools: true
        });

        page = await browser.newPage();
    });

    test('form input should add .valid class if inn is correct', async () => {
        await page.goto('http://localhost:8080');

        await page.waitForSelector('.form-widget button');
        
        const button = await page.$('.form-widget button');
        
        await button.click();
        
        await page.waitForSelector('.popover');
    });

    afterAll( async () => {
        await browser.close();
    });
});

