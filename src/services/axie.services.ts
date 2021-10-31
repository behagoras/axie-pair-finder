import axieApi from '../apis/axie.api';

export const getAxie = async (axieId: string) => {
  const res = await axieApi.get(`/axie/${axieId}`);
  return res.data;
};

export const getServerStatus = async () => {
  const res = await axieApi.get('/apis');
  return res.data;
};

export default {};
