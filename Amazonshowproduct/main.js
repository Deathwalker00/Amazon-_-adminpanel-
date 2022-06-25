var counter =document.querySelector("#counter")
counter.innerHTML


var mindiv=document.querySelector(".product")

var list=JSON.parse(localStorage.getItem("Products"))
counter.innerHTML=list.length
var data=" "
function appeddata(){

    list.forEach(function(el,i){
        data+= ` <div >

        <img src="${el.image}" alt="">
        <div class="list">
        <p> ${el.name}</p>
        <p> ${el.gender}</p>
        <p>${el.category}</p>
        <p>Rs.${el.price}</p>
        <button id="${i}" class="s" Onclick="changecolor(${i})" >not sold</button>
        <button id="${i}"  Onclick="removele(${i})">remove</button>
        </div>
        
        
        
        </div>`
      
        })
    mindiv.innerHTML=data
    
    }
    appeddata()


    function changecolor(i){

        
  
        list.forEach(function(e ,index){
            if(i==index){
               document.getElementById(i).style.backgroundColor ="green"
               document.getElementById(i).innerText="Sold"
            }
    })
       
        }
function removele(f){
for(var i = 0; i<list.length;i++){
    if(f==i){
        console.log(list[i] ,f,i)
        list.pop(i);
     // localStorage.removeItem(list[i])
      counter.innerHTML=list.length
       
    }
    

}

}
        

       