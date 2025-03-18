
import { fr } from '@formkit/i18n';
import { defaultConfig, DefaultConfigOptions } from '@formkit/vue';
import { rootClasses } from './formkit.theme.ts';
import { defineFormKitConfig } from '@formkit/vue';
import '@formkit/themes/genesis'
import '@formkit/pro/genesis'

export default defaultConfig({
  locales: { fr },
  locale: 'fr',

  config: {
    rootClasses,
  },
})

const config: DefaultConfigOptions = {
  theme: "genesis"
}

