import siteMapArr from "./sitemapArr.js";

const sitemapGenerator = (data, prevUrl = "") =>
    data.map(function (item, i) {
        const title = item.name;
        const id = `${item.name}_${i}`;
        const children = item.children;
        const url = prevUrl ? `${prevUrl}/${item.name}` : `/${item.name}`

        const json = { id, title, url }

        return children ?
            { ...json, children: { ...sitemapGenerator(children, url) } } :
            json
    })



console.log(sitemapGenerator(siteMapArr))
// id,title,url و children