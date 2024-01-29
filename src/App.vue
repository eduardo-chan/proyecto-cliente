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
          <!-- //z-index="-1" -->
          <b-sidebar id="sidebar-border" sidebar-class="border-right border-danger"  no-close-on-backdrop
            no-close-on-route-change no-header shadow visible bg-variant="dark" width="15%">
            <b-nav vertical class="pt-5">
              <b-nav-item>
                <b-link :to="{ name: 'inicio' }"> Inicio LandPage</b-link>
              </b-nav-item>
            </b-nav>

            <b-nav vertical class="pt-5">
              <b-nav-item>
                <b-link :to="{ name: 'main' }"> Main</b-link>
              </b-nav-item>
            </b-nav>

            <b-nav vertical class="pt-5">
              <b-nav-item>
                <b-link :to="{ name: 'form' }"> Formulario</b-link>
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
