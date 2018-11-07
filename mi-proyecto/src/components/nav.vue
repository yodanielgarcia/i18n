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
      <datetime type="datetime" v-model="datetime"></datetime>
    </b-col>
    <b-col md=3>
      <br>
      <b-button v-on:click="showAlert">Alert Sweet</b-button>
    </b-col>
    </b-row>
  <b-card>
    <tableC :items="this.items" :fields="this.fields" />
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
      LoadingTrue: 0,
      datos: [],
      langs: ["es", "en"],
      datetime: "",
      items: 
       [{ isActive: true, age: 40, first_name: 'prueba', last_name: 'Macdonald', address:'New York' },
        { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney', address:'London'  },
        { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney', address:'London'  },
        { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney', address:'London'  },
        { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney', address:'London'  },
        { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw', address:  'Toronto' },
        { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson', address: 'Sydney'  },
        { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson', address: 'Sydney'  },
        { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw', address:  'Toronto' },
        { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson', address: 'Sydney'  },
        { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson', address: 'Sydney'  },
        { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw', address:  'Toronto' },
        { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson', address: 'Sydney'  },
        { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson', address: 'Sydney'  }],
      fields : [
        {
          key: 'last_name',
          sortable: true
        },
        {
          key: 'first_name',
          sortable: false
        },
        {
          key: 'age',
          label: 'Person age',
          sortable: true,
        },
        {
          key: 'address',
          sortable: true
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
        type: 'success',
        title: 'Cargando',
        text: 'Cargando modulo de idiomas',
        timer: 1500
      })
    }
  }
};
</script>


