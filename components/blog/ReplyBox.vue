<template>
  <v-form ref="reply">
    <v-row>
      <v-col cols="12">
        <v-text-field
          v-model="name"
          label="Full Name"
          :rules="[rules.required]"
          required
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="email"
          label="Email Address"
          :rules="[rules.required, rules.email]"
          required
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-textarea
          v-model="inquiry"
          label="Comment"
          :rules="[rules.required]"
          outlined
          required
        ></v-textarea>
      </v-col>
      <v-col cols="12">
        <v-btn color="primary" block x-large depressed> Submit </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      inquiry: '',
      snackbar: false,
      rules: {
        required: (val) => !!val || 'This field is required',
        email: (val) =>
          /^\w+@\w+$/.test(val) || 'Invalid email, use the format: abc@def.com',
      },
    }
  },
}
</script>
