import { createStore } from '@ngneat/elf';
import { selectAllEntities, upsertEntities, withEntities } from '@ngneat/elf-entities';
import type { User } from './example.interface';

const store = createStore({ name: 'example' }, withEntities<User>());

class ExampleRepository {
  users$ = store.pipe(selectAllEntities());

  addUsers(data: User | User[]) {
    store.update(upsertEntities(data));
  }
}

let instance;

function getInstance() {
  if (!instance) {
    instance = new ExampleRepository();
  }

  return instance;
}

export const exampleRepository = getInstance();
