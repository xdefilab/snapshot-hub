import { Wallet } from '@ethersproject/wallet';

const privateKey =
  process.env.RELAYER_PK ||
  '0xb43cc3e73ed30bb997738633287691b798b548300f4b0388085a24f9e1e3fed0';
const wallet = new Wallet(privateKey);

export default wallet;
