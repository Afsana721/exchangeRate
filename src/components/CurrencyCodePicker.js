import React from "react";

//export function CurrencyCodePicker({ not here

function CurrencyCodePicker({
  supportedCurrencies,
  currencyCode,
  onChange,
}) {
  return (
    <select className="currencyCode" value={currencyCode} onChange={onChange}>
      {supportedCurrencies.map((code) => (
        <option key={code} value={code}>
          {code}
        </option>
      ))}
    </select>
  );
}

//export here
export default CurrencyCodePicker;