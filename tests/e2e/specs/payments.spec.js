const { test } = require('@playwright/test');
import { MainPage } from '../../../src/pages/main.page';
import { invalidCreditCardData, testContactData } from '../../../config/test-data/payments-test-data';

test.describe('Payment scenarios', () => {
    test('A1. Payment scenario with credit card failure', async ({page}) => {

        const mainPage = new MainPage(page)

        await mainPage.goto()
        await mainPage.clickGiveNowBtn()
        await mainPage.selectFromCurrencyList('USD')
        await mainPage.typePriceInput('0')
        await mainPage.typePriceInput('100')
        await mainPage.clickMonthlyBtn()
        await mainPage.clickDonateMonthlyBtn()
        await mainPage.clickCoverTransactionCostIfActiveCheckBox()
        await mainPage.clickCreditCardBtn()
        await mainPage.typeCardNumberInput(invalidCreditCardData.cardNumber);
        await mainPage.typeMonthYearInput(invalidCreditCardData.expirationDate)
        await mainPage.typeCVCInput(invalidCreditCardData.cvc)
        await mainPage.clickContinueBtn()
        await mainPage.typeFirstNameInput(testContactData.firstName)
        await mainPage.clickLastNameInput()
        await mainPage.typeLastNameInput(testContactData.lastName)
        await mainPage.clickEmailInput()
        await mainPage.typeEmailInput(testContactData.email)
        await mainPage.clickPayBtn()
        await mainPage.cardContinueErrorMessageLabelHasText('Your card was declined. Your request was in live mode, but used a known test card.')
    });
})