<template>
    <div>
      <b-container>
        <b-breadcrumb :items="items"></b-breadcrumb>
      </b-container>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [
        {
            text: "Inicio LandPage",
            to: { name: "inicio" },
          },
          {
            text: "Renta tu espacio",
            active: true,
          },
          {
            text: "Informacion de espacio",
            to: { name: "informacionespacio" },
          },
          {
            text: "Ofertar espacio",
            to: { name: "ofertarespacio" },
          },
        ],
      };
    },
  };
  </script>
  
  <style>
  </style>