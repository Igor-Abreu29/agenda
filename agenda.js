let cc = 0
let txtn = document.querySelector('#txtn')
let div = document.querySelector('#habita')
let div1 = document.querySelector('.teste1');

  function clique(){
  let values = txtn.value;
  cc++;

  if(values.length == 0){
    alert('Por favor, digite algo!')
  }
 else{
  let novo = `
  <div id="${cc}" class="teste1" >
 <div class="circle" onclick="adicione(${cc})">
 <i id="icon${cc}" class="fa-regular fa-circle no-checked"></i>
 </div> 
<div id="div" onclick="adicione(${cc})">
  <p contenteditable="true">${values}</p>
</div>  
  <button onclick="remova(${cc})" id="sopa">Remova</button>
 </div>
  `
  div.innerHTML += novo;
  txtn.value = ''
  txtn.focus()
 }
} 


function adicione(re){
  let valueGreen = document.getElementById(re)
  let cls = valueGreen.getAttribute('class');
  console.log(cls)

  if(cls == 'teste1'){
    valueGreen.classList.add('click')

    let icon = document.getElementById('icon' + re)

    icon.classList.remove('fa-circle');
    icon.classList.add('fa-circle-check');
  }else{
   valueGreen.classList.remove('click')

    let icon = document.getElementById('icon' + re)

    icon.classList.remove('fa-circle-check');
    icon.classList.add('fa-circle')
  }
 }

let remova = (re) => {
  let deletar = document.getElementById(re)
  deletar.remove()
}




