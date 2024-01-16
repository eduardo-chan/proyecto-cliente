<script setup>
</script>

<template>
  <b-row>
    <b-row>
      <div>
        <b-navbar type="dark" variant="dark">
          <b-navbar-nav>
            <b-nav-item href="#">Home</b-nav-item>
            <!-- <input id="bd-search-input" type="search" placeholder="Search..." class="form-control ds-input"
            style="width: 140px; height: 40px;"> -->
          </b-navbar-nav>
        </b-navbar>
      </div>
    </b-row>
    <b-row>
      <b-col>
        <div>
          <b-sidebar id="sidebar-border" sidebar-class="border-right border-danger" z-index="-1" no-close-on-backdrop
            no-close-on-route-change no-header shadow visible bg-variant="dark" width="15%">
            <b-nav vertical class="pt-5">
              <b-nav-item>
                <b-link :to="{ name: 'inicio' }"> Inicio LandPage</b-link>
              </b-nav-item>
              <b-nav-item>
                <b-link :to="{ name: 'rentatuespacio' }"> Renta tu Espacio</b-link>
              </b-nav-item>
              <b-nav-item>
                <b-link :to="{ name: 'informacionespacio' }"> Información de espacio</b-link>
              </b-nav-item>
              <b-nav-item>
                <b-link :to="{ name: 'ofertarespacio' }"> Ofertar espacio</b-link>
              </b-nav-item>
            </b-nav>
            <b-nav vertical class="pt-5">
              <b-nav-item>
                <b-link :to="{ name: 'inicio' }"> Inicio LandPage</b-link>
              </b-nav-item>
              <b-nav-item>
                <b-link :to="{ name: 'rentarespacio' }"> Rentar espacio</b-link>
              </b-nav-item>
              <b-nav-item>
                <b-link :to="{ name: 'catalogoespacios' }"> Catálogo de espacios</b-link>
              </b-nav-item>
              <b-nav-item>
                <b-link :to="{ name: 'detallesespacio' }"> Detalles de espacio</b-link>
              </b-nav-item>
            </b-nav>
          </b-sidebar>
        </div>
      </b-col>
      <b-col>

        <body>
          <b-ro>
            <b-col sm="7">
              <router-view></router-view>
            </b-col>
          </b-ro>
        </body>
      </b-col>
    </b-row>
  </b-row>
</template>

<style scoped></style>
