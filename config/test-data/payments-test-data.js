const invalidCreditCardData = {
  cardNumber: "4242 4242 4242 4242",
  expirationDate: "04 / 24",
  cvc: "000",
  ivalidCardErrorMessage:
    "Your card was declined. Your request was in live mode, but used a known test card.",
};

const testContactData = {
  firstName: "First name",
  lastName: "Last name",
  email: "email@example.com",
};

export { invalidCreditCardData, testContactData };
