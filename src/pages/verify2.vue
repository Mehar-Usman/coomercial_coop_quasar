<template>
  <q-page>
    <!-- content -->
    <div class="row justify-center ">
      <div class="col-md-12 q-px-lg">
        <div class="text-h6 text-grey q-mt-lg">
          SUBSCRIPTION PLAN
        </div>
        <div class="text-negative flex">
          Start a paid plan with 90 days Free Trial
        </div>
        <div class="flex justify-center  q-mt-lg">
          <q-btn class="start-rounded text-subtitle1" color="negative" label="Monthly" />
          <q-btn class="end-rounded text-subtitle1" label="Yearly" />
        </div>
        <div class=" rounded-borders   justify-center flex   q-mt-lg">
          <!-- <div class="q-pa-sm">
            $19.00 / MONTHLY
          </div> -->
          <q-btn label="    $19.00 / MONTHLY" class="text-subtitle1 q-px-lg"></q-btn>
        </div>
        <div class=" q-mt-lg q-mb-xl ">
          <q-input outlined color="black" bg-color="grey-4" v-model="password" label="Activation Code ">
            <template v-slot:prepend>
              <q-icon name="key" />
            </template>
          </q-input>
        </div>
        <div class="q-my-xl flex justify-center" :class="[$q.screen.gt.xs ? 'grather than xs': 'xs', ]">
          <q-btn class="bg-negative text-white text-h6 text-capitalize q-mt-xl"  style="width: 200px;">
            Verify
          </q-btn>
        </div>

      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'verify2',
}
</script>
<style scoped>
.start-rounded {
  border-radius: 8px 0 0 8px;
}

.end-rounded {
  border-radius: 0 8px 8px 0;
}
</style>
