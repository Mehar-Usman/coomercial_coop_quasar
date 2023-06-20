<template>
  <q-page>
    <div class="row">
      <div class="col-xs-12 q-pa-lg q-mt-xl">
        <div class="text-subtitle1 text-weight-bolder ">
          VERIFY YOUR EMAIL ADDRESS
        </div>
        <div class="q-mt-md ">
          Before proceeding, please check your email xyz@emailaddress.com for an activation code. If you did not receive
          the email <br>
         <span class="text-weight-bold text-negative" >SEND ACTIVATION CODE AGAIN</span>
        </div>
        <div class=" q-mt-lg">
        <q-input color="black" bg-color="grey-4" filled v-model="password" label="Activation Code">
          <template v-slot:prepend>
            <q-icon name="key" />
          </template>
        </q-input>
      </div>
      <div class="q-my-xl flex justify-center">
        <q-btn class="bg-negative text-white text-h6 text-capitalize" style="width: 200px;">
          Verify
        </q-btn>
      </div>

      </div>
      <div class="col-xs-12">
        <div>
        <q-img src="images/download 1.svg"/>
      </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Verify',
}
</script>
