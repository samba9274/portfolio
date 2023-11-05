import { Components } from "./components";

export const constants = {
  singleBlankSpace: " ",
  curlyBraceOpen: "{",
  curlyBraceClose: "}",
  colon: ":",
  semiColon: ";",
  hyphen: "-",
  comma: ",",
  quoteOpen: "“",
  quoteClose: "”",
  quote: '"',
  dot: ".",
  zero: "0",
  lightModeText: "Light Mode",
  headerTitles: ["File", "Edit", "View", "Run", "Terminal", "Help"],
  socials: [
    { name: "LinkedIn", link: "https://www.linkedin.com/in/yash-eksambekar" },
    { name: "Github", link: "https://github.com/samba9274" },
    // { name: "Instagram", link: "https://www.instagram.com/yash.eksambekar" },
  ],
  pages: {
    home: {
      title: "Home",
      component: Components.Pages.Home.Main,
      extension: "md",
      className: "fas fa-home",
      topLine: "# Hello!",
      subLine: "## I am Yash Eksambekar",
      devs: [
        "Fullstack Developer",
        "Cloud Architect",
        "Machine Learning Enthusiast",
      ],
      downloadResumeLinkText: "Download Resume",
      resumeName: "Resume.pdf",
    },
    about: {
      title: "AboutMe",
      component: Components.Pages.AboutMe.Main,
      extension: "json",
      className: "far fa-user",
      aboutJson: {
        "About Me": {
          Name: "Yash Eksambekar",
          "Date Of Birth": "16th July, 2001",
          Description:
            "I am a Second Year Computer Engineering student at AISSMS College of Engineering, Pune. Core team member of Google DSC chapter at my college. Skilled in Java technologies like Spring Boot and AndroidSDK. I have worked on projects in Fullstack(MERN) and Android domains. I'm skilled at Cloud by Amazon Web Services and am currently learning Data Science domain. Get in touch with me through Contact page.",
          Education:
            "Persuing Bachelor's in Engineering in Compter Engineering",
        },
      },
    },
    skills: {
      title: "Skills",
      component: Components.Pages.Skills.Main,
      extension: "yaml",
      className: "far fa-star",
    },
    projects: {
      title: "Projects",
      component: Components.Pages.Projects.Main,
      extension: "css",
      className: "far fa-lightbulb",
    },
    // contact: {
    //   title: "Contact",
    //   component: Components.Pages.Contact.Main,
    //   extension: "xml",
    //   className: "far fa-envelope",
    // },
  },
};
