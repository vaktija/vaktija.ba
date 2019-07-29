import React, { Component } from "react";
import data from "../data/vaktija.json";
import slugify from "slugify";

const spisakLokacija = data.lokacija;
const { weight } = data;

class Sitemap extends Component {
    render() {
        return (
            <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
                {spisakLokacija.map((l, index) => (
                    <url>
                        {/* <loc>{`https://vaktija.ba/${l}`}</loc> */}

                        <loc>{`https://vaktija.ba/${slugify(l, {
                            replacement: "-",
                            remove: null,
                            lower: true
                        })}`}</loc>
                        {/* <lastmod>2018-04-09</lastmod> */}
                        <changefreq>daily</changefreq>
                        <priority>{`${(1 / weight[index]).toFixed(1)}`}</priority>
                    </url>
                ))}
            </urlset>
        );
    }
}

export default Sitemap;
