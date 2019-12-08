import Vue from 'vue';
import { ValidationProvider, ValidationObserver, configure, extend } from 'vee-validate';
import { required, email, numeric, oneOf } from 'vee-validate/dist/rules';

// Add a rule.
extend('required', {
  ...required,
  message: '필수 입력사항입니다.'
});

extend('email', {
  ...email,
  message: '이메일 형식으로 입력하세요.'
});

extend('numeric', {
  ...numeric,
  message: '번호만 입력하세요.'
});

extend('oneOf', {
  ...oneOf,
  message: '종류를 선택하세요.'
});

extend('agree', {
  ...oneOf,
  message: '개인정보취급방침에 동의하세요.'
});

const config = {
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  },
  bails: true,
  skipOptional: true,
  mode: 'aggressive',
  useConstraintAttrs: true
};

// Sets the options.
configure(config);

// Register it globally
Vue.component('ValidationProvider', ValidationProvider, configure);
Vue.component('ValidationObserver', ValidationObserver);