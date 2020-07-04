<template>
  <div id="about">
    <!-- Page Header -->
    <Page title="About Me" />

    <v-sheet class="my-2">
      <v-container>
        <heading title="Who is Ifeoma Kola?" />
        <v-row justify="center">
          <v-col cols="12" sm="6">
            <v-img src="/img/ifeoma-kola.png" alt="Ifeoma_Kola" max-height="550">
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
                quo voluptas nulla pariatur. Lorem ipsum dolor sit amet, consectetur 
                adipisicing elit. Est blanditiis dolorem culpa incidunt minus 
                dignissimos deserunt repellat aperiam quasi sunt officia expedita 
                beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere 
                nemo.
              </p>
              <p>
                Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse 
                quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat 
                quo voluptas nulla pariatur. Lorem ipsum dolor sit amet, consectetur 
                adipisicing elit. Est blanditiis dolorem culpa incidunt minus 
                dignissimos deserunt repellat aperiam quasi sunt officia expedita 
                beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere 
                nemo.
              </p>
              <p>
                Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse 
                quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat 
                quo voluptas nulla pariatur. Lorem ipsum dolor sit amet, consectetur 
                adipisicing elit. Est blanditiis dolorem culpa incidunt minus 
                dignissimos deserunt repellat aperiam quasi sunt officia expedita 
                beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere 
                nemo.
              </p>
            </v-container>
          </v-col>
        </v-row>

        <heading title="How it started" />
        <p>
          Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse 
          quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat 
          quo voluptas nulla pariatur. Lorem ipsum dolor sit amet, consectetur 
          adipisicing elit. Est blanditiis dolorem culpa incidunt minus 
          dignissimos deserunt repellat aperiam quasi sunt officia expedita 
          beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere 
          nemo.
        </p>

        <heading title="Going Forward" />
        <p>
          Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse 
          quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat 
          quo voluptas nulla pariatur. Lorem ipsum dolor sit amet, consectetur 
          adipisicing elit. Est blanditiis dolorem culpa incidunt minus 
          dignissimos deserunt repellat aperiam quasi sunt officia expedita 
          beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere 
          nemo.
        </p>

      </v-container>
    </v-sheet>

  </div>
</template>

<script>
export default {
  components: {
    Page: () => import('~/components/PageTitle'),
    heading: () => import('~/components/heading')
  },
  head() {
    return {
      title: 'About Me'
    };
  }
}
</script>

<style>

</style>