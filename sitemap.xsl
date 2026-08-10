<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
    <xsl:output method="html" encoding="UTF-8" indent="yes"/>

    <xsl:template match="/">
        <html lang="en">
            <head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Have &amp; Share XML Sitemap</title>
                <style>
                    body {
                        margin: 0;
                        padding: 40px 20px;
                        font-family: Arial, Helvetica, sans-serif;
                        color: #24352d;
                        background: #f7f7f2;
                    }
                    main {
                        max-width: 1040px;
                        margin: 0 auto;
                        background: #ffffff;
                        border: 1px solid #d9ded6;
                        border-radius: 8px;
                        padding: 32px;
                        box-shadow: 0 12px 32px rgba(26, 42, 34, 0.08);
                    }
                    h1 {
                        margin: 0 0 8px;
                        font-size: 32px;
                        line-height: 1.2;
                    }
                    p {
                        margin: 0 0 24px;
                        color: #5b675f;
                    }
                    table {
                        width: 100%;
                        border-collapse: collapse;
                        font-size: 15px;
                    }
                    th, td {
                        padding: 12px 10px;
                        border-bottom: 1px solid #e5e8e2;
                        text-align: left;
                        vertical-align: top;
                    }
                    th {
                        color: #ffffff;
                        background: #365a44;
                        font-weight: 700;
                    }
                    a {
                        color: #2f6b4a;
                        font-weight: 700;
                        word-break: break-word;
                    }
                    .count {
                        display: inline-block;
                        margin-bottom: 20px;
                        padding: 6px 10px;
                        border-radius: 999px;
                        background: #ecf2ed;
                        color: #365a44;
                        font-weight: 700;
                    }
                    @media (max-width: 720px) {
                        main {
                            padding: 22px;
                        }
                        table, thead, tbody, th, td, tr {
                            display: block;
                        }
                        thead {
                            display: none;
                        }
                        td {
                            padding: 10px 0;
                        }
                        td::before {
                            display: block;
                            margin-bottom: 4px;
                            color: #5b675f;
                            font-size: 12px;
                            font-weight: 700;
                            text-transform: uppercase;
                        }
                        td:nth-child(1)::before { content: "URL"; }
                        td:nth-child(2)::before { content: "Last Modified"; }
                        td:nth-child(3)::before { content: "Change Frequency"; }
                        td:nth-child(4)::before { content: "Priority"; }
                    }
                </style>
            </head>
            <body>
                <main>
                    <h1>Have &amp; Share XML Sitemap</h1>
                    <p>This sitemap is readable for people and structured for search engines.</p>
                    <div class="count">
                        <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>URL</th>
                                <th>Last Modified</th>
                                <th>Change Frequency</th>
                                <th>Priority</th>
                            </tr>
                        </thead>
                        <tbody>
                            <xsl:for-each select="sitemap:urlset/sitemap:url">
                                <tr>
                                    <td>
                                        <a>
                                            <xsl:attribute name="href">
                                                <xsl:value-of select="sitemap:loc"/>
                                            </xsl:attribute>
                                            <xsl:value-of select="sitemap:loc"/>
                                        </a>
                                    </td>
                                    <td><xsl:value-of select="sitemap:lastmod"/></td>
                                    <td><xsl:value-of select="sitemap:changefreq"/></td>
                                    <td><xsl:value-of select="sitemap:priority"/></td>
                                </tr>
                            </xsl:for-each>
                        </tbody>
                    </table>
                </main>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
