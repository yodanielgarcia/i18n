<template>
<div>
  <b-card class="text-center" title="Internacionalizacion" v-if="status">
    <b-nav tabs justified>
      <b-nav-item active>{{ $t("tip_bancoX") }}</b-nav-item>
      <b-nav-item>{{ $t('tip_cod_est_fac_elec_gs_co999998')}}</b-nav-item>
      <b-nav-item>{{ $t('ACTIVIDADES_DE_INTEGRACION')}}</b-nav-item>
      <b-nav-item>{{ $t('btn_liquidar')}}</b-nav-item>
      <b-nav-item>{{ $t('lbl_seleccion')}}</b-nav-item>
      <b-nav-item>
        <b-form-select v-model="$i18n.locale">
          <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
        </b-form-select>
      </b-nav-item>     
    </b-nav>
  </b-card>
  <b-card class="text-center" title="Cargando" v-else>
    {{statusStorage}}
  </b-card>
</div>
</template>
 
<script>
export default {
  name: "App",
  created: function() {},
  beforeMount() {
    console.log(this.statusStorage)
    setTimeout(this.consultStorage, 1000);
  },
  data() {
    return {
      statusStorage: 0,
      datos: [],
      langs: ["es", "en"]
    };
  },
  computed: {
    status() {
      return this.statusStorage;
    }
  },
  methods: {
    consultStorage() {
      this.statusStorage = true;
      this.langs.forEach(lang => {
        let locale = "traduc" + lang.toUpperCase();
        if (localStorage.getItem(locale)) {
          this.$i18n.setLocaleMessage(lang,JSON.parse(localStorage.getItem(locale)) )
        } else {
          this.statusStorage = false;
        }
      });
      if (!this.statusStorage) {
        setTimeout(this.consultStorage, 1000);
      }
    }
  }
};
</script>


