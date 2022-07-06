/* tags
    Layout: HTML5, CSS3, SASS, BEM, adaptive, flex
    JS: API, game, player
*/

const projects = [
    {
        imgSrc: './img/projects/news-migration.PNG',
        deploySrc: 'https://rolling-scopes-school.github.io/onskulit-JSFE2022Q1/dist/',
        projectTitle: 'News (Migration to TS)',
        tags: ['TypeScript', 'Webpack'],
        githubSrc: 'https://github.com/onskulit/',
    },
    {
        imgSrc: './img/projects/shelter.PNG',
        deploySrc: 'https://rolling-scopes-school.github.io/onskulit-JSFE2022Q1/shelter/pages/main/',
        projectTitle: 'Shelter',
        tags: ['JS', 'HTML5', 'BEM', 'SCSS', 'adaptive'],
        githubSrc: 'https://github.com/onskulit/',
    },
    {
        imgSrc: './img/projects/virtual-keyboard.PNG',
        deploySrc: 'https://rolling-scopes-school.github.io/onskulit-JSFE2022Q1/virtual-keyboard/',
        projectTitle: 'Virtual-keyboard',
        tags: ['JS', 'OOP', 'modules', 'HTML5', 'SCSS'],
        githubSrc: 'https://github.com/onskulit/',
    },
    {
        imgSrc: './img/projects/html-builder.PNG',
        deploySrc: 'https://github.com/onskulit/HTML-builder/tree/main/06-build-page',
        projectTitle: 'HTML-builder',
        tags: ['Node.js'],
        githubSrc: 'https://github.com/onskulit/HTML-builder/blob/main/06-build-page/index.js',
    },
    {
        imgSrc: './img/projects/potfolio.PNG',
        deploySrc: 'https://onskulit.github.io/stage0-projects/portfolio/',
        projectTitle: 'Portfolio',
        tags: ['JS', 'HTML5', 'CSS3', 'adaptive'],
        githubSrc: 'https://github.com/onskulit/stage0-projects/tree/main/portfolio',
    },
    {
        imgSrc: './img/projects/audio-player.PNG',
        deploySrc: 'https://onskulit.github.io/stage0-projects/audio-player/',
        projectTitle: 'Custom Video Player',
        tags: ['JS', 'HTML5', 'CSS3', 'flex'],
        githubSrc: 'https://github.com/onskulit/stage0-projects/tree/main/audio-player',
    },
    {
        imgSrc: './img/projects/movie-app.PNG',
        deploySrc: 'https://onskulit.github.io/stage0-projects/movie-app/',
        projectTitle: 'Movie App',
        tags: ['API', 'JS', 'HTML5', 'CSS3', 'flex'],
        githubSrc: 'https://github.com/onskulit/stage0-projects/tree/main/movie-app',
    },
    {
        imgSrc: './img/projects/tic-tac-toe.PNG',
        deploySrc: 'https://onskulit.github.io/stage0-projects/tic-tac-toe/',
        projectTitle: 'Tic Tac Toe',
        tags: ['JS', 'HTML5', 'CSS3', 'flex', 'grid'],
        githubSrc: 'https://github.com/onskulit/stage0-projects/tree/main/tic-tac-toe',
    },
    {
        imgSrc: './img/projects/meme-slider.PNG',
        deploySrc: 'https://onskulit.github.io/cssMemSlider/cssMemSlider/index.html',
        projectTitle: 'Pure CSS Slider',
        tags: ['HTML5', 'CSS3', 'flex'],
        githubSrc: 'https://github.com/onskulit/cssMemSlider/tree/gh-pages/cssMemSlider',
    },
]

const projectsContainer = document.querySelector('.projects');

const createProject = (project) => {
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project');
    projectsContainer.append(projectContainer);

    const ratioInner = document.createElement('div');
    ratioInner.classList.add('ratio-inner');
    projectContainer.append(ratioInner)

    const cover = document.createElement('a');
    cover.href = project.deploySrc;
    cover.classList.add('project__cover');
    cover.style.backgroundImage = `url(${project.imgSrc})`;
    ratioInner.append(cover);

    const tags = document.createElement('ul');
    tags.classList.add('project__tags');
    cover.append(tags);

    project.tags.forEach((item) => {
        const tag = document.createElement('li');
        tag.classList.add('tag');
        tag.textContent = item;
        tags.append(tag);
    })

    const projectTitle = document.createElement('h3');
    projectTitle.classList.add('project-title');
    projectTitle.textContent = project.projectTitle;
    projectContainer.append(projectTitle);

    const githubLink = document.createElement('a');
    githubLink.href = project.githubSrc;
    projectTitle.append(githubLink);

    const githubLogo = document.createElement('img');
    githubLogo.src = './img/GitHub-Mark.svg';
    githubLogo.alt = 'github-logo';
    githubLogo.style.height = '100%';
    githubLink.append(githubLogo);
}

projects.forEach(project => {
    createProject(project);
})

// adaptive menu

const hamburgerIcon = document.querySelector('.hamburger');
const navigation = document.querySelector('.nav-list');
const backdrop = document.querySelector('.backdrop');

const closeHamburgerMenu = () => {
    hamburgerIcon.classList.remove('is-active');
    navigation.classList.remove('adaptive-menu');
    backdrop.classList.remove('active');
};

hamburgerIcon.addEventListener('click', () => {
    hamburgerIcon.classList.toggle('is-active');
    navigation.classList.toggle('adaptive-menu');
    backdrop.classList.toggle('active');
}); 

navigation.addEventListener('click', (event) => {
    if (event.target.classList.contains('nav-link')) {
        closeHamburgerMenu();
    }
});

backdrop.addEventListener('click', () => {
    closeHamburgerMenu();
});