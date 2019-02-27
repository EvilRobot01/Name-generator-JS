document.querySelector('#generate-names').addEventListener('submit', loadNames);

//Query API
function loadNames(e){
    e.preventDefault();

    //Read values, create variables
    const origin = document.getElementById('country').value;
    const gender = document.getElementById('gender').value;
    const amount = document.getElementById('quantity').value;

    //Build the URL
    let url = 'http://uinames.com/api/?';

    //Read origin, append url
    if(origin !== ''){
        url += `region=${origin}&`;
    }

    //Read gender, append url
    if(gender !== ''){
        url += `gender=${gender}&`;
    }

    //Read amount, append url
    if(amount !== ''){
        url += `amount=${amount}&`;
    }

    //AJAX call
    const xhr = new XMLHttpRequest();

    //Open connection
    xhr.open('GET', url, true);

    //Execute the function
    xhr.onload = function(){
        if(this.status === 200){
            const names = JSON.parse( this.responseText );
        }
    }

    //Send request
    xhr.send();



}