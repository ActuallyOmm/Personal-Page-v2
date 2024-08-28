export const projectsGrid = [
  {
    id: 1,
    title: "My Projects",
    description:
      "Here you can see a list of all the projects and courseworks I've completed so far, throughout my acedemic journey.",
    className: "md:col-span-full justify-center items-center",
  },
];

export const projectItem = [
  {
    id: 1,
    Project_Description:
      "Created an interactive, dynamic webpage using HTML, PHP and CSS which was linked to a backend database; allowing the user to perform actions (logging in, booking sessions, etc.). Implemented JavaScript functions to handle erroneous data entered by the user. Utilised tools such as: HeidiSQL to create a database based of the EERD, and Laragon to host the website on a local server.",
    Project_Name: "COM1025 Coursework - Surrey Sports Park Database System",
    Skills: ["HTML", "CSS", "Javascript", "PHP", "SQL"],
  },
  {
    id: 2,
    Project_Description:
      "Created an interactive, dynamic webpage using HTML, PHP and CSS which was linked to a backend database; allowing the user to perform actions (logging in, booking sessions, etc.). Implemented JavaScript functions to handle erroneous data entered by the user. Utilised tools such as: HeidiSQL to create a database based of the EERD, and Laragon to host the website on a local server.",
    Project_Name: "COM1028 Coursework - Database Analytics System",
    Skills: ["SQL", "Java"],
  },
  {
    id: 3,
    Project_Description:
      "Programmed a Morse Code Translator using a Raspberry Pi, using ARM assembly language. The program was able to detect button presses and map them to their corresponding letters, displaying their output to a 7-segment display and terminal. Built external circuitry using the GPIO pins on the Raspberry Pi and components (i.e., wires, breadboard, button and  segment display).",
    Project_Name: "COM1031 Coursework - Morse Code Translator",
    Skills: ["ARM Assembly"],
  },
  {
    id: 4,
    Project_Description:
      "Developed a segmented memory management system using Java which allocated and de-allocated groups of processes. The program allowed for the allocated processes to be dynamically resized, throwing the relevant exception if an error occurred.",
    Project_Name: "COM1032 Coursework - Segmented Memory Manager",
    Skills: ["Java"],
  },
  {
    id: 5,
    Project_Description:
      "Utilised Django framework to develop a user friendly, functional web application. Designed and put into effect a backend infrastructure (models, views, URLs), ensuring reliant data management. Enhanced user experience by programming views, enabling user actions such as album/song creation, viewing, editing and deletion. Implemented a login system, that also displayed infomation back to users about comments they made on each album in a list.",
    Project_Name: "COM2025 Coursework - Django Web Application",
    Skills: ["Django", "Python", "HTML", "CSS", "JavaScript"],
  },
  {
    id: 6,
    Project_Name: "COM2027 Coursework - Software Engineering Project",
    Project_Description:
      "Created Project Workfox, a full stack web application which was functional and interactive. The purpose of the application was to further improve an employees retention and engagement, whilst working from home. Features that I implemented: a weather widget that allows the user to find the weather of location; maps & activities feature that shows activities around the user based on current weather; and a BeReal feature implemented using SSE (real time client streaming requirement).",
    Skills: ["Django", "Python", "HTML", "JavaScript", "APIs"],
  },
  {
    id: 7,
    Project_Description:
      "Further developed the ResNet-18 Model (supplemented by PyTorch) to classify whether a breast ultrasound was cancerous or non-cancerous. Hyper-parameter tuning was performed: Epochs, learning rate, momentum, dropout probability, weight decay and batch size. Additional layers were also added to add randomness and to stop the model from remembering rather than learning. All these modifications aided in the increase in AUC and overall accuracy of the model.",
    Project_Name: "COM2028 Coursework - Classification of Ultrasounds",
    Skills: ["Scikit-Learn", "PyTorch", "Python"],
  },
  {
    id: 8,
    Project_Description:
      "Further developed my understanding on cryptography, coded solutions to solve cryptographic problems set. Used my programming and cryptographic knowledge to solve problems which utilised ciphers and other encryption schemes.",
    Project_Name: "COM2041 Coursework 1 - Computer Security ",
    Skills: ["Java"],
  },
  {
    id: 9,
    Project_Description:
      "Modelled transmissions using scyther to test their security, and see whether attackers were able to intercept it, and decode it.",
    Project_Name: "COM2041 Coursework 2 - Computer Security",
    Skills: ["Scyther"],
  },
];

export const skillItems = [
  { id: 1, SkillName: "ARM Assembly" },
  { id: 2, SkillName: "C++" },
  { id: 3, SkillName: "C++ Cuda" },
  { id: 4, SkillName: "Java" },
  { id: 5, SkillName: "Python" },
  { id: 6, SkillName: "JavaScript" },
  { id: 7, SkillName: "CSS" },
  { id: 8, SkillName: "HTML" },
  { id: 9, SkillName: "Django" },
  { id: 10, SkillName: "PHP" },
  { id: 11, SkillName: "SQL" },
  { id: 12, SkillName: "React" },
  { id: 13, SkillName: "NextJS" },
  { id: 14, SkillName: "PyTorch" },
  { id: 15, SkillName: "Scikit-Learn" },
  { id: 16, SkillName: "Scyther" },
];

export const writtenItem = [
  {
    id: 1,
    title: "Welcome!",
    desc: "Hi! My name is Omm. I am currently a third year Computer Science Student, studying at the University of Surrey. \n I'd like to welcome you to my personal portfolio website designed using NextJS (TypeScript). \n Please have a look around to see my most recent work! \n Apologies for any bugs, it's still a work in progress :D",
    className: "md:col-span-full justify-center items-center ",
    img: "/pfp.jpg",
    classNameImg: "w-32 h-32",
  },
  {
    id: 2,
    title: "My Skills",
    desc: [
      "ARM Assembly",
      "C++",
      "C++ Cuda",
      "Java",
      "Python",
      "JavaScript",
      "CSS",
      "HTML",
      "Django",
      "PHP",
      "SQL",
      "React",
      "NextJS",
      "PyTorch",
      "Scikit-Learn",
      "Scyther",
    ],
    className: "md:col-span-full",
    img: "",
    classNameImg: "",
  },
  {
    id: 3,
    title: "About me",
    desc: "As mentioned in the box above, I'm Omm. I'm an aspiring software engineer in my 3rd year, studying Computer Science at the Univerisity of Surrey. I'm from the South East of London, and have been studying Computer Science throughout my years in academia. \n\nWhilst learning, I've been able to further develop and refine my abstraction skills within a programming setting. As a result of this, I have been able to gain experience in both procedural and object oriented projects.",
    className: "sm:col-span-full md:col-span-1",
    img: "/IRL pfp.png",
    classNameImg: "w-32 h-32",
  },
  {
    id: 4,
    title: "My Experiences",
    desc: `I have several years worth of experience programming in Object Oriented in the following languages: Java, Python and Visual Basic. Most recently, I've been creating full-stack web applications; my most recent project utilised Next.JS (with JavaScript) as a front-end framework, and PocketBase as a backend.
          
          During my second semester, I was given the oppurtunity to partake in the Peer Assisted Learning Scheme (PALS) for the Operating Systems module (COM1032). In these labs, I helped first year students through lab exercises.
          `,
    className: "sm:col-span-full md:col-span-1",
    img: "/back.jpg",
    classNameImg: "h-32",
  },
];

export const projectTile = [
  {
    id: 1,
    title: "My Favourite Projects",
    desc: null,
  },
];

export const swiperItem = [
  {
    id: 1,
    Project_Description:
      "Created an interactive, dynamic webpage using HTML, PHP and CSS which was linked to a backend database; allowing the user to perform actions (logging in, booking sessions, etc.). Implemented JavaScript functions to handle erroneous data entered by the user. Utilised tools such as: HeidiSQL to create a database based of the EERD, and Laragon to host the website on a local server.",
    Project_Name: "COM1028 Coursework - Database Analytics System",
    Skills: ["SQL", "Java"],
  },
  {
    id: 2,
    Project_Description:
      "Utilised Django framework to develop a user friendly, functional web application. Designed and put into effect a backend infrastructure (models, views, URLs), ensuring reliant data management. Enhanced user experience by programming views, enabling user actions such as album/song creation, viewing, editing and deletion. Implemented a login system, that also displayed infomation back to users about comments they made on each album in a list.",
    Project_Name: "COM2025 Coursework - Django Web Application",
    Skills: ["Django", "Python", "HTML", "CSS", "JavaScript"],
  },
  {
    id: 3,
    Project_Name: "COM2027 Coursework - Software Engineering Project",
    Project_Description:
      "Created Project Workfox, a full stack web application which was functional and interactive. The purpose of the application was to further improve an employees retention and engagement, whilst working from home. Features that I implemented: a weather widget that allows the user to find the weather of location; maps & activities feature that shows activities around the user based on current weather; and a BeReal feature implemented using SSE (real time client streaming requirement).",
    Skills: ["Django", "Python", "HTML", "JavaScript", "APIs"],
  },
  {
    id: 4,
    Project_Description:
      "Further developed the ResNet-18 Model (supplemented by PyTorch) to classify whether a breast ultrasound was cancerous or non-cancerous. Hyper-parameter tuning was performed: Epochs, learning rate, momentum, dropout probability, weight decay and batch size. Additional layers were also added to add randomness and to stop the model from remembering rather than learning. All these modifications aided in the increase in AUC and overall accuracy of the model.",
    Project_Name: "COM2028 Coursework - Classification of Ultrasounds",
    Skills: ["Scikit-Learn", "PyTorch", "Python"],
  },
];
//
