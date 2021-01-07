const play = document.querySelector('button');

const svgContainer = document.getElementById('svg');

const animItem = bodymovin.loadAnimation({
    wrapper: svgContainer,
    animType: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets1.lottiefiles.com/packages/lf20_i6sqnxav.json'
})

play.addEventListener('click' , () => {
    animItem.goToAndPlay(0,true);
})