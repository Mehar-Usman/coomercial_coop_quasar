<template>
  <div v-for="item in messages" :key="item">
    <q-item>
      <q-item-section avatar >
        <q-avatar class="items-end flex">
          <q-img :src="item.avatar"/>
        </q-avatar><br><br>
      </q-item-section>
      <q-item-section>
        <q-item-label :class="item.class">
          {{item.title}}
        </q-item-label>
        <q-item-label class="flex">
          <q-icon :name="item.icon"/>
          <div>{{item.iconLabel}}</div>
        </q-item-label>
        <q-item-label class="flex">
          <q-icon :name="item.icon2"/>
          <div style="font-size: 10px">{{item.icon2label}}</div>
          <q-icon class="q-ml-sm" :name="item.icon3"/>
          <div style="font-size: 10px">{{item.icon3Label}}</div>
        </q-item-label>
        <q-item-label>
          <div>{{item.text}}</div>
        </q-item-label>
      </q-item-section>
      <q-separator/>
    </q-item>
  </div>
</template>

<script>
export default {
  name: 'messageBoardPart',
  props: {
    messages: Array,
  },
  setup () {
    return {}
  }
}
</script>
