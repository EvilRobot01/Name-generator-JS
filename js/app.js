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
        url += `region=${gender}&`;
    }

    //Read amount, append url
    if(amount !== ''){
        url += `region=${amount}&`;
    }


}