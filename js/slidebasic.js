window.onload = () => {
    const AnimationDirections = ['right', 'left', 'top', 'bottom', 'center']
    AnimationDirections.forEach(direction => {
        addOnscrollSlideAmimation(direction, '');
        addOnscrollSlideAmimation(direction, 'slow');
        addOnscrollSlideAmimation(direction, 'fast')
    })
}

function addOnscrollSlideAmimation(direction, speed) {
    const animationClass = speed ? `sb-${direction}-${speed}` : `sb-${direction}`;
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.visibility = 'visible';
                entry.target.classList.add(animationClass);
            }
        });
    }, { threshold: 0.5 })

    const onscrollAnimationClass = speed ? `.sb-onscroll-${direction}-${speed}` : `.sb-onscroll-${direction}`;
    document.querySelectorAll(onscrollAnimationClass)
        .forEach(element => {
            observer.observe(element)
        })
}