// All the Code for the Admitted page goes here

let admArr=JSON.parse(localStorage.getItem("admission-accepted"))||[]

admArr.forEach(function(el,i){

    let row=document.createElement("tr")
    let col1=document.createElement("td")
    col1.innerText=el.name
    let col2=document.createElement("td")
    col2.innerText=el.email
    let col3=document.createElement("td")
    col3.innerText=el.course
    let col4=document.createElement("td")
    col4.innerText=el.gender
    let col5=document.createElement("td")
    col5.innerText=el.phone
    row.append(col1,col2,col3,col4,col5)
    document.querySelector("tbody").append(row)
})
