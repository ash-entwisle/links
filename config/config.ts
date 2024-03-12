import type { LLConfig } from "../src/types";


export const Config: LLConfig = {
    title: "Hi! I'm Ash!",
    about: "2nd year Comp-Sci student who loves rust, linux, mechanical keyboards, toasters and blue ikea sharks :3",
    image: "/favicon.svg",
    links: [
        {
            name: "My Site",
            href: "https://ashentwisle.com",
            desc: "Check out my other stuff!",
            link: "website",
            icon: {
                code: "f0ac",
                bold: true
            }
        }, {
            name: "My Blog",
            href: "https://ashentwisle.com/blog",
            desc: "Check out my Blog!",
            link: "blog",
            icon: {
                code: "f09e",
                bold: true
            }
        }, {
            name: "My Github",
            href: "https://github.com/ash-entwisle/",
            desc: "LazyLink's GitHub repo",
            link: "github",
            icon: {
                code: "f09b",
                bold: false
            }
        }, {
            name: "My CV",
            href: "https://raw.githubusercontent.com/ash-entwisle/cv/main/cv.pdf?token=GHSAT0AAAAAAB7KUZJBRPVQMKORNISRHXM6ZAO7BLQ",
            desc: "My CV",
            link: "cv",
            icon: {
                code: "f02d",
                bold: true
            }
        }, 
    ]
}
