let strategyContainer = document.querySelector('#strategies');
let landing = document.querySelector('.landing');
let mainHeader = document.getElementById('changing-header');
let iconsContainer = document.querySelector('.icons');
let journeybox = document.querySelector('.journey');
// let clients = document.querySelector('.clients-sections');
let navbarBtn = document.getElementById('navbar-btn');
let navContainer = document.getElementById('contents');

// Later will be used when the other pages will be ready
// navbarBtn.addEventListener('click', () => {
//     navContainer.classList.toggle('hidden');
// })

// Creates a number of boxes with different colors
// let colorCount = 0
// for(let i = 0;i < 19;i++){
//         if(colorCount === 10){
//             colorCount = 0;
//         }
//         let box = document.createElement('div');
//         let p = document.createElement('p');
//         p.innerHTML = `${i}`;
//         box.className = 'movingBoxes';
//         box.style.left = `${i * 200}px`;
//         box.style.backgroundColor = `#${colorCount}31FE7`;
//         box.appendChild(p);
//         clients.appendChild(box);
//         colorCount++;
// }

// console.log(clients);


addEventListener('resize', function(){
    if((this.window.outerHeight - this.window.innerHeight) > 100){
        landing.style.height = `${this.window.outerHeight - 140}px`;
    }else{
        landing.style.height = `${this.innerHeight - 70}px`;
    }
});


let $window = window.outerHeight;
const windowheigth = $window; 
landing.style.height = `${$window - 140}px`;



    
// Type writer Effect
const headersToBeDisplayed = ['Graphic Designer', 'Brand Identity Designer', 'Creative Designer'];
let StringCount = 0; 
let counter = 0;
setInterval(() => {
        if(counter === headersToBeDisplayed.length){
                counter = 0;
                StringCount = 0;
            }else if(headersToBeDisplayed[counter].length == StringCount){
                    mainHeader.innerHTML = "";
                    StringCount = 0;
                    counter++;
                }
                else{
                        mainHeader.innerHTML += headersToBeDisplayed[counter][StringCount];
                        StringCount++;
                    }
                }, 250);
                
                        
const skillicons = {
    Illustrator: {
        Skillname: 'Illustrator',
        Experience: 3
    },
    Photoshop: {
        Skillname: 'PhotoShop',
        Experience: 3
    },
    AfterEffects: {
        Skillname: 'After Effects',
        Experience: 1.5
    },
    Canva: {
        Skillname: 'Canva',
        Experience: 3
    },
    Indesign: {
        Skillname: 'Indesign',
        Experience: 1
    }
}
// console.log(skillicons.);
const SkillData = Object.values(skillicons);
const Skillvalues = [];

// This Method will first seperate individual object and this merge into one
for(let n of SkillData){
    console.log(Object.values(n));
    for(let i of Object.values(n)){
        Skillvalues.push(i);
    }
}

console.log(Skillvalues);

// Loop for creating icon boxes when loaded
const experience = [];
for(i = 0;i < Skillvalues.length;i++){
    if(i%2 === 0){
        let iconBox = document.createElement('div');
        let progressContainer = document.createElement('div');
        // let Skillimage = document.createElement('img');
        let imagexont = document.createElement('div');
        iconBox.className = 'iconbox';
        progressContainer.className = 'progress';
        imagexont.className = 'imagebox';
        // Skillimage.src = `Static Images/${Skillvalues[i]}.svg`;
        imagexont.style.backgroundImage = `url('../Static\ Images/${Skillvalues[i]}.svg')`;
        iconBox.appendChild(progressContainer);
        // progressContainer.appendChild(Skillimage);
        progressContainer.appendChild(imagexont);
        iconsContainer.appendChild(iconBox);
        experience.push(Skillvalues[i+1]);
        // Adding Circular progress bar on hover 
    }else{
        continue;
    }
} 


let progress = document.querySelectorAll('.progress');
console.log(progress);

for(let k = 0;k < progress.length;k++){
    let imagebox = progress[k].firstChild;
    let experienceinPercentage = experience[k] * 20;
    console.log(experienceinPercentage);                                                                                                             
    
    console.log(imagebox);
    imagebox.addEventListener('mouseover', function(){
    let i = 0;
let progressbar = setInterval(() => {
    if(i === experienceinPercentage){
        clearInterval(progressbar);
    }else{
        progress[k].style.background = `radial-gradient(closest-side, white 79%, transparent 80%), conic-gradient(#00DFA2 ${i}%, rgb(255,255,255) 0)`;
        i++;
}
});
});
progress[k].addEventListener("mouseout", function(){
    progress[k].style.background = 'transparent';
    // progress.style.transform = `scale(0.0)`;
});
progress[k].addEventListener("mouseleave", function(){
    progress[k].style.background = 'transparent';
    // progress.style.transform = `scale(0.0)`;
});
}

const strategies = ['Brand Identity Design', 'Logo Design', 'Social Media Designing', 'Business Card','Creative Designing', 'Illustration Design', 'Broucher Design', 'WireFrames', 'Posters & Banner Designing'];
const designingSkills = [
    "Creativity",
    "Visual Communication",
    "Typography",
    "Color Theory",
    "Layout Design",
    "Image Editing",
    "Branding",
    "Illustration",
    "User Experience (UX) Design",
    "User Interface (UI) Design",
    "Information Design",
    "Print Design",
    "Web Design",
    "Motion Graphics",
    "Responsive Design",
    "Iconography",
    "Composition",
    "Storytelling",
    "Concept Development",
    "Attention to Detail",
    "Time Management",
    "Collaboration",
    "Problem-Solving",
    "Adaptability",
    "Aesthetics",
    "Graphic Design History",
    "Cultural Awareness",
    "Sketching and Drawing",
    "Presentation Skills",
    "Photography",
    "3D Design",
    "Storyboarding",
    "Prototyping",
    "Printing Techniques",
    "Marketing and Advertising",
    "Copyright and Intellectual Property",
    "Brand Strategy",
    "Presentation Software",
    "Social Media Design",
    "Continuous Learning"
  ];
  

for(let i = 0;i < designingSkills.length;i++){
    let boxedtext = document.createElement('p');
    boxedtext.className = 'boxedtext';
    boxedtext.innerHTML = designingSkills[i];
    strategyContainer.appendChild(boxedtext);
}

const journeyData = {
    education : {
        puc: {
           College: 'Al Ameen Pre University College',
           field: 'Commerce',
           from: 2016,
           to: 2018
        },
        Bachelors: {
            College: 'Al Ameen Science Commerce & Arts',
            field: 'BCOM',
            from: 2018,
            to: 2020,
        }
    },
    work : {
        Percoyo: {
            company: 'Percoyo ltd',
            Designation: 'Graphic Designer (Intern)',
            from: 'June 2020',
            to: 'Nov 2020'
        },
        Tafo: {
            company: 'Tafo Technologies',
            Designation: 'Graphic Designer',
            from: 'Nov 2020',
            to: 'Present'
        }
    }
}

// Storing all key values
const journeyvalues = Object.values(journeyData);
console.log(journeyvalues);


// It 1st filter the outer objects and then iterates the data and places it in the HTML elements 
for(let j of journeyvalues){
    let topic = Object.values(j);
    console.log(topic);
    let outerbox = document.createElement('div');
    let header = document.createElement('h2');
    header.innerHTML = journeyvalues.indexOf(j) === 0 ? `Education` : `Experience`; 
    outerbox.className = 'outerbox';
    outerbox.appendChild(header)
    for(let e of topic){
    let mainBox = document.createElement('div');
    let image = document.createElement('img');
    let discbox = document.createElement('div');
    let values = Object.values(e);
    mainBox.className = 'mainBox';
    image.src = `Static Images/${values[0]}.png`;
    discbox.className = 'DiscBox';
    for(let f of values){
        if(values.indexOf(f) === 2){
            let p = document.createElement('p')
            p.innerHTML = `${f} - ${values[3]}`;
            discbox.appendChild(p);
            break;
        }else{
            let p = document.createElement('p')
            p.innerHTML = f;
            if(values.indexOf(f) === 0){
                p.style.fontWeight = 700;
            }
            discbox.appendChild(p);
            console.log(values.indexOf(f));
        }
    }
    mainBox.appendChild(image);
    mainBox.appendChild(discbox);
    outerbox.appendChild(mainBox)
    if(topic.indexOf(e) === 0){
        let line = document.createElement('div');
        line.className = 'line';
        outerbox.appendChild(line);
    }
}
journeybox.appendChild(outerbox);
}

// Automatic Carosuel
// let boxes = document.querySelectorAll('.movingBoxes');
// console.log(boxes);
// let boxcount = 0;
// let lengthOfChild = 0;
// let movingboxes = setInterval(() => {
//     if(boxcount === 4){
//         boxcount = 0;
//         let lengthOfChild = Number(boxes[boxes.length - 1].style.left.replace('px', ''));
//         for(let i = 0;i < 4;i++){
//             let firstChilds = boxes[0];
//             console.log(firstChilds);
//             firstChilds.style.left = `${lengthOfChild + (i * 200)}px`;
//             clients.removeChild(clients.firstChild);
//             clients.append(firstChilds);
//         }
//     }else{
//         for(let b = 0;b < boxes.length;b++){
//         boxes[b].style.left = `${Number(boxes[b].style.left.replace('px', '')) - 100}px`;
//     }
//     boxcount = 4;
// }
// }, 1000);

// let count = 0;
// let movingOBj = setInterval(() => {
//     if(count === 1){
//         boxes = document.querySelectorAll('.movingBoxes');
//         for(let i = 0;i < 2;i++){
//             let lengthOfChild = Number(boxes[boxes.length - 1].style.left.replace('px', ''));
//             let firstChild = boxes[0];
//             firstChild.style.left = `${lengthOfChild + 200}px`;
//             clients.append(firstChild);
//         }
//         count = 0
//     }else{
//     for(let b = 0;b < boxes.length;b++){    
//                 boxes[b].style.left = `${Number(boxes[b].style.left.replace('px', '')) - 200}px`;
//         }
//         count++;
//     }
// }, 1000);


const paragraphs = document.querySelectorAll('p');
const header = document.querySelectorAll('h2');
const ahrefs = document.querySelectorAll('a');
const lists = document.querySelectorAll('li');
let darkBtn = document.getElementById('darkmode');
let innerBall = document.getElementById('innerBall');
let img = document.getElementById('toggleImage');
let body = document.querySelector('body');
let aboutSection = document.querySelector('.about-section');
let footer = document.querySelector('footer');
let mainBox = document.querySelectorAll('.mainBox');
let outerbox = document.querySelectorAll('.outerbox');
for(let h of header){
    h.classList.add('h2s');
}

darkBtn.addEventListener('click', function(){
    for(let i = 0;i < paragraphs.length;i++){
        paragraphs[i].classList.toggle('darkmodefont');
    }
    for(let i = 0;i < header.length;i++){
        header[i].classList.toggle('darkmodefont');
    }
    for(let i = 0;i < ahrefs.length;i++){
        ahrefs[i].classList.toggle('darkmodefont');
    }
    for(let i = 0;i < lists.length;i++){
        lists[i].classList.toggle('darkmodefont');
    }
    darkBtn.style.backgroundColor = 'white';
    innerBall.classList.toggle('dark');
    // navbarBtn.classList.toggle('dark');
    // navContainer.classList.toggle('dark');
    if(innerBall.classList.contains('dark')){
        body.style.backgroundColor = '#000';
        document.querySelector('.line').style.backgroundColor = '#f1f1f1';
        document.querySelector('.line').style.borderColor = '#f1f1f1';
        console.log('works');
    }else{
        body.style.backgroundColor = '#f1f1f1';
        document.querySelector('.line').style.backgroundColor = '#000';
        document.querySelector('.line').style.borderColor = '#000';
        console.log('notworks');
    }
    aboutSection.classList.toggle('darkcontainer');
    footer.classList.toggle('darkcontainer');
    for(let m of mainBox){
        m.classList.toggle('darkcontainer');
    }
    for(let o of outerbox){
        o.classList.toggle('darkcontainer');
    }
})

document.addEventListener('ontouchstart', () => {
    console.log('Works');
})