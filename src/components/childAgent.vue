<template>
  <div v-for="items in newCards" key="items">

    <div class="row">
      <div class="col-xs-2 flex items-center justify-center">
        <q-avatar class=" ">
          <q-img :src="items.avatar" />
        </q-avatar>
      </div>
      <div class="col-xs-8">
        <div class="text-primary text-weight-bold q-pl-sm q-mb-sm" style="font-size: 15px;">{{ items.title }}</div>
        <div class="flex q-mb-sm">
          <q-icon :name="items.icon1" />
          <q-item-label style="font-size: 12px;">
            {{ items.icon1Label }}
          </q-item-label>
        </div>
        <div class="flex">
          <q-icon :name="items.icon2" />
          <q-item-label style="font-size: 9px;">
            {{ items.icon2Label }}
          </q-item-label>
          <q-icon class="q-pl-md" :name="items.icon3" />
          <q-item-label style="font-size: 9px;">
            {{ items.icon3Label }}
          </q-item-label>
        </div>
      </div>
      <div class="col-xs-2 items-center flex">
        <q-avatar>
          <q-img :src="items.avatar2"/>
        </q-avatar>
      </div>
      <div class="col-xs-12 q-my-md q-pl-xl">
        <q-item-label class="q-px-md">
        {{ items.subtitle }}
        </q-item-label>
      </div>
    </div>
    <q-separator color="grey q-my-sm" inset></q-separator>
  </div>
</template>

<script>
export default {
  name: 'childAgent',
  props: {
    newCards: Array,
  },
  setup() {
    return {}
  }
}
</script>
