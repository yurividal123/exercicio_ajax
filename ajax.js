$(document).ready(function() {
    $('#btn-buscar').click(function() {
        const buscar = $('#buscar').val();
        const users = `https://api.github.com/users/${buscar}`;

        $.ajax(users).done(function(resposta){
            const avatar = resposta.avatar_url;
            const name = resposta.name;
            const followers = resposta.followers;
            const following = resposta.following;

            const avatar1 = `${avatar}`;
            $('#avatar_url').val(avatar1)
        })
    })
})
