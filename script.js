const userInput = document.getElementById('input');
let dataSource = 'https://www.reddit.com/r/aww/.json'

// userInput ? dataSource = `https://www.reddit.com/${userInput}/.json` : ;


//get the data from the response object - parse it
const apiPromise = fetch(dataSource)
    .then((response) => response.json());
apiPromise.then(data => console.log('the whole json', data)); // just for records

// specifying the array of posts in the data
const posts = apiPromise.then((object) => {
    return object.data.children
});
posts.then(post => console.log('the kids', posts)); // just for records

//list titles on page, add links and thumbnails to them
const titles = posts.then((posts) => {
    const postList = document.getElementById('posts');
    for (const post of posts) {
        //create a div for anchor tags: a hyperlink that displays title of post it links to, a thumbnail
        const postLink = document.createElement('a');
        const thumbnail = document.createElement('img');

        postLink.setAttribute('href', post.data.url);
        postLink.setAttribute('target','_blank');
        postLink.innerText = post.data.title;

        thumbnail.setAttribute('href', post.data.thumbnail);
        thumbnail.setAttribute('src', post.data.thumbnail);
        thumbnail.setAttribute('target','_blank');

        const listedPost = document.createElement('div');
        listedPost.appendChild(thumbnail);
        listedPost.appendChild(postLink);
        postList.appendChild(listedPost);

        // console.log('title:', post.data.url); // just for records
    }
});



// } else {
//     //get the data from the response object - parse it
// const apiPromise = fetch(`https://www.reddit.com/${userInput.value}/.json`)
// .then((response) => response.json());
// apiPromise.then(data => console.log('the whole json', data)); // just for records

// // specifying the array of posts in the data
// const posts = apiPromise.then((object) => {
// return object.data.children
// });
// posts.then(post => console.log('the kids', posts)); // just for records

// //list titles on page, add links and thumbnails to them
// const titles = posts.then((posts) => {
//     const postList = document.getElementById('posts');
//     for (const post of posts) {
//         //create a div for anchor tags: a hyperlink that displays title of post it links to, a thumbnail
//         const postLink = document.createElement('a');
//         const thumbnail = document.createElement('img');

//         postLink.setAttribute('href', post.data.url);
//         postLink.setAttribute('target','_blank');
//         postLink.innerText = post.data.title;

//         thumbnail.setAttribute('href', post.data.thumbnail);
//         thumbnail.setAttribute('src', post.data.thumbnail);
//         thumbnail.setAttribute('target','_blank');

//         const listedPost = document.createElement('div');
//         listedPost.appendChild(thumbnail);
//         listedPost.appendChild(postLink);
//         postList.appendChild(listedPost);

//         // console.log('title:', post.data.url); // just for records
//     }
// });
// }
