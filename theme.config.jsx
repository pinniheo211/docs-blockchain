import { Logo } from "@/components/docs/Logo";
import { usePathname } from "next/navigation";
import { useTheme } from "nextra-theme-docs";

// const SITE_ROOT = "http://localhost:3000/";
const SITE_ROOT = "https://nowblockchain.io/";

const METADATA_DEFAULT = {
  title: "Now Blockchain",
  description: "Now Blockchain Description",
  image: SITE_ROOT + "/Layer_1-2.png",
};

const config = {
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  useNextSeoProps: function SEO() {
    const pathname = usePathname();
    const { systemTheme = "dark" } = useTheme();

    const fullUrl =
      pathname === "https://nowblockchain.io"
        ? SITE_ROOT
        : `${SITE_ROOT}${pathname}`;

    const defaultTitle = "Now Blockchain";

    return {
      description: METADATA_DEFAULT.description,
      defaultTitle,
      titleTemplate: "%s – Now Blockchain",
      canonical: fullUrl,
      openGraph: {
        type: "website",
        url: fullUrl,
        defaultTitle,
        description: METADATA_DEFAULT.description,
        images: [
          {
            url: Logo.src,
          },
        ],
        siteName: "Now Blockchain",
        locale: "en_US",
      },
      additionalLinkTags: [
        {
          as: "document",
          href: "/docs",
          rel: "prefetch",
        },
        {
          rel: "icon",
          href: `/logoSmall.svg`,
          type: "image/svg",
        },
        {
          rel: "icon",
          href: `/logoSmall.svg`,
          type: "image/svg",
        },
      ],
      gitTimestamp({ timestamp }) {
        const [dateString, setDateString] = useState(timestamp.toISOString());

        useEffect(() => {
          try {
            setDateString(
              timestamp.toLocaleDateString(navigator.language, {
                day: "numeric",
                month: "long",
                year: "numeric",
              })
            );
          } catch (e) {
            // Ignore errors here; they get the ISO string.
            // At least one person out there has manually misconfigured navigator.language.
          }
        }, [timestamp]);

        return <>Last updated on {dateString}</>;
      },
    };
  },

  toc: {
    float: true,
    backToTop: true,
  },
  // font: false,
  logo: Logo,
  logoLink: false,
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Now Blockchain" />
      <meta property="og:description" content="Now Blockchain Description" />
    </>
  ),

  feedback: {
    content: null,
  },

  primaryHue: { dark: 313, light: 313 },
  primarySaturation: { dark: 90, light: 90 },
  nextThemes: {
    defaultTheme: "light",
  },
};

export default config;
