'use strict';

var gPortfolioProjs = [{
    id: "Diner",
    name: "Diner",
    title: "3D project",
    desc: "My first 3D project, done in LightWave and renderd in Arnold",
    url: "https://benlutenberg.artstation.com/projects/5AQYE",
    publishedAt: 2019,
    labels: ["LightWave", " Arnold", " 3D"],
},
{
    id: "Pacman",
    name: "Pacman",
    title: "fullStack project",
    desc: "one of my favorit games done in Coding Academy",
    url: "https://benl000.github.io/Pacman/",
    publishedAt: 2022,
    labels: ["JavaScript", " CSS", " HTML", " FullStack"],
}, {
    id: "Boy",
    name: "Boy",
    title: "3D project",
    desc: "one of myy first 3D projects, done in Maya and renderd in Vray",
    url: "https://benlutenberg.artstation.com/projects/a2vDR",
    publishedAt: 2019,
    labels: ["Maya", " Vray", " Substance Painter", " 3D"],
}, {
    id: "MineSweeper",
    name: "MineSweeper",
    title: "fullStack project",
    desc: "bringing back my childhood",
    url: "https://benl000.github.io/Mine-Sweeper/",
    publishedAt: 2022,
    labels: ["JavaScript", " CSS", " HTML", " FullStack"],
}, {
    id: "BookShop",
    name: "BookShop",
    title: "fullStack project",
    desc: "organizing my book shop",
    url: "https://benl000.github.io/BookShop/",
    publishedAt: 2022,
    labels: ["JavaScript", " CSS", " HTML", " FullStack"],
}, {
    id: "Nums",
    name: "Nums",
    title: "fullStack project",
    desc: "break the record,click the fastest",
    url: "https://benl000.github.io/Num/",
    publishedAt: 2022,
    labels: ["JavaScript", " CSS", " HTML", " FullStack"],
}, {
    id: "Spongebob",
    name: "Spongebob",
    title: "fullStack project",
    desc: "some krabby patty for the soul",
    url: "https://benl000.github.io/KrabbyPatty/",
    publishedAt: 2022,
    labels: ["JavaScript", " CSS", " HTML", " FullStack"],
}, {
    id: "Trivia",
    name: "Trivia",
    title: "fullStack project",
    desc: "some of my favorites drag queens",
    url: "https://benl000.github.io/Trivia/",
    publishedAt: 2022,
    labels: ["JavaScript", " CSS", " HTML", " FullStack"],
}, {
    id: "Pineball",
    name: "Pineball",
    title: "3D project",
    desc: " 3D project, done in Maya,Substance Painter and renderd in Vray",
    url: "https://benlutenberg.artstation.com/projects/8A2Lm",
    publishedAt: 2019,
    labels: ["Maya", " Vray", " Substance Painter", " 3D"],
}, {
    id: "Jacket",
    name: "Jacket",
    title: "Sewing",
    desc: "My first sewing project, a new hobbie",
    url: "https://www.moodfabrics.com/blog/mood-diy-free-reversible-bomber-jacket-sewing-pattern/",
    publishedAt: 2022,
    labels: ["Sewing", " Fabrics"],
}];

function getProtfoliosForDisplay() {
    return gPortfolioProjs;
}