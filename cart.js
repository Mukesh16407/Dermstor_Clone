var prodInfo = JSON.parse(localStorage.getItem("Dermcart"))||[]

function displayitems(prodInfo) {
    document.querySelector("tbody").textContent = "";

    prodInfo.map(function (item, index) {
        var tr = document.createElement("tr");
        tr.setAttribute("id", "setfontsize")

        var td1 = document.createElement("td");
        td1.textContent = item.image_url;

        var td2 = document.createElement("td");
        td2.textContent =item.MRP ;

        var td3 = document.createElement("td");
        td3.textContent = counter;

        var td4 = document.createElement("td");
        td4.textContent = item.MRP * counter;

        var td5 = document.createElement("td");
        td5.textContent = "delete";
        td5.addEventListener("click", deleteItem);



        tr.append(td1, td2, td3, td4, td5);
        document.querySelector("tbody").append(tr);
    });


}
window.addEventListener("load", function () {
    var productInfo = JSON.parse(localStorage.getItem("Dermcart"));
    displayitems(productInfo)
})


function deleteItem(event) {
  console.log(event.target);
  event.target.parentNode.remove();
}