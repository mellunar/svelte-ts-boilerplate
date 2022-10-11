import App from './App.svelte';
import { addMessages, init, getLocaleFromNavigator } from 'svelte-i18n';
import { metadataRepository } from './core/state/metadata/metadata.repository';

import en from './locales/en.json';
import pt from './locales/pt.json';

addMessages('en', en);
addMessages('pt', pt);

let storedLocale = metadataRepository.getLang();

init({
  fallbackLocale: 'en',
  initialLocale: storedLocale ? storedLocale : getLocaleFromNavigator(),
});

const app = new App({
  target: document.getElementById('app'),
});

export default app;
