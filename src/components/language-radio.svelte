<script lang="ts">
  import { onMount } from 'svelte';
  import { locale } from 'svelte-i18n';

  export let iso;

  let userLocale, lang;

  onMount(() => {
    locale.subscribe((x) => (userLocale = x));
    lang = userLocale.includes(iso);
  });

  function setLocale() {
    locale.set(iso);
    localStorage.setItem('language', iso);
  }
</script>

<label for={`language-${iso}`} class={$$props.class}>
  <input type="radio" name="language" id={`language-${iso}`} checked={lang} on:change={() => setLocale()} />
  <span>{iso}</span>
</label>

<style>
  span {
    text-transform: uppercase;
  }
</style>
