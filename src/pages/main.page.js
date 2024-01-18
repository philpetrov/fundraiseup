import config from '../../config';
const { expect } = require('@playwright/test');

exports.MainPage = class MainPage {
  
  constructor (page) {

    this.page = page
    this.donationWidgetFrameLocator = page.frameLocator('iframe[title="Donation Widget"]');

    //Buttons:
    this.giveNowBtn = page.frameLocator('iframe[title="Donate Button"]').getByRole('button', { name: 'Give Now' })
    this.monthlyBtn = this.donationWidgetFrameLocator.getByRole('button', { name: 'Monthly' })
    this.donateMonthlyBtn = this.donationWidgetFrameLocator.getByRole('button', { name: 'Donate monthly' })
    this.creditCardBtn = this.donationWidgetFrameLocator.getByRole('button', { name: 'Credit card' })
    this.continueBtn = this.donationWidgetFrameLocator.getByRole('button', { name: 'Continue' })
    this.payBtn = this.donationWidgetFrameLocator.getByTestId('pay-button')

    //Inputs:
    this.priceInput = this.donationWidgetFrameLocator.getByTestId('price-input');
    this.cardNumberInput = this.donationWidgetFrameLocator.frameLocator('iframe[title="Secure card number input frame"]').getByPlaceholder('Card number')
    this.monthYearInput = this.donationWidgetFrameLocator.frameLocator('iframe[title="Secure expiration date input frame"]').getByPlaceholder('MM / YY')
    this.cvcInput = this.donationWidgetFrameLocator.frameLocator('iframe[title="Secure CVC input frame"]').getByPlaceholder('CVC')
    this.firstNameInput = this.donationWidgetFrameLocator.getByTestId('privacy-first-name-input')
    this.lastNameInput = this.donationWidgetFrameLocator.getByTestId('privacy-last-name-input')
    this.emailInput = this.donationWidgetFrameLocator.getByTestId('privacy-email-input')

    //Lists:
    this.currencyList = this.donationWidgetFrameLocator.locator('[data-qa="currency-selector"]')

    //Check-boxes:
    this.coverTransactionCostCheckBox = this.donationWidgetFrameLocator.getByRole('checkbox', { name: 'Cover transaction costs' });

    //Labels:
    this.cardContinueErrorMessageLabel = this.donationWidgetFrameLocator.locator('[data-qa="card-continue-error-message"]')
  }

  async goto() {
    await this.page.goto(config.baseUrl + '/qa-test-7R58U3/');
    this.page.waitForLoadState('domcontentloaded');
  }

  //Click methods:
  async clickGiveNowBtn() {
    await this.giveNowBtn.click();
  }
  async clickMonthlyBtn() {
    await this.monthlyBtn.click();
  }
  async clickDonateMonthlyBtn() {
    await this.donateMonthlyBtn.click();
  }
  async clickCoverTransactionCostIfActiveCheckBox() {
    const checkBox = this.coverTransactionCostCheckBox;
    const isActive = await checkBox.isChecked();
    
    if (isActive === true) {
        await checkBox.click();
    }
  }
  async clickCreditCardBtn() {
    await this.creditCardBtn.click();
  }
  async clickContinueBtn() {
    await this.continueBtn.click();
  }
  async clickLastNameInput() {
    await this.lastNameInput.click();
  }
  async clickEmailInput() {
    await this.emailInput.click();
  }
  async clickPayBtn() {
    await this.payBtn.click();
  }

  //Type methods:
  async typePriceInput(price) {
    await this.priceInput.fill(price);
  }
  async typeCardNumberInput(cardNumber) {
    await this.cardNumberInput.fill(cardNumber);
  }
  async typeMonthYearInput(monthYear) {
    await this.monthYearInput.fill(monthYear);
  }
  async typeCVCInput(cvcNumber) {
    await this.cvcInput.fill(cvcNumber);
  }
  async typeFirstNameInput(firstName) {
    await this.firstNameInput.fill(firstName);
  }
  async typeLastNameInput(lastName) {
    await this.lastNameInput.fill(lastName);
  }
  async typeEmailInput(email) {
    await this.emailInput.fill(email);
  }

  //Select methods:
  async selectFromCurrencyList(currency) {
    await this.currencyList.selectOption({ value: currency });
  }

  //Asserts:
  async cardContinueErrorMessageLabelHasText(errorText) {
    const actualErrorText = await this.cardContinueErrorMessageLabel.textContent();
    expect(actualErrorText).toEqual(errorText);
  }
}