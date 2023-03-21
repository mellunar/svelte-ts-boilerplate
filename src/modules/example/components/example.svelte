<script lang="ts">
  import { t } from 'svelte-i18n';
  import { catchError, finalize, tap } from 'rxjs';
  import { onMount } from 'svelte';
  import { exampleRepository } from '../state/example.repository';
  import { exampleService } from '../state/example.service';

  const users = exampleRepository.users$;
  let loading = false;

  onMount(() => {
    getUsers();
  });

  function getUsers() {
    loading = true;

    exampleService
      .getUsers()
      .pipe(
        finalize(() => {
          loading = false;
        })
      )
      .subscribe();
  }
</script>

<div class="users">
  {#if loading}
    <p>{$t('loading')}...</p>
  {/if}

  {#if $users.length > 0}
    <p>{$t('users')}:</p>
    {#each $users as user}
      <p>{user.name}</p>
    {/each}
  {/if}
</div>

<style lang="scss">
  .users {
    margin-top: 50px;

    p {
      margin-top: 10px;
    }
  }
</style>
