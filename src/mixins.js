import Vue from "vue";

var miMixin = {
  computed: {
    mostrarContadorVuex() {
      //this.$emit('contador',this.contador)
      //return this.contador
      console.log('mostrarContadorVuex: Mixin global')
      return this.$store.state.contador;
    }
  },
  created() {
/*     console.log('created: Mixin global') */
  }

}

Vue.mixin(miMixin)
