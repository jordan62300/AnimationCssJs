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
    svgContainer.classList.remove('hide');
    animItem.goToAndPlay(0,true);
})

animItem.addEventListener('complete' , () => {
    svgContainer.classList.add('hide')
})