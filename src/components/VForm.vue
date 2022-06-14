<template>
  <b-container class="pb-5">
    <b-row align-h="center">
      <b-col cols="9">
        <Form @submit="onSubmit" :validation-schema="schema">
          <div v-for="(field, $index) in fields" :key="$index">
            <label>
              {{ field.label }}
              <span
                class="text-danger font-weight-bold"
                v-if="field.rules.required"
              >
                *
              </span>
            </label>
            <Field
              v-model.lazy="models[field.key]"
              class="form-control"
              :name="field.key"
              :type="field.type || 'text'"
              :key="$index"
            ></Field>
            <ErrorMessage
              class="text-danger font-weight-bold"
              :name="field.key"
            />
          </div>
          <b-col class="text-center">
            <button class="mt-4 btn btn-primary" type="submit">Enviar</button>
          </b-col>
        </Form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { Field, Form, ErrorMessage } from 'vee-validate';
import { ref } from 'vue';
import * as yup from 'yup';
import fields from '@/db/fields';

export default {
  name: 'VForm',
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  props: {
    fields: {
      type: Array,
      require: true,
    },
    values: {
      type: Object,
      require: true,
    },
  },
  setup(props, contex) {
    const validators = {};

    fields.every((f) => {
      validators[f.key] = f.rules;
      return true;
    });
    const schema = yup.object(validators);

    const models = ref({});
    const onSubmit = (value, { resetForm }) => {
      contex.emit('send-form', models.value);
      resetForm();
    };

    return {
      models,
      onSubmit,
      schema,
    };
  },
};
</script>

<style></style>
