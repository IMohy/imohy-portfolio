export const getObjectKeys = (obj: { Residence?: string; City?: string; Age?: string }) => {
  const keys = Object.keys(obj);
  return keys;
};
