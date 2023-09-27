<script lang="ts">
  import SimpleButton from "$components/buttons/SimpleButton.svelte"
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<SimpleButton props={ 
  {
    variant: "text",
    label: "Teste",
    icon: "mdi:person"
  } 
}/>