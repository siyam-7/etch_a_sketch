const container = document.querySelector('.container');

for(i=0;i<16*16;i++){
    var newDiv = document.createElement('div');
    newDiv.className="grid_div";

    container.append(newDiv);
}