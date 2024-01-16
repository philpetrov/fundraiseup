// helpers.js
const { devices } = require('playwright');

const emulateDevices = async (page, device) => {
  const emulation = devices[device];
  if (emulation) {
    await page.emulate(emulation);
  }
};

module.exports = { emulateDevices };