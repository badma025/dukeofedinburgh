/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "Next.js with Typescript",
  titleTemplate: "%s | Next.js with Typescript",
  defaultTitle: "Next.js with Typescript",
  description:
    "Personalised Next.js Typescript template so you don't have to do all the imports!",
  canonical: "",
  openGraph: {
    url: "",
    title: "Next.js with Typescript",
    description: "Next.js + TypeScript template",
    type: "website",
    images: [
      {
        url: "https://miro.medium.com/max/1400/1*VIZpi4wm4NiBCblnUSkbHQ.png",
        width: 800,
        height: 600,
      },
    ],
    site_name: "nextjs-typescript-template",
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "https://res.cloudinary.com/yehez/image/upload/v1630902976/Assassination_Classroom_-_Koro-sensei_smiling_head_fwpndi.svg",
    },
  ],
};

export default defaultSEOConfig;
