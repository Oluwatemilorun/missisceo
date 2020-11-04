<template>
  <div>
    <PageTitle title="About Me" />

    <v-sheet class="mb-2">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" class="px-10 px-sm-5">
            <v-img
              src="/img/ifeoma-kola.png"
              class="float-sm-left mx-5 mb-7 mb-sm-2"
              max-height="400"
            />
            <p v-for="i in 3" :key="i">
              Quis autem vel eum iure reprehenderit qui in ea voluptate velit
              esse quam nihil molestiae consequatur, vel illum qui dolorem eum
              fugiat quo voluptas nulla pariatur. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Est blanditiis dolorem culpa
              incidunt minus dignissimos deserunt repellat aperiam quasi sunt
              officia expedita beatae cupiditate, maiores repudiandae, nostrum,
              reiciendis facere nemo.
            </p>
          </v-col>
          <v-col cols="12" class="px-10 px-sm-5">
            <div
              v-for="n in ['Stay Hydrated', 'Let Baby Lead', 'Get Comfortable']"
              :key="n"
            >
              <div class="text-center display-1 my-3">{{ n }}</div>
              <p>
                Quis autem vel eum iure reprehenderit qui in ea voluptate velit
                esse quam nihil molestiae consequatur, vel illum qui dolorem eum
                fugiat quo voluptas nulla pariatur. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Est blanditiis dolorem culpa
                incidunt minus dignissimos deserunt repellat aperiam quasi sunt
                officia expedita beatae cupiditate, maiores repudiandae,
                nostrum, reiciendis facere nemo. Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit quam nihil molestiae
                consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
                pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Est blanditiis dolorem culpa incidunt minus dignissimos
                deserunt repellat aperiam quasi sunt officia expedita beatae
                cupiditate, maiores repudiandae, nostrum, reiciendis facere
                nemo.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- Gallery -->
    <Gallery />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'About Me',
    }
  },
}
</script>
