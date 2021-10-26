export const links = [
  {
    label: "Home",
    icon: "HomeIcon",
    href: "/",
  },
  {
    label: "Trade",
    icon: "TradeIcon",
    items: [
      {
        label: "Exchange",
        href: "https://app.likeswap.org",
      },
      {
        label: "Liquidity",
        href: "https://app.likeswap.org/#/pool",
      },
    ],
  },
  {
    label: "Farms",
    icon: "FarmIcon",
    href: "/farms",
  },
  {
    label: "Pools",
    icon: "PoolIcon",
    href: "/syrup",
  },
  {
    label: "Lottery",
    icon: "TicketIcon",
    href: "/lottery",
  },
  {
    label: "NFT",
    icon: "NftIcon",
    href: "/nft",
  },
  {
    label: "Profile & Teams",
    icon: "GroupsIcon",
    items: [
      {
        label: "Leaderboard",
        href: "/",
      },
      {
        label: "YourProfile",
        href: "/",
      },
    ],
    calloutClass: "rainbow",
  },
  {
    label: "Info",
    icon: "InfoIcon",
    items: [
      {
        label: "Overview",
        href: "https://likeswap.org",
      },
      {
        label: "Tokens",
        href: "https://likeswap.org/tokens",
      },
      {
        label: "Pairs",
        href: "https://likeswap.org/pairs",
      },
      {
        label: "Accounts",
        href: "https://likeswap.org/accounts",
      },
    ],
  },
  {
    label: "IFO",
    icon: "IfoIcon",
    items: [
      {
        label: "Next",
        href: "/ifo",
      },
      {
        label: "History",
        href: "/ifo/history",
      },
    ],
  },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      // {
      //   label: "Voting",
      //   href: "https://voting.likeswap.org",
      // },
      {
        label: "Github",
        href: "https://github.com/likeswap/",
      },
      {
        label: "Docs",
        href: "https://docs.likeswap.org/",
      },
      {
        label: "Blog",
        href: "https://likeswap.medium.com/",
      },
    ],
  },
];

export const socials: {
  label: string;
  icon: string;
  href: string;
  items?: { label: string; href: string; }[];
}[] = [
  // {
  //   label: "Telegram",
  //   icon: "TelegramIcon",
  //   items: [
  //     {
  //       label: "English",
  //       href: "https://t.me/goosedefi",
  //     },
  //     // {
  //     //   label: "Bahasa Indonesia",
  //     //   href: "https://t.me/PancakeSwapIndonesia",
  //     // },
  //     {
  //       label: "中文",
  //       href: "https://t.me/goosefinancechinese",
  //     },
  //     // {
  //     //   label: "Tiếng Việt",
  //     //   href: "https://t.me/PancakeSwapVN",
  //     // },
  //     {
  //       label: "Italiano",
  //       href: "https://t.me/goosefinanceitalian",
  //     },
  //     {
  //       label: "русский",
  //       href: "https://t.me/goosefinancerussian",
  //     },
  //     {
  //       label: "Türkiye",
  //       href: "https://t.me/GooseFinanceTurkey",
  //     },
  //     // {
  //     //   label: "Português",
  //     //   href: "https://t.me/PancakeSwapPortuguese",
  //     // },
  //     {
  //       label: "Español",
  //       href: "https://t.me/goosefinancespanish",
  //     },
  //     {
  //       label: "日本語",
  //       href: "https://t.me/goosefinancejapanese",
  //     },
  //     {
  //       label: "Français",
  //       href: "https://t.me/goosefinancefrench",
  //     },
  //     {
  //       label: "Announcements",
  //       href: "https://t.me/goosefinanceann",
  //     },
  //     {
  //       label: "Price Bot",
  //       href: "https://t.me/BinanceRocketEGG",
  //     },
  //   ],
  // },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/likeswap1",
  },
  // {
  //   label: "Reddit",
  //   icon: "RedditIcon",
  //   href: "https://www.reddit.com/r/GooseFinanceofficial",
  // },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
