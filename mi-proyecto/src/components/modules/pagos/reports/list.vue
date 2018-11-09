<template>
<div>
<b-card>
<b-tabs pills card>
    <b-tab title="Reporte" active>
    <b-row>    
        <b-col md="3">
        <br>
        <label for="Fecha">Fecha Inicial</label> 
        <b-input-group>
        <b-input-group-prepend>
        <b-input-group-text><i class="fa fa-calendar"></i></b-input-group-text>
        </b-input-group-prepend>
        <b-form-input type="date" required v-model="fechaIniRVD"></b-form-input>
        </b-input-group>
        </b-col>
        <b-col md="3">
        <br>
        <label for="Fecha">Fecha Final</label> 
        <b-input-group>
        <b-input-group-prepend>
        <b-input-group-text><i class="fa fa-calendar"></i></b-input-group-text>
        </b-input-group-prepend>
        <b-form-input type="date" required v-model="fechaFinRVD"></b-form-input>
        </b-input-group>
        </b-col>
        <b-col md="1">
            <br>
            <br>
            <b-button variant="success" @click="enviarRVD" >Generar</b-button>
        </b-col>
    </b-row>
    <b-row>
        <b-col md="12">
            <br>
            <TableC :mapState="'pagosReports'" :allDispatch="'controlaccesoreportsaux'" ></TableC>
        </b-col>
    </b-row>
    </b-tab>    
</b-tabs>
</b-card>
</div>
</template>
<script>
import Vue from "vue";
import Table from "./Table";

export default {
  name: "reportsPagosList",
  data() {
    return {
      fechaIniRVD: "",
      fechaFinRVD: ""
    };
  },
  components: {
    TableC
  },
  methods: {
    enviarRVD() {
      let array = {
        fechaIniRVD: this.fechaIniRVD + " 00:00:00",
        fechafinRVD: this.fechaFinRVD + " 23:59:00"
      };
      this.$store.dispatch("pagosReportsAll", array).then(Response => {        
          this.List = this.$store.getters.pagosReports;
          this.json_data = this.$store.getters.pagosReports.items;       
      });
    }
  }
};
</script>
