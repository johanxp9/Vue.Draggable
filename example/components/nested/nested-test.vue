<style scoped>
.item-container {
  max-width: 20rem;
  margin: 0;
}

.item {
  padding: 1rem;
  border: solid black 1px;
  background-color: #fefefe;
}
.item-sub {
  margin: 0 0 0 1rem;
}
</style>

<template>
  <draggable
    @change="change"
    @end="end"
    @dragover="log"
    v-bind="dragOptions"
    tag="div"
    class="item-container dragArea"
    :list="list"
    :value="value"
    @input="emitter"
  >
    <div class="item-group" :key="el.id" v-for="el in realValue">
      <div class="item">
        {{ el.name }} <nested-test class="item-sub" :list="el.elements" />
      </div>
    </div>
  </draggable>
</template>

<script>
import draggable from "@/vuedraggable";
export default {
  name: "nested-test",
  methods: {
    emitter(value) {
      this.$emit("input", value);
    },
    change(event) {
      if (event.added) {
        console.log("change", event);
      }
    },
    end(event) {
      console.log("end", event);
    },
    log(event) {
      console.log("log", event);
    }
  },
  components: {
    draggable
  },
  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: { name: "description", put: true },
        disabled: false,
        // swapThreshold: 1,
        // invertSwap: true,
        ghostClass: "ghost"
      };
    },
    // this.value when input = v-model
    // this.list  when input != v-model
    realValue() {
      return this.value ? this.value : this.list;
    }
  },
  props: {
    value: {
      required: false,
      type: Array,
      default: null
    },
    list: {
      required: false,
      type: Array,
      default: null
    }
  }
};
</script>

<style>
.item-container {
  max-width: 34rem !important;
}

.item {
  position: relative;
}

.dragArea {
  outline: 1px dashed;
  background: rosybrown;
}
.dragArea .dragArea {
  outline: 1px dashed;
  background: rgb(147, 208, 226);
  position: absolute;
  top: 0px;
  left: 20px;
  opacity: 0.2;
  width: 100%;
  height: 100%;
  z-index: 2;
}
.dragArea .dragArea .item-group,
.dragArea .dragArea .item-sub,
.dragArea .dragArea .dragArea {
  display: none !important;
}
</style>
