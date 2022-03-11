/* tags
    Layout: HTML5, CSS3, SASS, BEM, adaptive, flex
    JS: API, game, player
*/

const projects = [
    {
        imgSrc: './img/projects/potfolio.PNG',
        deploySrc: 'https://onskulit.github.io/stage0-projects/portfolio/',
        projectTitle: 'Portfolio',
        tags: ['JS', 'HTML5', 'CSS3', 'flex'],
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
        deploySrc: 'https://onskulit.github.io/stage0-projects/portfolio/',
        projectTitle: 'Tic Tac Toe',
        tags: ['JS', 'HTML5', 'CSS3', 'flex', 'grid'],
        githubSrc: 'https://github.com/onskulit/stage0-projects/tree/main/tic-tac-toe',
    },
]

const projectsContainer = document.querySelector('.projects');

const createProject = (project) => {
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project');
    projectsContainer.append(projectContainer);

    const deploy = document.createElement('a');
    deploy.href = project.deploySrc;
    projectContainer.append(deploy);

    const cover = document.createElement('div');
    cover.classList.add('project__cover');
    cover.style.backgroundImage = `url(${project.imgSrc})`;
    deploy.append(cover);

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

/*
<div class="project">
                    <a href="https://onskulit.github.io/stage0-projects/portfolio/">
                        <div class="project__cover">
                            <ul class="project__tags">
                                <li class="tag">adaptive</li>
                                <li class="tag">JS</li>
                                <li class="tag">HTML5</li>
                                <li class="tag">CSS3</li>
                            </ul>
                        </div>
                    </a>
                    <h3 class="project-title">Portfolio
                        <a href="https://github.com/onskulit/stage0-projects/tree/main/portfolio">
                            <img src="./img/GitHub-Mark.svg" alt="github-logo" height="100%">
                        </a>
                    </h3>
                </div> 
*/