<template>
  <div v-if="!this.loading" class="animated fadeIn">
      <b-row>
        <b-col lg="12">
          <tableDinamic :items="this.recarga.items" :fields="this.dataLoad.fields" ></tableDinamic>
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
      dataLoad: {}
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
    this.$store.dispatch(this.allDispatch).then((response) => {
      this.dataLoad = this.$store.getters[this.mapState]
      this.recarga =  this.$store.getters[this.mapState]
      this.loading = false
    }).catch((error) => {
      // eslint-disable-next-line
      console.error(error)
    })
  },
  methods: {
    
  }
}
</script>
