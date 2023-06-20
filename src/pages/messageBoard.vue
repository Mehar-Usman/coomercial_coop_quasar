<!-- Message Board Page -->
<template>
  <q-page>
    <div class="row">
      <div class="col-xs-12">
        <message_board_header/>
      </div>
    </div>
    <!-- content -->
  </q-page>
</template>

<script>
import message_board_header from 'src/components/message_board_header.vue';
export default {
  name: 'PageName',
  components:{
    message_board_header
  }
}
</script>
