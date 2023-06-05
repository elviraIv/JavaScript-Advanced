function getArticleGenerator(articles) {
    let input = articles;
    
    return () =>{
        if(input.length){
            let container = document.getElementById('content');
            let article = document.createElement('article');
            let currentArticle = input.shift();
            article.textContent = currentArticle;
            container.appendChild(article);
        }
    }
}
