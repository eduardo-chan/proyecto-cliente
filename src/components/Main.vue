<template>
    <div>
      <b-container>
        <b-breadcrumb :items="items"></b-breadcrumb>
        <b-breadcrumb :items="items2"></b-breadcrumb>
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
            active: true,
          },
          {
            text: "Renta tu espacio",
            to: { name: "rentatuespacio" },
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
        items2: [
        {
            text: "Inicio LandPage",
            active: true,
          },
          {
            text: "Rentar espacio",
            to: { name: "rentarespacio" },
          },
          {
            text: "Catálogo de espacios",
            to: { name: "catalogoespacios" },
          },
          {
            text: "Detalles de espacio",
            to: { name: "detallesespacio" },
          },
        ],
      };
    },
  };
  
  </script>
  
  <style>
  </style>