//your JS code here. If required.
let cont = document.querySelector('.container');
for(let i=0;i<800;i++){
	//create square boxes
	let square = document.createElement('div');
	square.classList.add('square');
	cont.appendChild(square);
	
	square.addEventListener('mouseover',() =>{
		square.classList.add('hovered')
		setTimeout (() =>{
			square.classList.remove('hovered');
			
		},1000);
	});
}