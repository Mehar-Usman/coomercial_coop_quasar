<template>
  <div v-for="item in messages" :key="item">
    <q-item clickable @click="$emit('parentMethod')">
      <q-item-section avatar>
        <q-avatar
        size="45px"
        >
        <q-img
        :src="item.avatar ?? '/images/img1.png'"
        />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label class="text-weight-bold" :class="item.class">
          {{ item.title }}
        </q-item-label>
        <q-item-label class='flex'>
          <q-icon size="18px" :name="item.icon"/>
          <div>{{ item.iconLabel }}</div>
        </q-item-label>
        <q-item-label>
          {{ item.text }}
        </q-item-label>
      </q-item-section>
    </q-item>
  </div>
</template>
<script>
export default {
  name: 'MessageItem',
  props: {
    messages: Array,
  },
  emits: ['parentMethod'],
  data () {
    return {

    }
  },
  methods: {
    childEvent() {
      alert('child event');
    }
  }
}
</script>
