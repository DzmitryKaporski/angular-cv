import { Skills, Contacts, Languages } from './aside.interface';

export const CONTACTS: Contacts[] = [
  {
    icon: "/assets/svg/phone.svg",
    contact: "+375(29)8455778",
    iconTelegram: "/assets/svg/telegram.svg",
    iconViber: "/assets/svg/viber.svg"
  },
  {
    icon: "/assets/svg/mail.svg",
    contact: "dzmitry.kaporski@gmail.com"
  },
  {
    icon: "/assets/svg/linkedin.svg",
    link: "https://www.linkedin.com/in/kaporski/",
    contact: "linkedin.com"
  },
  {
    icon: "/assets/svg/skype.svg",
    contact: "live:.cid.d6899aaa40ee068d"
  },
  {
    icon: "/assets/svg/github.svg",
    link: "https://github.com/DzmitryKaporski",
    contact: "github.com"
  },
]

export const SKILLS: Skills[] = [
  { name: "HTML5", value: 7, icon: "/assets/svg/html5.svg" },
  { name: "CSS3", value: 7, icon: "/assets/svg/css3.svg" },
  { name: "JavaScript", value: 7, icon: "/assets/svg/js.svg" },
  { name: "React", value: 4, icon: "/assets/svg/react.svg" },
  { name: "Angular", value: 5, icon: "/assets/svg/angular.svg" },
  { name: "Firebase", value: 5, icon: "/assets/svg/firebase.svg" },
  { name: "Node.js", value: 6, icon: "/assets/svg/nodejs.svg" },
  { name: "TypeScript", value: 6, icon: "/assets/svg/typescript.svg" },
  { name: "Webpack", value: 3, icon: "/assets/svg/webpack.svg" },
  { name: "Figma", value: 7, icon: "/assets/svg/figma.svg" },
  { name: "Git", value: 7, icon: "/assets/svg/git.svg" },
]

export const LANGUAGES: Languages[] = [
  { name: "English: pre-intermediate", value: 4, icon: "/assets/img/english.png" },
]
