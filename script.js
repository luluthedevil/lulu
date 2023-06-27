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
        strings: ["Data Scientist", "Data Analyst", "Data Engineer", "Machine Learning Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed_2 = new Typed(".typing_2", {
        strings: ["Data Scientist", "Data Analyst", "Data Engineer", "Machine Learning Engineer"],
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
        },
        {
            "lang": "es",
            "menu": ["Inicio", "Acerca de", "Servicios", "Habilidades", "Proyectos", "Contacto"],
            "typingAnimation": ["Desarrollador", "Interfaz de usuario"],
            "salution": "Hola me llamo"
        }
    ];

    const link = document.querySelectorAll('.for-changing');

    const aboutData = [
        {   
            "lang": "en",
            "title": "About me",
            "text1": `I'm Luciana Ferreira, a professional passionate about data analysis. I studied Systems Analysis and Development at the Federal Institute of Science, Technology and Education of Paraíba (IFPB). I am currently committed to continually improving myself through independent study and online courses. I value both technical and soft skills, and am familiar with programming languages such as Python, SQL and JavaScript. My main focus is on data analysis and machine learning, constantly looking to develop my skills in these areas.`,
            "text2": `I am a dedicated and determined person, always willing to face challenges. I have a continuous learning mindset, constantly looking to improve my skills and knowledge. I am resilient in the face of obstacles, able to solve problems creatively and efficiently. I have excellent data visualization skills, transforming complex information into visually appealing and understandable representations. My passion for data analysis drives me to deliver high quality results and constantly strive for excellence.`,
            "text3": `I am determined to make a significant difference in the field of data science by working alongside colleagues who share my passion for data analysis and are willing to work hard to achieve common goals. Additionally, I am committed to learning additional languages to communicate effectively in a global environment.`,
            "tbListen": "Listening",
            "tbSpeak": "Speaking",
            "tbWrite": "Writing",
            "tbPort": "Portuguese (br)",
            "tbEng": "English",
            "tbFr": "French",
            "tbEs": "Spanish",
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
            "text1": `Sou Luciana Ferreira, uma profissional apaixonada por análise de dados. Cursei Análise e Desenvolvimento de Sistemas no Instituto Federal de Ciência, Tecnologia e Educação da Paraíba (IFPB). Atualmente, estou comprometida em me aprimorar continuamente por meio de estudos independentes e cursos online. Valorizo tanto habilidades técnicas quanto pessoais, e sou familiarizada com linguagens de programação como Python, SQL e JavaScript. Meu foco principal está na análise de dados e aprendizado de máquina, buscando constantemente desenvolver minhas habilidades nessas áreas.`,
            "text2": `Sou uma pessoa dedicada e determinada, sempre disposta a enfrentar desafios. Tenho uma mentalidade de aprendizado contínuo, buscando constantemente aprimorar minhas habilidades e conhecimentos. Sou resiliente diante de obstáculos, capaz de resolver problemas de forma criativa e eficiente. Possuo excelente capacidade de visualização de dados, transformando informações complexas em representações visualmente atraentes e compreensíveis. Minha paixão pela análise de dados me impulsiona a entregar resultados de alta qualidade e a buscar constantemente a excelência.`,
            "text3": `Tenho a determinação de fazer uma diferença significativa no campo da ciência de dados, trabalhando ao lado de colegas que compartilham minha paixão pela análise de dados e estão dispostos a trabalhar arduamente para alcançar objetivos comuns. Além disso, estou empenhada em aprender idiomas adicionais para me comunicar efetivamente em um ambiente global.`,
            "langTitle": "Idiomas que falo",
            "tbListen": "Escuta",
            "tbSpeak": "Fala",
            "tbWrite": "Escrita",
            "tbPort": "Português",
            "tbEng": "Inglês",
            "tbFr": "Francês",
            "tbEs": "Espanhol",
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
            "text1": `Je suis Luciana Ferreira, une professionnelle passionnée par l'analyse de données. J'ai étudié l'analyse et le développement des systèmes à l'Institut fédéral des sciences, de la technologie et de l'éducation de Paraíba (IFPB). Je m'engage actuellement à m'améliorer continuellement grâce à des études indépendantes et des cours en ligne. J'apprécie à la fois les compétences techniques et générales, et je connais les langages de programmation tels que Python, SQL et JavaScript. Je me concentre principalement sur l'analyse de données et l'apprentissage automatique, cherchant constamment à développer mes compétences dans ces domaines.`,
            "text2": `Je suis une personne dévouée et déterminée, toujours prête à relever des défis. J'ai un état d'esprit d'apprentissage continu, cherchant constamment à améliorer mes compétences et mes connaissances. Je suis résilient face aux obstacles, capable de résoudre les problèmes de manière créative et efficace. J'ai d'excellentes compétences en visualisation de données, transformant des informations complexes en représentations visuellement attrayantes et compréhensibles. Ma passion pour l'analyse de données me pousse à fournir des résultats de haute qualité et à viser constamment l'excellence.`,
            "text3": `Je suis déterminé à faire une différence significative dans le domaine de la science des données en travaillant aux côtés de collègues qui partagent ma passion pour l'analyse des données et qui sont prêts à travailler dur pour atteindre des objectifs communs. De plus, je m'engage à apprendre des langues supplémentaires pour communiquer efficacement dans un environnement mondial.`,
            "langTitle": "Langues que je parle",
            "tbListen": "Écoute",
            "tbSpeak": "Parlant",
            "tbWrite": "L'écriture",
            "tbPort": "Portugais",
            "tbEng": "Anglais",
            "tbFr": "Français",
            "tbEs": "Espagnol",
            "tbJp": "Japanase",
            "tbNat": "Inhérente",
            "tbFluent": "Courante",
            "tbAdv": "Avancée",
            "tbInter": "Intermédiaire",
            "tbBeggin": "Débutante",
            "checkGit": "Découvrez mon github"
        },
        {
            "lang": "es",
            "title": "Acerca de mí",
            "text1": `Soy Luciana Ferreira, una profesional apasionada por el análisis de datos. Estudié Análisis y Desarrollo de Sistemas en el Instituto Federal de Ciencia, Tecnología y Educación de Paraíba (IFPB). Actualmente estoy comprometido a mejorar continuamente a través del estudio independiente y cursos en línea. Valoro tanto las habilidades técnicas como las blandas, y estoy familiarizado con lenguajes de programación como Python, SQL y JavaScript. Mi enfoque principal es el análisis de datos y el aprendizaje automático, buscando constantemente desarrollar mis habilidades en estas áreas.`,
            "text2": `Soy una persona dedicada y decidida, siempre dispuesta a afrontar retos. Tengo una mentalidad de aprendizaje continuo, buscando constantemente mejorar mis habilidades y conocimientos. Soy resiliente frente a los obstáculos, capaz de resolver problemas de manera creativa y eficiente. Tengo excelentes habilidades de visualización de datos, transformando información compleja en representaciones visualmente atractivas y comprensibles. Mi pasión por el análisis de datos me impulsa a ofrecer resultados de alta calidad y luchar constantemente por la excelencia.`,
            "text3": `Estoy decidido a marcar una diferencia significativa en el campo de la ciencia de datos trabajando junto a colegas que comparten mi pasión por el análisis de datos y están dispuestos a trabajar duro para lograr objetivos comunes. Adicionalmente, me comprometo a aprender idiomas adicionales para comunicarme de manera efectiva en un entorno global.`,
            "langTitle": "Idiomas que hablo",
            "tbListen": "Escuchar",
            "tbSpeak": "Discurso",
            "tbWrite": "Escribiendo",
            "tbPort": "Portugais",
            "tbEng": "Anglais",
            "tbFr": "Français",
            "tbEs": "Español",
            "tbJp": "Japonés",
            "tbNat": "Inherente",
            "tbFluent": "Actual",
            "tbAdv": "Avanzado",
            "tbInter": "Intermedio",
            "tbBeggin": "Debutante",
            "checkGit": "Mira mi github"
        }
    ];

    const servicesData = [
        {
            "lang": "en",
            "title": "My services",
            "title1": "Python",
            "text1": "I have advanced Python skills, using it for data analysis, model building and custom solution development. My Python experience allows me to deal with large datasets and apply machine learning algorithms efficiently.",
            "title2": "Data Analysis",
            "text2": "I have a solid understanding of data analysis techniques including data cleaning, transformation and visualization. I use tools like pandas and matplotlib to explore and visualize relevant information, providing valuable insights for decision making.",
            "title3": "SQL",
            "text3": "I am proficient in SQL and able to extract and manipulate data from relational databases. My SQL skills allow me to perform complex queries, optimize queries and create efficient database structures.",
        },
        {
            "lang": "pt",
            "title": "Meus serviços",
            "title1": "Python",
            "text1": "Possuo habilidades avançadas em Python, utilizando-o para análise de dados, criação de modelos e desenvolvimento de soluções personalizadas. Minha experiência em Python me permite lidar com grandes conjuntos de dados e aplicar algoritmos de aprendizado de máquina de forma eficiente.",
            "title2": "Análise de dados",
            "text2": "Tenho uma sólida compreensão de técnicas de análise de dados, incluindo limpeza, transformação e visualização de dados. Utilizo ferramentas como pandas e matplotlib para explorar e visualizar informações relevantes, fornecendo insights valiosos para a tomada de decisões.",
            "title3": "SQL",
            "text3": "Sou proficiente em SQL e capaz de extrair e manipular dados de bancos de dados relacionais. Minha habilidade em SQL me permite realizar consultas complexas, otimizar consultas e criar estruturas de banco de dados eficientes.",
        },
        {
            "lang": "fr",
            "title": "Mes services",
            "title1": "Python",
            "text1": "J'ai des compétences avancées en Python, je l'utilise pour l'analyse de données, la création de modèles et le développement de solutions personnalisées. Mon expérience Python me permet de traiter de grands ensembles de données et d'appliquer efficacement des algorithmes d'apprentissage automatique.",
            "title2": "Analyse de données",
            "text2": "J'ai une solide compréhension des techniques d'analyse de données, y compris le nettoyage, la transformation et la visualisation des données. J'utilise des outils comme pandas et matplotlib pour explorer et visualiser des informations pertinentes, fournissant des informations précieuses pour la prise de décision.",
            "title3": "SQL",
            "text3": "Je maîtrise SQL et suis capable d'extraire et de manipuler des données à partir de bases de données relationnelles. Mes compétences en SQL me permettent d'effectuer des requêtes complexes, d'optimiser les requêtes et de créer des structures de base de données efficaces.",
        },
        {
            "lang": "es",
            "title": "Mis servicios",
            "title1": "Python",
            "text1": "Tengo conocimientos avanzados de Python y lo uso para el análisis de datos, la creación de modelos y el desarrollo de soluciones personalizadas. Mi experiencia con Python me permite manejar grandes conjuntos de datos y aplicar algoritmos de aprendizaje automático de manera eficiente.",
            "title2": "Análisis de datos",
            "text2": "Tengo una sólida comprensión de las técnicas de análisis de datos, incluida la limpieza, transformación y visualización de datos. Uso herramientas como pandas y matplotlib para explorar y visualizar información relevante, proporcionando información valiosa para la toma de decisiones.",
            "title3": "SQL",
            "text3": "Soy competente en SQL y puedo extraer y manipular datos de bases de datos relacionales. Mis conocimientos de SQL me permiten realizar consultas complejas, optimizar consultas y crear estructuras de bases de datos eficientes.",
        }
    ];

    const skillsData = [
        {
            "lang": "en",
            "title": "My skills",
            "subtitle": "My creative skill & experiences.",
            "txt1": "I am a firm believer in the power of continuous learning and am always looking for opportunities to expand my knowledge and skills. I dedicate myself to studying new technologies, trends and methodologies related to data science. My passion for learning and my commitment to continually improving myself allow me to keep pace with the rapid changes and demands of this ever-evolving field.",
            "txt2": "I value excellence and strive to achieve it in all my activities. I believe that a combination of technical skills, problem-solving skills, and a continuous learning mindset is essential to excel in the field of data science."
        },
        {
            "lang": "pt",
            "title": "Minhas habilidades",
            "subtitle": "Acredito firmemente no poder do aprendizado contínuo e estou sempre buscando oportunidades para expandir meu conhecimento e habilidades. Dedico-me a estudar novas tecnologias, tendências e metodologias relacionadas à ciência de dados. Minha paixão por aprender e meu comprometimento em me aprimorar continuamente me permitem acompanhar as rápidas mudanças e demandas desse campo em constante evolução.",
            "txt2": "Valorizo a excelência e me esforço para alcançá-la em todas as minhas atividades. Acredito que a combinação de habilidades técnicas, capacidade de resolução de problemas e mentalidade de aprendizado contínuo é essencial para se destacar na área de ciência de dados."
        },
        {
            "lang": "fr",
            "title": "Mes compétences",
            "subtitle": "Mes compétences créatives et mes expériences.",
            "txt1": "Je crois fermement au pouvoir de l'apprentissage continu et je suis toujours à la recherche d'occasions d'élargir mes connaissances et mes compétences. Je me consacre à l'étude des nouvelles technologies, tendances et méthodologies liées à la science des données. Ma passion pour l'apprentissage et mon engagement à m'améliorer continuellement me permettent de suivre les changements rapides et les exigences de ce domaine en constante évolution.",
            "txt2": "Je valorise l'excellence et m'efforce de l'atteindre dans toutes mes activités. Je crois qu'une combinaison de compétences techniques, de compétences en résolution de problèmes et d'un état d'esprit d'apprentissage continu est essentielle pour exceller dans le domaine de la science des données."
        },
        {
            "lang": "es",
            "title": "Mis habilidades",
            "subtitle": "Mis habilidades creativas y experiencias..",
            "txt1": "Creo firmemente en el poder del aprendizaje continuo y siempre estoy buscando oportunidades para expandir mis conocimientos y habilidades. Me dedico a estudiar nuevas tecnologías, tendencias y metodologías relacionadas con la ciencia de datos. Mi pasión por aprender y mi compromiso de mejorar continuamente me permiten mantenerme al día con los rápidos cambios y demandas de este campo en constante evolución.",
            "txt2": "Valoro la excelencia y me esfuerzo por alcanzarla en todas mis actividades. Creo que una combinación de habilidades técnicas, habilidades para resolver problemas y una mentalidad de aprendizaje continuo es esencial para sobresalir en el campo de la ciencia de datos."
        }
    ];

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
        {
            "lang": "es",
            "title": "Mis proyectos",
            "proj-title-eletc-urn": "Urna Eléctrica",
            "proj-txt-eletc-urn": "Urna electrónica brasileña, así votamos en las elecciones. Hecho con Javascript",

            "proj-title-onl-paint": "Pintura en línea",
            "proj-txt-onl-paint": "Lienzo en línea que puedes dibujar y cargar la imagen sin fondo. Hecho con Javascript",

            "proj-title-drumkit": "Kit de batería",
            "proj-txt-drumkit": "Kit de batería con sonido y animación básica de pulsación de botones (también teclado), hecho con javascript",

            "proj-title-todo": "Lista de Tareas",
            "proj-txt-todo": "Lista de tareas con reaccionar",

            "proj-title-memory": "Juegos de memoria",
            "proj-txt-memory": "Simple juego de memoria con javascript",

            "proj-title-tetris": "Juego Tetris",
            "proj-txt-tetris": "Juego de Tetris con Python",

            "proj-title-git-api": "Proyecto API de Github",
            "proj-txt-git-api": "Obtener información sobre la API de github de un usuario específico. Hecho con React",

            "proj-title-pacman": "Juego Pacman",
            "proj-txt-pacman": "Un juego de pacman hecho con python y pygame",

            "proj-title-zombie": "Juego de zombis",
            "proj-txt-zombie": "Un juego de zombies hecho con C# en Unity, tiene música",
        },
    ];

    const contactData = [
        {
            "lang": "en",
            "title": "Contact me",
            "subtitle": "Get in touch",
            "text": `For those who wish to contact me, I am open to professional opportunities, collaborations or discussions related to data analysis.
            <br>Please feel free to contact me at:`
        },
        {
            "lang": "pt",
            "title": "Entre em contato",
            "subtitle": "Entre em contato",
            "text": `Para quem desejar entrar em contato comigo, estou aberto a oportunidades profissionais, colaborações ou discussões relacionadas à análise de dados.<br>Sinta-se à vontade para me contatar através do`
        },
        {
            "lang": "fr",
            "title": "Contactez moi",
            "subtitle": "Entrer en contact",
            "text": `Pour ceux qui souhaitent me contacter, je suis ouvert aux opportunités professionnelles, collaborations ou discussions liées à l'analyse de données.<br>N'hésitez pas à me contacter via`
        },
        {
            "lang": "es",
            "title": "Contácteme",
            "subtitle": "Ponerse en contacto",
            "text": `Para aquellos que deseen contactarme, estoy abierto a oportunidades profesionales, colaboraciones o discusiones relacionadas con el análisis de datos.<br>No dude en ponerse en contacto conmigo a través de`
        },
    ];

    link.forEach(el => {
        el.addEventListener('click', () => {
            const attr = el.getAttribute('language');
            for(let i=0; i < data.length; i++) {
                if(data[i].lang == attr) {
                    //getting the home and nav texts and modifing then
                    $('#home-nav').text(data[i].menu[0]);
                    $('#about-nav').text(data[i].menu[1]);
                    $('#services-nav').text(data[i].menu[2]);
                    $('#skills-nav').text(data[i].menu[3]);
                    $('#projects-nav').text(data[i].menu[4]);
                    $('#contact-nav').text(data[i].menu[5]);
                    $('#salution').text(data[i].salution);

                    //getting the about section texts and modifing them
                    $('#about-title').text(aboutData[i].title);
                    $('#about-text-1').text(aboutData[i].text1);
                    $('#about-text-2').text(aboutData[i].text2);
                    $('#about-text-3').text(aboutData[i].text3);
                    $('#lang-title').text(aboutData[i].langTitle);
                    $('#tb-listen').text(aboutData[i].tbListen);
                    $('#tb-speak').text(aboutData[i].tbSpeak);
                    $('#tb-write').text(aboutData[i].tbWrite);
                    $('#tb-port').text(aboutData[i].tbPort);
                    $('#tb-en').text(aboutData[i].tbEng);
                    $('#tb-fr').text(aboutData[i].tbFr);
                    $('#tb-jp').text(aboutData[i].tbJp);
                    $('.tb-nat').each(function() {
                        $(this).text(aboutData[i].tbNat);
                    });
                    $('.tb-fluent').each(function() {
                        $(this).text(aboutData[i].tbFluent);
                    });
                    $('.tb-inter').each(function() {
                        $(this).text(aboutData[i].tbInter);
                    });
                    $('.tb-beggin').each(function() {
                        $(this).text(aboutData[i].tbBeggin);
                    });
                    $('#check-git').text(aboutData[i].checkGit);

                    //getting the about section texts and modifing them
                    $('#services-title').text(servicesData[i].title);
                    $('#services-title-1').text(servicesData[i].title1);
                    $('#services-title-2').text(servicesData[i].title2);
                    $('#services-title-3').text(servicesData[i].title3);
                    $('#services-txt-1').text(servicesData[i].text1);
                    $('#services-txt-2').text(servicesData[i].text2);
                    $('#services-txt-3').text(servicesData[i].text3);

                    //getting the skills section texts and modifing them
                    $('#skills-title').text(skillsData[i].title);
                    $('#skills-subtitle').text(skillsData[i].subtitle);
                    $('#skills-txt-1').text(skillsData[i].txt1);
                    $('#skills-txt-2').text(skillsData[i].txt2);

                    //getting the projects section texts
                    $('#projects-title').text(projectsData[i].title);

                    $('#proj-title-eletc-urn').text(projectsData[i]["proj-title-eletc-urn"]);
                    $('#proj-txt-eletc-urn').text(projectsData[i]["proj-txt-eletc-urn"]);

                    $('#proj-title-onl-paint').text(projectsData[i]["proj-title-onl-paint"]);
                    $('#proj-txt-onl-paint').text(projectsData[i]["proj-txt-onl-paint"]);

                    $('#proj-title-drumkit').text(projectsData[i]["proj-title-drumkit"]);
                    $('#proj-txt-drumkit').text(projectsData[i]["proj-txt-drumkit"]);

                    $('#proj-title-todo').text(projectsData[i]["proj-title-todo"]);
                    $('#proj-txt-todo').text(projectsData[i]["proj-txt-todo"]);

                    $('#proj-title-memory').text(projectsData[i]["proj-title-memory"]);
                    $('#proj-txt-memory').text(projectsData[i]["proj-txt-memory"]);

                    $('#proj-title-tetris').text(projectsData[i]["proj-title-tetris"]);
                    $('#proj-txt-tetris').text(projectsData[i]["proj-txt-tetris"]);

                    $('#proj-title-connect-4').text(projectsData[i]["proj-title-connect-4"]);
                    $('#proj-txt-connect-4').text(projectsData[i]["proj-txt-connect-4"]);

                    $('#proj-title-snake').text(projectsData[i]["proj-title-snake"]);
                    $('#proj-txt-snake').text(projectsData[i]["proj-txt-snake"]);
                
                    $('#proj-title-git-api').text(projectsData[i]["proj-title-git-api"]);
                    $('#proj-txt-git-api').text(projectsData[i]["proj-txt-git-api"]);

                    $('#proj-title-pacman').text(projectsData[i]["proj-title-pacman"]);
                    $('#proj-txt-pacman').text(projectsData[i]["proj-txt-pacman"]);

                    $('#proj-title-zombie').text(projectsData[i]["proj-title-zombie"]);
                    $('#proj-txt-zombie').text(projectsData[i]["proj-txt-zombie"]);

                    $('#proj-title-freeway').text(projectsData[i]["proj-title-freeway"]);
                    $('#proj-txt-freeway').text(projectsData[i]["proj-txt-freeway"]);

                    //getting the contact section texts and modifing them
                    $('#contact-title').text(contactData[i].title);
                    $('#contact-subtitle').text(contactData[i].subtitle);
                    $('#contact-text').text(contactData[i].text);
                }
            }
        });
    });
});
