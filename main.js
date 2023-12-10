const container = document.querySelector('.container');

for(i=0;i<16*16;i++){
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
    