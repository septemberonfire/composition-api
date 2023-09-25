<template>
  <AppAlert
  v-if="alert" 
  title="Работа с Composition" 
  type="primary"
  @close="close"
  ></AppAlert>
<div class="card">
      <h1>Vue Composition Api</h1>
      <small>data, methods, computed, watch</small>
      <hr>

      <div class="form-control">
        <input type="text" ref="textInput">
      </div>
      <button class="btn" @click="change">Изменить</button>
      <button class="btn danger" @click="toggle">Alert</button>
    </div>
    <FrameworkInfo :name="name" :version="version" @change-back="changeBack"></FrameworkInfo>

</template>

<script>
import {ref, reactive, toRefs, computed, watch} from 'vue'
import FrameworkInfo from '../components/FrameworkInfo.vue'
import AppAlert from '../components/AppAlert.vue'
import { useAlert } from '../use/alert'

export default {
  setup() {
    const name = ref('VueJS')
    const version = ref(3)
    const textInput = ref(null)

    const {alert, close, toggle} = useAlert()

    const framework = reactive({
      name: 'Vue JS',
      version: 3
    })

    function changeInfo() {
      name.value = 'Vue JS!!!'
      version.value = 4
    }

    function changeBack(num) {
      version.value = num
    }

    return {
      name, version,
      change: changeInfo,
      textInput,
      changeBack, 
      close, 
      toggle, 
      alert
    }
  },
  components: {FrameworkInfo, AppAlert}
}
</script>