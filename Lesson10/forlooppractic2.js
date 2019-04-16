function G10(url){
    $.get(url, function(data){
        for (i = 0; i < data.length; i++){
            if(data[i].userId == 10){
            console.log(data[i])
            }
        }
    })
}
G10('https://jsonplaceholder.typicode.com/posts');

$('ul').append('<li>').append('data[i]')
