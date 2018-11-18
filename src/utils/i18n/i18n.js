// @flow
import { setupI18n } from '@lingui/core';

import enMessages from '../../locales/en/messages';
import csMessages from '../../locales/cs/messages';

export default setupI18n({
  language: 'cs',
  catalogs: {
    en: enMessages,
    cs: csMessages,
  },
});
