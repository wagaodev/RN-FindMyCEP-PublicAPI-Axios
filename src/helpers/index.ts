export const formatZipCode = (value: string): string => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .slice(0, 9);
};

export const validateZipCode = (cep: string) => {
  const regex = /^\d{5}-\d{3}$/;
  return regex.test(cep);
};
