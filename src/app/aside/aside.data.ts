import { Skills, Contacts } from './aside.interface';

export const CONTACTS: Contacts[] = [
  { icon: "fas fa-phone-volume", contact: "+375(29)8455778", iconTelegram: "fab fa-telegram", iconViber: "fab fa-viber", },
  { icon: "fas fa-envelope", contact: "dzmitry.kaporski@gmail.com" },
  { icon: "fab fa-linkedin", link: "https://www.linkedin.com/in/kaporski/", contact: "linkedin.com" },
  { icon: "fab fa-skype", contact: "live:.cid.d6899aaa40ee068d" },
  { icon: "fab fa-github-square", link: "https://github.com/DzmitryKaporski", contact: "github.com" },
]

export const SKILLS: Skills[] = [
  { icon: "fab fa-html5", name: "HTML", value: 7 },
  { icon: "fab fa-css3-alt", name: "CSS3", value: 7 },
  { icon: "fab fa-node-js", name: "JS", value: 7 },
  { icon: "fab fa-node", name: "Node.js", value: 6 },
  { icon: "fas fa-exchange-alt", name: "TypeScript", value: 6 },
  { icon: "fas fa-cube", name: "Webpack", value: 3 },
  { icon: "fab fa-github-square fa-git", name: "Git", value: 7 },
  { icon: "fab fa-react", name: "React", value: 2 },
  { icon: "fab fa-angular", name: "Angular", value: 5 },
  { name: "English: pre-intermediate", value: 4 },
]
