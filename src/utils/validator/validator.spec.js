import { t } from '@lingui/macro';
import * as validator from './index';

import i18n from '../i18n';

describe('validator test', () => {
  it('required', () => {
    expect(validator.required('text')).toEqual('');
    expect(validator.required()).not.toEqual('');
    expect(validator.required(null)).not.toEqual('');
    expect(validator.required(undefined)).not.toEqual('');
    expect(validator.required('')).not.toEqual('');
  });

  it('minLength', () => {
    expect(validator.minLength(8)('ahoj')).not.toEqual('');
    expect(validator.minLength(8)('')).toEqual('');
    expect(validator.minLength(5)('velry')).toEqual('');
    expect(validator.minLength(2)('velry')).toEqual('');
  });

  it('maxLength', () => {
    expect(validator.maxLength(4)('ahoj')).toEqual('');
    expect(validator.maxLength(4)('')).toEqual('');
    expect(validator.maxLength(4)('velr')).toEqual('');
    expect(validator.maxLength(4)('velry')).not.toEqual('');
  });

  it('email', () => {
    expect(validator.email('h-k1%+23@hk1.23.com')).toEqual('');
    expect(validator.email('h^23@hk1.23.com')).not.toEqual('');
    expect(validator.email('@hk.com')).not.toEqual('');
    expect(validator.email('hk.com')).not.toEqual('');
    expect(validator.email('joye@hk.coooom')).not.toEqual('');
    expect(validator.email('joye@')).not.toEqual('');
  });

  it('url', () => {
    expect(validator.url('http://monyl.com')).toEqual('');
    expect(validator.url('http://www.monyl.com')).toEqual('');
    expect(validator.url('https://monyl.com')).toEqual('');
    expect(validator.url('https://www.monyl.com')).toEqual('');
    expect(validator.url('www.monyl.com')).toEqual('');
    expect(validator.url('')).toEqual('');
    expect(validator.url('ht555://ab.com')).toEqual(i18n._(t`Invalid URL`));
  });

  it('equalWith', () => {
    expect(validator.equalWith('password')('a', { password: 'a' })).toEqual('');
    expect(validator.equalWith('password')('a', { password: 'b' })).not.toEqual('');
    expect(validator.equalWith('password', 'New password')('a', { password: 'b' })).not.toEqual('');
  });
});
