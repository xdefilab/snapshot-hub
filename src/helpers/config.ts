import config from '@/config.json';

let id = 'master';
const domainName = window.location.hostname;
if (domainName.includes('localhost')) id = 'local';
if (domainName.includes('8.210.221.121')) id = 'local';
if (domainName.includes('127.0.0.1')) id = 'local';
if (domainName.includes('182.168.0.2')) id = 'local';
if (domainName === 'voting.kovan.xdefi.com') id = 'develop';

export default config[id];
