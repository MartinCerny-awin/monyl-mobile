import * as validator from './index';

describe('validator test', () => {
  it('required', () => {
    expect(validator.required('text')).toEqual('');
    expect(validator.required()).toEqual('Required');
    expect(validator.required(null)).toEqual('Required');
    expect(validator.required(undefined)).toEqual('Required');
    expect(validator.required('')).toEqual('Required');
  });

  it('minLength', () => {
    expect(validator.minLength(8)('ahoj')).toEqual('Must be at least 8 characters');
    expect(validator.minLength(8)('')).toEqual('');
    expect(validator.minLength(5)('velry')).toEqual('');
    expect(validator.minLength(2)('velry')).toEqual('');
  });

  it('maxLength', () => {
    expect(validator.maxLength(4)('ahoj')).toEqual('');
    expect(validator.maxLength(4)('')).toEqual('');
    expect(validator.maxLength(4)('velr')).toEqual('');
    expect(validator.maxLength(4)('velry')).toEqual('Must be no more than 4 characters');
  });

  it('email', () => {
    expect(validator.email('h-k1%+23@hk1.23.com')).toEqual('');
    expect(validator.email('h^23@hk1.23.com')).toEqual('Invalid email address');
    expect(validator.email('@hk.com')).toEqual('Invalid email address');
    expect(validator.email('hk.com')).toEqual('Invalid email address');
    expect(validator.email('joye@hk.coooom')).toEqual('Invalid email address');
    expect(validator.email('joye@')).toEqual('Invalid email address');
  });

  it('url', () => {
    expect(validator.url('http://monyl.com')).toEqual('');
    expect(validator.url('http://www.monyl.com')).toEqual('');
    expect(validator.url('https://monyl.com')).toEqual('');
    expect(validator.url('https://www.monyl.com')).toEqual('');
    expect(validator.url('www.monyl.com')).toEqual('');
    expect(validator.url('')).toEqual('');
    expect(validator.url('ht555://ab.com')).toEqual('Invalid Url');
  });

  it('equalWith', () => {
    expect(validator.equalWith('password')('a', { password: 'a' })).toEqual('');
    expect(validator.equalWith('password')('a', { password: 'b' })).toEqual('Must be matched with password');
    expect(validator.equalWith('password', 'New password')('a', { password: 'b' })).toEqual('Must be matched with New password');
  });
});
