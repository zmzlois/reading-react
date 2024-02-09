import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import Image from "./pages/api/og-image";

const config: DocsThemeConfig = {
  logo: <b>Reading React</b>,
  project: {
    link: "https://github.com/zmzlois/reading-react",
  },
  chat: {
    link: "https://discord.gg/CPWTVStGZQ",
  },
  docsRepositoryBase: "https://github.com/zmzlois/reading-react",
  footer: {
    text: (
      <div>
        Reading React - zmzlois <br />{" "}
        <p className="text-xs">
          Translated from{" "}
          <a href="https://react-book-new.vercel.app/">
            Analysing React Source Code
          </a>
        </p>
      </div>
    ),
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url =
      "https://reading-react.vercel.app" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    // const image = Image({ title: frontMatter.title || "Reading React" }).then(
    //   (res) => res.url
    // );
    return (
      <>
        <meta property="og:url" content={url} />
        <meta name="twitter:site" content="@zmzlois"></meta>
        <meta
          property="og:title"
          content={frontMatter.title || "Reading React"}
        />
        <meta
          property="og:description"
          content={frontMatter.title || "Reading React"}
        />
        <meta
          property="og:image"
          content={`${
            process.env.VERCEL_URL ? "https://" + process.env.VERCEL_URL : ""
          }/api/og-image`}
        />
        <meta
          property="og:title"
          content={frontMatter.title || "Reading React"}
        ></meta>
        <meta name="apple-mobile-web-app-title" content="Reading React"></meta>
      </>
    );
  },
};

export default config;
