// All the Code for All Students Page Goes Here

document.querySelector("#filter").addEventListener("change",fun)
function fun(){
let selectedcourse=document.querySelector("#filter").value
let outcome=output.filter(function(el){
    return el.course==selectedcourse
})
display(outcome)
}
let output=JSON.parse(localStorage.getItem("admission"))||[];
let admissionArr=JSON.parse(localStorage.getItem("admission-accepted"))||[]
let rejArr=JSON.parse(localStorage.getItem("admission-rejected"))||[]
display(output)
function display(output){
    document.querySelector("tbody").innerHTML=""
output.forEach(function(el,i){
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
    let col6=document.createElement("td")
    col6.innerText="Admitted"
col6.addEventListener("click",function(){
admission(el,i)
})
    let col7=document.createElement("td")
    col7.innerText="Rejected"
col7.addEventListener("click",function(){
    rejection(el,i)
})
    row.append(col1,col2,col3,col4,col5,col6,col7)
    document.querySelector("tbody").append(row)
})
}
function admission(el,i){
admissionArr.push(el)
localStorage.setItem("admission-accepted",JSON.stringify(admissionArr))
output.splice(i,1)
display(output)
}
function rejection(el,i){
rejArr.push(el)
localStorage.setItem("admission-rejected",JSON.stringify(rejArr))
output.splice(i,1)
display(output)
}