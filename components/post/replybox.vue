<template>
  <v-form ref="reply">
    <v-snackbar
      color="success"
      v-model="snackbar"
      dark
      bottom right
    >
      Your Reply Has Been Posted Successfully!
    </v-snackbar>
    <v-row>
      <v-col cols="12">
        <v-text-field
          label="Full Name"
          v-model="name"
          :rules="[rules.required]"
          required
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          label="Email Address"
          v-model="email"
          :rules="[rules.required, rules.email]"
          required
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-textarea
          box 
          label="Reply" 
          v-model="inquiry"
          :rules="[rules.required]"
          outlined
          required
        ></v-textarea>
      </v-col>
      <v-col cols="12">
        <v-btn
          color="primary"
          block
          x-large
          @click="snackbar=!snackbar"
          :disabled="!formIsValid"
        >
          Submit
        </v-btn>
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
        required: val => !!val || 'This field is required',
        email: val => /^\w+\@\w+$/.test(val) || 'Invalid email, use the format: abc@def.com'
      }
    }
  },
  computed: {
    formIsValid() {
      return (
        this.name &&
        this.email &&
        this.inquiry
      )
    }
  },
}
</script>

<style>

</style>