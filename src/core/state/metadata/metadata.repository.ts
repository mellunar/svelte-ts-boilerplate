import { createStore, withProps } from '@ngneat/elf';
import { localStorageStrategy, persistState } from '@ngneat/elf-persist-state';

interface Metadata {
  lang: string;
}

const initialState = {
  lang: null,
};

const store = createStore({ name: 'session' }, withProps<Metadata>(initialState));

export let persist = persistState(store, {
  key: 'metadata',
  storage: localStorageStrategy,
});

class MetadataRepository {
  getLang() {
    return store.value.lang;
  }

  setLang(lang: string) {
    store.update((state) => ({ ...state, lang }));
  }
}

export const metadataRepository = new MetadataRepository();
