//Traversing the Dom

/*nodeName:	düğümün adını bildirir
nodeValue:  düğümün "değerini" verir 
parentNode:	düğümün üst öğesini verir. Her öğenin, özniteliğin ve metnin bir üst öğesinin olduğunu unutmayın.
childNodes:	bir düğümün alt öğelerinin listesidir. HTML ile çalışırken, bu liste yalnızca bir öğe üzerinde çalışırken işe yarar; metin düğümlerinin ve öznitelik düğümlerinin alt düğümleri yoktur.
firstChild:	childNodes listesindeki birinci düğüme giden bir kısayoldur.
lastChild:	childNodes listesindeki son düğüme giden bir kısayoldur.
previousSibling:	geçerli düğümden önceki düğümü verir. Diğer bir deyişle, bu düğümün üst öğesinin childNodes listesinde, geçerli düğümden bir önceki düğümü verir.
nextSibling:	previousSibling özelliğine benzer; üst öğenin childNodes listesindeki bir sonraki düğümü verir.
attributes:	yalnızca bir öğe düğümünde yararlı olur; bir öğenin özniteliklerinin listesini verir.
textnode: satır aralıklarını temsil eder.*/


/*tüm düğümlerle kullanılabilen yöntemler(düğüm özelliklerinde olduğu gibi, çoğu HTML DOM işlemleri için gerçekten geçerli olmayan birkaç yöntem):

insertBefore(newChild, referenceNode), referenceNode değerinden önce newChild düğümünü yerleştirir. Bu kodu, istediğiniz newChild düğümünün üst öğesinde çağıracağınızı unutmayın.
replaceChild(newChild, oldChild), oldChild düğümünü newChild düğümüyle değiştirir.
removeChild(oldChild), işlevin çalıştırıldığı düğümden oldChild düğümünü kaldırır.
appendChild(newChild), bu işlevin çalıştırıldığı düğüme newChild düğümünü ekler. newChild, hedef düğümün alt öğelerinin sonuna eklenir.
hasChildNodes(), çağrıldığı düğümün alt öğeleri varsa doğru, yoksa yanlış değerini döndürür.
hasAttributes(), çağrıldığı düğümün öznitelikleri varsa doğru, özniteliği yoksa yanlış değerini döndürür.*/





let val;

let list = document.querySelector('.list-group'); 

val = list;

val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;  //text 
val = list.childNodes[1].nodeType;  //element

val = list.children;
val = list.children[0];
val = list.children[2];

val = list.children[0].textContent = "new item";
val = list.children[3].children;

val = list.firstChild;
val = list.firstElementChild;
val = list.lastChild;
val = list.lastElementChild;

//eleman sayıları

val = list.childElementCount;

val = list.parentNode;
val = list.parentElement;
val = list.parentElement.parentElement;

val = list.children[0].nextSibling;
val = list.children[0].nextElementSibling;

val = list.children[1].previousSibling;
val = list.children[1].previousElementSibling;

//console.log(val);


for (let i = 0; i < list.children.length; i++){
    if (list.childNodes[i].nodeType === 3) {
        console.log(list.childNodes[i]);
    }  
}

