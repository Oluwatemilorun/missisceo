<template>
  <div id="about">
    <!-- Page Header -->
    <Page title="About Me" />

    <v-sheet class="mb-2">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" class="px-10 px-sm-5">
            <v-img src="/img/ifeoma-kola.png" class="float-sm-left mx-5 mb-7 mb-sm-2" />
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
          </v-col>
          <v-col cols="12" class="px-10 px-sm-5">
            <h2 class="text-center big-text my-3">Stay Hydrated</h2>
            <p>
              Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse 
              quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat 
              quo voluptas nulla pariatur. Lorem ipsum dolor sit amet, consectetur 
              adipisicing elit. Est blanditiis dolorem culpa incidunt minus 
              dignissimos deserunt repellat aperiam quasi sunt officia expedita 
              beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere 
              nemo. Quis autem vel eum iure reprehenderit qui in ea voluptate velit 
              quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat 
              quo voluptas nulla pariatur. Lorem ipsum dolor sit amet, consectetur 
              adipisicing elit. Est blanditiis dolorem culpa incidunt minus 
              dignissimos deserunt repellat aperiam quasi sunt officia expedita 
              beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere 
              nemo.
            </p>

            <h2 class="text-center big-text mt-5 mb-3">Let Baby Lead</h2>
            <p>
              Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse 
              quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat 
              quo voluptas nulla pariatur. Lorem ipsum dolor sit amet, consectetur 
              adipisicing elit. Est blanditiis dolorem culpa incidunt minus 
              dignissimos deserunt repellat aperiam quasi sunt officia expedita 
              beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere 
              nemo. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt 
              repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores 
              repudiandae, nostrum, reiciendis facere nemo.
            </p>

            <h2 class="text-center big-text mt-5 mb-3">Get Comfortable</h2>
            <p>
              Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse 
              quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat 
              quo voluptas nulla pariatur. Lorem ipsum dolor sit amet, consectetur 
              adipisicing elit. Est blanditiis dolorem culpa incidunt minus 
              dignissimos deserunt repellat aperiam quasi sunt officia expedita 
              beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere 
              nemo. Quis autem vel eum iure reprehenderit qui in ea voluptate velit 
              quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat 
              quo voluptas nulla pariatur. Lorem ipsum dolor sit amet, consectetur 
              adipisicing elit. Est blanditiis dolorem culpa incidunt minus 
              dignissimos deserunt repellat aperiam quasi sunt officia expedita 
              beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere 
              nemo.
            </p>
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
  head() {
    return {
      title: 'About Me'
    };
  }
}
</script>

<style scoped>
  h2.big-text {
    font-size: 30px;
    font-weight: 400;
  }
</style>