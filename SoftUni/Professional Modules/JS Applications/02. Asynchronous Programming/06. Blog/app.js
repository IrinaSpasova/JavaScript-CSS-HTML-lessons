function attachEvents() {
    document.getElementById('btnLoadPosts').addEventListener('click', getAllPost);
    document.getElementById('btnViewPost').addEventListener('click', displayPosts);
}

attachEvents();

async function displayPosts() {
    //get selected value from list
    //load posts 
    //load comments for post
    //render data


    //Това е ако  викаме едновременно двете заявки:

    //Promise.all спестява време!!!

    const titleElement = document.getElementById('post-title');
    const bodyElement = document.getElementById('post-body');
    const ulElement = document.getElementById('post-comments');

    titleElement.textContent = 'Loading...';
    bodyElement.textContent = '';
    ulElement.replaceChildren();

    const selectedId = document.getElementById('posts').value;

    const [post, comments] = await Promise.all([
        getPostsById(selectedId),
        getCommentsByPostId(selectedId)
    ]);

    titleElement.textContent = post.title;
    bodyElement.textContent = post.body;

    comments.forEach(c => {
        const liElement = document.createElement('li');
        liElement.textContent = c.text;
        ulElement.appendChild(liElement);
    });





    /*
    Това е ако не викаме едновременно двете заявки:

        const selectedId = document.getElementById('posts').value;

        const post = await getPostsById(selectedId);
        const comments = await getCommentsByPostId(selectedId);

        //for the posts:
        document.getElementById('post-title').textContent = post.title;
        document.getElementById('post-body').textContent = post.body;

        //for the comments:
        const ulElement = document.getElementById('post-comments');
        ulElement.replaceChildren();

        comments.forEach(c => {
            const liElement = document.createElement('li');
            liElement.textContent = c.text;
            ulElement.appendChild(liElement);
        });
        */
}

async function getAllPost() {
    const url = `http://localhost:3030/jsonstore/blog/posts`;

    const res = await fetch(url);
    const data = await res.json();

    //parse data and populate list
    const selectElement = document.getElementById('posts');
    selectElement.replaceChildren();
    Object.values(data).forEach(p => {
        const optionElement = document.createElement('option');
        optionElement.textContent = p.title;
        optionElement.value = p.id;

        selectElement.appendChild(optionElement);
    });

}

async function getPostsById(postId) {
    const url = `http://localhost:3030/jsonstore/blog/posts/` + postId;
    const res = await fetch(url);
    const data = await res.json();

    return data;
}

async function getCommentsByPostId(postId) {
    const url = `http://localhost:3030/jsonstore/blog/comments/`;
    const res = await fetch(url);
    const data = await res.json();

    const comments = Object.values(data).filter(c => c.postId == postId);

    return comments;
}