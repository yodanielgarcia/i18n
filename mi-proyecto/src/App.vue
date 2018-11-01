<template>
<div>
  numero - {{puto}}
  <input v-model="puto">
  <b-card class="text-center" title="Internacionalizacion" v-if="puto">
    <b-nav tabs justified>
      <b-nav-item active>{{ $t("data.tip_bancoX") }}</b-nav-item>
      <b-nav-item>{{ $t('data.tip_cod_est_fac_elec_gs_co999998')}}</b-nav-item>
      <b-nav-item>{{ $t('data.ACTIVIDADES_DE_INTEGRACION')}}</b-nav-item>
      <b-nav-item>{{ $t('data.btn_liquidar')}}</b-nav-item>
      <b-nav-item>{{ $t('data.lbl_seleccion')}}</b-nav-item>
      <b-nav-item><b-form-select v-model="$i18n.locale">
          <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
        </b-form-select>
      </b-nav-item>     
    </b-nav>
  </b-card>
</div>
</template>
 
<script>
export default {
  name: "App",
  created: function() {},
  mounted() {
    setTimeout(this.elPuto, 3000);
  },
  data() {
    return {
      puto: 0,
      datos: [],
      langs: ["es", "en"]
    };
  },
  computed: {
   status() {
      return this.puto
   }
  },
  methods: {
    elPuto() {
      if (localStorage.getItem("traducEN")) {
        this.puto = true;        
      } else {
        setTimeout(this.elPuto,3000);
      }
    }
  }
};
</script>


