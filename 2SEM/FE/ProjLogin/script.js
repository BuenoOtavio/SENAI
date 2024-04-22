function loginWithGitHub(){
    window.location.href = 'https://github.com/login/oauth/authorize?client_id=bde9d3288af24cacf63f&scope=user';
}

const urlParams = new URLSearchParams(window.location.search);
const error = urlParams.get('error');
if(error === 'acess-denied'){
    window.location.href = 'index.html';
}