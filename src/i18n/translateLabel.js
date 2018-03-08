import I18n from './i18n'

export default translateLabel = (message) => I18n.t(message.id, {defaultValue: message.defaultMessage})