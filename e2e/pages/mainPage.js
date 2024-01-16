import config from '../../config';

exports.MainPage = class MainPage {
  
  constructor (page) {

    this.page = page

    this.giveNowBtn = page.frameLocator('iframe[title="Donation Widget"]').getByRole('button', { name: 'Give Now' });
    this.monthlyBtn = page.frameLocator('iframe[title="Donation Widget"]').getByRole('button', { name: 'Monthly' })
    this.donateMonthlyBtn = page.frameLocator('iframe[title="Donation Widget"]').getByRole('button', { name: 'Donate monthly' })
    this.creditCardBtn = page.frameLocator('iframe[title="Donation Widget"]').getByRole('button', { name: 'Credit card' })

    this.priceInput = page.frameLocator('iframe[title="Donation Widget"]').getByTestId('price-input');
    this.cardNumberInput = page.frameLocator('iframe[title="Donation Widget"]').frameLocator('iframe[name="__privateStripeFrame6416"]').getByPlaceholder('Card number')
    this.monthYearInput = page.frameLocator('iframe[title="Donation Widget"]').frameLocator('iframe[name="__privateStripeFrame6417"]').getByPlaceholder('MM / YY')

    this.coverTransactionCostCheckBox = page.frameLocator('iframe[title="Donation Widget"]').getByRole('checkbox', { name: 'Cover transaction costs' });
  }

  async goto() {
    await this.page.goto(config.baseUrl + '/qa-test-7R58U3/');
    this.page.waitForLoadState('domcontentloaded');
  }

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
  async clickMonthYearInput() {
    await this.monthYearInput.click();
  }

  async typePriceInput(price) {
    await this.priceInput.fill(price);
  }
  async typeCardNumberInput(cardNumber) {
    await this.cardNumberInput.fill(cardNumber);
  }

}