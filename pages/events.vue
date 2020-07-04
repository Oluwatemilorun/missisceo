<template>
  <div id="events">
    <!-- Page Header -->
    <Page title="Events &amp; Speakers" />
    <v-container>
      <div class="upcoming my-3">
        <heading title="Upcoming events" />
        <v-table class="table-1">
          <thead>
            <tr>
              <th>Date & Time</th>
              <th>Events</th>
              <th>Speakers</th>
              <th>Venue</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in 8" :key="i">
              <td>28 September 2099, 10am prompt</td>
              <td>MissisCEO and the Baby Shower Peeps</td>
              <td>
                Jimi Solade (CEO, Jimz Consultancy), 
                Ifeoma Kola (Editor-in-Chief, MissisCEO Blog)
              </td>
              <td>
                Exclusive Event Hall, Oriental Brothers' Hotel, 
                Casablanca, Mexico
              </td>
            </tr>
          </tbody>
        </v-table>
      </div>

      <div class="recent my-10">
        <heading title="Recent events" />
        <v-table class="table-2">
          <thead>
            <tr>
              <th>Date & Time</th>
              <th>Events</th>
              <th>Speakers</th>
              <th>Venue</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in 8" :key="i">
              <td>28 September 2099, 10am prompt</td>
              <td>MissisCEO and the Baby Shower Peeps</td>
              <td>
                Jimi Solade (CEO, Jimz Consultancy), 
                Ifeoma Kola (Editor-in-Chief, MissisCEO Blog)
              </td>
              <td>
                Exclusive Event Hall, Oriental Brothers' Hotel, 
                Casablanca, Mexico
              </td>
            </tr>
          </tbody>
        </v-table>
        
      </div>

      <div class="speakers my-5">
        <heading title="Our Speakers" />
        <v-slide-group show-arrows class="mb-10">
          <v-slide-item v-for="m in 10" :key="m">
            <v-img
              src="/img/ifeoma-kola.png"
              class="align-end py-0 mx-3"
              height="275"
              width="250"
            >
              <v-sheet tile color="rgba(255,255,255,0.8)" class="pa-2 text-center">
                <h4 class="text-capitalize font-weight-bold">
                  Ifeoma Kola {{ m }}
                </h4>
                <small>Editor-in-Chief, <b>MissisCEO</b></small>
                <p class="mb-0">
                  <v-btn
                    v-for="icon in icons"
                    :key="icon"
                    class="mr-1"
                    icon
                    tile
                    x-small
                    color="primary"
                  >
                    <v-icon small>{{ icon }}</v-icon>
                  </v-btn>
                </p>
              </v-sheet>
              <template v-slot:placeholder>
                <v-row align="center" justify="center" class="fill-height">
                  <v-progress-circular indeterminate color="primary">
                  </v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-slide-item>
        </v-slide-group>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  components: {
    Page: () => import('~/components/PageTitle'),
    heading: () => import('~/components/heading')
  },
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-youtube',
      'mdi-linkedin',
      'mdi-instagram'
    ],
  }),
  head() {
    return {
      title: 'Events & Speakers'
    };
  }
}
</script>

<style scoped>
td, th {
  padding: 15px;
}
.table-1 thead {
  background: #FFE0B3;
}
.table-1 tbody tr:nth-child(even) {
  background: #FFF3E0;
}

.table-2 thead {
  background: #EEEEEE;
}
.table-2 tbody tr:nth-child(even) {
  background: #F0F0F0;
}

</style>