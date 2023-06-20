<template>
  <div class="row q-pa-md">
    <div class="col-xs-3">
      <q-avatar rounded>
        <q-img src="images/coop-logo 2.png"/>
      </q-avatar>
    </div>
    <div class="col-xs-9 flex justify-end items-center">
      <q-icon round name="notifications" size="33px">
        <q-badge floating label="." class="bg-transparent" color="red" style="border-radius: 60px"/>
      </q-icon>
      <q-icon name="person" size="30px"/>
    </div>
    <div class="col-xs-12 q-mb-md">
      <div class="text-h5">
        Message Board
      </div>
    </div>

    <div class="col-xs-9 ">
      <q-input rounded outlined v-model="text" label="Rounded filled" class="text-black ">
        <template v-slot:append>
          <q-icon name="search" class="bg-negative text-h4 text-white q-pa-sm" style="border-radius: 50px"/>
        </template>
      </q-input>
    </div>
    <div class="col-xs-3 flex justify-end q-mb-md">
      <q-icon name="tune" size="50px" class="bg-negative text-white flex justify-center q-pa-sm rounded-borders"
              style="border-radius: 40px">
        <div class="q-pa-md ">
          <q-menu>
            <div class="row q-pa-md ">
              <div class="col-12">
                <div class="text-h6 q-mb-md">Search Filters</div>
              </div>
              <div class="col-xs-12">
                <q-btn-group class="bg-transparent" style="border-radius: 20px">
                  <q-btn size="15px" :class="activeBtnFirst === 'all' ? 'bg-negative text-white' : ''" label="All"
                         @click="activeBtnFirst='all'"/>
                  <q-btn size="15px" :class="activeBtnFirst === 'commercial' ? 'bg-negative text-white' : ''"
                         label="Commercial" @click="activeBtnFirst='commercial'"/>
                  <q-btn size="15px" :class="activeBtnFirst === 'residential' ? 'bg-negative text-white' : ''"
                         label="residential" @click="activeBtnFirst='residential'"/>
                </q-btn-group>
              </div>
              <div class="col-sm-12 q-mt-md">
                <div class="flex">
                  <q-icon size="30px" class="text-negative" name="attach_money" label="Price"/>
                  <q-item-label class="text-subtitle1 flex items-center text-weight-bold">Price</q-item-label>
                </div>
                <div class="col-xs-12">
                  <div class="row q-col-gutter-md">
                    <div class="col-xs-6">
                      <q-input v-model="text" label="Min price"/>
                    </div>
                    <div class="col-xs-6">
                      <q-input v-model="text" label="Max Price"/>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 q-mt-md">
                <div class="flex">
                  <q-icon size="25px" class="text-negative" name="contacts" label="Price"/>
                  <q-item-label class="text-subtitle1 flex items-center q-pl-sm text-weight-bold">Select Agent
                  </q-item-label>
                </div>
                <div class="col-xs-12">
                  <div class="q-mt-sm" style="max-width: 300px">
                    <div class="q-gutter-md">
                      <q-select v-model="model" :options="options" label="Agent Name"/>
                    </div>
                  </div>
                </div>
              </div>

                <div class="col-xs-12 q-mt-md">
                  <div class="flex">
                    <q-icon name="edit_calendar" size="25px" class="text-negative"></q-icon>
                    <q-item-label class="flex items-center q-pl-sm text-subtitle1 text-weight-bold">Search By Listing
                      Date
                    </q-item-label>
                  </div>
                </div>
              <div class="row q-col-gutter-md">
                <div class="col-xs-6 q-mt-sm">
                  <div>form</div>
                  <q-input color="black" v-model="text" label="Label">
                    <template v-slot:append>
                      <q-icon name="calendar_month"/>
                    </template>
                  </q-input>
                </div>
                <div class="col-xs-6 q-mt-sm">
                  <div>To</div>
                  <q-input color="black" v-model="text" label="Label">
                    <template v-slot:append>
                      <q-icon name="calendar_month"/>
                    </template>
                  </q-input>
                </div>
              </div>
              <div class="col-xs-12 q-mt-md">
                <div class="flex">
                  <q-icon size="25px" class="text-negative" name="location_on" label="Price"/>
                  <q-item-label class="text-subtitle1 flex items-center q-pl-sm text-weight-bold">Search By Location
                  </q-item-label>
                </div>
                <div class="col-xs-12">
                  <div class="q-mb-lg" style="max-width: 300px">
                    <div class="q-gutter-md">
                      <q-select v-model="model2" :options="optionss" label="select Location"/>
                    </div>

                  </div>
                </div>
              </div>
              <div class="col-xs-12 q-mb-sm">
                <q-btn color="negative" icon="search" label="Search" />
                <q-btn color="black" class="q-ml-sm" label="Cancel" />
              </div>
            </div>
          </q-menu>
        </div>
      </q-icon>
    </div>
    <div class="col-xs-12 text-center">
      <q-btn-group class="bg-transparent" style="border-radius: 20px">
        <q-btn size="15px" :class="activeBtn === 'all' ? 'bg-negative text-white' : ''" label="All"
               @click="activeBtn='all'"/>
        <q-btn size="15px" :class="activeBtn === 'commercial' ? 'bg-negative text-white' : ''" label="Commercial"
               @click="activeBtn='commercial'"/>
        <q-btn size="15px" :class="activeBtn === 'residential' ? 'bg-negative text-white' : ''" label="residential"
               @click="activeBtn='residential'"/>
      </q-btn-group>
    </div>
    </div>

    <div class="col-xs-12">
      <message-board-part :messages="messages"/>
    </div>
    <div class="row bg-grey-4 q-pa-sm">
      <div class="col-xs-3 justify-center flex">
        <q-btn flat dense  outlined class="my-outlined-icon"  icon="outgoing_mail" size="30px"/>
    </div>
    <div class="col-xs-3 justify-center flex">
        <q-btn flat dense  icon="add_comment" size="30px"/>
    </div>
    <div class="col-xs-3 justify-center flex">
        <q-btn flat dense  icon="forum" size="30px"/>
    </div>
    <div class="col-xs-3 justify-center flex">
        <q-btn flat dense  icon="settings" size="30px"/>
    </div>
  </div>
</template>
<script>
import MessageBoardPart from "components/messageBoardPart.vue";

export default {
  name: 'messageHeader2',
  components: {MessageBoardPart},

  data() {

    return {
      mobileData: true,
      bluetooth: false,
      activeBtnFirst: 'all',
      activeBtn: "all",

      model: null,
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ],
      model2:null,
      optionss:['lahore','islamabad','karachi','Islamabad'],
      messages: [
        {
          avatar: "/images/img1.png",
          title: "Price Reduction - Bring a buyer",
          class: "text-negative",
          icon: "person",
          iconLabel: "Max taylor",
          icon2: "location_on",
          icon2label: "Grand Junction, CO",
          icon3: "event",
          icon3Label: "17/06/2023",
          text: "I've had a significant price reduction on this medical office and procedure space...."
        },
        {
          avatar: "/images/img1.png",
          title: "Price Reduction - Bring a buyer",
          class: "text-negative",
          icon: "person",
          iconLabel: "Max taylor",
          icon2: "person",
          icon2label: "Grand Junction, CO",
          icon3: "date",
          icon3Label: "17/06/2023",
          text: "I've had a significant price reduction on this medical office and procedure space...."
        },
        {
          avatar: "/images/img1.png",
          title: "Price Reduction - Bring a buyer",
          class: "text-negative",
          icon: "person",
          iconLabel: "Max taylor",
          icon2: "locaion",
          icon2label: "Grand Junction, CO",
          icon3: "date",
          icon3Label: "17/06/2023",
          text: "I've had a significant price reduction on this medical office and procedure space...."
        },
        {
          avatar: "/images/img1.png",
          title: "Price Reduction - Bring a buyer",
          class: "text-negative",
          icon: "person",
          iconLabel: "Max taylor",
          icon2: "locaion",
          icon2label: "Grand Junction, CO",
          icon3: "date",
          icon3Label: "17/06/2023",
          text: "I've had a significant price reduction on this medical office and procedure space...."
        }
      ]
    }
  }
}
</script>
<style scoped>
  .my-outlined-icon {
    outline-color: red;
    outline-width: 2px;
  }
</style>
