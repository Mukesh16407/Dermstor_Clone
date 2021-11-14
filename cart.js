i
var prodInfo = JSON.parse(localStorage.getItem("Dermcart"))||[]
displayitems(prodInfo)
console.log(prodInfo)


 function displayitems(prodInfo) {
     document.querySelector(".cart-items").textContent = "";

     prodInfo.map(function (item, index) {
        var cartRow = document.createElement('div')
        cartRow.classList.add('cart-row')  

        var cartItem = document.createElement("div");
        cartItem.classList.add('cart-item ')
        cartItem.textContent = item.image_url;

         var cartPrice = document.createElement("div");
         cartPrice.classList.add('cart-price')
         cartPrice.textContent =item.MRP ;

       var quantity = document.createElement("input");
       quantity.classList.add('cart-quantity')
         quantity.innerHTML='<input type="number></input>' ;

       var SubPrice = document.createElement("td");
       SubPrice.textContent = item.MRP * quantity.innerHTML;

         var remove = document.createElement("div");
        remove.textContent = "delete";
        remove.addEventListener("click", deleteItem);

        cartRow.append(cartItem, cartPrice, quantity, SubPrice, remove);
        document.querySelector("cart-items").append(cartRow);
    });


 }
 window.addEventListener("load", function () {
    var prodInfo = JSON.parse(localStorage.getItem("Dermcart"));
   displayitems(prodInfo)
})


function deleteItem(event) {
   console.log(event.target);
  event.target.parentNode.remove();
}



function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

//

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}


function check(e) {
  let inp = document.getElementById("input12");

  let code = inp.promo.value;


  if(code==="masai30"){
      //.textContent= Math.floor(mon.textContent * 0.7);
  } else {
      alert("Please Enter Valid Promo Code")
  }
  let pro = document.getElementById("promo");
  inp.promo.value="";
}

function paymentPage() {
  window.location.href ="payment.html"
}
function checkOut() {
  window.location.href ="success.html"
}