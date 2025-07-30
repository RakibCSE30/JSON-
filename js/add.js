console.log("Add.js");

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))
function getData()
{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => displayData(data));

}

function displayData(data){
    console.log(data);
    
}


function getUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data));
    
}
function displayUsers(data){
    const ul =document.getElementById('list');

    for(const user of data){
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText=user.name;
        ul.appendChild(li);
        
    }
    
}