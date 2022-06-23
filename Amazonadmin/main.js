function item (name,category,image,price,gender,sold ){
this.name=name,
this.category=category,
this.image=image,
this.price=price,
this.gender=gender,
this.sold=sold
}

var Productslist= JSON.parse(localStorage.getItem("Products"))|| []

function AddProductls(e){

e.preventDefault()

let  deatils= document.querySelector("#form")
let name =deatils.name.value
let category = deatils.category.value
let image=deatils.image.value
let price=deatils.price.value
let gender=deatils.gender.value
let sold=deatils.sold.value

var p1= new item (name,category,image,price,gender,sold )
Productslist.push(p1)
localStorage.setItem("Products" ,JSON.stringify(Productslist))
}
//console.log(localStorage.getItem("Products"))