import { devices, webkit, chromium, firefox } from 'playwright';


const config = {
  browserType: process.env.BROWSER || 'chromium',
  headless: process.env.HEADLESS === 'true',
  baseUrl: 'https://data.fundraiseup.com',
};

export default config;