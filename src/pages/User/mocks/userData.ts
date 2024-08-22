const temporaryPicture = "https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg";

const displayName = localStorage.getItem("name");
const aboutUser = localStorage.getItem("aboutUser");
const userStatus = localStorage.getItem("userStatus");
const theme = localStorage.getItem('themeColor');
const verifyTheme = theme ? theme : "#45156B";
const appearAs = localStorage.getItem("localAppearAs")

interface User {
  picture: string
  username: string;
  about: string;
  name: string;
  status: string,
  memberSince: string;
  spotify: boolean;
  github: boolean;
  themeColor: string
  appearAs: string
  
}

export const userData: User = {
    picture: temporaryPicture,
    name: displayName ? displayName : "FJ",
    username: "franc1sc0_sv",
    about: aboutUser ? aboutUser : "En efecto, es una prueba",
    status: userStatus ? userStatus : "estoy sentado",
    memberSince: "21 de septiembre de 2005",
    appearAs: appearAs ? appearAs: "Conectado",
    spotify: true,
    github: true,
    themeColor: verifyTheme
};