$(document).ready(function() {
    $('#btn-buscar').click(function() {
        const buscar = $('#buscar').val();
        const endpoint = `https://api.github.com/users/${buscar}`;

        $.ajax(endpoint).done(function(resposta) {
            const avatar = resposta.avatar_url;
            const name = resposta.name;
            const followers = resposta.followers;
            const following = resposta.following;
            const repos = resposta.public_repos;
            const url = resposta.html_url;



            const avatarItem = `${avatar}`;
            const nameItem = `${name}`;
            const followersItem = `${followers}`;
            const followingItem = `${following}`;
            const reposItem = `${repos}`
            const urlItem = `${url}`;


            document.querySelector('#name').innerHTML = nameItem;
            document.querySelector('#followers').innerHTML = followersItem;
            document.querySelector('#following').innerHTML = followingItem;
            document.querySelector('#repos').innerHTML = reposItem;
            document.querySelector('#avatar').src = avatarItem;
            document.querySelector('#url').src = urlItem;
            

        })
    })
})

