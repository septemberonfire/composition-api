<template>
  <div class="card">
    <p>Название: <strong>{{ name }}</strong></p>
    <p>Версия: <strong>{{ version }} ({{ doubleVersion }})</strong></p>
    <button class="btn warning" @click="changeBack">Вернуться на 3 версию</button>
  </div>
</template>



<script>
import { computed } from 'vue';
export default {
  props: ['name', 'version'],
  emits: ['change-back'],
  setup(props, context) {

    function change() {
      context.emit('change-back', 3)
    }

    return {
      changeBack: change,
      doubleVersion: computed(() => props.version * 2)
    }
  }
}
</script>