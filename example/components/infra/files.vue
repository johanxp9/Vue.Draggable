<template>
  <div>
    <draggable class="dragArea" tag="ul" :list="tasks" :group="{ name: 'g1' }">
      <li v-for="el in tasks" :key="el.name">
        <p>{{ el.name }}</p>
        <!-- <nested-draggable :tasks="el.tasks" /> -->
      </li>
    </draggable>
  </div>
</template>
<script>
import draggable from "@/vuedraggable";

export default {
  props: {
    tasks: {
      required: true,
      type: Array
    }
  },
  components: {
    draggable
  },
  name: "files"
};
</script>
<style scoped>
.dragArea {
  min-height: 50px;
  outline: 1px dashed;
}
</style>
