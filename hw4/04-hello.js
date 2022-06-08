// Add your code here
let main = document.body.getElementsByTagName('main')[0];
main.style.margin = 'auto';
main.style.textAlign = 'center';

let figure = document.createElement('figure');
main.appendChild(figure);

let figcaption = document.createElement('figcaption');
figcaption.style.textAlign = 'left';
figcaption.style.margin = 'auto';
figcaption.style.width = '50%';

let img = document.createElement('img');
img.src = '../hw1/images/Shreyoshi.jpeg';
img.alt = 'Image of Shreyoshi at Cannon Beach during sunset';
img.style.width = '299px';
img.style.height = '299px';
img.style.borderRadius = '50%';

figure.appendChild(img);
figure.appendChild(figcaption);

let section = document.createElement('section');
section.textContent = 'Hi! My name is Shreyoshi Mahato. ';
section.style.fontWeight = 'bold';
figcaption.appendChild(section);

let aside = document.createElement('aside');
aside.textContent = `I am pursuing Masters in Computer Science at Portland State University.
I have taken Intro to Web Developement course to enhance my skills in frontend web technologies.
In my free time I like traveling to new places.`;
figcaption.appendChild(aside);
