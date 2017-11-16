$(function() {
    var btn = $('#new-user-add-btn');
    var email = $('#email');
    var nickname = $('#nickname');
    
    btn.click(function(e) {
        e.preventDefault();
        
        $.ajax({
            method: "POST",
            url: "add-user.php",
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