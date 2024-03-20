// Obtener los enlaces y los contenedores correspondientes por su ID
const aboutMeBtn = document.getElementById('about-me-btn');
const labourExperienceBtn = document.getElementById('labour-experience-btn');
const educationBtn = document.getElementById('education-btn');
const skillsBtn = document.getElementById('skills-btn');
const coursesBtn = document.getElementById('courses-btn');

const aboutMeContainer = document.getElementById('about-me');
const labourExperienceContainer = document.getElementById('laboral-experience');
const educationContainer = document.getElementById('education');
const skillsContainer = document.getElementById('skills');
const coursesContainer = document.getElementById('courses');

aboutMeContainer.style.display = 'block';

function showContainer(container) {
    aboutMeContainer.style.display = 'none';
    labourExperienceContainer.style.display = 'none';
    educationContainer.style.display = 'none';
    skillsContainer.style.display = 'none';
    coursesContainer.style.display = 'none';
    container.style.display = 'block';
}

aboutMeBtn.addEventListener('click', function () {
    showContainer(aboutMeContainer);
});

labourExperienceBtn.addEventListener('click', function () {
    showContainer(labourExperienceContainer);
});

educationBtn.addEventListener('click', function () {
    showContainer(educationContainer);
});

skillsBtn.addEventListener('click', function () {
    showContainer(skillsContainer);
});

coursesBtn.addEventListener('click', function () {
    showContainer(coursesContainer);
});