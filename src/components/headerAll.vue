<template>
    <div class="col-xs-6">
      <q-icon name="arrow_back" class="q-pa-sm" size="30px"></q-icon>
      <q-avatar rounded>
        <q-img src="images/coop-logo 2.png"/>
      </q-avatar>
    </div>
    <div class="col-xs-6 flex justify-end items-center">
        <q-icon round name="notifications"  size="33px">
          <q-badge floating label="." class="bg-transparent" color="red" style="border-radius: 60px"/>
        </q-icon>
        <q-icon class="q-pa-sm" name="person" size="30px"/>
    </div>
  </template>

<script>
export default {
  name: 'HeaderAll',
  setup () {
    return {}
  }
}
</script>
