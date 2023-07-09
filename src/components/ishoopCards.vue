<template>
  <div>
    <div class="row">
      <div class="col-md-6 flex justify-center" :class="reverse ? 'order-last' : ''">
        <q-img :src="image" :alt="title" width="500px" />
      </div>
    <div class="col-md-6 flex items-center q-px-md">
      <div class="q-ma-sm q-pa-sm q-gutter-sm ">
        <q-card-section class="">
          <q-card-title class="text-h4 text-weight-bold">{{ obj_data.title }}</q-card-title>
        </q-card-section>

        <q-card-section class="">
          <p class="text-subtitle1">{{ description }}</p>
        </q-card-section>

        <q-card-actions>
          <q-btn flat color="primary" label="Action 1" @click="performAction1" />
          <q-btn flat color="secondary" label="Action 2" @click="performAction2" />
        </q-card-actions>
      </div>
    </div>
    </div>

  </div>
</template>


<script>
export default {
  props: {
    title: String,
    description: String,
    image: String,
    component1Image: 'https://www.ishopeco.com/images/screen-laptop.webp',
    reverse: Boolean,
    obj_data: Object
  },
  methods: {
    performAction1() {
      // Handle action 1
      console.log('Performing action 1');
    },
    performAction2() {
      // Handle action 2
      console.log('Performing action 2');
    }
  }
};
</script>
