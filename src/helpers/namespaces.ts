import namespacesKovan from '@/namespaces-kovan.json';
import namespacesMainnet from '@/namespaces-master.json';

const isKovan = Boolean(window.location.host.includes('kovan'));

const namespaces = isKovan ? namespacesKovan : namespacesMainnet;

export default namespaces;
