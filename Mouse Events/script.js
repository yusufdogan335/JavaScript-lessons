const btn = document.querySelector('#btnDeleteAll');
const ul = document.querySelector('#task-list');

// Click Event
/* btn.addEventListener('click', eventHandler); 
ul.addEventListener('click', eventHandler); //ul içinde herhangi bir yere tıklandığında event gerçekleşir.
 */

// Double Click Event

//btn.addEventListener('dblclick', eventHandler);

// Mouse Down and Mouse Up

btn.addEventListener('mousedown', eventHandler);//mause tıklayıp basılı tutunca gerçekleşir.
btn.addEventListener('mouseup', eventHandler); // basılı tutma bırakıldığında gerçekleşir.

// Mouse Enter

ul.addEventListener('mouseenter', eventHandler);// mouse üzerine geldiğinde gerçekleşir

// Mouse Leave

ul.addEventListener('mouseleave', eventHandler); // mouse üzerinden gittiğinde gerçekleşir.



// Mouse Over

//ul.addEventListener('mouseover', eventHandler);// nesnelerin alt elemanlarına geçişte çalışır

//Mouse Out

//ul.addEventListener('mouseout', eventHandler);// nesnelerin alt elemanlarına geçişte çalışır

// Mouse Move

ul.addEventListener('mousemove', eventHandler); //mouse hareket ettiği sürece event gerçekleşir.
// Bu event ile kullanıcı herhangi bir resim üzerinde dolaşırken hangi koordinatta olduğunu anlarız

const h5 = document.querySelector('h5'); 



function eventHandler(event) {
    console.log(`event type : ${event.type}`);

    h5.textContent = `Mouse X : ${event.offsetX} 
                    Mouse Y : ${event.offsetY}`;  /* yataydaki konum ve dikeydeki konum */

}





