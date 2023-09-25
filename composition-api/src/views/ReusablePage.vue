<template>

  <AppAlert
  v-if="alert" 
  title="Работа с Composition" 
  type="primary"
  @close="close"
  ></AppAlert>
<div class="card">
  <h1>Переиспользование</h1>
  <button class="btn primary" @click="toggle">{{ alert ? 'Закрыть' : 'Показать' }} сообщение</button>
  <button class="btn" @click="navigate">Перейти на главную</button>
</div>
</template>

<script>
import {useRouter, useRoute} from 'vue-router'
import AppAlert from '../components/AppAlert.vue'
import { useAlert } from '../use/alert'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()

    const navigate = () => {
      router.push('/')
    }

    return {
      navigate,
      ...useAlert()
    }
  },
  components: { AppAlert }
}
</script>