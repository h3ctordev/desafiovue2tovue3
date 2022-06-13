<template>
  <div id="app">
    <b-container>
      <h2 class="my-5 text-center">Desafio Formulario - Héctor Bustos</h2>
      <v-form :fields="fields" :values="values" @send-form="onSendForm" />
      <v-data-table :fields="fields" :items="items" />
    </b-container>
  </div>
</template>

<script>
import { ref } from 'vue';
import fieldList from '@/db/fields';
import VForm from '@/components/VForm.vue';
import VDataTable from '@/components/VDataTable.vue';
export default {
  name: 'App',
  components: {
    VForm,
    VDataTable,
  },
  setup() {
    console.log(fieldList);
    const items = ref([]);
    const values = ref({
      firstname: '',
      lastname: '',
      dob: '',
      email: '',
      password: '',
    });
    const fields = ref(fieldList);

    const onSendForm = (value) => {
      items.value.push({ ...value });
      values.value = {
        firstname: '',
        lastname: '',
        dob: '',
        email: '',
        password: '',
      };
    };

    return {
      items,
      values,
      onSendForm,
      fields,
    };
  },
  // data() {
  //   return {
  //     items: [],
  //     values: {
  //       firstname: '',
  //       lastname: '',
  //       dob: '',
  //       email: '',
  //       password: '',
  //     },
  //   };
  // },
  // methods: {
  //   onSendForm(value) {
  //     this.items.push({ ...value });
  //     this.values = {
  //       firstname: '',
  //       lastname: '',
  //       years: '',
  //     };
  //   },
  // },
};
</script>
