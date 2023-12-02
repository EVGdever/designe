


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
        })
    })
}

function setupAccordion() {
    const openSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">\n' +
        '<path d="M6.21739 0.717391C6.21739 0.527127 6.14181 0.344656 6.00727 0.210119C5.87274 0.075582 5.69026 0 5.5 0C5.30974 0 5.12726 0.075582 4.99273 0.210119C4.85819 0.344656 4.78261 0.527127 4.78261 0.717391V4.78261H0.717391C0.527127 4.78261 0.344656 4.85819 0.210119 4.99273C0.075582 5.12726 0 5.30974 0 5.5C0 5.69026 0.075582 5.87274 0.210119 6.00727C0.344656 6.14181 0.527127 6.21739 0.717391 6.21739H4.78261V10.2826C4.78261 10.4729 4.85819 10.6553 4.99273 10.7899C5.12726 10.9244 5.30974 11 5.5 11C5.69026 11 5.87274 10.9244 6.00727 10.7899C6.14181 10.6553 6.21739 10.4729 6.21739 10.2826V6.21739H10.2826C10.4729 6.21739 10.6553 6.14181 10.7899 6.00727C10.9244 5.87274 11 5.69026 11 5.5C11 5.30974 10.9244 5.12726 10.7899 4.99273C10.6553 4.85819 10.4729 4.78261 10.2826 4.78261H6.21739V0.717391Z" fill="#CDCAC7"/>\n' +
        '</svg>'
    const closeSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 11 7" fill="none">\n' +
        '<path d="M1 6L5.12835 1.41294C5.32697 1.19225 5.67303 1.19225 5.87165 1.41294L10 6" stroke="#CDCAC7" stroke-width="1.5" stroke-linecap="round"/>\n' +
        '</svg>'
    const accordion = document.querySelectorAll('.accordion-button');
    const accordionBodies = document.querySelectorAll('.accordion-item');
    const cancelButtons = document.querySelectorAll('.toggle-button');

    accordion.forEach((node, index) => {
        node.addEventListener('click', () => {
            accordionBodies[index].classList.toggle('active');
            cancelButtons[index].innerHTML = accordionBodies[index].classList.value.indexOf('active') > 0 ? closeSvg : openSVG
        })
    });
}

setupSlider()
setupAccordion()
