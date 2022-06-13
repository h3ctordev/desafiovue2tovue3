<template>
  <b-row align-h="center">
    <b-col cols="9">
      <h4>Tabla de Datos:</h4>
      <b-table striped hover :items="items" :fields="fields"></b-table>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'VTable',
  props: {
    fields: {
      type: Array,
      require: true,
    },
    items: {
      type: Array,
      require: true,
    },
  },
};
</script>

<style></style>
