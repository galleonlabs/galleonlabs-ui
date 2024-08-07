const tracks = [
  {
    id: 1,
    project: { title: 'Project', summary: 'Cursed Pirates' },
    imageUrl:
      'https://i.seadn.io/gae/_HnnBfjvb2MEkAZI1GrwmTwx26TRpsb2ZYy_Wloe4ayyr4jmfJsp4Nk25c0CJSla0ApIVrLt6DUV9nAMbxv1C3JOYRYT3m3AY5QD9Q?auto=format&w=1000',
    nft: 'https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/67133519326483640000494168867328826931277295572449196396229451516338524651530',
    title: 'The Summoning',
    published: '10/07/2022',
    description:
      '100 years they served before the mast of the Flying Dutchman. Now they walk alone, sorrowing... Cursed. Who will call on them to hoist the colours once again?',
    enclosures: [
      {
        length: '0',
        url: 'https://openseauserdata.com/files/a48db64415813e83744d64e2383320e7.wav',
        type: 'audio/mpeg',
      },
    ],
  },
  {
    id: 2,
    project: { title: 'Project', summary: 'Cursed Pirates' },
    imageUrl:
      'https://i.seadn.io/gae/ZmdD-a_Id7mgG7W-NXgfdVE04Ust3fpzxEnG7-5QpRRHhdPjjyN9-7yUOqoA50cIE4O6uWb-3JD_puc2aB-2oRvnddKAHyDuJ6_J?auto=format&w=1000',
    nft: 'https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/67133519326483640000494168867328826931277295572449196396229451518537547907082',
    title: 'Voyage Ahead',
    published: '10/07/2022',
    description:
      'Cursed, but not forgotten. The crew band together and begin a grand voyage through the Bay of Plenty. What flag are they loyal to, the Devari Concord? the Heralds of the Maw? or perhaps the Black Flag Coalition and Thelynn Imperium. Hoist the colours - an adventure awaits.',
    enclosures: [
      {
        length: '0',
        url: 'https://openseauserdata.com/files/6fa6d2cb8479465485bec5c198588a9e.wav',
        type: 'audio/mpeg',
      },
    ],
  },
  {
    id: 3,
    project: { title: 'Project', summary: 'Cursed Pirates' },
    imageUrl:
      'https://i.seadn.io/gae/L4h2phr_e0y_2N0MyTtBJaAp1I--Ishk_IC492juUGPJ40OQn2CcXG7eu3BEM0eBF0eKrsBEghwjqjcOyNZEV_eo-MCrv_u7X8LHOg?auto=format&w=1000',

    nft: 'https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/67133519326483640000494168867328826931277295572449196396229451518537547907082',
    title: 'Rum & Riches',
    published: '10/07/2022',
    description:
      'Banded together, the crew celebrate their new-found allegiance within the Bay of Plenty. Privateers, merchants, fishermen & pirates - the waters are bountiful.',
    enclosures: [
      {
        length: '0',
        url: 'https://openseauserdata.com/files/a14efe2f7f6463d1320718a0bf435cb2.wav',
        type: 'audio/mpeg',
      },
    ],
  },
]

const projects = [
  {
    title: "East India Onchain Company",
    url: "https://eastindiaonchaincompany.com/",
    imageSrc: "./eioc.png",
    imageAlt: "EIOC Logo",
    imagePadding: "p-1",
    description: "Onchain yield & farming operation.",
    detail: "Crypto application portraying performance and metrics of a onchain yield portfolio over time.",
    badges: [{ title: "Website", url: "https://eastindiaonchaincompany.com/" }],
  },
  {
    title: "Tortuga Onchain",
    url: "https://tortugaonchain.com",
    imageSrc: "/tortuga.png",
    imageAlt: "Tortuga onchain logo",
    description: "Actionable crypto-native content for speculators.",
    detail:
      "Actionable crypto-native content for speculators. Drop anchor and take advantage of on-chain opportunities with us. Newsletter series available on Substack called 'The Trade Winds' and 'Portfolios'.",
    badges: [
      { title: "Substack", url: "https://tortugaonchain.substack.com/" },
      { title: "Website", url: "https://tortugaonchain.com" },
      { title: "Twitter", url: "https://twitter.com/TortugaOnchain" },
    ],
  },
  {
    title: "Galleon DAO",
    url: "/dao",
    imageSrc: "./galleon-logo.png",
    imageAlt: "Galleon DAO Logo",
    description: "Venture funded decentralized asset management and innovation hub.",
    detail:
      "Functioned as the core development team for the venture-backed decentralized organization, Galleon DAO. Aimed to be the premier provider of on-chain structured products. The DAO was operational for 1.5 years, leading several product launches on Ethereum, before it was discontinued due to funding constraints.",
    badges: [{ title: "DAO Archive →", url: "/dao" }],
  },
];

const apps = [
  {
    title: "Ultra Sound Apps",
    url: "https://ultrasoundapps.com/",
    imageSrc: "/usa.png",
    imagePadding: "p-1.5",
    imageAlt: "Ultra Sound Apps Logo",
    description: "Your gateway to crypto trading and analytics.",
  },
  {
    title: "Saylor Memes",
    url: "https://saylormemes.com/",
    imageSrc: "https://saylormemes.com/saylor.jpg",
    imageAlt: "Saylor Memes Logo",
    description: "Curated collection of high-quality memes.",
  },
  // {
  //   title: "Eigenchad",
  //   url: "https://eigenchad.com/",
  //   imageSrc: 'https://pbs.twimg.com/profile_images/1715776754319491073/lWtwXpRt_400x400.jpg',
  //   imageAlt: "Eigenchad Logo",
  //   description: "EigenLayer maximalist & _Restaked contributor.",
  // },
  // {
  //   title: "TradingView Indicators",
  //   url: "https://www.tradingview.com/u/Tradespot/#published-scripts",
  //   imageSrc: 'https://pbs.twimg.com/profile_images/1598328471729704963/D7slFVZN_400x400.jpg',
  //   imageAlt: "TradingView Logo",
  //   description: "Advanced charting tools for traders.",
  //   detail: "Offering a comprehensive suite of free TradingView indicator scripts, this project enhances traders' visual analysis of market trends, volatility, and momentum, aiding in more informed trading decisions.",
  //   badges: [
  //     { title: 'ADW - Colour Trend', url: 'https://www.tradingview.com/script/AFZ7CFdm-ADW-Colour-Trend/' },
  //     { title: 'ADW - Momentum', url: 'https://www.tradingview.com/script/p8CsPGUb-ADW-Momentum/' },
  //     { title: 'ADW - Volatility Map', url: 'https://www.tradingview.com/script/tREldEYH-ADW-Volatility-Map/' },
  //   ]
  // },
  // {
  //   title: "Music NFTs",
  //   url: "https://opensea.io/GalleonLabs",
  //   imageSrc: "/rf.png",
  //   imagePadding: 'p-1',
  //   imageAlt: "Music NFTs Logo",
  //   description: "Evocative soundtracks as NFTs.",
  //   detail: "A creative studio in the Web3 space specializing in producing ambient and thematic music for games, films, and documentaries. These unique soundtracks are immortalized as collectible NFTs, capturing the essence of various art forms.",
  //   badges: [
  //     { title: 'Opensea', url: 'https://opensea.io/GalleonLabs' },
  //     { title: 'Cursed Pirates OST', url: 'https://opensea.io/collection/cursed-pirates-ost' },
  //   ]
  // },
];

const team = [
  {
    name: "Davy Jones",
    url: "https://twitter.com/davyjones0x",
    imageSrc: "./davyjones.png",
    imagePadding: 'p-1',
    imageAlt: "Profile picture of Andrew",
    handle: "@davyjones0x"
  },
];

const dao = [
  {
    title: "Github Organisation",
    url: "https://github.com/GalleonDAO",
    imageSrc: "https://pbs.twimg.com/profile_images/1633247750010830848/8zfRrYjA_400x400.png",
    imageAlt: "Github logo",
    description: "Open-sourced smart contracts & applications.",

    badges: [
      { title: 'Organisation', url: 'https://github.com/GalleonDAO' },
      { title: 'DBL Contract', url: 'https://github.com/GalleonDAO/galleon-dbl-contracts' },
      { title: 'UI Interface', url: 'https://github.com/GalleonDAO/galleon-interface' },
    ]
  },
  {
    title: "Doubloon (DBL) Token",
    url: "https://etherscan.io/address/0x75c7A5Ee75B63792F074c698E1E2004676E8589e",
    imageSrc: "/galleon-logo.png",
    imageAlt: "Etherscan logo",
    description: "Token explorer references.",
    badges: [
      { title: 'Etherscan', url: 'https://etherscan.io/address/0x75c7A5Ee75B63792F074c698E1E2004676E8589e' },
      { title: 'Arbitrum', url: 'https://arbiscan.io/token/0xd3f1da62cafb7e7bc6531ff1cef6f414291f03d3' },
      { title: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/doubloon' },
      { title: 'CoinMarketCap', url: 'https://coinmarketcap.com/currencies/doubloon-token/' },
    ]
  },
  {
    title: "Liquidity Pool",
    url: "https://app.uniswap.org/tokens/arbitrum/0xd3f1da62cafb7e7bc6531ff1cef6f414291f03d3",
    imageSrc: "https://pbs.twimg.com/profile_images/1696986796478091264/79NZgGom_400x400.jpg",
    imageAlt: "Uniswap logo",
    description: "Doubloon project owned liquidity sources.",
    badges: [
      { title: 'Uniswap', url: 'https://app.uniswap.org/tokens/arbitrum/0xd3f1da62cafb7e7bc6531ff1cef6f414291f03d3' },
      { title: 'Dex Screener', url: 'https://dexscreener.com/arbitrum/0x08687dd94b1e084808b549fb5594d6e3d3b7b948' },
    ]
  },
  {
    title: "Products",
    url: "https://etherscan.io/token/0x0fe20e0fa9c78278702b05c333cc000034bb69e2",
    imageSrc: "/treasure.png",
    imageAlt: "product logo",
    description: "Structured products developed and deployed on-chain.",
    badges: [
      { title: 'ETH Max Yield Index', url: 'https://etherscan.io/address/0x0fe20e0fa9c78278702b05c333cc000034bb69e2' },
      { title: 'Basis Yield ETH Index', url: 'https://optimistic.etherscan.io/token/0x927eb0dbc5c3fd172fdfa72d563f71612ecb6122' },
    ]
  },
  {
    title: "DAO Blog",
    url: "https://medium.com/galleondao",
    imageSrc: 'https://pbs.twimg.com/profile_images/1316412044959252482/3EZR8AKp_400x400.jpg',
    imageAlt: "Medium logo",
    description: "Announcements and product updates from core contributors.",
    detail: "A free suite of TradingView chart indicator scripts that help visualise certain aspects of an traded asset, such as current trend and volatility.",
    badges: [
      { title: 'Medium', url: 'https://medium.com/galleondao' },

    ]
  },
  {
    title: "Social Accounts",
    url: "https://twitter.com/galleonlabs",
    imageSrc: 'https://pbs.twimg.com/profile_images/1683899100922511378/5lY42eHs_400x400.jpg',
    imageAlt: "x logo",
    description: "DAO-linked social accounts.",
    badges: [
      { title: 'Galleon Labs', url: 'https://twitter.com/galleonlabs' },
      { title: 'Cursed Pirates', url: 'https://twitter.com/cursedpirates' },
      { title: 'Founder', url: 'https://twitter.com/davyjones0x' },
    ]
  },
  {
    title: "Cursed Pirates",
    url: "https://twitter.com/CursedPirates",
    imageSrc: 'https://pbs.twimg.com/profile_images/1522515045850173441/0wQGL0jd_400x400.jpg',
    imageAlt: "cursed pirates logo",
    description: "Unreleased DAO NFT collection.",
    badges: [
      { title: 'Twitter', url: 'https://twitter.com/CursedPirates' },
      { title: 'Website', url: 'https://cursedpirates.xyz' },
      { title: 'Soundtrack', url: 'https://opensea.io/collection/cursed-pirates-ost' },
    ]
  },
];

export { tracks, projects, team, dao, apps }
