
const profileHeader = document.createElement('div');
profileHeader.classList.add('profile-header');
const headerTitle = document.createElement('h1');
headerTitle.textContent = '저는 장현호입니다.';
const headerSubtitle = document.createElement('p');
headerSubtitle.textContent = '웹 개발자 / 프론트엔드 엔지니어가 장래희망';
profileHeader.appendChild(headerTitle);
profileHeader.appendChild(headerSubtitle);
document.getElementById('profile-header').appendChild(profileHeader);

const profileContent = document.createElement('div');
profileContent.classList.add('profile-content');
const introHeading = document.createElement('h2');
introHeading.textContent = '소개';
const introText = document.createElement('p');
introText.textContent = '저는 경성대학교에 재학중인 2학년 장현호입니다. 프론트엔드에 관심이 있으며 쌀과자와 김치를 좋아합니다.';
profileContent.appendChild(introHeading);
profileContent.appendChild(introText);
document.getElementById('profile-content').appendChild(profileContent);


const skillsHeading = document.createElement('h3');
skillsHeading.textContent = '좋아하는것';
const skillsSection = document.createElement('div');
skillsSection.classList.add('container');


const frontendCard = document.createElement('div');
frontendCard.classList.add('card');
const frontendTitle = document.createElement('h4');
frontendTitle.textContent = '과일';
const frontendList = document.createElement('ul');
['복숭아', '사과', '배', '체리', '참외'].forEach(skill => {
  const listItem = document.createElement('li');
  listItem.textContent = skill;
  frontendList.appendChild(listItem);
});
frontendCard.appendChild(frontendTitle);
frontendCard.appendChild(frontendList);


const backendCard = document.createElement('div');
backendCard.classList.add('card');
const backendTitle = document.createElement('h4');
backendTitle.textContent = '음식';
const backendList = document.createElement('ul');
['치킨', '회', '김치', '양고기'].forEach(skill => {
  const listItem = document.createElement('li');
  listItem.textContent = skill;
  backendList.appendChild(listItem);
});
backendCard.appendChild(backendTitle);
backendCard.appendChild(backendList);


const toolsCard = document.createElement('div');
toolsCard.classList.add('card');
const toolsTitle = document.createElement('h4');
toolsTitle.textContent = '과자';
const toolsList = document.createElement('ul');
['쌀과자', '매운새우깡', '피아토스', '하리보'].forEach(skill => {
  const listItem = document.createElement('li');
  listItem.textContent = skill;
  toolsList.appendChild(listItem);
});
toolsCard.appendChild(toolsTitle);
toolsCard.appendChild(toolsList);


skillsSection.appendChild(frontendCard);
skillsSection.appendChild(backendCard);
skillsSection.appendChild(toolsCard);


document.getElementById('skills-section').appendChild(skillsHeading);
document.getElementById('skills-section').appendChild(skillsSection);
