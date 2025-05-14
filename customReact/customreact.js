import { Children } from "react";


const reactElement = {
    type: 'a',
    props: {
        href: 'https://gogle.com',
        target: '_blank'
    },
    Children: 'click me to visit google'
}

const mainContainer = document.querySelector('#root');

customRender (reactElement,mainContainer)