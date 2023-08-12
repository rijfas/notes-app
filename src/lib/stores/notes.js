import { writable } from "svelte/store";

function createNotes() {
  const { set, update, subscribe } = writable([]);

  return {
    subscribe,
    addNote: (note) => update((notes) => [...notes, note]),
    removeNote: (id) =>
      update((notes) => notes.filter((note) => note.id !== id)),
    clear: () => set([]),
  };
}

export const notes = createNotes();
