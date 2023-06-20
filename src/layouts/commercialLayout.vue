<template>
  <q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->
    <q-header class="bg-transparent">

    <q-img src="images/mainImage.jpg">
      <div class="absolute-top text-white text-center text-h6 bg-transparent">
        Stay Up To Date With <br>
        The Co-Opportunity <br>
        Message Board
      </div>
    </q-img>
    </q-header>

    <!-- (Optional) The Header -->
    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'commercialLayout',

  setup() {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>
