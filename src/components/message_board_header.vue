<template>
  <!-- Parent to child then use ref -->
  <!-- child to parent then use emit funtion -->
  <!-- Component use for message Board header -->
  <!-- USe Method Hook /// Method hook use for deifine the funtion   -->

  <!-- Composition api And optional Api -->
<!-- composition api is used for for call single component  -->
  <div class="row ">
    <div class="col-3">
    <q-img src="images/coop-logo 2.png"/>
    </div>
    <div class="col-9 flex justify-end ">
     <q-icon ref="notifications" name="notifications" size="40px">
      <q-badge floating color="red" rounded />
     </q-icon>
      <q-btn round dense flat color="black" icon="person" size="33px"/>
    </div>
  </div>
  <q-space></q-space>"
<MessageItem ref="child" @parentMethod="ParentEvent" :messages="messages"/>
<q-btn @click="$refs.child.childEvent()" color="primary">ParentBtn</q-btn>
<q-btn @click="useRef" color="primary">Using Ref</q-btn>
</template>
<script>
import MessageItem from "components/MessageItem.vue";

export default {
  name: 'message_board_header',
  components: {
    MessageItem
  },
  data () {
    return {
      messages: [
        {
          avatar: '/images/img1.png',
          title: 'usman',
          class: 'text-red',
          icon: 'person',
          iconLabel: 'Max Taylor',
          text: "I've had a significant price reduction on this medical office and procedure space....",
        },
        {
          avatar: '/images/Dgz0UFpO9de66rCcuser20D6C63821-55AE-4FA7-AD3A-EEB7585A1ADB 1.png',
          title: 'Price Reduction - Bring a buyer',
          class: 'text-blue',
          icon: 'home',
          iconLabel: 'Max Talor',
          text: "I've had a significant price reduction on this medical office and procedure space....",
        },
        {
          title: 'Price Reduction - Bring a buyer',
          class: 'text-red',
          icon: 'person',
          iconLabel: 'Max Talor',
          text: "I've had a significant price reduction on this medical office and procedure space....",
        },
        {
          avatar: '/images/Dgz0UFpO9de66rCcuser20D6C63821-55AE-4FA7-AD3A-EEB7585A1ADB 1.png',
          title: 'Price Reduction - Bring a buyer',
          class: 'text-blue',
          icon: 'home',
          iconLabel: 'Max Talor',
          text: "I've had a significant price reduction on this medical office and procedure space....",
        },
      ]
    }
  },

  // methods hock used for defining functions
  methods: {
    ParentEvent() {
      alert('got here')
    },
    useRef() {
      console.log(this.$refs.notificaton);
    }
  }
}
</script>
