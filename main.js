var quantity=document.querySelectorAll("#quantity")
console.log(quantity);
var plus=document.querySelectorAll("#increment")
console.log(increment);
var moins=document.querySelectorAll("#decrement")
console.log(decrement);
var price=document.querySelectorAll("#price")
console.log(price);
var total=document.querySelector("#total-price")
console.log(total-price);
var heart=document.querySelectorAll(".material-symbols-outlined")
var del=document.querySelectorAll("#supprimer")
var card=document.querySelectorAll(".card")
function totalPrice (){
var result=0
for (let i = 0; i < price.length; i++) {
    result=price[i].innerHTML*quantity[i].innerHTML+result
    
}
return total.innerHTML=result
}
for (let i = 0; i< plus.length; i++) {
    
    plus[i].addEventListener("click",function add() {
        quantity[i].innerHTML++
        return totalPrice()
    } );
}
for (let i = 0; i<moins.length; i++) {
    
    moins[i].addEventListener("click",function reduce() {
        if (quantity[i].innerHTML >0) {
            quantity[i].innerHTML--    
        }
        
        return totalPrice()
    } );
}

for (let i = 0; i< heart.length; i++) {

    heart[i].addEventListener("click",function hearts() {
        
        if (heart[i].style.backgroundColor==="red"){

          return  heart[i].style.backgroundColor="white"
        }
        else{
           return heart[i].style.backgroundColor="red"
        }
    })
    
}
for (let i=0; i< del.length;i++) {
    del[i].addEventListener("click",function del(){
        card [i].remove()
        quantity[i].innerHTML=0
        return totalPrice()


    })
}