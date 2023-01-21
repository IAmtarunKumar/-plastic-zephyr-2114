







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
  