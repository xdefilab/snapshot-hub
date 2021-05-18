import config from '@/config.json';

let id = 'master';
const domainName = window.location.hostname;
if (window.location.host.includes('kovan')) id = 'develop';
if (
  ['localhost', '8.210.221.121', '127.0.0.1', '182.168.0.2'].some(item =>
    domainName.includes(item)
  )
)
  id = 'local';
export default config[id];
