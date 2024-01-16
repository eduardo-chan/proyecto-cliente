<template>
    <div>
      <b-container>
        <b-breadcrumb :items="items2"></b-breadcrumb>
      </b-container>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items2: [
        {
            text: "Inicio LandPage",
            to: { name: "inicio" },
          },
          {
            text: "Rentar espacio",
            to: { name: "rentarespacio" },
          },
          {
            text: "Catálogo de espacios",
            active: true,
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