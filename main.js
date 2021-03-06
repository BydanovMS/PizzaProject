$(function() {
    var btn = $('#user-add-btn'); //del
    var email = $('#email');
    var nickname = $('#nickname');
    
    btn.click(function(e) {
        e.preventDefault();
        
        $.ajax({
            method: "POST",
            url: "add-user.php", //del-user.php
            data: {
                email: email.val(),
                nickname: nickname.val()
            }
        }).done(function( msg ) {
            alert( "Result: " + msg );
            location.reload();
        })
    });
}
)

$(function() {
    var btn = $('#user-del-btn');
    var email = $('#email');
    var nickname = $('#nickname');
    
    btn.click(function(e) {
        e.preventDefault();
        
        $.ajax({
            method: "GET",
            url: "del-user.php",
            data: {
                email: email.val(),
                nickname: nickname.val()
            }
        }).done(function( msg ) {
            alert( "Result: " + msg );
            location.reload();
        })
    });
}
)