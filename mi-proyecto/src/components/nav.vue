<template>
<div>
  <b-card class="text-center" title="Internacionalizacion" v-if="LoadingTrue">
    <b-nav tabs justified>
      <b-nav-item href="#" active>{{ $t("tip_hodeline") }}</b-nav-item>
      <b-nav-item href="#">{{ $t('tip_cod_est_fac_elec_gs_co999998')}}</b-nav-item>
      <b-nav-item href="#">{{ $t('ACTIVIDADES_DE_INTEGRACION')}}</b-nav-item>
      <b-nav-item href="#">{{ $t('btn_liquidar')}}</b-nav-item>
      <b-nav-item href="#">{{ $t('lbl_seleccion')}}</b-nav-item>
      <b-nav-item>
        <b-form-select v-model="$i18n.locale">
          <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
        </b-form-select>
      </b-nav-item>     
    </b-nav>
    <b-row>      
    <b-col md=3>
      <label for="Fecha">Fecha</label>
      <b-form-input type="date" v-model="datetime"></b-form-input>
    </b-col>
    <b-col md=3>
      <b-button v-on:click="showAlert">Alert Sweet</b-button>
    </b-col>  
    <b-col md=3>
    <b-alert variant="danger" dismissible :show="showDismissibleAlert" @dismissed="showDismissibleAlert=false">
      Alert!!!!
    </b-alert>
    <b-btn variant="success" @click="enviarRVD" >
     Alerta Bootstrap
    </b-btn>
    </b-col>  
    </b-row>
  <b-card>
    <tableC :items="this.items" :fields="this.fields" v-if="mostrarTRVD"/>
  </b-card>
  </b-card>
  <b-card class="text-center" title="Cargando" v-else>
  </b-card>
  
</div>
</template> 
<script>
import Table from "./Table";

export default {
  name: "AppNAV",
  components: {
    tableC: Table
  },
  beforeMount() {
    setTimeout(this.Loading, 1000);
    this.showAlert()
  },
  data() {
    return {
      showDismissibleAlert: false,
      LoadingTrue: 0,
      datos: [],
      langs: ["es", "en"],
      datetime: "",
      mostrarTRVD: false,
      items: [],
      fields : [
        {
          key: 'last_name',
          sortable: true
        },
        {
          key: 'first_name',
          sortable: false
        }
      ]
    };
  },
  methods: {
    Loading() {
      this.LoadingTrue = 1;
    },
    showAlert(){
        this.$swal({
        toast:true,
        position: 'top-end',
        type: 'warning',
        title: 'Cargando',
        text: 'Cargando modulo de idiomas'        
      })
    },
    enviarRVD() {
      let array = {
        fechaIniRVD: this.fechaIniRVD + " 00:00:00",
        fechafinRVD: this.fechaFinRVD + " 23:59:00"
      };
      this.$store.dispatch("pagosReportsAll", array).then(Response => {        
          this.items = this.$store.getters.pagosReports;
          this.mostrarTRVD = true
      });
    }
  }
};

</script>


