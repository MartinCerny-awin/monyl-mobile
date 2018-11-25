// @flow

import { t } from '@lingui/macro';

import i18n from '../i18n';

const isEmpty = value => value === undefined || value === null || value === '';

export function required(value: string | number) {
  if (isEmpty(value)) {
    return i18n._(t`Required`);
  }
  return '';
}

export function email(value: string) {
  if (
    !isEmpty(value)
    && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
  ) {
    return i18n._(t`Invalid email address`);
  }
  return '';
}

export function url(str: string) {
  if (!str) {
    return '';
  }
  // disable eslint no-irregular-whitespace for regex doesn't work
  // eslint-disable-next-line no-irregular-whitespace
  const pattern = /^(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9]{2,256}\.[a-z‌A-Z​]{2,6}(\.[a-z‌A-Z​]{2,6})?/g;
  return pattern.test(str) ? '' : i18n._(t`Invalid URL`);
}

export function minLength(min: number) {
  return (value: string) => {
    if (!isEmpty(value) && value.length < min) {
      return i18n._(t`Must be at least ${min} characters`);
    }
    return '';
  };
}

export function maxLength(max: number) {
  return (value: string) => {
    if (!isEmpty(value) && value.length > max) {
      return i18n._(t`Must be no more than ${max} characters`);
    }
    return '';
  };
}

export function equalWith(field: string, label: string) {
  return (value: string, data: {[string]: string}) => {
    if (value !== data[field]) {
      return i18n._(t`Must be matched with ${label || field}`);
    }
    return '';
  };
}
