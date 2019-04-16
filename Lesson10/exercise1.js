var newPost = {name: 'Maurice', id: 101, body: "Imagination is the essence of discovery"};

function GET(url){
    $('li').remove();
    $.get(url, function(data){
        for(i = 0; i < data.length; i++){
        $('ul').append("<li>" + 'User ID: ' + data[i].userId + '<br />' + 'Post Title: ' + data[i].title + '<br />' + 'Post Body: ' + data[i].body + "</li>")
        }
    })
};

function G10(url){
    $('li').remove();
    $.get(url, function(data){
        for (i = 0; i < data.length; i++){
            if(data[i].userId == 10){
            $('ul').append("<li>" + 'User ID: ' + data[i].userId + '<br />' + 'Post Title: ' + data[i].title + '<br />' + 'Post Body: ' + data[i].body + "</li>")
            }
        }
    })
};

function C12(url){
    $('li').remove();
    $.get(url, function(data){
        for(i = 0; i < data.length; i++){
            if(data[i].postId == 12){
                $('ul').append("<li>" + 'Comment: ' + data[i].body + "</li>")
            }
        }
    })
};

function ID2(url){
    $('li').remove();
    $.get(url, function(data){
        for(i = 0; i < data.length; i++){
            if(data[i].userId == 2){
                $('ul').append("<li>" + 'User ID: ' + data[i].userId + '<br />' + 'Post Title: ' + data[i].title + '<br />' + 'Post Body: ' + data[i].body + "</li>") 
            }
        }
    })
}

function NEW(url){
    $('li').remove()
    $('ul').append("<li>" + 'User Name: ' + newPost.name + '<br />' + 'User ID: ' + newPost.id + '<br />' + 'Post Body: ' + newPost.body + "</li>")
}

$('button#id10').on('click', function(){
    (G10("https://jsonplaceholder.typicode.com/posts"))
});
$('button#allPost').on('click', function(){
    (GET("https://jsonplaceholder.typicode.com/posts"))
});
$('button#c12').on('click', function(){
    (C12("http://jsonplaceholder.typicode.com/comments"))
});
$('button#id2').on('click', function(){
    (ID2("http://jsonplaceholder.typicode.com/posts"))
});
$('button#new').on('click', function(){
    (NEW("http://jsonplaceholder.typicode.com/posts"))
});