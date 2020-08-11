<template>
  <div id="contact">
    <!-- Page Header -->
    <Page title="Contact Me" />

    <!-- Contact Form -->
    <v-sheet class="my-5">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="6">
            <v-img src="/img/ifeoma-kola.png" alt="Ifeoma_Kola">
              <template v-slot:placeholder>
                <v-row align="center" justify="center" class="fill-height">
                  <v-progress-circular indeterminate color="primary">
                  </v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-col>
          <v-col cols="12" sm="6">
            <v-container>
              <p>
                Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse 
                quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat 
                quo voluptas nulla pariatur.
              </p>
              <v-form ref="form">
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      label="Name"
                      v-model="name"
                      placeholder=" "
                      :rules="[rules.required]"
                      required
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="Email"
                      v-model="email"
                      placeholder=" "
                      :rules="[rules.required, rules.email]"
                      required
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea
                      box 
                      label="Inquiry"
                      placeholder=" " 
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
                      depressed
                    >
                      Submit
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- Gallery -->
    <Gallery />
    
  </div>
</template>

<script>
import Page from "~/components/PageTitle";
import Gallery from "~/components/Gallery";

export default {
  components: {
    Page,
    Gallery
  },
  data() {
    return {
      name: '',
      email: '',
      inquiry: '',
      rules: {
        required: val => !!val || 'This field is required',
        email: val => /^\w+\@\w+$/.test(val) || 'Invalid email, use the format: abc@def.com'
      }
    }
  },
  head() {
    return {
      title: 'Contact Me'
    };
  }
}
</script>

<style>
</style>