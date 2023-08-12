<script>
  import { notes } from "$lib/stores/notes.js";
  import { popup } from "$lib/stores/popup.js";

  let title;
  let content;

  function addNote() {
    notes.addNote({
      title: title,
      date: new Date(),
      content: content,
      id: crypto.randomUUID(),
    });
    closePopup();
  }

  function closePopup() {
    popup.set(false);
  }
</script>

<form
  on:submit|preventDefault={addNote}
  class="absolute w-96 p-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-xl z-50 flex flex-col gap-2"
>
  <h1 class="text-2xl border-b-2 pb-2 mb-2">Add Note</h1>
  <input
    class="bg-gray-100 border px-3 py-2 rounded"
    bind:value={title}
    type="text"
    required
    placeholder="Title"
  />
  <textarea
    bind:value={content}
    placeholder="Content"
    required
    class="bg-gray-100 border px-3 py-2 rounded"
    cols="30"
    rows="10"
  />
  <div class="flex gap-2 mt-5 text-md">
    <button class="bg-black rounded text-white px-2 py-1" type="submit">
      Save
    </button>
    <button
      class="bg-gray-400 rounded text-white px-2 py-1"
      on:click={closePopup}
    >
      Close
    </button>
  </div>
</form>
