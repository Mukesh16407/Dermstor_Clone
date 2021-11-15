
var prodInfo = JSON.parse(localStorage.getItem("Dermcart"))||[]
displayitems(prodInfo)
console.log(prodInfo)


 function displayitems(productInfo) {
        document.querySelector("tbody").textContent = "";

        prodInfo.map(function (item, index) {
            var tr = document.createElement("tr");
            tr.setAttribute("id", "setfontsize")

            var td1 = document.createElement("td");
            td1.innerHTML = item.image_url;
            
            var td2 = document.createElement("td");
            td2.textContent = item.MRP;

            var td3 = document.createElement("td");
           
            var btn1 = document.createElement("div");
            btn1.setAttribute("class", "box5");
            btn1.innerHTML = "<button>+</button>";
            
            h1Tag = document.createElement("p");
            h1Tag.textContent = "1";
            h1Tag.setAttribute("class", "box5")

            var btn2 = document.createElement("div");
            btn2.setAttribute("class", "box5");
            btn2.innerHTML = "<button>-</button>";

            td3.append( btn1,h1Tag, btn2);


            var td4 = document.createElement("td");
            td4.textContent =  h1Tag.textContent * Number(td3.innerHTML);

            var td5 = document.createElement("td");
            td5.setAttribute("id","box6")
            td5.innerHTML = "<button>X</button>";

            td5.addEventListener("click", deleteItem);

            tr.append(td1, td2, td3, td4, td5);
            document.querySelector("tbody").append(tr);
        });
      
    }

    function deleteItem(event) {
        console.log(event.target);
        event.target.parentNode.remove();
      }
    window.addEventListener("load", function () {
      var productInfo = JSON.parse(localStorage.getItem("prodllist"));
      displayitems(productInfo)
    })


  
    box1 = document.getElementsByClassName("box1");
    box1.addEventListener("click", incFun);
    box1.addEventListener("click", decFun);

    var counter = localStorage.getItem("counter1") || 0;


   function decFun() {
    counter--
    localStorage.setItem("counter1", counter)
    document.querySelector("h1").textContent = counter;
    console.log(counter)
}
function incFun() {
    counter++
    localStorage.setItem("counter1", counter)
    document.querySelector("h1").textContent = counter;
    console.log(counter)
}
window.addEventListener("load",orignalValue);

function orignalValue() {
    document.querySelector("h1").textContent = counter;
}