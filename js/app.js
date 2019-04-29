var app = new Vue({
  el: '#app',
  data: {

  	total: 0,
   fruta: {nombre: '', cantidad:''},
   frutas:[ 
   {nombre:'manzana', cantidad:10},
  {nombre:'pera', cantidad:5},
  {nombre:'fresa', cantidad:10},

   ],


  },
methods: {
agregarFruta: function () {

   this.frutas.push({
      nombre: this.fruta.nombre,
      cantidad: this.fruta.cantidad,
      
      })


this.fruta.nombre='';
this.fruta.cantidad='';


    }
  },


  computed : {

sumarfrutas()  {
this.total = 0;

for ( item of this.frutas) {

this.total = this.total + item.cantidad;

}

return this.total;

}


  }


})