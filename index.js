import { projects } from "./projects/projects.js";
import { languages } from "./translation/languages.js";

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

// languages

const languagesBtnsContainer = document.querySelector('.languages');
const languageBtns = document.querySelectorAll('.languages-item');

const getTranslate = (lng) => {
    const translatableItems = document.querySelectorAll('[data-lang]');
    translatableItems.forEach((item) => {
        item.textContent = languages[lng][item.dataset.lang];
    });
};

const removeActiveLang = () => {
    languageBtns.forEach((lng) => {
        if (lng.classList.contains('active')) {
            lng.classList.remove('active');
        }
    });
};

const activateLangStyles = (target) => {
    target.classList.add('active');
}

languagesBtnsContainer.addEventListener('click', (e) => {
    if(e.target.classList.contains('languages-item')) {
        removeActiveLang();
        activateLangStyles(e.target);
        console.log(e.target.dataset.langswitch);
        getTranslate(e.target.dataset.langswitch);
    }
})

document.addEventListener('DOMContentLoaded', () => {
    activateLangStyles(languageBtns[1]);
    getTranslate('ru');
});
