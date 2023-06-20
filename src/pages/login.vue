<template>
  <q-page>
    <!-- content -->
    <div class="row justify-center">
      <div class="col-xs-12 q-my-lg text-h5 flex justify-center">
        Login
      </div>
      <div class="col-xs-12 q-px-lg">
        <q-input color="black" bg-color="grey-4" filled v-model="text" label="Email">
          <template v-slot:prepend>
            <q-icon name="mail" />
          </template>
        </q-input>
      </div>
      <div class="col-xs-12 q-px-lg q-mt-md">
        <q-input color="black" bg-color="grey-4" filled v-model="password" label="Password">
          <template v-slot:prepend>
            <q-icon name="key" />
          </template>
          <template v-slot:append>
            <q-icon name="visibility" />
          </template>
        </q-input>
      </div>
      <div class="col-xs-12 q-my-xl justify-center flex">
        <q-btn class="bg-negative text-white text-h6" style="width: 200px;">
          Login
        </q-btn>
      </div>
      <div class="col-xs-12 q-mb-xl">
        <div class="flex justify-center">
          Do not have an account? <span class="text-negative"> Signup</span>
        </div>
      </div>
      <div class="col-xs-12 q-mt-md">
        <q-img src="images/download 1.svg"/>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>
