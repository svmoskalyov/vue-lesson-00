export const isRequired = (val) => ({
  hasPassed: !!val,
  message: "not empty",
});

export const charLimit = (limit) => (val) => ({
  hasPassed: !!val.length <= limit,
  message: "limit number",
});

export const emailValidation = (val) => ({
  hasPassed: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(val),
  message: "not correct email",
});

export const passwordValidation = (val) => ({
  hasPassed: /^(?=.*[A-Za-z])(?=.*[\d])[a-zA-Z0-9]{7,256}$/.test(val),
  message: "not correct password",
});

// export const passwordValidation = (val) => ({
//   hasPassed: /^(?=.*[A-Za-z])(?=.*[\d]).{7,256}$/.test(val),
//   message: "not correct password",
// });
