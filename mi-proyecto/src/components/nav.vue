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
      <b-tabs>
        <b-tab title="Tab" active>
          <b-row>
            <b-col md=3>
              <label for="Fecha">Fecha</label>
              <b-form-input type="date" v-model="datetime"></b-form-input>
            </b-col>
            <b-col md=3>
              <b-button v-on:click="showAlert" class="m-3">Alert Sweet</b-button>
            </b-col>  
            <b-col md=3>
              <b-alert variant="danger" dismissible :show="showDismissibleAlert" @dismissed="showDismissibleAlert=false">
                Alert!!!!
              </b-alert>
              <b-btn @click="showDismissibleAlert=true" variant="info" class="m-3">
                Alert Bootstrap
              </b-btn>
            </b-col> 
            <b-col md=3>
               <multiselect v-model="value" tag-placeholder="Add this as new tag" placeholder="Search" label="name" track-by="code" :options="options" :multiple="true" :taggable="true"  class="m-3"></multiselect>
            </b-col>
          </b-row>
        </b-tab>
        <b-tab title="tab" >
          <b-row>
           <b-col md=3> 
              <b-btn variant="success" @click="enviarTable1" class="m-3">
                Show table1
              </b-btn>
              </b-col>              
          </b-row>
          <List :mapState="'pagosReports'" v-if="mostrarTRVD"  :allDispatch="this.Dispatch"></List>
        </b-tab>
        <b-tab title="tab">
           <b-col md=2> 
              <b-btn variant="success" @click="enviarTable2" class="m-3">
                Show table2
              </b-btn>
            </b-col>  
            <List :mapState="'pagosReports'" v-if="mostrarTRVD2"  :allDispatch="this.Dispatch2"></List>
        </b-tab>
      </b-tabs> 
  </b-card>
  <b-card class="text-center" title="Cargando" v-else>
  </b-card>
  <b-card>
  </b-card> 
</div>
</template> 
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<script>
import List from "./modules/base/list.vue";
import Multiselect from 'vue-multiselect'

export default {
  name: "AppNAV",
  components: {
    List,
    Multiselect
  },
  beforeMount() {
    setTimeout(this.Loading, 1000);
    this.showAlertini();
  },
  data() {
    return {
      showDismissibleAlert: false,
      LoadingTrue: 0,
      datos: [],
      langs: ["es", "en"],
      datetime: "",
      Dispatch: "",
      Dispatch2: "",
      mostrarTRVD: false,
      mostrarTRVD2: false,
      value: [
        { name: 'Javascript', code: 'js' }
      ],
      options: [
        { name: 'Vue.js', code: 'vu' },
        { name: 'Javascript', code: 'js' },
        { name: 'Open Source', code: 'os' }
      ]
    };
  },
  methods: {
    Loading() {
      this.LoadingTrue = 1;
    },
    showAlert() {
      this.$swal({
        toast: true,
        position: "top-end",
        type: "warning",
        title: "Cargando",
        text: "Alerta o Notificacion"
      });
    },
    showAlertini() {
      this.$swal({
        type: "warning",
        title: "Cargando",
        text: "Cargando modulo de idiomas",
        timer: 1500
      });
    },
    enviarTable1() {
      this.mostrarTRVD = false;
      this.Dispatch = "pagosReportsAllBTN";
      this.mostrarTRVD = true;
    },
    enviarTable2() {
      this.Dispatch2 = "pagosReportsAll";
      this.mostrarTRVD2 = true;
    }
  }
};
</script>


