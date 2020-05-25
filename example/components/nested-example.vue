<template>
  <div class="row">
    <div class="col-8">
      <h3>Nested draggable</h3>
      <nested-draggable :tasks="folders" />
      <!-- <nested-draggable :tasks="files" /> -->
      <files :tasks="files" />
    </div>

    <rawDisplayer class="col-3" :value="folders" title="List" />
    <rawDisplayer class="col-3" :value="files" title="List2" />
  </div>
</template>

<script>
import nestedDraggable from "./infra/nested";
import files from "./infra/files";
export default {
  name: "nested-example",
  display: "Nested",
  order: 15,
  components: {
    nestedDraggable,
    files
  },
  data() {
    return {
      folders: [
        {
          name: "folder 1",
          tasks: []
        },
        {
          name: "folder 3",
          tasks: []
        },
        {
          name: "folder 5",
          tasks: []
        }
      ],
      files: [
        {
          name: "file 1"
        },
        {
          name: "file 3"
        },
        {
          name: "file 5"
        }
      ]
    };
  }
};
</script>
<style scoped></style>
