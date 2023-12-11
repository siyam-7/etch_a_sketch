const mastercontainer = document.querySelector('.master-container');
const adjust = document.createElement("button");
adjust.className="adjust_button";
adjust.innerHTML ="ADJUST THE GRID SIZE";
mastercontainer.insertBefore(adjust,mastercontainer.firstChild);

const container = document.querySelector('.container');
let grid_size=16;

adjust.addEventListener('click', function(){
    grid_size = prompt("Please enter the grid size");
    grid_size = parseInt(grid_size);
    container.innerHTML ="";
    const grid_hw = grid_size*50;
    container.style.height=grid_hw + "px";
    container.style.width = grid_hw +"px";
    for(i=0;i<grid_size*grid_size;i++){
        var newDiv = document.createElement('div');
        newDiv.className="grid_div";
    
        container.append(newDiv);
    }
    const divs =document.getElementsByClassName("grid_div");
 console.log(divs.length);
    Array.from(divs).forEach(function (div){
        div.addEventListener('mouseenter', function () {
            div.style.backgroundColor = "red";
        });
        div.addEventListener('mouseleave', function(){
            div.style.backgroundColor = "white";
        })
    });
  
})    

for(i=0;i<grid_size*grid_size;i++){
    var newDiv = document.createElement('div');
    newDiv.className="grid_div";

    container.append(newDiv);
}


 const divs =document.getElementsByClassName("grid_div");
 console.log(divs.length);
    Array.from(divs).forEach(function (div){
        div.addEventListener('mouseenter', function () {
            div.style.backgroundColor = "red";
        });
        div.addEventListener('mouseleave', function(){
            div.style.backgroundColor = "white";
        })
    });
  
