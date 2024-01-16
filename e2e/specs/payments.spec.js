const { test, expect } = require('@playwright/test');
import { MainPage } from '../pages/mainPage';
const { chromium } = require('playwright');
const config = require('../../config').default;


test.describe('Payment scenarios', () => {
    test('A1. Payment scenario with credit card failure', async ({page}) => {

        const Main = new MainPage(page)

        await Main.goto();
        await Main.clickGiveNowBtn()
        await Main.typePriceInput('100')
        await Main.clickMonthlyBtn()
        await Main.clickDonateMonthlyBtn()
        await Main.clickCoverTransactionCostIfActiveCheckBox()
        await Main.clickCreditCardBtn()
        await Main.typeCardNumberInput('4242 4242 4242 4242')
        
        //await Main. 

       // await page.frameLocator('iframe[title="Donation Widget"]').frameLocator('iframe[name="__privateStripeFrame6417"]').getByPlaceholder('MM / YY').click();
        await page.frameLocator('iframe[title="Donation Widget"]').frameLocator('iframe[name="__privateStripeFrame6417"]').getByPlaceholder('MM / YY').fill('04 / 24');
        await page.frameLocator('iframe[title="Donation Widget"]').frameLocator('iframe[name="__privateStripeFrame6418"]').getByPlaceholder('CVC').fill('000');
        await page.frameLocator('iframe[title="Donation Widget"]').getByRole('button', { name: 'Continue' }).click();
        await page.frameLocator('iframe[title="Donation Widget"]').getByTestId('privacy-first-name-input').fill('First name');
        await page.frameLocator('iframe[title="Donation Widget"]').getByTestId('privacy-last-name-input').click();
        await page.frameLocator('iframe[title="Donation Widget"]').getByTestId('privacy-last-name-input').fill('Last name');
        await page.frameLocator('iframe[title="Donation Widget"]').getByTestId('privacy-email-input').click();
        await page.frameLocator('iframe[title="Donation Widget"]').getByTestId('privacy-email-input').fill('E-mail');
        await page.frameLocator('iframe[title="Donation Widget"]').getByTestId('pay-button').click();
        await page.frameLocator('iframe[title="Donation Widget"]').getByTestId('privacy-email-input').click();
        await page.frameLocator('iframe[title="Donation Widget"]').getByTestId('privacy-email-input').fill('petrvfilipp@gmail.com');
        await page.frameLocator('iframe[title="Donation Widget"]').getByTestId('pay-button').click();


        const errorText = await page.textContent('.error-message'); // Замените селектор на реальный

        expect(errorText).toContain('Error message text'); // Замените на реальный текст ошибки

        await browser.close();
    });
})