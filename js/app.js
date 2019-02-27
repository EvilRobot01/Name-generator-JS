document.querySelector('#generate-names').addEventListener('submit', loadNames);

//Query API
function loadNames(e){
    e.preventDefault();

    //Read values, create variables
    const origin = document.getElementById('country').value;
    const gender = document.getElementById('genre').value;
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

    fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(names){
            let html = '<h2>Generated Names</h2>';
            html += '<ul class="list">';
            names.forEach(name => {
                html += `
                <li>${name.name}</li>
                `;
            });
            html += '</ul>';
            document.querySelector('#result').innerHTML = html; 
        })
        .catch(function(error){
            console.log(error);
        })
}
