/*function getColor(){
    let color1 = document.getElementById('color_baground').value;
    
    if(color1 == 'color_w'){
        document.body.style.background = 'white';
    } else {
        if(color1 == 'color_g'){
            document.body.style.background = 'green';
        } else if(color1 == 'color_b'){
                document.body.style.background = 'blue';
            } else if(color1 == 'color_r'){
                document.body.style.background = 'red';
            } else if(color1 == 'color_y'){
                document.body.style.background = 'yellow';
            }       
    }
}*/

function getColor(){
    let color1 = document.getElementById('color_baground').value;

    switch (color1) {
        case "color_w":
            document.body.style.background = 'white';
            break;
        case "color_g":
            document.body.style.background = 'green';
            break;
        case "color_b":
            document.body.style.background = 'blue';
            break;                
        case "color_r":
            document.body.style.background = 'red';
            break;
        case "color_y":
            document.body.style.background = 'yellow';
            break;        
    }
}