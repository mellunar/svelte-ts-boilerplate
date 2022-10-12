import { createStore } from '@ngneat/elf';
import { selectAllEntities, upsertEntities, withEntities } from '@ngneat/elf-entities';
import { localStorageStrategy, persistState } from '@ngneat/elf-persist-state';
import type { User } from './example.interface';

const store = createStore({ name: 'example' }, withEntities<User>());

class ExampleRepository {
  users$ = store.pipe(selectAllEntities());

  addUsers(data: User | User[]) {
    store.update(upsertEntities(data));
  }
}

export const exampleRepository = new ExampleRepository();
