// import get from "lodash/get";
// import isFunction from "lodash/isFunction";

const isEmpty = value => value === undefined || value === null || value === "";
// const join = rules => (value, data) =>
//   rules.map(rule => rule(value, data)).filter(error => !!error)[0];

export function required(value) {
  if (isEmpty(value)) {
    return "Required";
  }
  return "";
}

export function email(value) {
  if (
    !isEmpty(value) &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
  ) {
    return "Invalid email address";
  }
  return "";
}

// export function price(value) {
//   if (!isEmpty(value)) {
//     if (value.length >= 10) {
//       return "Maximum allowed Price is 99999999.99";
//     } else if (/^\d+,\d+$/.test(value)) {
//       return "Use . instead of , in Price";
//     } else if (!/^\d+\.?\d*$/.test(value)) {
//       return "Price must be digits";
//     } else if (!/^\d+\.?\d?\d?$/.test(value)) {
//       return "Price may have only two digits after a decimal point";
//     }
//   }
//   return "";
// }

export function url(str) {
  if (!str) {
    return "";
  }
  // disable eslint no-irregular-whitespace for regex doesn't work
  // eslint-disable-next-line no-irregular-whitespace
  const pattern = /^(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9]{2,256}\.[a-z‌A-Z​]{2,6}(\.[a-z‌A-Z​]{2,6})?/g;
  return pattern.test(str) ? "" : "Invalid Url";
}

// // used to validate checkbox
// export function checked(value) {
//   if (isEmpty(value) || value === 0) {
//     return "Required";
//   }
//   return "";
// }

export function minLength(min) {
  return value => {
    if (!isEmpty(value) && value.length < min) {
      return `Must be at least ${min} characters`;
    }
    return "";
  };
}

export function maxLength(max) {
  return value => {
    if (!isEmpty(value) && value.length > max) {
      return `Must be no more than ${max} characters`;
    }
    return "";
  };
}

export function equalWith(field, label) {
  return (value, data) => {
    if (value !== data[field]) {
      return `Must be matched with ${label || field}`;
    }
    return "";
  };
}

// export function integer(value) {
//   if (!Number.isInteger(Number(value))) {
//     return "Must be number";
//   }
//   return "";
// }

export function alphaNumeric(value) {
  if (!isEmpty(value) && /[^a-zA-Z0-9 ]/i.test(value)) {
    return "Only alphanumeric characters";
  }
  return "";
}

// export function oneOf(enumeration) {
//   return value => {
//     // Originally if (!~enumeration.indexOf(value)) {
//     if (enumeration.indexOf(value) === -1) {
//       return `Must be one of: ${enumeration.join(", ")}`;
//     }
//     return "";
//   };
// }

// export function match(field) {
//   return (value, data) => {
//     if (data && value !== data[field]) {
//       return "Do not match";
//     }
//     return "";
//   };
// }

// export function regx(pattern, options, error) {
//   return value => {
//     const exp = new RegExp(pattern, options);
//     if (!exp.test(value)) {
//       return error || "Pattern do not match.";
//     }
//     return "";
//   };
// }
