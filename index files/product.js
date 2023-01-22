// sliding image start
function one(){
  document.querySelector(".slide_image").src="https://images-static.nykaa.com/uploads/8358a13e-bd79-4365-8dfc-8545beddccf3.jpg?tr=w-1200,cm-pad_resize"
}
function two(){
  document.querySelector(".slide_image").src="https://images-static.nykaa.com/uploads/e6866268-c34e-48e0-93e7-44b8f4100eb4.gif?tr=w-1200,cm-pad_resize"
}
function three(){
  document.querySelector(".slide_image").src="https://images-static.nykaa.com/uploads/a5ad9115-e671-4078-a989-db65cf5054fb.jpg?tr=w-1200,cm-pad_resize"
}
function four(){
  document.querySelector(".slide_image").src="https://images-static.nykaa.com/uploads/acea991c-af3f-40d7-9ff2-cd8394df7899.jpg?tr=w-1200,cm-pad_resize"
}
function five(){
  document.querySelector(".slide_image").src="https://images-static.nykaa.com/uploads/8067c238-dfad-4f31-8fbe-b70f6ab712bf.jpg?tr=w-1200,cm-pad_resize"
}




setInterval(one,2000)
setInterval(two,4000)
setInterval(three,6000)
setInterval(four,8000)
setInterval(five,10000)





// product slider end 




// div 1 js 



let x=true
let sort = document.querySelector(".sort-h1")
console.log(sort)
sort.addEventListener("click",()=>{
// console.log("working")

if(x==true){
let h1 = document.querySelector(".form-sort")
h1.style.visibility = "visible";
h1.style.position = "relative"
x=false
}else if(x==false){
  
  let h1 = document.querySelector(".form-sort")
  h1.style.visibility = "hidden";
  h1.style.position = "absolute"
  x=true 
}
console.log(x)

// h1.style.display="block"
  console.log("working")
})


// filter by popularity

let input = document.querySelectorAll(".form-sort input" )
console.log(input)

input.forEach((item)=>{
  item.addEventListener("change",()=>{
    // console.log(item.value)
    // console.log(item.id)

    let obj = {
      "title" : "http://localhost:8000/posts/title",
      "lth" : "http://localhost:8000/posts/lth",
      "htl" : "http://localhost:8000/posts/htl",
      "discount" : "http://localhost:8000/posts/discount",
      "rating" : "http://localhost:8000/posts/rating"

    }
    let arr = ["title","lth", "htl","discount","rating"]

    for(let i=0; i<arr.length; i++){
    if(item.id==arr[i]){

      let url = obj[arr[i]]


      let lth = async () => {
        try {
          let res = await fetch(url, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": localStorage.getItem("token"),
            }
          //   body: JSON.stringify(obj),
          });
          if (res) {
            let data = await res.json();
            console.log(data)
          
          setTimeout(() => {
              appendData(data) 
          }, 1000);
            
            // console.log(data.token)
          }
        } catch (error) {
          alert("Something Went Wrong");
          console.log(error)
        }
      };


      lth()

    }
  }
  })
})
// filter by popularity end


//fiter by price 
////////////////////////////////////////////////////////
// onchange 
// div 1 js 
let pricex=true
let pricesort = document.querySelector(".price")
console.log(pricesort)
pricesort.addEventListener("click",()=>{
// console.log("working")

if(pricex==true){
let h1 = document.querySelector(".form-price")
h1.style.visibility = "visible";
h1.style.position = "relative"
pricex=false
}else if(pricex==false){
  
  let h1 = document.querySelector(".form-price")
  h1.style.visibility = "hidden";
  h1.style.position = "absolute"
  pricex=true 
}
console.log(pricex)

// h1.style.display="block"
  console.log("working")
})
//onchange end



let filterprice = document.querySelectorAll(".form-price input" )
console.log(filterprice)

filterprice.forEach((item)=>{
  item.addEventListener("change",()=>{
    // console.log(item.value)
    // console.log(item.id)

    let obj = {
      "499" : "http://localhost:8000/posts/499",
      "999" : "http://localhost:8000/posts/999",
      "1999" : "http://localhost:8000/posts/1999",
      "2999" : "http://localhost:8000/posts/2999",
      "3000" : "http://localhost:8000/posts/3000"

    }
    let arr = ["499","999", "1999","2999","3000"]

    for(let i=0; i<arr.length; i++){
    if(item.id==arr[i]){

      let url = obj[arr[i]]


      let price = async () => {
        try {
          let res = await fetch(url, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": localStorage.getItem("token"),
            }
          //   body: JSON.stringify(obj),
          });
          if (res) {
            let data = await res.json();
            console.log(data)
          
          setTimeout(() => {
              appendData(data) 
          }, 1000);
            
            // console.log(data.token)
          }
        } catch (error) {
          alert("Something Went Wrong");
          console.log(error)
        }
      };


      price()

    }
  }
  })
})

// filter by price end 
///////////////////////////////////////////////////////


//filter by brand 

////////////////////////////////
let brandx=true
let brandsort = document.querySelector(".brand")
console.log(brandsort)
brandsort.addEventListener("click",()=>{
// console.log("working")

if(brandx==true){
let h1 = document.querySelector(".form-brand")
h1.style.visibility = "visible";
h1.style.position = "relative"
brandx=false
}else if(brandx==false){
  
  let h1 = document.querySelector(".form-brand")
  h1.style.visibility = "hidden";
  h1.style.position = "absolute"
  brandx=true 
}
console.log(brandx)

// h1.style.display="block"
  console.log("working")
})
//onchange end



let filterbrand = document.querySelectorAll(".form-brand input" )
console.log(filterbrand)

filterbrand.forEach((item)=>{
  item.addEventListener("change",()=>{
    // console.log(item.value)
    // console.log(item.id)

    let obj = {
      "499" : "http://localhost:8000/posts/499",
      "999" : "http://localhost:8000/posts/999",
      "1999" : "http://localhost:8000/posts/1999",
      "2999" : "http://localhost:8000/posts/2999",
      "3000" : "http://localhost:8000/posts/3000"

    }
    let arr = ["499","999", "1999","2999","3000"]

    for(let i=0; i<arr.length; i++){
    if(item.id==arr[i]){

      let url = obj[arr[i]]


      let brand = async () => {
        try {
          let res = await fetch(url, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": localStorage.getItem("token"),
            }
          //   body: JSON.stringify(obj),
          });
          if (res) {
            let data = await res.json();
            console.log(data)
          
          setTimeout(() => {
              appendData(data) 
          }, 1000);
            
            // console.log(data.token)
          }
        } catch (error) {
          alert("Something Went Wrong");
          console.log(error)
        }
      };


      brand()

    }
  }
  })
})

//////////////////////////////////



///////////////////////////////////////////

// filter discount 

let discountx=true
let discountsort = document.querySelector(".discount")
console.log(discountsort)
discountsort.addEventListener("click",()=>{
// console.log("working")

if(discountx==true){
let h1 = document.querySelector(".form-discount")
console.log(h1)

h1.style.visibility = "visible"
h1.style.position = "relative"
discountx=false

}else if(discountx==false){
  
  let h1 = document.querySelector(".form-discount")
  h1.style.visibility = "hidden";
  h1.style.position = "absolute"
  discountx=true 
}
console.log(discountx)

// h1.style.display="block"
  console.log("working")
})
//onchange end



let filterdiscount = document.querySelectorAll(".form-discount input" )
console.log(filterdiscount)

filterdiscount.forEach((item)=>{
  item.addEventListener("change",()=>{
    // console.log(item.value)
    // console.log(item.id)

    let obj = {
      "499" : "http://localhost:8000/posts/499",
      "999" : "http://localhost:8000/posts/999",
      "1999" : "http://localhost:8000/posts/1999",
      "2999" : "http://localhost:8000/posts/2999",
      "3000" : "http://localhost:8000/posts/3000"

    }
    let arr = ["499","999", "1999","2999","3000"]

    for(let i=0; i<arr.length; i++){
    if(item.id==arr[i]){

      let url = obj[arr[i]]


      let discount = async () => {
        try {
          let res = await fetch(url, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": localStorage.getItem("token"),
            }
          //   body: JSON.stringify(obj),
          });
          if (res) {
            let data = await res.json();
            console.log(data)
          
          setTimeout(() => {
              appendData(data) 
          }, 1000);
            
            // console.log(data.token)
          }
        } catch (error) {
          alert("Something Went Wrong");
          console.log(error)
        }
      };


      discount()

    }
  }
  })
})



///////////////////////////////////////////



// category start 
let catx=true
let catsort = document.querySelector(".cat")
console.log(catsort)
catsort.addEventListener("click",()=>{
// console.log("working")

if(catx==true){
let h1 = document.querySelector(".form-cat")
console.log(h1)

h1.style.visibility = "visible"
h1.style.position = "relative"
catx=false

}else if(catx==false){
  
  let h1 = document.querySelector(".form-cat")
  h1.style.visibility = "hidden";
  h1.style.position = "absolute"
  catx=true 
}
console.log(catx)

// h1.style.display="block"
  console.log("working")
})
//onchange end



let filtercat = document.querySelectorAll(".form-cat input" )
console.log(filtercat)

filtercat.forEach((item)=>{
  item.addEventListener("change",()=>{
    // console.log(item.value)
    // console.log(item.id)

    let obj = {
      "499" : "http://localhost:8000/posts/499",
      "999" : "http://localhost:8000/posts/999",
      "1999" : "http://localhost:8000/posts/1999",
      "2999" : "http://localhost:8000/posts/2999",
      "3000" : "http://localhost:8000/posts/3000"

    }
    let arr = ["499","999", "1999","2999","3000"]

    for(let i=0; i<arr.length; i++){
    if(item.id==arr[i]){

      let url = obj[arr[i]]


      let category = async () => {
        try {
          let res = await fetch(url, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": localStorage.getItem("token"),
            }
          //   body: JSON.stringify(obj),
          });
          if (res) {
            let data = await res.json();
            console.log(data)
          
          setTimeout(() => {
              appendData(data) 
          }, 1000);
            
            // console.log(data.token)
          }
        } catch (error) {
          alert("Something Went Wrong");
          console.log(error)
        }
      };


      category()

    }
  }
  })
})



// category end 












// all product 


  
let alldata = async () => {
    try {
      let res = await fetch("http://localhost:8000/posts/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem("token"),
        }
      //   body: JSON.stringify(obj),
      });
      if (res) {
        let data = await res.json();
        console.log(data)
      
      setTimeout(() => {
          appendData(data) 
      }, 1000);
        
        // console.log(data.token)
      }
    } catch (error) {
      alert("Something Went Wrong");
      console.log(error)
    }
  };
  
  alldata()
  
  function appendData(data) {
    let alldata  = document.querySelector("#alldata")
    alldata.innerHTML=""
    data.forEach((item)=>{
    console.log(item)
     let alldata  = document.querySelector("#alldata")
       
     let div = document.createElement("div")
    div.innerHTML=` 
            <img src=${item.image} alt="">
            <br>
            <div>${item.title} </div>
            <span>MRP :₹${item.price}</span>       &nbsp &nbsp &nbsp             <span>${item.discount}% Off</span>
            <br>
            <span>Rating : ${item.rating}</span>   &nbsp &nbsp &nbsp                 <span>(${item.stock})</span><br>
            <button class="cart" data-id="${item._id}">Add to Bag</button>
            
  
        `
        
        
        alldata.append(div)
    })
  }
  
  
  // console.log("tarun")
  // let b = document.querySelectorAll("#delete")
  // console.log(btn1)
  // b.addEventListener("click",()=>{
  //     console.log("delete")
  // })
  
  // let btn =document.querySelector("#delete")
  // btn.addEventListener("click",()=>{
  // console.log("btn")
  // })
  

