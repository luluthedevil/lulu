const data = [
    {   
        "lang": "en",
        "menu": ["Home", "About", "Services", "Skills", "Projects", "Contact"]
    },
    {   
        "lang": "pt",
        "menu": ["Início", "Sobre", "Serviços", "Habilidades", "Projetos", "Contato"]
    },
    {
        "lang": "fr",
        "menu": ["Debut", "Propos", "Services", "Compétences", "Projets", "Contactez"]
    }
];

const langEl = document.querySelector('.options-container');
const link = document.querySelectorAll('.for-changing');
const homea = document.getElementById('homefor')
link.forEach(el => {
    el.addEventListener('click', () => {
        const attr = el.getAttribute('language');
        console.log(data[0].menu[0])
        for(let i=0; i<data.length; i++) {
            if(data[i].lang == attr) {
                homea.textContent = data[i].menu[0]
            }
        }
    });
});