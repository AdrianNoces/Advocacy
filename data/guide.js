import { Data } from "./data.js";

let Container = ``;

Data.forEach((items) => {
    Container += `
    <div class="item">
        <img class="img" src="${items.src}" alt="">
        <div class="desContainer">
            <p class="title">${items.title}</p>
            <p class="description">${items.description}</p>
        </div>
    </div>
    `;
})

export let GuideContent =  `
    <div class="gridcontainer">
        ${Container}
    </div>
`;