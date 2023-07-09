<template>
  <q-page>
    <!-- import HeaderAll from 'src/components/headerAll.vue'; -->
    <div class="row q-py-lg ">
      <HeaderAll />
    </div>
    <div class="row">
      <div class="col-xs-3 q-px-md justify-end flex">
          <q-avatar>
          <q-img src="images/shampi.png" rounded/>
        </q-avatar>
      </div>
      <div class="col-xs-5">
        <div>
          Max taylor
        </div>
        <div  class="text-negative" style="font-size: 10PX;">
          ColdWell Banker Commercial
        </div>
        <div class="flex">
          <q-icon name="location_on"/>
          <q-item-label class="text-grey">
            Grand Junction, CO
          </q-item-label>
        </div>
      </div>
      <div class="col-xs-4">
        <div class="flex justify-center">
          <q-avatar>
          <q-img src="/images/remaxPicture.svg" />
        </q-avatar>
        </div>
          <div class="flex justify-center">
            <q-icon name="person"/>
            <q-item-label>
              24/06/2023
            </q-item-label>
          </div>
      </div>
      <div class="col-xs-12 ">
        <div class="q-px-lg text-negative text-subtitle1">
        Multi Tenant Retail/ Office Property
        </div>
        <div class="q-px-lg">
          I have a client that is looking to purchase a building with multiple units so they can move their businesses into a single building. Need about 4,000 SF of high visibility retail/office with designated parking.
        </div>
        <div class="q-px-xl q-mt-md">
          <q-img src="images/image 3.png"/>
        </div>
        <div class="q-px-lg q-mt-lg">
          <q-btn icon="message" label="Direct Message" class="text-white q-px-md q-py-md" rounded  style="background-color: #cd2027;"/>
          <q-btn outlined icon="report" label="Report" dense rounded class="q-pa-md q-ml-md bg-red-11"/>
        </div>
        <div class="q-pa-lg text-weight-bold text-subtitle1">
          Public replies
        </div>
        <div class="row">
          <div class="col-xs-3 flex justify-center">
            <q-avatar>
              <q-img src="images/shampi.png"/>
            </q-avatar>
          </div>
          <div class="col-xs-4">
            <div>
              Ray Rickard
            </div>
          </div>
        </div>
      </div>
      <q-input label="name" v-model="name">

      </q-input>
      <q-btn label="push" @click="data.push(name)">

      </q-btn>
    </div>
  </q-page>
</template>

<script>
import HeaderAll from 'src/components/headerAll.vue';
export default {
  // component: {
  //     headerAll
  // }
  // name: 'PageName',
  // ,
  components: { HeaderAll },
  data () {
    return {
      name: null,
      arr: []
    }
  },

  watch: {
    name() {
      console.log(this.name)
    },
    arr() {
      console.log(this.arr)
    }
  }
}
</script>
<style lang="sass">

</style>
