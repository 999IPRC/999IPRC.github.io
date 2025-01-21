var posts=["2025/01/21/Git问题：解决port-22-out/","2025/01/21/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };