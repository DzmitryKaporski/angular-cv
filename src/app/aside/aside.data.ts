import { Skills, Contacts } from './aside.interface';

export const CONTACTS: Contacts[] = [
  {
    icon: "/assets/svg/phone.svg",
    contact: "+375(29)8455778",
    iconTelegram: "/assets/svg/telegram.svg",
    iconViber: "/assets/svg/viber.svg"
  },
  { icon: "/assets/svg/mail.svg", contact: "dzmitry.kaporski@gmail.com" },
  { icon: "/assets/svg/linkedin.svg", link: "https://www.linkedin.com/in/kaporski/", contact: "linkedin.com" },
  { icon: "/assets/svg/skype.svg", contact: "live:.cid.d6899aaa40ee068d" },
  { icon: "/assets/svg/github.svg", link: "https://github.com/DzmitryKaporski", contact: "github.com" },
]

export const SKILLS: Skills[] = [
  { name: "CSS3", value: 7 },
  { name: "JS", value: 7 },
  { name: "Node.js", value: 6 },
  { name: "TypeScript", value: 6 },
  { name: "Webpack", value: 3 },
  { name: "Git", value: 7 },
  { name: "React", value: 2 },
  { name: "Angular", value: 5 },
  { name: "English: pre-intermediate", value: 4 },
]
