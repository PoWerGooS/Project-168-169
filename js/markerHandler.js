AFRAME.registerComponent("markerhandler", {
    init: async function(){console.log("working")
        this.el.addEventListener("markerFound",()=>{
            this.handleMarkerFound()
        }) 
        this.el.addEventListener("markerLost",()=>{
            this.handleMarkerLost()
        })   
    },
    handleMarkerFound:function(){
        var buttonDiv = document.getElementById("button-div")
        buttonDiv.style.display = "flex"
        var ratingButton = document.getElementById("rating-button")
        var orderButton = document.getElementById("order-button")
        ratingButton.addEventListener("click", function(){
            swal({
                title: "Rate Dish!",
                text: "Work In Progress",
                icon: "warning",
            });
        }),
        orderButton.addEventListener("click", function(){
            swal({
                title: "Thanks for Order!",
                text: "Your order will be served soon",
                icon: "success",
            });
        })
    },

    handleMarkerLost:function(){
        var buttonDiv = document.getElementById("button-div")
        buttonDiv.style.display = "none"
    },
})