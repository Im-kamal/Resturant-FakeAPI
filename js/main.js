

var links = document.querySelectorAll('.home .navbar .nav-link');

for(var i =0 ;i<links.length ;i++){
   links[i].addEventListener('click',function(e){
      var curentText =  e.target.innerHTML;
      GetApiData(curentText);
      
   })
}

var data = [];

async function GetApiData(meal="pizza"){
//    var https = new XMLHttpRequest();

// https.open('GET',`https://forkify-api.herokuapp.com/api/search?q=${meal}`);

// https.send();

// https.addEventListener('readystatechange',function(){
//    if(https.readyState == 4)
//      data = JSON.parse(https.response).recipes;    
//    displayData();
// })

var https = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${meal}`); //GET By Default
var response = await https.json();

data = response.recipes;
 displayData();


}


function displayData(){
   var cols =``;
   for(var i = 0 ;i<data.length ; i++){
      cols+=`<div class="col-md-4">
            <div class="card">
              <img class="card-img-top improveImg" src="${data[i].image_url}" alt="Title" />
              <div class="card-body">
                <h4 class="card-title">${data[i].title}</h4>
                <a target = "_blank" href="${data[i].source_url}" class="btn btn-info">Source</a>
              </div>
          </div>
          </div>`;
   }

   document.getElementById("colsData").innerHTML = cols;
}

GetApiData();



