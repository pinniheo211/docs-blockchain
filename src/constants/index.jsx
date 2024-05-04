import logo1 from "@/assets/icon/logoSubmenu.png";
import logo2 from "@/assets/icon/logoSubmenu1.png";
import FacebookIcon from "@/icons/Community/Facebook";
import InsIcon from "@/icons/Community/Ins";
import TelegramIcon from "@/icons/Community/Telegram";
import TwitterIcon from "@/icons/Community/Twitter";
import YoutubeIcon from "@/icons/Community/Youtube";
import menusite1 from "@/assets/icon/menusite1.png";
import menusite2 from "@/assets/icon/menusite2.png";
import menusite3 from "@/assets/icon/menusite3.png";
export const navFooter = [
  {
    title: "Company",
    child: [
      {
        name: "Vision",
        link: "/vision",
      },
      {
        name: "Mission",
        link: "/mission",
      },
      {
        name: "Security",
        link: "/",
      },
      {
        name: "Media Kit",
        link: "/media-kit",
      },
      {
        name: "Careers",
        link: "/careers",
      },
      {
        name: "Blog",
        link: "/blog",
      },
    ],
  },
  {
    title: "Individuals",
    child: [
      {
        name: "Join here",
        link: "/",
      },
      {
        name: "NOW coin ",
        link: "/about-now-coin",
      },
      {
        name: "Staking",
        link: "/staking",
      },
      {
        name: "Environment",
        link: "/environment",
      },
    ],
  },
  {
    title: "Legal",
    child: [
      {
        name: "Disclaimer",
        link: "/disclaimer",
      },
      {
        name: "Terms of Service ",
        link: "/terms-of-service",
      },
      {
        name: "Privacy Policy",
        link: "/policy",
      },
    ],
  },

  {
    title: "Community",
    child: [
      {
        name: "Ecosystem",
        link: "/ecosystem",
      },

      {
        name: "Hackathon",
        link: "/hackathon",
      },
    ],
  },
];
export const communities = [
  {
    icon: <FacebookIcon color="text-black duration-300" />,
  },

  {
    icon: <TelegramIcon color="text-black duration-300" />,
  },
  {
    icon: <TwitterIcon color="text-black duration-300" />,
  },
  {
    icon: <YoutubeIcon color="text-black duration-300" />,
  },
];
export const navList = [
  {
    name: "Learn",
    grandChild: {
      title: "Start Here",
      logo: logo1,
      sub: [
        {
          title: "Blockchain Q&A",
          des: "A Basic Guide to Understanding the Fundamentals",
          url: "/about-blockchain",
        },
        {
          title: "PoM",
          des: "Revolutionizing Blockchain Consensus with Proof of Mobile (PoM): A Deep Dive into  NOW Blockchain's Innovative Approach",
          url: "/pom",
        },
      ],
    },
  },
  {
    name: "Build",
    grandChild: {
      title: "DEVELOPERS",
      logo: logo2,

      sub: [
        {
          title: "Dev Learning Center",
          des: "Start learning how to build today.",
          url: "/developer",
        },

        {
          title: "Documentation",
          des: "Kickstart your crypto journey.",
          url: "/docs/about/welcome",
        },
        {
          title: "Hackathon",
          des: "Kickstart your crypto journey.",
          url: "/hackathon",
        },
      ],
    },
    // grandChild2: {
    //   title: "USE CASES",
    //   icon: menusite1,
    //   menuItem: [
    //     {
    //       title: "DeFi",
    //       des: "",
    //       url: "#",
    //     },
    //     {
    //       title: "Payments",
    //       des: "",
    //       url: "#",
    //     },
    //     {
    //       title: "DAOs",
    //       des: "",
    //       url: "#",
    //     },
    //   ],
    // },
  },
  {
    name: "Solutions",
    grandChild: {
      title: "DEVELOPERS",
      logo: logo2,

      sub: [
        {
          title: "Token Extensions",
          des: "",
          url: "/token-extensions",
        },
        // {
        //   title: "To Earn Now Permissioned Environments",
        //   des: "",
        //   url: "#",
        // },
        // {
        //   title: "Payments Tooling",
        //   des: "",
        //   url: "#",
        // },
        // {
        //   title: "Financial Infrastructure",
        //   des: "",
        //   url: "#",
        // },
        // {
        //   title: "Digital Assets",
        //   des: "",
        //   url: "#",
        // },
        // {
        //   title: "Mobile",
        //   des: "",
        //   url: "#",
        // },
      ],
    },
    grandChild2: {
      title: "USE CASES",
      icon: menusite1,
      menuItem: [
        {
          title: "Enterprise",
          des: "",
          url: "#",
        },
        {
          title: "Paymnets and Commerce",
          des: "",
          url: "#",
        },
        {
          title: "Artists and Creators",
          des: "",
          url: "#",
        },
        {
          title: "Game",
          des: "",
          url: "/gaming",
        },
      ],
    },
    // grandChild3: {
    //   title: "RESOURCES",
    //   icon: menusite3,
    //   menuItem: [
    //     {
    //       title: "DeFi",
    //       des: "",
    //       url: "#",
    //     },
    //     {
    //       title: "Payments",
    //       des: "",
    //       url: "#",
    //     },
    //     {
    //       title: "DAOs",
    //       des: "",
    //       url: "#",
    //     },
    //     {
    //       title: "Ecosystem",
    //       des: "",
    //       url: "#",
    //     },
    //   ],
    // },
  },

  {
    name: "Network",
    grandChild: {
      title: "RESOURCES",
      logo: logo2,

      sub: [
        {
          title: "Becom a Validator",
          des: "Help run the To Earn Now network.",
          url: "#",
        },
        {
          title: "RPC Providers",
          des: "Build crypto apps that scale.",
          url: "#",
        },
        {
          title: "Network Status",
          des: "Network  performance and status.",
          url: "#",
        },
        {
          title: "Hackathon",
          des: "Kickstart your crypto journey.",
          url: "/hackathon",
        },
      ],
    },
    grandChild2: {
      title: "INSPECT",
      icon: menusite2,
      menuItem: [
        {
          title: "NowScan",
          des: "Explore To Earn Now blockchain in real time.",
          url: "https://nowscan.io",
        },
        {
          title: "NOW Blockchain FM",
          des: "To Earn Now Blockchain explorer and indexer.",
          url: "#",
        },
      ],
    },
  },
  {
    name: "Community",
    grandChild: {
      title: "GET INVOLVED",
      logo: logo2,
      sub: [
        {
          title: "News",
          des: "The latest in the To Earn Now ecosystem.",
          url: "#",
        },
        {
          title: "Events",
          des: "Experience the To Earn Now community, in real life.",
          url: "#",
        },
        {
          title: "The Collective",
          des: "Help the greater ecosystem.",
          url: "#",
        },
        {
          title: "Community Resource Hub",
          des: "How to join in.",
          url: "#",
        },
      ],
    },
    grandChild2: {
      title: "BREAKPOINT",
      icon: menusite2,
      menuItem: [
        {
          title: "Sept. 2024",
          des: "",
          url: "#",
        },
      ],
    },
  },
];
