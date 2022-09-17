window.onload = () => (loadAnimation());
function loadAnimation() {
    const animationDirections = ['right', 'left', 'top', 'bottom', 'center']
    animationDirections.forEach(direction => {
        addOnscrollSlideAmimation(direction, '');
        addOnscrollSlideAmimation(direction, 'slow');
        addOnscrollSlideAmimation(direction, 'fast')
    })
}
function addOnscrollSlideAmimation(direction, speed) {
    const animationClass = speed ? `ss-${direction}-${speed}` : `ss-${direction}`;
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.visibility = 'visible';
                entry.target.classList.add(animationClass);
            }
        });
    }, { threshold: 0.5 })

    const onscrollAnimationClass = speed ? `.ss-onscroll-${direction}-${speed}` : `.ss-onscroll-${direction}`;
    document.querySelectorAll(onscrollAnimationClass)
        .forEach(element => {
            observer.observe(element)
        })
}