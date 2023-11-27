function setupSlider() {
    let currentActive = 0;
    const steps = document.querySelectorAll('.step')
    const slider = document.querySelector('.slider')


    steps.forEach((node, index) => {
        node.addEventListener('click', () => {
            slider.style.marginLeft = node.dataset.id === '1' ? `-16px` : `-${44 * (node.dataset.id - 1)}px`;
            steps[currentActive].classList.remove('active');
            node.classList.add('active');
            currentActive = node.dataset.id;
            console.log(currentActive)
        })
    })
}

setupSlider()