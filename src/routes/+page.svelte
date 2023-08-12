<script>
  import "../app.css";
  import NoteTile from "$lib/components/NoteTile.svelte";
  import AddNotePopup from "../lib/components/AddNotePopup.svelte";
  import { notes } from "../lib/stores/notes";
  import { popup } from "../lib/stores/popup";
  function onKeyDown(e) {
    if ($popup) {
      return;
    }
    switch (e.keyCode) {
      case 78:
        popup.set(true);
        break;
    }
  }
</script>

{#if $popup}
  <AddNotePopup />
{/if}

{#if $notes.length !== 0}
  <div
    class="relative bg-slate-100 w-screen h-screen items-stretch grid grid-cols-4 gap-5 p-10 {$popup &&
      'blur pointer-events-none'} "
  >
    {#each $notes as note}
      <NoteTile {...note} />
    {/each}
  </div>
{:else}
  <div
    class="bg-slate-100 w-screen h-screen flex flex-col text-gray-400 animate-pulse text-lg justify-center items-center"
  >
    <span>
      Press
      <span class="border p-1 rounded text-xs m-1">N</span>
      key to add a new note
    </span>
  </div>
{/if}

<svelte:window on:keydown={onKeyDown} />
