import kovanConfig from 'xdefi-assets/generated/dex/registry.kovan.json';
import mainnetConfig from 'xdefi-assets/generated/dex/registry.homestead.json';
import bscConfig from 'xdefi-assets/generated/dex/registry.bsc.json';

const configMap = {
  1: mainnetConfig,
  42: kovanConfig,
  56: bscConfig
};

const isKovan = Boolean(window.location.host.includes('kovan'));

export const supportIds = isKovan ? [42] : [1];

export const getConfigByChainId = (chainId: number) => {
  if (chainId && !supportIds.includes(chainId)) {
    return configMap[Number(chainId)];
  } else {
    return configMap[supportIds[0]];
  }
};

export const getConfigByNameAndChainId = (chainId: number, name: string) => {
  const chainConfig = getConfigByChainId(chainId);
  if (chainConfig[name]) {
    return chainConfig[name];
  } else {
    return '';
  }
};
