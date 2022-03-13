function newElement(){
    console.log("check");
    const value=document.getElementById("myInput").value;
    // tao li
    let li =document.createElement("li");
    let textNode=document.createTextNode(value);
    let h3 =document.createElement("h5");
    li.appendChild(h3);
    li.appendChild(textNode);
    let ul=document.getElementById("myUL");
    ul.appendChild(li);
    // them nut x 
    xoabtn(li);
    // addcheck(li);
    li.onclick=function(){
        addcheck(li);
    }
}

function xoabtn(li){
    let xbtn=document.createElement("span");
    xbtn.appendChild(document.createTextNode("x"));
    xbtn.className="close";
    xbtn.onclick=function(){
        li.remove();
        // this.parentNode.remove();
    }
     li.appendChild(xbtn);
}
function init(){
    let ul=document.getElementById("myUL");
    let lis=ul.children;
    for(let i=0;i<lis.length;i++){
        xoabtn(lis[i]);
        lis[i].onclick=function(){
            addcheck(lis[i]);
        }
    }
}
init();
function addcheck(li){
//     if(li.className===""){
//         li.className="checked";
//     }
//    else{
//        li.className="";
//    }
   li.classList.toggle("checked");
}