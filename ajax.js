$(document).ready(function() {
    $.ajax(`https://api.github.com/users/LeandroSannt`).done(function(resposta) {
        console.log(resposta);
    })
})
