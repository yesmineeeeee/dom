console.log(document);
var plus = document.querySelectorAll('.plus');
var minus = document.querySelectorAll('.minus');
var like = document.querySelectorAll('.like');
var sum = document.getElementById('total');
var prices = document.querySelectorAll('.price');
console.log(plus);

for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener('click',inc);    
}
for (let i = 0; i < minus.length; i++) {
    minus[i].addEventListener('click',dec);    
}
for(let i = 0; i < like.length;i++){
    like[i].addEventListener('click', changecolor);
}
function inc(event) {
    var cible = event.target;
    var parent = cible.parentElement;
    var tr = parent.parentElement.parentElement;
    console.log(tr)
    var unitprice = Number(tr.querySelector('.unitPrice').innerHTML);
    console.log(unitprice);
    console.log(tr);
    var p = parent.querySelector('p');
    console.log(p);
    var quantity = Number(p.innerHTML);
    quantity++;
    p.innerHTML=quantity;
    var total =quantity*unitprice;
    var price = tr.querySelector('.price');
    price.innerHTML=total;
    var somme = 0;
    console.log(total);
    for (let i = 0; i < prices.length; i++) {
        somme += Number(prices[i].innerHTML);
        
    }
sum.innerHTML = somme
    console.log("somme totale",somme);
console.log(p);


}
function dec(event) {
    var cible = event.target;
    var parent = cible.parentElement;
    var tr = parent.parentElement.parentElement;
    var unitprice = Number(tr.querySelector('.unitPrice').innerHTML);
    console.log(unitprice);
    console.log(tr);
    var p = parent.querySelector('p');
    console.log(p);
    var quantity = Number(p.innerHTML);
    if (quantity>0) {
        quantity--;    
    }
    p.innerHTML=quantity;
    var total =quantity*unitprice;
    console.log(total);
    var price=tr.querySelector('.price');
price.innerHTML=total;
// console.log(p);
var somme = 0
for (let i = 0; i < prices.length; i++) {
    somme += Number(prices[i].innerHTML);
    
}
sum.innerHTML = somme


}
function changecolor(event) {
    var cible = event.target;
    console.log(cible)
    if( cible.style.color !="red"){
        cible.style.color ="red"
    }else if( cible.style.color == "red"){
        cible.style.color = "grey"
    }

    
}
function total(event) {

    
}