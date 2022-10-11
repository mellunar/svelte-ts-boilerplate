import { tap } from 'rxjs';
import { http } from '~/core/services/httpClient';
import type { User } from './example.interface';
import { exampleRepository } from './example.repository';

class ExampleService {
  getUsers() {
    let requestId = Math.random() + '-xhr-id';

    return http.get<User[]>('https://jsonplaceholder.typicode.com/users', { requestId: requestId }).pipe(
      tap((users) => {
        exampleRepository.addUsers(users);
      })
    );
  }
}

export const exampleService = new ExampleService();
