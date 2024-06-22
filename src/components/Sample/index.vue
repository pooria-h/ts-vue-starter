<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    //
    return {
      //
    };
  },
});
</script>

<template>
  <div class="sample">
    <h2 class="title">
      Sample component
    </h2>
    <div>
      content
    </div>
  </div>
</template>

<style scoped>
.sample {
  margin: 20px;
}
.title {
  @apply text-xl font-bold mb-3 ml-1;
}
</style>
