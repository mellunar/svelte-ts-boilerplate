<script lang="ts">
  import { t } from 'svelte-i18n';
  import LanguageRadio from '~/core/components/language-radio.svelte';
  import Example from '~/modules/example/components/example.svelte';
</script>

<main>
  <h1>{$t('title')}</h1>
  <p>
    {$t('msg1')}<a href="https://svelte.dev/tutorial">{$t('msg2')}</a>{$t('msg3')}
  </p>
  <div class="options">
    <LanguageRadio iso="en" />
    <LanguageRadio iso="pt" class="radio" />
  </div>
  <Example />
</main>
