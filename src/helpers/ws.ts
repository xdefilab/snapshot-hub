import { WebSocketProvider } from '@ethersproject/providers';

// `wss://eth-mainnet.ws.alchemyapi.io/v2/${process.env.VUE_APP_ALCHEMY_KEY}`
const wsProvider = new WebSocketProvider(
    'wss://eth-kovan.ws.alchemyapi.io/v2/3r0hNNu82sDnDK5RFZ9ZMkidL8hiIrDV'
);

export default wsProvider;
