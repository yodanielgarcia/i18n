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
  </b-card>
  <b-card class="text-center" title="Cargando" v-else>
  </b-card>
</div>
</template>
 
<script>
export default {
  name: "AppNAV",
   beforeMount() {
    setTimeout(this.Loading, 1000)
  },
  data() {
    return {
      LoadingTrue: 0,
      datos: [],
      langs: ["es", "en"]
    }
  },
  methods: {
    Loading() {
     this.LoadingTrue = 1
  }  
}
}
</script>


