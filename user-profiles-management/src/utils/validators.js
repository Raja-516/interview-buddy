export const isEmailValid = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const isNotEmpty = (value) => value && value.trim().length > 0;
