const btnFollow = document.getElementById("btn-follow")
const btnProfile = document.getElementById("btn-profile")


btnFollow.addEventListener('click', () => {
    confirm("Deseja seguir o usuário?") ? alert('Você está seguindo Gustavo 😊') : alert('Você não está seguindo Gustavo 😢')
})

btnProfile.addEventListener('click', () => {
    window.open('https://github.com/GuhLoyola', '_blank')
})