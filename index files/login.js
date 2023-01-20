
    let form = document.querySelector('form')
    console.log(form)

    form.addEventListener("submit",(event)=>{
    event.preventDefault()
        
    let obj = {
        email : form.email.value,
        password : form.password.value
    }
    console.log(obj)
    postdata(obj)
    
    })

let postdata = async (obj)=>{

    try {
        let res = await fetch("http://localhost:8000/users/login",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(obj)
        })
        if(res){
            let data = await res.json()
            alert(data.msg)
            window.location.href="index.html"
        }
    } catch (error) {
        alert("Something Went Wrong")
    }
}


