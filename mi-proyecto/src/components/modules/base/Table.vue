<template>
<b-container fluid>
  <b-card>
    <b-row>
      <b-col md="6" class="my-1">
        <b-form-group horizontal label="Filtrar" class="mb-0">
          <b-input-group>
            <b-form-input v-model="filter" placeholder="Filtrar por:" />
            <b-input-group-append>
              <b-btn :disabled="!filter" @click="filter = ''">Limpiar</b-btn>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>
    </b-row>
    <b-table striped hover show-empty stacked="md" :items="this.DataItems" :fields="this.DataFields" :current-page="currentPage" :per-page="perPage" :filter="filter" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" :sort-direction="sortDirection" @filtered="onFiltered">
    </b-table>
    <b-row>
      <b-col md="6" class="my-1">
        <b-pagination :total-rows="this.DataItems.length" :per-page="perPage" v-model="currentPage" class="my-0" />
      </b-col>
      <b-col md="6" class="my-1">
        <b-form-group horizontal label="Registro por página" class="mb-0">
          <b-form-select :options="pageOptions" v-model="perPage" />
        </b-form-group>
      </b-col>
    </b-row>
  </b-card>
</b-container>
</template>
<script>

export default {
  name: 'tableDinamic',
  props: {
    items: { required: false },
    fields: { required: false },
  },
  data () {
    return {
      currentData: {},
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15],
      sortBy: null,
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      DataItemsVal: 0,
      DataItems: [],
      DataFields: {},
      DataMethodsTable: '',
      seen: false
    }
  },
  computed: {
    sortOptions () {
      return { text: 'Name', value: 'name' }
    }
  },
  mounted () {
    alert(this.fields)
    this.DataItems = this.items
    this.DataFields = this.fields
    //this.DataMethodsTable = this.methodsTable
    //this.validateButton()
  },
  methods: {
    defaultJson(){
      return {'Id': 'id','Nombre': 'name'}
    },
    onFiltered (filteredItems) {
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
    actionButton (id, index) {
      let obj = {id: id}
      let json = JSON.stringify(obj)
      this.$store.dispatch(this.DataMethodsTable[index], json)
    }
  }
}
</script>
