Vue.component('details-model', {
  props:{
    instrument: Object
  },
  template: '#details-model-template'
});

Vue.component('create-model', {
  props:{
    newInstrument:{
      type: Object,
      default: function(){
        return{
          name: "",
          type: "",
          price: 0,
          brand: "",
          image: "",
          inCart: false,
          details: false
        }
      }
    }
  },
  template: '#create-model-template'
});

new Vue({
  el: "#app",
  data:{
    showCreateModel: false,
    myCart: [],
    instruments: [{
      name: "Stratocaster",
      type: "Guitar",
      price: 2000,
      brand: "Fender",
      image: "https://i.imgur.com/MnFqxkJ.jpg",
      inCart: false,
      details: false
    },
    {
      name: "Keytar",
      type: "Piano",
      price: 350,
      brand: "Yamaha",
      image: "https://usa.yamaha.com/files/key_point_01_201015_f1ebbc4e8c9a44b9696b6b31383c3103.jpg",
      inCart: false,
      details: false
    },
    {
      name: "SRS60C",
      type: "Guitar",
      price: 1300,
      brand: "Maton",
      image: "https://maton.com.au/images/made/assets/uploads/products/SRS60C-PG5A8004-2_900_1200_s.jpg",
      inCart: false,
      details: false
    },
    {
      name: "Resonate",
      type: "Guitar",
      price: 550,
      brand: "Fender",
      image: "https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10005/0970392337_fen_ins_frt_1_rr.jpg",
      inCart: false,
      details: false
    },
    {
      name: "PHX",
      type: "Drums",
      price: 12000,
      brand: "Yamaha",
      image: "https://www.yamaha.com/yamahavgn/PIM/Images/Image-Index_PHX_2000x2000_8ebdfba8215189a5c09d21d531ab5a5a.jpg",
      inCart: false,
      details: false
    },
    {
      name: "MS2000",
      type: "Ukulele",
      price: 1270,
      brand: "Maton",
      image: "https://maton.com.au/assets/uploads/products/MS2000BLK_Thumb.png",
      inCart: false,
      details: false
    }              
   ],
  },
  methods:{
    addToCart: function(instrument){
      instrument.inCart = true;
      instrument.details = false;
      this.myCart.push(instrument);
    },
    emptyCart: function(){
      this.instruments.forEach(function(instrument){
        instrument.inCart = false;
      })
      this.myCart = [];
    },
    createInstrument: function(newInstrument){
      var errors = [];
      if (newInstrument.name === ""){
        errors.push("Name must not be empty");
      }
      if (newInstrument.type === ""){
        errors.push("Type must not be empty");
      }
      if (newInstrument.price <= 0){
        errors.push("Price must be greater than 0");
      }
      if (newInstrument.brand === ""){
        errors.push("A brand must be selected");
      }
      if (errors.length > 0){
        alert(errors);
      }else{
        this.instruments.push(newInstrument);
        this.showCreateModel = false;
      }
    }
  }
});