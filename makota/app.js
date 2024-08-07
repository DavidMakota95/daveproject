//initializing variables
const allSections = document.querySelector('.main-content');
const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');


//changing and shifting pages function

function pageTransctions() {
    //button click to activate
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        });
    }
     //sections activation
     allSections.addEventListener('click', (event) =>{
        const id = event.target.dataset.id;
        if(id) {
            //remove selected from other buttons
            sectBtns.forEach((btn) => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');

            //hide other sections
            sections.forEach((section) => {
                section.classList.remove('active');
            });

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode')
    })
    
}
pageTransctions();
