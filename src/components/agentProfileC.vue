<template>
  <div class="row q-py-md">
    <headerAll/>
  </div>
  <q-separator></q-separator>
<div class="row">
  <div class="col-xs-2 q-pa-sm flex">
    <q-avatar size="50px">
      <q-img src="/images/img1.png" />
    </q-avatar>
  </div>
  <div class="col-xs-7">
    <q-item-label class="texr-subtitle1 q-ml-sm q-mt-sm">
  Max Taylor <br> <span class="text-negative"> Re/Max 4000</span>
</q-item-label>
<div class="flex q-my-sm">
    <q-icon class="text-grey-6" name="person"></q-icon>
   <div class="text-grey " style="font-size: 9px;">
    120 W. Park Dr., 200, Grand Junction, CO 81505
   </div>
</div>
  </div>

  <div class="col-xs-2">
    <q-avatar>
      <q-img src="images/remaxPicture.svg"/>
    </q-avatar>
  </div>
  <div class="col-xs-12 q-px-md" >
    Platinum Club 2003 & 2005 Chairman Club 2005, 2006, 2007 #1 RE/MAX commercial agent Colorado 2007 #7 RE/MAX agent in Mountain States 2007 2011 CCIM Designee Turlock member MD marketing commercial properties, evaluation services, maintenance and
  </div>
  <div class="col-xs-5 flex q-px-md q-mt-md">
    <q-icon name="call" class="text-negative" size="25px" ></q-icon>
   <q-item-label class="q-pl-sm flex items-center text-weight-bold">
    970-250-1128
   </q-item-label>
    </div>
  <div class="col-xs-7 q-px-md flex q-mt-md">
    <q-icon name="mail" class="text-negative" size="25px"></q-icon>
   <q-item-label class="items-center flex text-weight-bold q-pl-sm">
    ray@gjproperties.com
   </q-item-label>
  </div>
  <div class="col-xs-12 flex q-px-sm q-mt-sm">
    <q-icon name="language " size="40px" ></q-icon>
    <div class="q-pl-md flex items-center text-weight-bold" > www.rayrickard.com </div>
  </div>
  <div class="q-px-sm q-mt-md col-xs-12">
    <q-btn rounded color="negative" icon="message" label="Send Message" />
  </div>
  <div class="text-h6 col-xs-12 q-px-md q-mt-md">
Message
  </div>
  <div class="col-xs-12">
    <childAgent :newCards="newCards"/>
  </div>

</div>
<div class="row q-py-md " style="background-color: #DDDDDD;">
    <footerAll/>
  </div>
</template>

<script>
import childAgent from "components/childAgent.vue";
import headerAll from "components/headerAll.vue";
import footerAll from "components/footerAll.vue";
export default {
  // name: 'ComponentName',
  components:{
    childAgent,headerAll,footerAll
  },
  data () {
    return {
      newCards:[
        {
          avatar:"images/shampi.png",
          title:'Looking for Restaurant Space in GJ',
          icon1:'person',
          icon1Label:'Ray Rickard',
          icon2:"location_on",
          icon2Label:"Grand Junction, CO",
          icon3:"calendar_month",
          icon3Label:"20/06/2023",
          avatar2:"images/remaxPicture.svg",
          subtitle:"I have a client looking for restaurant space in GJ. If you have anything or know of anything....",
        },
        {
          avatar:"images/shampi.png",
          title:'Looking for Restaurant Space in GJ',
          icon1:'person',
          icon1Label:'Ray Rickard',
          icon2:"location_on",
          icon2Label:"Grand Junction, CO",
          icon3:"person",
          icon3Label:"20/06/2023",
          avatar2:"images/remaxPicture.svg",
          subtitle:"I have a client looking for restaurant space in GJ. If you have anything or know of anything....",
        },

        {
          avatar:"images/shampi.png",
          title:'Looking for Restaurant Space in GJ',
          icon1:'person',
          icon1Label:'Ray Rickard',
          icon2:"location_on",
          icon2Label:"Grand Junction, CO",
          icon3:"calendar_month",
          icon3Label:"20/06/2023",
          avatar2:"images/remaxPicture.svg",
          subtitle:"I have a client looking for restaurant space in GJ. If you have anything or know of anything....",
        }
      ]
    }
  }
}
</script>
