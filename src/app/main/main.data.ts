import { Courses, Education, Links } from './main.interface';

export const COURSES: Courses[] = [
  { year: "2020", link: "assets/documents/academy.avif", name: "STEP IT Academy (Frontend development / React)" },
  { year: "2021", link: "assets/documents/english.avif", name: "STREAMLINE English (Pre-intermediate)" },
  { link: "assets/documents/rsschool.avif", name: "THE ROLLING SCOPES SHCOOL (Frontend development / JavaScript)" },
  { link: "assets/documents/epam.avif", name: "EPAM (Frontend development / Angular)" },
  { year: "2022", name: "EPAM Learn digital platform (Version Control with Git)" },
]

export const EDUCATION: Education[] = [
  { year: "1999 - 2002", name: "Mogilev State Polytechnic College" },
  { year: "2007 - 2011", link: "assets/documents/mesi.avif", name: "Moscow State University of Economics, Statistics and Informatics" },
]

export const LINKS: Links[] = [
  { title: "Website", href: "https://dzmitrykaporski.github.io/website-tamplate/", src: "assets/img/1.avif" },
  { title: "Angular CRUD", href: "https://dk-angular-crud.surge.sh/", src: "assets/img/2.avif" },
  { title: "English for children", href: "https://dzmitrykaporski-jsfe2021q1-english-for-kids.surge.sh/", src: "assets/img/3.avif" },
  { title: "Angular application", href: "https://final-project_angular13.surge.sh/", src: "assets/img/4.avif" },
]
