$("#submit").on('click', function(){
    var name = $('#name');
    var email = $('#email');
    var phone = $('#phone');
    var message = $('textarea#message');
    var divFor = $('div.form-container');
    var divTop = $('div').has('h2')

    var required = [name, email, phone, message];
    var succ = true;
    for (i = 0; i < required.length; i++){
        if (required[i][0].value == ''){
            succ = false;
            alert('ALL information is REQUIRED information!!!');
            required[i].addClass('warning');
            // $(name).css('background-color', 'red');
            // $(email).css('background-color', 'red');
            // $(phone).css('background-color', 'red');
            // $(message).css('background-color', 'red');
        }
    }
    if (succ){
        alert('Success!!!');
        divFor.remove();
        $('div#pre-form').children('h2').text("Thanks for your feedback!");

    }
});

console.log("My name is Maurice. I am a robot. beep boop")