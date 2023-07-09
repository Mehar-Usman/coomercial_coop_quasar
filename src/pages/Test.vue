<template>
  <q-page padding>
    <!-- content -->
    <p>a {{ a }}</p>
    <p>b {{ b }}</p>
    <p>sum {{ sum }}</p>
    <p>discount percentage {{ discont_percentage }}</p>
    <p>Discounted Price {{ discounted_price }}</p>
<q-btn label="go outside" to="/"/>
<q-btn label="Test" @click="doSomething"/>

<q-card flat bordered class="my-card q-mt-md" v-for="student in students">
      <q-card-section>
        <div class="text-h6" :class="student.age > 50 ? 'text-red' : 'text-green'">{{ student.name }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        Age: {{ student.age}}
      </q-card-section>

      <q-separator inset />

      <q-card-section>
        City {{ student.area }}
      </q-card-section>
    </q-card>

  </q-page>
</template>

<script>
export default {
  data() {
    return {
      a: 10,
      b: 20,
      sum: 0,
      discont_percentage: 10,
      students: [
        {name: "Butt Sahib", age: 35, area: 'Johar Town'},
        {name: "Saib", age: 22, area: 'Johar Town'},
        {name: "Bahawal", age: 35, area: 'Wapda town'},
        {name: "Atif", age: 23, area: 'Johar Town'},
        {name: "Zohaib", age: 70, area: 'Swat'},
        {name: "Abu Usman", age: 35, area: 'Johar Town'},
      ]
    }
  },
  beforeCreate() {
      console.log('before create')
  },
  created() {
    console.log(' created')

  },
  beforeMount() {
    console.log('before mounted')

  },
  beforeDestroy() {
    console.log('before destroy')
  },
  destroyed() {
    console.log('destroyed')
  },
  mounted() {
    console.log('mounted')
  },
  methods: {
      doSomething() {
        this.a =20;
        this.discont_percentage =20
      },
      testmethod() {

      }
  },
  computed: {
      discounted_price() {
        this.sum = this.a + this.b
        return this.sum - ((this.sum * this.discont_percentage) /100)
      }
  },
  watch: {
    discont_percentage(new_value, old_val) {
      console.log(old_val, new_value)

    }
  }
}
</script>
