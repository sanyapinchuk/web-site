
document.querySelector("#make-order").onclick = function(){
    let elem = document.getElementById('pop-order');
    elem.style.visibility= 'visible';	
    let elem2 = document.getElementById('all-body');
    elem2.style.opacity = '0.4';
    document.body.style.overflow = 'hidden';		
}
document.querySelector("#order-all").onclick = function(){
    let elem = document.getElementById('pop-order');
    elem.style.visibility= 'hidden';	
    let elem2 = document.getElementById('all-body');
      elem2.style.opacity = '1';
    document.body.style.overflow = 'visible';		
}

document.querySelector("#icon-close").onclick = function(){
  let elem = document.getElementById('pop-order');
  elem.style.visibility= 'hidden';	
  let elem2 = document.getElementById('all-body');
    elem2.style.opacity = '1';
  document.body.style.overflow = 'visible';		
}
