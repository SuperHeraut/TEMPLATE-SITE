// constantes
const HTML = document.querySelector("html");
const HEAD = document.querySelector("head");

const CHARSET = document.createElement("meta");
const VIEWPORT = document.createElement("meta");
const RESET = document.createElement("link");
const STYLE = document.createElement("link");
const TABTITLE = document.createElement("title");
const FAVICON = document.createElement("link");

const PAGEURL = location.pathname.split("/");
const PAGENAME = PAGEURL[PAGEURL.length - 1].split(".")[0]; //je mets ça par défaut, à modifier si besoin

const HEADER = document.querySelector("header");
const MENULIST = document.createElement("ul");
const NAVBAR = document.createElement("nav");

const MODE = document.createElement("link");

// const TESTTABLE = ;

//variables (simple déclaration, l'assignation se fait en temps voulu)
let lang;
let mode;
let modeButton;
let modeInner;
let modePic;
let style;