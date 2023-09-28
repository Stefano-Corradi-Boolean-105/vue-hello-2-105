const { createApp } = Vue;

createApp({
  data(){
    return{
      titolo: 'v-if e v-for',
      showSubtitle: true,
      numero_1: 7,
      numero_2: 6,
      isLoaded: false,
      colori: ['giallo','verde','rosso','blu'],
      nuovoColore:''
    }
  },
  methods:{
    popColor(){
      this.colori.pop();
    },
    pushColor(){
      // aggiungo all'array il v-model dell'input
      this.colori.push(this.nuovoColore)
      // resetto il v-model per ripulire l'input
      this.nuovoColore = '';
    }
  },
  mounted(){
    setTimeout(()=>{
      this.isLoaded = true;
    },3000)
    
    console.log(this.colori)
  }
}).mount('#app')