const config = {
  browserType: process.env.BROWSER || "chromium",
  headless: process.env.HEADLESS !== "false",
  baseUrl: "https://data.fundraiseup.com",
};

export default config;
