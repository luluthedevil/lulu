$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide-up
    $('.scroll-up-btn').on('click', function(){
        $('html, body').animate({scrollTop: 0}, 0);
        // removing smooth scroll on slide-up button click
        $('html, body').css("scrollBehavior", "auto");
    });
    // toggle menu/navbar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    //typing animation
    var typed = new Typed(".typing", {
        strings: ["Developer", "Frontend"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed_2 = new Typed(".typing_2", {
        strings: ["Developer", "Frontend"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    //owl carousel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 5000,
        autoplatHoverPause: true,
        responsive: {
            0:{
                items: 1, 
                nav: false
            },
            700:{
                items: 2, 
                nav: false
            },
            1100:{
                items: 3, 
                nav: false
            }
        }
    });

    const selected = document.querySelector(".selected");
    const optionsContainer = document.querySelector(".options-container");

    const optionsList = document.querySelectorAll(".option");

    selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
    });

    optionsList.forEach(o => {
    o.addEventListener("click", () => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
        });
    });
    
    const data = [
        {   
            "lang": "en",
            "menu": ["Home", "About", "Services", "Skills", "Projects", "Contact"],
            "typingAnimation": ["Developer", "Frontend"],
            "salution": "Hello, my name is"
        },
        {   
            "lang": "pt",
            "menu": ["Início", "Sobre", "Serviços", "Habilidades", "Projetos", "Contato"],
            "typingAnimation": ["Desenvolvedora", "Frontend"],
            "salution": "Olá, meu nome é"
        },
        {
            "lang": "fr",
            "menu": ["Debut", "Propos", "Services", "Compétences", "Projets", "Contactez"],
            "typingAnimation": ["Développeuse", "Frontend"],
            "salution": "Salut, je m'appelle"
        }
    ];

    const link = document.querySelectorAll('.for-changing');

    const homenav = document.getElementById('home-nav');
    const aboutnav = document.getElementById('about-nav');
    const servicesnav = document.getElementById('services-nav');
    const skillsnav = document.getElementById('skills-nav');
    const projectsnav = document.getElementById('projects-nav');
    const contactnav = document.getElementById('contact-nav');
    const salution = document.getElementById('salution');

    const aboutData = [
        {   
            "lang": "en",
            "title": "About me",
            "text1": `I have studied ADS (analysis and systems development) at the IFPB (Instituto Federal da Paraiba) campus Cajazeiras and will graduate in a few months. As goal, I aim to become an excellent Software Developer.`,
            "text2": `I am a curious, dedicated, motivated person and solving problems makes me excited, studying is part of my day to day and challenges keep me motivated to discover the best solutions. I like programming, reading and doing teamwork where I can learn and also develop collaboration, leadership and management skills. I also like to study languages, I am currently fluent in English and I am studying a little French and Italian on my own.`,
            "text3": `Currently, I am looking for opportunities in junior positions in a company that will allow me to apply my knowledge so that I can improve myself and grow up with the company and my co-workers.`,
            "langTitle": "Languages I speak",
            "tbListen": "Listening",
            "tbSpeak": "Speaking",
            "tbWrite": "Writing",
            "tbPort": "Portuguese (br)",
            "tbEng": "English",
            "tbFr": "French",
            "tbJp": "Japanese",
            "tbNat": "Native",
            "tbFluent": "Fluent",
            "tbAdv": "Advanced",
            "tbInter": "Intermediary",
            "tbBeggin": "Beginner",
            "checkGit": "Check out my github"
        },
        {   
            "lang": "pt",
            "title": "Sobre mim",
            "text1": `Estudei ADS (Análise e Desenvolvimento de Sistemas) pelo IFPB Campus Cajazeiras e me formarei dentro de alguns meses, tenho como objetivo me tornar uma excelente desenvolvedora de software. `,
            "text2": `Sou uma pessoa curiosa, dedicada, motivada e resolver problemas me deixa entusiasmada, estudar faz parte do meu dia a dia e os desafios me mantém sempre motivada a descobrir as melhores soluções. Gosto de programar, ler e realizar trabalhos em equipe onde posso aprender e também desenvolver habilidades de colaboração, liderança e gestão. Também gosto de estudar idiomas, atualmente tenho fluência no inglês e estou estudando por conta própria um pouco de francês e italiano. `,
            "text3": `Atualmente, busco oportunidades em vagas júnior em uma empresa que me permita aplicar meus conhecimentos para que possa desenvolver minhas habilidades e crescer junto da empresa e de meus colegas de trabalho.`,
            "langTitle": "Idiomas que falo",
            "tbListen": "Escuta",
            "tbSpeak": "Fala",
            "tbWrite": "Escrita",
            "tbPort": "Português",
            "tbEng": "Inglês",
            "tbFr": "Francês",
            "tbJp": "Japonês",
            "tbNat": "Nativa",
            "tbFluent": "Fluente",
            "tbAdv": "Avançada",
            "tbInter": "Intermediária",
            "tbBeggin": "Iniciante",
            "checkGit": "Confira meu github"
        },
        {
            "lang": "fr",
            "title": "À propos de moi",
            "text1": `J'ai étudié l'ADS (analyse et développement de systèmes) au campus Cajazeiras de l'IFPB (Instituto Federal da Paraiba) et j'obtiendrai mon diplôme dans quelques mois. Mon objectif est de devenir un excellent développeur de logiciels.`,
            "text2": `Je suis une personne curieuse, dévouée et motivée et résoudre des problèmes me rend enthousiaste, étudier fait partie de mon quotidien et les défis me motivent à découvrir les meilleures solutions. J'aime programmer, lire et faire du travail d'équipe où je peux apprendre et aussi développer des compétences de collaboration, de leadership et de gestion. J'aime aussi étudier les langues, je parle actuellement couramment l'anglais et j'étudie un peu le français et l'italien par moi-même.`,
            "text3": `Actuellement, je suis à la recherche d'opportunités dans des postes juniors dans une entreprise qui me permettront d'appliquer mes connaissances afin de développer mes compétences et d'évoluer avec l'entreprise et mes collaborateurs.`,
            "langTitle": "Langues que je parle",
            "tbListen": "Écoute",
            "tbSpeak": "Parlant",
            "tbWrite": "L'écriture",
            "tbPort": "Portugais",
            "tbEng": "Anglais",
            "tbFr": "Français",
            "tbJp": "Japanaise",
            "tbNat": "Inhérente",
            "tbFluent": "Courante",
            "tbAdv": "Avancée",
            "tbInter": "Intermédiaire",
            "tbBeggin": "Débutante",
            "checkGit": "Découvrez mon github"
        }
    ];

    const aboutTitle = document.getElementById('about-title');
    const aboutText1 = document.getElementById('about-text-1');
    const aboutText2 = document.getElementById('about-text-2');
    const aboutText3 = document.getElementById('about-text-3');
    const langTitle = document.getElementById('lang-title');
    const tbListen = document.getElementById('tb-listen');
    const tbSpeak = document.getElementById('tb-speak');
    const tbWrite = document.getElementById('tb-write');
    const tbPort = document.getElementById('tb-port');
    const tbEn = document.getElementById('tb-en');
    const tbFr = document.getElementById('tb-fr');
    const tbJp = document.getElementById('tb-jp');
    const tbNat = document.querySelectorAll('.tb-nat');
    const tbFluent = document.querySelectorAll('.tb-fluent');
    const tbInter = document.querySelectorAll('.tb-inter');
    const tbBeggin = document.querySelectorAll('.tb-beggin');
    const checkGit = document.getElementById('check-git');

    const servicesData = [
        {
            "lang": "en",
            "title": "My services",
            "title1": "Web",
            "text1": "I know HTML, CSS, Javascript, Java, Python and other tools as well. There are also some other projects you can check out in my github.",
            "title2": "Code",
            "text2": "I aim for good written code. A code not very well written can become a issue in the future.",
            "title3": "Study",
            "text3": "Studying is part of my day to day and challenges keep me motivated to discover the best solutions for the coding problems.",
        },
        {
            "lang": "pt",
            "title": "Meus serviços",
            "title1": "Web",
            "text1": "Conheço HTML, CSS, Javascript, Java, Python e outras ferramentas também. Existem também outros projetos que você pode conferir no meu github.",
            "title2": "Código",
            "text2": "Meu objetivo é um bom código escrito. Um código não muito bem escrito pode se tornar um problema no futuro.",
            "title3": "Estudar",
            "text3": "Estudar faz parte do meu dia a dia e os desafios me motivam a descobrir as melhores soluções para os problemas de códigos.",
        },
        {
            "lang": "fr",
            "title": "My services",
            "title1": "Web",
            "text1": "Je connais également HTML, CSS, Javascript, Java, Python et d'autres outils. Il existe également d'autres projets que vous pouvez consulter sur mon github.",
            "title2": "Code",
            "text2": "Je vise un bon code écrit. Un code pas très bien écrit peut devenir un problème à l'avenir.",
            "title3": "Étude",
            "text3": "Studying is part of my day to day and challenges keep me motivated to discover the best solutions for the coding problems.",
        }
    ];

    const servicesTitle = document.getElementById('services-title');
    const servicesTitle1 = document.getElementById('services-title-1');
    const servicesTitle2 = document.getElementById('services-title-2');
    const servicesTitle3 = document.getElementById('services-title-3');
    const servicesTxt1 = document.getElementById('services-txt-1');
    const servicesTxt2 = document.getElementById('services-txt-2');
    const servicesTxt3 = document.getElementById('services-txt-3');

    const skillsData = [
        {
            "lang": "en",
            "title": "My skills",
            "subtitle": "My creative skill & experiences.",
            "txt1": "In order to improve my skills, I take lots of online classes to maintain myself on track to what's new. So I usually do projects and maintain it online to show my skills, there are some of it I doesn't put online when I think they doesn't have what is necessary. So even though there's nothing new in my github, that doesn't necesarelly means I'm not doing anything.",
            "txt2": "I like my code to have quality, so I always go for it, it's good when you can read a code months later and it still make sense."
        },
        {
            "lang": "pt",
            "title": "Minhas habilidades",
            "subtitle": "Minhas habilidades criativas e experiências.",
            "txt1": "Para melhorar minhas habilidades, faço muitas aulas online para me manter atualizada com o que há de novo. Então eu costumo fazer projetos e mantê-los online para mostrar minhas habilidades, tem alguns que não coloco online porque acho que não tem qualidade, então mesmo não tendo nada de novo no meu github, isso não necessariamente significa que não estou fazendo nada.",
            "txt2": "Gosto que meu código tenha qualidade, então sempre busco por isso, é bom quando você consegue ler um código meses depois e ainda faz sentido."
        },
        {
            "lang": "fr",
            "title": "Mes compétences",
            "subtitle": "Mes compétences créatives et mes expériences.",
            "txt1": "Afin d'améliorer mes compétences, je prends beaucoup de cours en ligne pour me tenir au courant des nouveautés. Donc j'ai l'habitude de faire des projets et de les maintenir ensuite en ligne pour montrer mes compétences, il y en a certains que je ne mets pas en ligne car je pense qu'ils n'ont pas la qualité, donc même s'il n'y a rien de nouveau dans mon github, ça ne marche pas signifie nécessairement que je ne fais rien.",
            "txt2": "J'aime que mon code soit de qualité, donc j'y vais toujours, c'est bien quand on peut lire un code des mois plus tard et que ça a toujours du sens."
        },
    ];

    const skillsTitle = document.getElementById('skills-title');
    const skillsSubtitle = document.getElementById('skills-subtitle');
    const skillsTxt1 = document.getElementById('skills-txt-1');
    const skillsTxt2 = document.getElementById('skills-txt-2');

    const projectsData = [
        {
            "lang": "en",
            "title": "My projects",
            "proj-title-eletc-urn": "Eletronic urn",
            "proj-txt-eletc-urn": "Brazilian electronic urn, it's how we vote in elections. Made with Javascript",
            "proj-title-onl-paint": "Online paint",
            "proj-txt-onl-paint": "Online canvas that you can draw and download the image backgroundless. Made with Javascript",
            "proj-title-drumkit": "Drum kit",
            "proj-txt-drumkit": "Drum kit with sound and basic button press animation (keyboard as well), made with javascript",
            "proj-title-todo": "Todo list",
            "proj-txt-todo": "Todo list with react",
            "proj-title-memory": "Memory game",
            "proj-txt-memory": "Simple memory game with javascript",
            "proj-title-tetris": "Tetris game",
            "proj-txt-tetris": "Tetris game with python",
            "proj-title-git-api": "Github api project",
            "proj-txt-git-api": "Getting github API info from specific user. Made with React",
            "proj-title-pacman": "Pacman game",
            "proj-txt-pacman": "A pacman game made with python and pygame",
            "proj-title-zombie": "Zombie game",
            "proj-txt-zombie": "A zombie game made with C# in unity, it has music",
        },
        {
            "lang": "pt",
            "title": "Meus projetos",
            "proj-title-eletc-urn": "Urna eletrônica",
            "proj-txt-eletc-urn": "Nossa urna eletrônica, é como votamos. Feita com javascript",
            "proj-title-onl-paint": "Paint online",
            "proj-txt-onl-paint": "Paint online que você pode desenhar e baixar a imagem sem fundo. Feito com Javascript",
            "proj-title-drumkit": "Kit de bateria",
            "proj-txt-drumkit": "Bateria com som e animação básica de pressionamento de botão (teclado também), feito com javascript",
            "proj-title-todo": "Lista de afazeres",
            "proj-txt-todo": "Lista de afazeres com react",
            "proj-title-memory": "Jogo da memória",
            "proj-txt-memory": "Jogo da memória simples com javascript",
            "proj-title-tetris": "Jogo tetris",
            "proj-txt-tetris": "Jogo tetris com python",
            "proj-title-git-api": "Github api",
            "proj-txt-git-api": "Obtendo informações da API do github de um usuário específico. Feito com React",
            "proj-title-pacman": "Jogo Pacman",
            "proj-txt-pacman": "Jogo pacman feito com python e pygame",
            "proj-title-zombie": "Zombie game",
            "proj-txt-zombie": "Um jogo de zumbi feito com C# no Unity, tem música",
        },
        {
            "lang": "fr",
            "title": "Mes projets",
            "proj-title-eletc-urn": "Urne électrique",
            "proj-txt-eletc-urn": "Urne électronique brésilienne, c'est comme ça qu'on vote aux élections. Réalisé avec Javascript",

            "proj-title-onl-paint": "Peinture en ligne",
            "proj-txt-onl-paint": "Toile en ligne que vous pouvez dessiner et télécharger l'image sans arrière-plan. Réalisé avec Javascript",

            "proj-title-drumkit": "Kit de batterie",
            "proj-txt-drumkit": "Kit de batterie avec son et animation de pression de bouton de base (clavier également), réalisé avec javascript",

            "proj-title-todo": "Liste de choses à faire",
            "proj-txt-todo": "Liste de tâches avec react",

            "proj-title-memory": "Jeux de mémoire",
            "proj-txt-memory": "Jeu de mémoire simple avec javascript",

            "proj-title-tetris": "Jeu de Tetris",
            "proj-txt-tetris": "Jeu de Tetris avec Python",

            "proj-title-git-api": "Github api project",
            "proj-txt-git-api": "Obtenir des informations sur l'API github d'un utilisateur spécifique. Réalisé avec React",

            "proj-title-pacman": "Jeu de pacman",
            "proj-txt-pacman": "Un jeu de pacman fait avec python et pygame",

            "proj-title-zombie": "Jeu de zombie",
            "proj-txt-zombie": "Un jeu de zombies réalisé avec C# à Unity, il a de la musique",
        },
    ];

    //getting the projects section texts
    const projectsTitle = document.getElementById('projects-title');

    const projTitleEletcUrn = document.getElementById('proj-title-eletc-urn');
    const projTxtEletcUrn = document.getElementById('proj-txt-eletc-urn');

    const projTitleOnlPaint = document.getElementById('proj-title-onl-paint');
    const projTxtOnlPaint = document.getElementById('proj-txt-onl-paint');

    const projTitleDrumkit = document.getElementById('proj-title-drumkit');
    const projTxtDrumkit = document.getElementById('proj-txt-drumkit');

    const projTitleTodo = document.getElementById('proj-title-todo');
    const projTxtTodo = document.getElementById('proj-txt-todo');

    const projTitleMemory = document.getElementById('proj-title-memory');
    const projTxtMemory = document.getElementById('proj-txt-memory');

    const projTitleTetris = document.getElementById('proj-title-tetris');
    const projTxtTetris = document.getElementById('proj-txt-tetris');

    const projTitleGitAPI = document.getElementById('proj-title-git-api');
    const projTxtGitAPI = document.getElementById('proj-txt-git-api');

    const projTitlePacman = document.getElementById('proj-title-pacman');
    const projTxtPacman = document.getElementById('proj-txt-pacman');

    const projTitleZombie = document.getElementById('proj-title-zombie');
    const projTxtZombie = document.getElementById('proj-txt-zombie');

    const contactData = [
        {
            "lang": "en",
            "title": "Contact me",
            "subtitle": "Get in touch",
            "text": "Contact me if you want to schedule a meeting to know more about my skills and how I am a good choice for your company."
        },
        {
            "lang": "pt",
            "title": "Entre em contato",
            "subtitle": "Entre em contato",
            "text": "Entre em contato comigo caso queira agendar uma reunião para saber mais sobre minhas habilidades e como sou uma boa escolha para sua empresa."
        },
        {
            "lang": "fr",
            "title": "Contactez moi",
            "subtitle": "Entrer en contact",
            "text": "Contactez-moi si vous souhaitez planifier une réunion pour en savoir plus sur mes compétences et comment je suis un bon choix pour votre entreprise."
        },
    ];

    //getting the contact section texts
    const contactTitle = document.getElementById('contact-title');
    const contactSubtitle = document.getElementById('contact-subtitle');
    const contactText = document.getElementById('contact-text');

    link.forEach(el => {
        el.addEventListener('click', () => {
            const attr = el.getAttribute('language');
            for(let i=0; i < data.length; i++) {
                if(data[i].lang == attr) {
                    //getting the home and nav texts and modifing then
                    homenav.textContent = data[i].menu[0];
                    aboutnav.textContent = data[i].menu[1];
                    servicesnav.textContent = data[i].menu[2];
                    skillsnav.textContent = data[i].menu[3];
                    projectsnav.textContent = data[i].menu[4];
                    contactnav.textContent = data[i].menu[5];
                    salution.textContent = data[i].salution;

                    //getting the about section texts and modifing them
                    aboutTitle.textContent = aboutData[i].title;
                    aboutText1.textContent = aboutData[i].text1;
                    aboutText2.textContent = aboutData[i].text2;
                    aboutText3.textContent = aboutData[i].text3;
                    langTitle.textContent = aboutData[i].langTitle;
                    tbListen.textContent = aboutData[i].tbListen;
                    tbSpeak.textContent = aboutData[i].tbSpeak;
                    tbWrite.textContent = aboutData[i].tbWrite;
                    tbPort.textContent = aboutData[i].tbPort;
                    tbEn.textContent = aboutData[i].tbEng;
                    tbFr.textContent = aboutData[i].tbFr;
                    tbJp.textContent = aboutData[i].tbJp;
                    tbNat.forEach(txt => {
                        txt.textContent = aboutData[i].tbNat;
                    });
                    tbFluent.forEach(txt => {
                        txt.textContent = aboutData[i].tbFluent;
                    });
                    tbInter.forEach(txt => {
                        txt.textContent = aboutData[i].tbInter;
                    });
                    tbBeggin.forEach(txt => {
                        txt.textContent = aboutData[i].tbBeggin;
                    });
                    checkGit.textContent = aboutData[i].checkGit;

                    //getting the about section texts and modifing them
                    servicesTitle.textContent = servicesData[i].title;
                    servicesTitle1.textContent = servicesData[i].title1;
                    servicesTitle2.textContent = servicesData[i].title2;
                    servicesTitle3.textContent = servicesData[i].title3;
                    servicesTxt1.textContent = servicesData[i].text1;
                    servicesTxt2.textContent = servicesData[i].text2;
                    servicesTxt3.textContent = servicesData[i].text3;

                    //getting the skills section texts and modifing them
                    skillsTitle.textContent = skillsData[i].title;
                    skillsSubtitle.textContent = skillsData[i].subtitle;
                    skillsTxt1.textContent = skillsData[i].txt1;
                    skillsTxt2.textContent = skillsData[i].txt2;

                    //getting the projects section texts
                    projectsTitle.textContent = projectsData[i].title;

                    projTitleEletcUrn.textContent = projectsData[i]["proj-title-eletc-urn"];
                    projTxtEletcUrn.textContent = projectsData[i]["proj-txt-eletc-urn"];

                    projTitleOnlPaint.textContent = projectsData[i]["proj-title-onl-paint"];
                    projTxtOnlPaint.textContent = projectsData[i]["proj-txt-onl-paint"];

                    projTitleDrumkit.textContent = projectsData[i]["proj-title-drumkit"];
                    projTxtDrumkit.textContent = projectsData[i]["proj-txt-drumkit"];

                    projTitleTodo.textContent = projectsData[i]["proj-title-todo"];
                    projTxtTodo.textContent = projectsData[i]["proj-txt-todo"];

                    projTitleMemory.textContent = projectsData[i]["proj-title-memory"];
                    projTxtMemory.textContent = projectsData[i]["proj-txt-memory"];

                    projTitleTetris.textContent = projectsData[i]["proj-title-tetris"];
                    projTxtTetris.textContent = projectsData[i]["proj-txt-tetris"];

                    projTitleGitAPI.textContent = projectsData[i]["proj-title-git-api"];
                    projTxtGitAPI.textContent = projectsData[i]["proj-txt-git-api"];

                    projTitlePacman.textContent = projectsData[i]["proj-title-pacman"];
                    projTxtPacman.textContent = projectsData[i]["proj-txt-pacman"];

                    projTitleZombie.textContent = projectsData[i]["proj-title-zombie"];
                    projTxtZombie.textContent = projectsData[i]["proj-txt-zombie"];

                    //getting the contact section texts and modifing them
                    contactTitle.textContent = contactData[i].title;
                    contactSubtitle.textContent = contactData[i].subtitle;
                    contactText.textContent = contactData[i].text;
                }
            }
        });
    });
});
