import App from './App.svelte';
import { addMessages, init, getLocaleFromNavigator } from 'svelte-i18n';

import en from './locales/en.json';
import pt from './locales/pt.json';

addMessages('en', en);
addMessages('pt', pt);

let storageLocale = localStorage.getItem('language');

init({
  fallbackLocale: 'en',
  initialLocale: storageLocale ? storageLocale : getLocaleFromNavigator(),
});

const app = new App({
  target: document.getElementById('app'),
});

export default app;
