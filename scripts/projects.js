const projects = [
    {
        name: "Restaurant",
        demo: "https://darksp1der.github.io/TechTrekWeb/",
        repo: "https://github.com/darksp1der/TechTrekWeb",
        thumbnail: "images/restaurant-thumbnail.png"  
    },
    {
        name: "Grid Vs Flexbox",
        demo: "https://darksp1der.github.io/Grid-Vs-FlexBox/",
        repo: "https://github.com/darksp1der/Grid-Vs-FlexBox",
        thumbnail: "images/grid-vs-flexbox-thumbnail.png"
    },
    {
        name: "Back to top",
        demo: "https://darksp1der.github.io/BackToTop/",
        repo: "https://github.com/darksp1der/BackToTop",
        thumbnail: "images/back-to-top-thumbnail.png"
    },
    {
        name: "Hamburger menu",
        demo: "https://darksp1der.github.io/MenuJS/",
        repo: "https://github.com/darksp1der/MenuJS",
        thumbnail: "images/hamburger-menu-thumbnail.png"
    },
    {
        name: "Tips Calculator",
        demo: "https://darksp1der.github.io/TipsCalculator/",
        repo: "https://github.com/darksp1der/TipsCalculator",
        thumbnail: "images/tips-calculator-thumbnail.png"
    },
    {
        name: "Winner",
        demo: "https://darksp1der.github.io/WinnerJS/",
        repo: "https://github.com/darksp1der/WinnerJS",
        thumbnail: "images/winner-thumbnail.png"
    },
    {
        name: "Money Converter",
        demo: "https://darksp1der.github.io/MoneyConverter/",
        repo: "https://github.com/darksp1der/MoneyConverter",
        thumbnail: "images/money-converter-thumbnail.png"
    }
];

const projectsList = document.getElementById("projects-list");

projects.forEach(project => {
    const projectItem = document.createElement("li");
    projectItem.innerHTML = `
        <h3>${project.name}:</h3>
        <a href="${project.demo}" target="_blank">Live Demo</a> | 
        <a href="${project.repo}" target="_blank">GitHub Repo</a>
        <div class="thumbnail-container">
            <img src="${project.thumbnail}" alt="${project.name} preview">
        </div>
    `;
    projectsList.appendChild(projectItem);
});
