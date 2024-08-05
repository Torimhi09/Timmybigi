document.getElementById('blog-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('blog-title').value;
    const content = document.getElementById('blog-content').value;
    addBlogPost(title, content);
});

document.getElementById('search-bar').addEventListener('input', function(event) {
    const query = event.target.value.toLowerCase();
    filterBlogs(query);
});

function addBlogPost(title, content) {
    const blogList = document.getElementById('blog-list');
    const blogPost = document.createElement('div');
    blogPost.className = 'blog-post';
    blogPost.innerHTML = <h3>${title}</h3><p>${content}</p>;
    blogList.appendChild(blogPost);
}

function filterBlogs(query) {
    const blogPosts = document.querySelectorAll('.blog-post');
    blogPosts.forEach(post => {
        const title = post.querySelector('h3').textContent.toLowerCase();
        if (title.includes(query)) {
            post.style.display = 'block';
        } else {
            post.style.display = 'none';
        }
    });
}