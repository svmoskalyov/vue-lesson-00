export const isRequired = (val) => ({
  hasPassed: !!val,
  message: "not empty",
});

export const charLimit = (limit) => (val) => ({
  hasPassed: !!val.length <= limit,
  message: "limit number",
});
