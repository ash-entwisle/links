import type { LLConfig } from "../src/types";


export const Config: LLConfig = {
    title: "Hi, I'm Ash!",
    about: "I'ma a 2nd year Comp-Sci student who loves rust, linux, mechanical keyboards, toasters and blue ikea sharks :3",
    image: "/favicon.svg",
    links: [
        {
            name: "Website",
            href: "https://ashentwisle.com",
            desc: "Check out my other stuff!",
            link: "website",
            icon: {
                code: "f0ac",
                bold: true
            }
        }, 
        {
            name: "Github",
            href: "https://github.com/ash-entwisle/",
            desc: "LazyLink's GitHub repo",
            link: "github",
            icon: {
                code: "f09b",
                bold: false
            }
        }, 
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/ash-entwisle/",
            desc: "My LinkedIn Profile",
            link: "linkedin",
            icon: {
                code: "f08c",
                bold: true
            }
        }, 
        {
            name: "Email",
            href: "mailto:ash@entwisle.dev",
            desc: "Send me an email!",
            link: "email",
            icon: {
                code: "f0e0",
                bold: true
            }
        },
        {
            name: "CV",
            href: "https://raw.githubusercontent.com/ash-entwisle/cv/main/cv.pdf",
            desc: "My CV",
            link: "cv",
            icon: {
                code: "f02d",
                bold: true
            }
        },
        {
            name: "Blog",
            href: "https://ashentwisle.com/blog",
            desc: "Check out my Blog!",
            link: "blog",
            icon: {
                code: "f781",
                bold: true
            }
        },
        {
            name: "RSS Feed",
            href: "https://ashentwisle.com/blog/rss.xml",
            desc: "RSS Feed for my blog",
            link: "rss",
            icon: {
                code: "f09e",
                bold: true
            }

        },
    ]
}
