import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <b>Reading React</b>,
  project: {
    link: 'https://github.com/zmzlois/reading-react',
  },
  chat: {
    link: 'https://discord.gg/CPWTVStGZQ',
  },
  docsRepositoryBase: 'https://github.com/zmzlois/reading-react',
  footer: {
    text: <div>Reading React - zmzlois <br/> <p className="text-xs">Translated from <a href="https://react-book-new.vercel.app/">Analysing React Source Code</a></p></div>,
  },
}

export default config
