import Vue from 'vue';
import autofocus from 'vue-autofocus-directive';
import infiniteScroll from 'vue-infinite-scroll';
import TextareaAutosize from 'vue-textarea-autosize';
import Jazzicon from 'vue-jazzicon';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import mixins from '@/mixins';
import i18n from '@/i18n';
import '@/style.scss';
import ElementUI from 'element-ui';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faMediumM,
  faGithub,
  faWeixin,
  faDiscord,
  faTelegramPlane,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import 'element-ui/lib/theme-chalk/index.css';

library.add(
  faMediumM,
  faGithub,
  faWeixin,
  faDiscord,
  faTelegramPlane,
  faTwitter
);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(ElementUI);
Vue.use(infiniteScroll);
Vue.use(TextareaAutosize);

const requireComponent = require.context('@/components', true, /[\w-]+\.vue$/);
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);
  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\//, '').replace(/\.\w+$/, ''))
  );
  Vue.component(componentName, componentConfig.default || componentConfig);
});

Vue.component('jazzicon', Jazzicon);
Vue.mixin(mixins);
Vue.directive('autofocus', autofocus);

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app');
