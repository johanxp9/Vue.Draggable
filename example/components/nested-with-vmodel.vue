<template>
  <div class="justify-content-between row">
    <nested-test class="col-8" v-model="elements" />
    <nested-test2 class="col-8" v-model="elements2" />
    <raw-displayer class="col-4" :title="'Vuex Store'" :value="elements" />
    <raw-displayer class="col-4" :title="'Vuex Store'" :value="elements2" />
  </div>
</template>

<script>
import NestedTest from "./nested/nested-test.vue";
import NestedTest2 from "./nested/nested-test2.vue";
import rawDisplayer from "./infra/raw-displayer.vue";

export default {
  name: "nested-with-vmodel",
  display: "Nested (v-model & vuex)",
  order: 16,
  components: {
    NestedTest,
    NestedTest2,
    rawDisplayer
  },
  computed: {
    elements: {
      get() {
        return this.$store.state.nested.elements;
      },
      set(value) {
        this.$store.dispatch("nested/updateElements", value);
      }
    },
    elements2: {
      get() {
        return this.$store.state.nested.elements2;
      },
      set(value) {
        console.log("value", value);
        this.$store.dispatch("nested/updateElements2", value);
      }
    }
  },
  methods: {}
};
</script>
