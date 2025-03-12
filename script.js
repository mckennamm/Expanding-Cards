//

const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        console.log('clicked');
        panel.classList.add('active');
    
        removeActiveClasses();

        
    })
})

function removeActiveClasses() {
    panel.forEach((panel) => {
        panels.classList.remove('active');
    })   
}