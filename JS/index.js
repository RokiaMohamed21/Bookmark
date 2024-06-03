var siteNameInput = document.getElementById("SiteName")
var siteUrlInput = document.getElementById("SiteURL")
var addBtn = document.getElementById("addBtn")
var updateBtn = document.getElementById("updateBtn")

var indexSite = 0 ;

var websiteContainer =[] ;

if(localStorage.getItem("website")!= null){
    websiteContainer = JSON.parse (localStorage.getItem("website"))
}


function addSite() {
    if(validationSiteName() === true){
    var website ={
        name:siteNameInput.value ,
        url : siteUrlInput.value 
    }

websiteContainer.push(website)

localStorage.setItem ("website",JSON.stringify (websiteContainer))

displayData()

clearForm();
}
}



function clearForm(){
    siteNameInput.value ="";
    siteUrlInput.value = "" ; 
}






function displayData() {

    var cartona='';

    for(var i=0 ; i<websiteContainer.length ; i++){
        cartona +=
       
       `
        <tr>
        <td></td>
        <td>${websiteContainer[i].name}</td>
        <td>
        <a target = "_blank" href ="${websiteContainer[i].url}">
        Your Website
        </td>
        <td>
        <button class = "btn btn-outline-warning  w-50 h-50"  onclick ="setData(${i})">Update</button>  
        </td>

        <td> 
        <button class = "btn btn-outline-danger w-50 h-50  " onclick = "deleteSite(${i})">Delete</button>
         </td>

        </tr>
        `
    }

    document.getElementById("tableData").innerHTML = cartona
}






function deleteSite (elementNumber){
    websiteContainer.splice(elementNumber,1)
    console.log(websiteContainer);
    
    localStorage.setItem("website" , JSON.stringify(websiteContainer))

    displayData();
}





function setData(index) {
   indexSite = index ; 
   var currentSite = websiteContainer[index]
   
   siteNameInput.value = currentSite.name 
   siteUrlInput.value = currentSite.url

   updateBtn.classList.remove("d-none")
   addBtn.classList.add("d-none")

}


function updateSite (){
    var website ={
        name:siteNameInput.value ,
        url : siteUrlInput.value 
    }   

    websiteContainer.splice(indexSite,1,website )
    
    localStorage.setItem("website",JSON.stringify(websiteContainer))
    
    displayData();
    

    updateBtn.classList.add("d-none") ;
    addBtn.classList.remove("d-none") ; 

    clearForm() ;

}





function validationSiteName(){
    var messageName = document.getElementById("messageName")
    var regexName = /^[A-Z][a-z]{2,15}$/
    var text = siteNameInput.value
    if (regexName.test(text) == true && text !== ''){
       siteNameInput.classList.add('is-valid');
       siteNameInput.classList.remove('is-invalid');
       messageName.classList.add('d-none');

       return true ;
    }
    else
    {
       siteNameInput.classList.add('is-invalid');
       siteNameInput.classList.remove('is-valid');
       messageName.classList.remove('d-none');

       return false ; 
    }
}









function validationSiteURL(){

var messageURL= document.getElementById("messageURL")
    var regexURL = /^[A-Z][a-z]{10,20}$/
    var text = siteUrlInput.value
    if (regexURL.test(text) == true && text !== ' '){
       siteUrlInput.classList.add('is-valid');
       siteUrlInput.classList.remove('is-invalid');
       messageURL.classList.add('d-none');

       return true ;
    }
    else
    {
       siteUrlInput.classList.add('is-invalid');
       siteUrlInput.classList.remove('is-valid');
       messageURL.classList.remove('d-none');

       return false ; 
    }
}


