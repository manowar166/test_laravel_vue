<template>
	<div class="col-md-4">
	   <div class="thumbnail">
	      <img src="http://wfarm2.dataknet.com/static/resources/icons/set3/c9f1cdf473a8.png">
		  
		  <div class="caption">
               <p>{{ product.user_id }} </p>

		  	   <h3>{{ product.name }}</h3>
		  	   <p>{{ product.price }}</p>
		  	   <hr>
		  	   <p>
		  	   	    <a href="#" class="btn btn-default">
		  	   	    	Wish list
		  	   	    </a>

		  	   	    <a href="#" class="btn btn-success">
		  	   	    	Buy
		  	   	    </a>
		  	   </p>

		  	   <hr>

		  	   <p class="btn btn-danger" role="button" @click="deleteProduct" v-if="product.user_id == authenticatedUser.id">
		  	   	    
		  	   	    	Delete
		  	   	    
		  	   </p>
		  </div>
	  </div>	  
	</div>

</template>

<script>
      import swal from 'sweetalert'

	  export default{
           props: ['product', 'authenticatedUser'],

           methods: {
           	  deleteProduct () {
           	  	swal({
                  title: "Are you sure?",
                  text: "You will not be able to recover this imaginary file!",
                  type: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#DD6B55",
                  confirmButtonText: "Yes, delete it!",
                  closeOnConfirm: false
                 },
                function() {
                  this.$http.delete('api/products/' + this.product.id)
                      .then(response => {
                      	   console.log(response)

                      	   swal("Deleted!", "Your imaginary file has been deleted.", "success");
                      })	
                  
                    }.bind(this)
                 );
           	  }
           }
	  }
</script>