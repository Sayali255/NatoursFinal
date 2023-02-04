let cl = console.log;


// ................DOM Selection.....................

	const showModalbtn = Array.from(document.querySelectorAll('.showModal'));
	const backDrop = document.getElementById('backDrop');
	const myModal = document.getElementById('myModal');
	const myclose = Array.from(document.querySelectorAll('.myclose')); 
	const navigation = document.getElementById("navigation");
	const navToggle = document.getElementById("nav-toggle");
	
	let movieArry =[];
	
	//////////////// callBack Function///////////////////////////////
	
	const showModalHandler = function(){
		backDrop.classList.remove('d-none');
		myModal.classList.remove('d-none');

	}
	
	const hideModalHandler = function(){
		backDrop.classList.add('d-none');
		myModal.classList.add('d-none');

	}
	

	
	// ~~~~~~~~~~~~~~~~~~~~~~~~ Event Binding~~~~~~~~~~~~~~~~~~~~~~~~~
	
	showModalbtn.forEach(ele => {
        ele.addEventListener('click', showModalHandler);
        
    });
	backDrop.addEventListener('click', hideModalHandler);
	
	
	
	myclose.forEach(function(ele){
		ele.addEventListener('click', hideModalHandler)
	})
	
	
	


const onClickHandler = () =>{
    navigation.classList.toggle("active");
}



navToggle.addEventListener("click", onClickHandler);