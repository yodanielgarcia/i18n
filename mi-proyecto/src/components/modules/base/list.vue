<template>
  <div v-if="!this.loading" class="animated fadeIn">
      <b-row>
        <b-col lg="12">
          <tableDinamic :items="this.dataLoad" :fields="this.dataLoad" ></tableDinamic>
        </b-col><!--/.col-->
      </b-row><!--/.row-->
  </div>
</template>
<script>

import tableDinamic from "./Table"
// import { mapGetters } from 'vuex'
export default {
  name: 'List',
  components: {
    tableDinamic
  },
  props: {
    mapState: { required: true },
    allDispatch: { required: true },
  },
  data () {
    return {
      loading: true,
      form: {},
      dataLoad:[{
        "key": "tipo_bancoX",
        "label": "TipoBanco",
        "sortable": true,
        "sortDirection": "desc"
      }]
    }
  },
  watch:{
    dataLoad(newvalue){
      console.log('entro')
    }
  },
  computed: {
    recarga:{
      get(){
        return this.dataLoad
      },
      set(newvalue){
        this.dataLoad = newvalue
      }
    }
  },
  mounted () {
    let self = this
    this.$store.dispatch(this.allDispatch).then((response) => {
      self.dataLoad = [{
        "key": "tipo_bancoX",
        "label": "TipoBanco",
        "sortable": true,
        "sortDirection": "desc"
      }]
      ///self.$store.getters[self.mapState]
      self.recarga =  self.$store.getters[self.mapState]
      self.loading = false
    }).catch((error) => {
      // eslint-disable-next-line
      console.error(error)
    })
  },
  methods: {
    
  }
}
</script>
