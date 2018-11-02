<template>
 <div id="app">
    <navbar />
    <main class="container" role="main">   
    </main>
  </div>
</template> 
<script>
import Navbar from './components/nav'

export default {
  name: "App",
  components: {
        navbar: Navbar,
  },
  created: function() {},
  beforeMount() {
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


