const { test } = require("@playwright/test");
import { MainPage } from "../../../src/pages/main.page";
import {
  invalidCreditCardData,
  testContactData,
} from "../../../config/test-data/payments-test-data";

test.describe.parallel("Payment scenarios", () => {
  test.beforeEach(async ({}, testInfo) => {
    testInfo.setTimeout(120000);
  });

  test("A1. Payment scenario with incorrect credit card", async ({ page }) => {
    const mainPage = new MainPage(page);

    await test.step("1. Open the main page", async () => {
      await mainPage.goto();
    });
    await test.step('2. Click "Give Now" button', async () => {
      await mainPage.clickGiveNowBtn();
    });
    await test.step('3. Сhoose "Monthly"', async () => {
      await mainPage.clickMonthlyBtn();
    });
    await test.step("4. Apply 100 USD", async () => {
      await mainPage.selectFromCurrencyList("USD");
      await mainPage.clickPriceInput();
      await mainPage.typePriceInput("100");
    });
    await test.step('5. Click "Donate Monthly"', async () => {
      await mainPage.clickDonateMonthlyBtn();
    });
    await test.step('6. Remove checkbox "Cover transaction costs" if exist', async () => {
      await mainPage.clickCoverTransactionCostIfActiveCheckBox();
    });
    await test.step("7. Choose credit card as a payment method", async () => {
      await mainPage.clickCreditCardBtn();
    });
    await test.step("8. Type credit card data", async () => {
      await mainPage.typeCardNumberInput(invalidCreditCardData.cardNumber);
      await mainPage.clickMonthYearInput();
      await mainPage.typeMonthYearInput(invalidCreditCardData.expirationDate);
      await mainPage.typeCVCInput(invalidCreditCardData.cvc);
    });
    await test.step('9. Click "Continue"', async () => {
      await mainPage.clickContinueBtn();
    });
    await test.step('10. Type "First name"', async () => {
      await mainPage.typeFirstNameInput(testContactData.firstName);
    });
    await test.step('11. Type "Last name"', async () => {
      await mainPage.clickLastNameInput();
      await mainPage.typeLastNameInput(testContactData.lastName);
    });
    await test.step("12. Type email adress", async () => {
      await mainPage.clickEmailInput();
      await mainPage.typeEmailInput(testContactData.email);
    });
    await test.step('13. Click "Donate"', async () => {
      await mainPage.clickPayBtn();
      await mainPage.cardContinueErrorMessageLabelHasText(
        invalidCreditCardData.ivalidCardErrorMessage
      );
    });
  });

  test("A2. Payment scenario with incorrect credit card (duplicate)", async ({
    page,
  }) => {
    const mainPage = new MainPage(page);

    await test.step("1. Open the main page", async () => {
      await mainPage.goto();
    });
    await test.step('2. Click "Give Now" button', async () => {
      await mainPage.clickGiveNowBtn();
    });
    await test.step('3. Сhoose "Monthly"', async () => {
      await mainPage.clickMonthlyBtn();
    });
    await test.step("4. Apply 100 USD", async () => {
      await mainPage.selectFromCurrencyList("USD");
      await mainPage.clickPriceInput();
      await mainPage.typePriceInput("100");
    });
    await test.step('5. Click "Donate Monthly"', async () => {
      await mainPage.clickDonateMonthlyBtn();
    });
    await test.step('6. Remove checkbox "Cover transaction costs" if exist', async () => {
      await mainPage.clickCoverTransactionCostIfActiveCheckBox();
    });
    await test.step("7. Choose credit card as a payment method", async () => {
      await mainPage.clickCreditCardBtn();
    });
    await test.step("8. Type credit card data", async () => {
      await mainPage.typeCardNumberInput(invalidCreditCardData.cardNumber);
      await mainPage.clickMonthYearInput();
      await mainPage.typeMonthYearInput(invalidCreditCardData.expirationDate);
      await mainPage.typeCVCInput(invalidCreditCardData.cvc);
    });
    await test.step('9. Click "Continue"', async () => {
      await mainPage.clickContinueBtn();
    });
    await test.step('10. Type "First name"', async () => {
      await mainPage.typeFirstNameInput(testContactData.firstName);
    });
    await test.step('11. Type "Last name"', async () => {
      await mainPage.clickLastNameInput();
      await mainPage.typeLastNameInput(testContactData.lastName);
    });
    await test.step("12. Type email adress", async () => {
      await mainPage.clickEmailInput();
      await mainPage.typeEmailInput(testContactData.email);
    });
    await test.step('13. Click "Donate"', async () => {
      await mainPage.clickPayBtn();
      await mainPage.cardContinueErrorMessageLabelHasText(
        invalidCreditCardData.ivalidCardErrorMessage
      );
    });
  });
});
