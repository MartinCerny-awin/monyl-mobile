import I18n from './i18n';

export default function (message) {
  return I18n.t(message.id, { defaultValue: message.defaultValue });
}
