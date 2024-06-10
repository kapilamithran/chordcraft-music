let text = document.getElementById('Title');
let pic = document.getElementById('pic');
let wi = document.getElementById('welcome_image')


window.addEventListener('scroll',()=> {
    let value = window.scrollY;
    if(value<500 && value<600){
        text.style.marginBottom = value *2.5 + 'px';        
        pic.style.top = value * 1 + 'px'; 

    }

    var zoomLevel = 1 + (value / 2000); // You can adjust the divisor to change the zoom sensitivity
    
    // Apply zoom level to the image
    wi.style.transform = 'scale(' + zoomLevel + ')';
     
})

