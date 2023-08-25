import React from "react"; //import react

//export function AmountField({ amount, onChange }) {

function AmountField({ amount, onChange }) {
  return (
    <form className="ExchangeRate-form">
      <input
        aria-label="Amount in base currency"
        type="text"
        value={amount}
        onChange={onChange}
      />
    </form>
  );
}

//export here
export default AmountField;