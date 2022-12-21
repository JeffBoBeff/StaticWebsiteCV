function toggleDivEdu() {
    var x = document.getElementsByClassName("education-container")[0];
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
 }

 function toggleDivExp() {
    var x = document.getElementsByClassName("experience-container")[0];
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
 }

fetch("utbildningar.json")
.then(function(response){
    return response.json();
})
.then(function(objects){
    let placeholder = document.querySelector(".education-container");
    let out = "";
    for (let object of objects){
        out += `
            <div class="edu">
                <p>${object.date}</p>
                <p>${object.location}</p>
            </div>
        `

    }

    placeholder.innerHTML = out;
})

fetch("arbetsplatser.json")
.then(function(response){
    return response.json();
})
.then(function(objects){
    let placeholder = document.querySelector(".experience-container");
    let out = "";
    for (let object of objects){
        out += `
            <div class="exp">
                <p>${object.date}</p>
                <p>${object.location}</p>
            </div>
        `

    }

    placeholder.innerHTML = out;
})