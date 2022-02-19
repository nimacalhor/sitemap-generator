const siteMapArr = [
    {
        name: "about us",
    },
    {
        name: "academic",
        children: [
            {
                name: "student area",
                children: [
                    { name: "something" },
                    { name: "text book list" },
                    { name: "author" }
                ]
            },
            {
                name: "faculty area",
                children: [
                    { name: "order details" },
                    { name: "registration" },
                    { name: "text book" },
                ]
            }
        ]
    },
    {
        name: "general",
        children: [
            { name: "book club", children: [{ name: "favorite choices" }] },
            { name: "promotions", children: [{ name: "15" }, { name: "20" }, { name: "30" }] },
            {
                name:"lists",
                children:[
                    {name: "bestsellers"},
                    {name: "popular"},
                    {name: "new releases"},
                    {name: "other language"},
                ]
            }
        ]
    },
    {name:"FAQ"},
    {name:"contact us"},
    {name:"search page"},
    {name:"sitemap"},
];

export default siteMapArr;