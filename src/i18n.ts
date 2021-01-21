import Vue from 'vue';
import VueI18n from 'vue-i18n';
import zh from '@/lang/zh.json';
import en from '@/lang/en.json';

Vue.use(VueI18n);

const locale = 'en-US';

export default new VueI18n({
  locale,
  messages: {
    'en-US': en,
    'zh-CN': zh
  },
  dateTimeFormats: {
    'en-US': {
      short: {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric'
      },
      long: {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
      }
    }
  },
  numberFormats: {
    'en-US': {
      currency: {
        style: 'currency',
        currency: 'USD'
      },
      price: {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 6
      },
      percent: {
        style: 'percent',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
      }
    },
    'zh-CN': {
      currency: {
        style: 'currency',
        currency: 'CNY',
        currencyDisplay: 'symbol'
      }
    }
  }
});
