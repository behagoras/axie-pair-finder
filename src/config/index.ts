import conf from './config';

const axieApiUrl = process.env.REACT_AXIE_API || conf.AXIE_API;

export default { axieApi: axieApiUrl };
