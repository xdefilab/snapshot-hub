let defaultRestApi = 'http:/8.210.221.121/hapi';
const domainName = window.location.hostname;
if (domainName === 'vote.kovan.xdefi.com')
  defaultRestApi = 'https://vote.kovan.xdefi.com';
if (domainName === 'vote.xdefi.com')
  defaultRestApi = 'https://vote.xdefi.com';
const restApi = process.env.VUE_APP_REST_API || defaultRestApi;

class Client {
  request(command, body?) {
    const url = `${restApi}/api/${command}`;
    let init;
    if (body) {
      init = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      };
    }
    return new Promise((resolve, reject) => {
      fetch(url, init)
        .then(res => {
          if (res.ok) return resolve(res.json());
          throw res;
        })
        .catch(e => e.json().then(json => reject(json)));
    });
  }
}

const client = new Client();

export default client;
