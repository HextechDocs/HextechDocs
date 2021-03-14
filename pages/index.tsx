import { useRouter } from "next/router.js";
import React, { useState } from "react";

import Head from "next/head";

import MainLayout from "@layouts/MainLayout";

const Index = () => {
  const title = "";
  const description = "";
  const type = "website";
  const imageUrl = "";
  const websiteUrl = "";
  const color = "#0ff0f0";

  const siteTitle =
    title.length !== 0 ? `${title} - HextechDocs` : `HextechDocs`;

  return (
    <div>
      <Head>
        <title key="title">{siteTitle}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
          key="metaviewport"
        />

        <meta key="metattitle" name="title" content={websiteUrl} />
        <meta key="metadescription" name="description" content={description} />

        <meta key="ogtype" property="og:type" content={type} />
        <meta key="ogurl" property="og:url" content={websiteUrl} />
        <meta key="ogtitle" property="og:title" content={siteTitle} />
        <meta
          key="ogdescription"
          property="og:description"
          content={description}
        />
        <meta key="ogimage" property="og:image" content={imageUrl} />

        <meta
          key="twittercard"
          property="twitter:card"
          content="summary_large_image"
        />
        <meta key="twitterurl" property="twitter:url" content={websiteUrl} />

        <meta key="twittertitle" property="twitter:title" content={siteTitle} />

        <meta
          key="twitterdescription"
          property="twitter:description"
          content={description}
        />

        <meta
          key="twitterimage"
          property="twitter:image"
          content={websiteUrl}
        />

        <link key="favicon" rel="icon" href="/assets/img/favicon.ico" />

        <link
          rel="apple-touch-icon-precomposed"
          sizes="57x57"
          href="/assets/img/apple-touch-icon-57x57.png"
          key="apple57"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="114x114"
          href="/assets/img/apple-touch-icon-114x114.png"
          key="apple114"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="72x72"
          href="/assets/img/apple-touch-icon-72x72.png"
          key="apple72"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="144x144"
          href="/assets/img/apple-touch-icon-144x144.png"
          key="apple144"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="60x60"
          href="/assets/img/apple-touch-icon-60x60.png"
          key="apple60"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="120x120"
          href="/assets/img/apple-touch-icon-120x120.png"
          key="apple120"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="76x76"
          href="/assets/img/apple-touch-icon-76x76.png"
          key="apple76"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="152x152"
          href="/assets/img/apple-touch-icon-152x152.png"
          key="apple152"
        />
        <link
          rel="icon"
          type="image/png"
          href="/assets/img/favicon-196x196.png"
          sizes="196x196"
          key="apple196"
        />
        <link
          rel="icon"
          type="image/png"
          href="/assets/img/favicon-96x96.png"
          sizes="96x96"
          key="apple96"
        />
        <link
          rel="icon"
          type="image/png"
          href="/assets/img/favicon-32x32.png"
          sizes="32x32"
          key="favicon32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/assets/img/favicon-16x16.png"
          sizes="16x16"
          key="favicon16"
        />
        <link
          rel="icon"
          type="image/png"
          href="/assets/img/favicon-128.png"
          sizes="128x128"
          key="favicon128"
        />
        <meta
          name="application-name"
          key="applicationname"
          content={siteTitle}
        />
        <meta name="msapplication-TileColor" key="tilecolor" content={color} />
        <meta
          name="msapplication-TileImage"
          content="/assets/img/mstile-144x144.png"
          key="ms144"
        />
        <meta
          name="msapplication-square70x70logo"
          content="/assets/img/mstile-70x70.png"
          key="ms70"
        />
        <meta
          name="msapplication-square150x150logo"
          content="/assets/img/mstile-150x150.png"
          key="ms150"
        />
        <meta
          name="msapplication-wide310x150logo"
          content="/assets/img/mstile-310x150.png"
          key="ms310x150"
        />
        <meta
          name="msapplication-square310x310logo"
          content="/assets/img/mstile-310x310.png"
          key="ms310"
        />
        <link
          rel="canonical"
          href={`${websiteUrl}/${useRouter()?.query}`}
          key="canonical"
        />
        <meta
          httpEquiv="Content-Type"
          content="text/html; charset=UTF-8"
          key="contenttype"
        />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com/" />
        <meta name="robots" content="index, follow" key="robots" />
      </Head>
      <MainLayout />
    </div>
  );
};

export default Index;
