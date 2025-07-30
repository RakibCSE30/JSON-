console.log("Posts");

function userPost()
{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data =>  postMessage(data));
    
}
function postMessage(posts)
{
    const postDiv =document.getElementById('inner-div');
    for( const post of posts )
    {
        console.log(post);
        
        const divValue = document.createElement('div');
        divValue.classList.add('postStyle');
        divValue.innerHTML=`
        <h3>Hello-${post.userId}</h3>
        <p>akduia-${post.title}</p>
        `;
        // divValue.classList=postStyle;
        postDiv.appendChild(divValue);
         
        
    }
}




userPost();
