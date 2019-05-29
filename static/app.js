$("#logout").click(function(){
    $.ajax({
        type: "GET",
        url: 'http://login.test/api/logout',
        headers:{
        "Authorization": "Bearer "+ token,
        },
        success: function(data){
            window.localStorage.setItem('username','');
            window.location.href='login.html';
        },
        error: function(data){
            $('#error').html(data.responseJSON.error);
        }
    });
});