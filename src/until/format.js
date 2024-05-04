import dayjs from "dayjs";

export const formatMoney = (amount) => {
  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return formatter.format(amount);
};

const formater_number = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 0,
  // the default value for minimumFractionDigits depends on the currency
  // and is usually already 2
});

export function formatNumber(value) {
  return formater_number.format(value);
}

export default function DateFormat(currentDate) {
  const provideDate = dayjs(currentDate);
  const formattedDate = provideDate.format("MMM DD, YYYY hh:mm A");
  return formattedDate;
}

export function formatAddressDot(inputStr, prefixLength, suffixLength) {
  if (prefixLength + suffixLength >= inputStr.length) {
    return inputStr;
  } else {
    var prefix = inputStr.substring(0, prefixLength);
    var suffix = inputStr.substring(inputStr.length - suffixLength);
    var middle = "...";
    var result = prefix + middle + suffix;
    return result;
  }
}

export const formatAddress = (address) => {
  if (!address) return "...";
  const first = address?.substring(0, 6);
  const last = address?.substring(address?.length - 4, address?.length);
  return first + "..." + last;
};
