<template>
  <q-page padding>
    <!-- content -->

    <!-- ==== form section start here ===== -->
    <div class="row">
      <div class="col-4">
        <div class="text-h5">Crud</div>
        <q-input label="Name" v-model="form.name" filled class="q-mt-md" />
        <q-input label="Email" v-model="form.email" filled class="q-mt-md" />
        <q-input label="Address" v-model="form.address" filled class="q-mt-md" />
        <q-btn v-if="addButton" @click="addRecord" color="primary" label="add" icon="add" class="q-mt-md" />
        <q-btn v-if="updateButton" @click="updateRecord" color="secondary" label="update" icon="update" class="q-mt-md" />
      </div>
    </div>
    <!-- ==== form section start here ===== -->

    <!-- ====== table section start here -->
    <q-markup-table class="q-mt-md">
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Email</th>
          <th class="text-left">Address</th>
          <th class="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data,index) in dataArray" :key="index">
          <td class="text-left">{{ data.name }}</td>
          <td class="text-left">{{ data.email }}</td>
          <td class="text-left">{{ data.address }}</td>
          <td class="text-center">
            <q-btn icon="edit" color="teal-10" @click="editRecord(index)" />
            <q-btn icon="delete" color="red-10" class="q-ml-sm" @click="deleteRecord(index)" />
          </td>
        </tr>
      </tbody>
    </q-markup-table>
    <!-- ====== table section end here -->


  </q-page>
</template>

<script>
import { Notify } from 'quasar'
export default {
  name: 'crud',
  data() {
    return {
      form: {
        name: '',
        email: '',
        address: ''
      },
      dataArray: [],
      addButton: true,
      updateButton: false,
      id: 0,
      editId: null
    }
  },
  methods: {
    addRecord() {
      const obj = {
        name: this.form.name,
        email: this.form.email,
        address: this.form.address,
        id: ++this.id
      }
      if(obj.name != '' && obj.email != '' && obj.address != '') {
        this.dataArray.push(obj)
        this.resetForm()
        console.log(this.dataArray)
        Notify.create({
          message: 'data add sucssfully',
          icon: 'add',
          color: 'primary',
          position: 'top'
        })
      } else {
        Notify.create({
          message: 'please fill all the fileds',
          icon: 'warning',
          color: 'amber',
          position: 'top'
        })
      }
    },
    resetForm() {
      this.form.name = '',
      this.form.email = '',
      this.form.address = ''
    },
    deleteRecord(item) {
      console.log(item)
      this.dataArray.splice(item, 1)
      Notify.create({
        message: 'data delete sucssfully',
        icon: 'delete',
        color: 'red-10',
        position: 'top'
      })
    },
    editRecord(item) {
      this.editId = this.dataArray.findIndex(i => i == item.id)
      console.log(this.editId)
      this.addButton = false
      this.updateButton = true
      this.form.name =  this.dataArray[item].name
      this.form.email =  this.dataArray[item].email
      this.form.address =  this.dataArray[item].address
    },
    updateRecord() {
      this.updateButton = false
      this.addButton = true
      const obj = {
        name: this.form.name,
        email: this.form.email,
        address: this.form.address,
        id: ++this.id
      }
      this.editId = obj
      Notify.create({
        message: 'data update sucssfully',
        icon: 'update',
        color: 'secondary',
        position: 'top'
      })
    }
  }
}
</script>



