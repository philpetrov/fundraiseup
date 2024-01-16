import config from '../../config';

exports.MainPage = class MainPage {
  
  constructor (page) {

    this.page = page
    this.giveNowBtn = page.locator('.button-label:has-text("Give Now")') 
  }

  async goto() {
    await this.page.goto(config.baseUrl + '/qa-test-7R58U3/');
  }
  async clickGiveNowBtn() {
    await this.giveNowBtn.click();
  }
}