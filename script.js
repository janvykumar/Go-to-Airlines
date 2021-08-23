const origin = document.getElementById('origin')
const destination = document.getElementById('destination')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
form.addEventListener('search flight' , (e) =>{
    let messages=[]
    if(origin.value==''||origin.value==null){
        messages.push('origin city is required')
    }


    if(messages.length>0){
        e.preventDefault()
        errorElement.innerText=messages.join(',')
    }
})