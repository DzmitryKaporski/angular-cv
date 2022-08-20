import { Courses, Education, Links } from './main.interface';

export const COURSES: Courses[] = [
  { year: "2020", link: "assets/documents/academy.jpg", name: "STEP IT Academy (Frontend development / React)" },
  { year: "2021", link: "assets/documents/english.jpg", name: "STREAMLINE English (Pre-intermediate)" },
  { link: "assets/documents/rsschool.jpg", name: "THE ROLLING SCOPES SHCOOL (Frontend development / JavaScript)" },
  { link: "assets/documents/epam.jpg", name: "EPAM (Frontend development / Angular)" },
  { year: "2022", name: "EPAM Learn digital platform (Version Control with Git)" },
]

export const EDUCATION: Education[] = [
  { year: "1999 - 2002", name: "Mogilev State Polytechnic College" },
  { year: "2007 - 2011", link: "assets/documents/mesi.jpg", name: "Moscow State University of Economics, Statistics and Informatics" },
]

export const LINKS: Links[] = [
  { title: "Website", href: "https://dzmitrykaporski.github.io/website-tamplate/", src: "assets/img/1.jpg" },
  { title: "Angular CRUD", href: "https://dk-angular-crud.surge.sh/", src: "assets/img/2.jpg" },
  { title: "English for children", href: "https://dzmitrykaporski-jsfe2021q1-english-for-kids.surge.sh/", src: "assets/img/3.jpg" },
  { title: "Angular application", href: "https://final-project_angular13.surge.sh/", src: "assets/img/4.jpg" },
]
