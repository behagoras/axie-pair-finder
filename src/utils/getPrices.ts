export default function getPrices(price:string) {
  const priceNumber = Number(price);
  const priceEth = Math.floor((priceNumber / 1000000000000000000) * 1000) / 1000;
  const priceUsd = Math.floor(priceEth * 3337);
  return { priceEth, priceUsd };
}
