let inputbox = document.getElementById('inputbox')
let listContainer = document.getElementById('list-container')


const toastOptions = {
    position: 'center',
    duration: 8000,
    close: true,
    gravity: 'top', // `top` or `bottom`
    positionLeft: false,
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
        background: "dark",
    }
    
};

function addHandle(){
    if(inputbox.value == ""){
        Toastify({
            text: "You must write something!",
            ...toastOptions
        }).showToast();
    }
    else{
       let li = document.createElement('li')
        li.innerHTML = inputbox.value;
        
        listContainer.appendChild(li)
      
     const span = document.createElement('span');
     span.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
     li.appendChild(span)

    }
    inputbox.value= "";
    saveData();
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName == 'LI'){
        e.target.classList.toggle("checked")

        saveData();
    }
    else if (e.target.tagName === 'I' || e.target.tagName === 'SPAN') {
        e.target.closest('li').remove();
      
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();