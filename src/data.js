function actionMenuConfig() {
  return {
    comment: {
      count: arguments[0],
      isUsed: arguments[1]
    },
    retweet: {
      count: arguments[2],
      isUsed: arguments[3]
    },
    loves: {
      count: arguments[4],
      isUsed: arguments[5]
    },
    envelope: {
      count: arguments[6],
      isUsed: arguments[7]
    }
  };
}

const autors = [
  {
    name: "Every Interaction",
    account: "EveryInteract",
    avatar: process.env.PUBLIC_URL + "img/avatar/everyinteract.jpg",
    isVerified: true
  },
  {
    name: "AppleInside",
    account: "appleinsider",
    avatar: process.env.PUBLIC_URL + "img/avatar/appleinsider.jpg",
    isVerified: true
  },
  {
    avatar: process.env.PUBLIC_URL + "img/avatar/creode.jpg",
    name: "Creode",
    account: "Creode",
    isVerified: false
  },
  {
    avatar: process.env.PUBLIC_URL + "img/avatar/gmidwood.jpg",
    name: "Gareth Midwood",
    account: "gmidwood",
    isVerified: false
  }
];

export const profiles = [
  {
    avatar: process.env.PUBLIC_URL + "img/avatar/everyinteract.jpg",
    name: "Every Interraction",
    account: "everyinteract",
    isVerified: true,
    description: `UX Design studio focussed problem solving creativity. Design to us is how can we make things *work* amazing.`,
    location: "London, UK",
    site: "everyinteraction.com",
    joined: "Joined May 2008",
    kithFollowers: {
      count: 6,
      followers: []
    },
    media: {
      count: 522,
      media: []
    },
    tweets: [
      {
        isPinned: true,
        autor: autors[0],
        createdAt: "2 Mar 2015",
        text: `We’ve made so1me more resources for all you wonderful <a href="#">#design</a> folk <a href="http://everyinteraction.com/resources/">everyinteraction.com/resources/</a> <a href="#">#webdesign</a> <a href="#">#UI</a>`,
        image: process.env.PUBLIC_URL + "img/media/original/img.png",
        actions: actionMenuConfig(0, false, 17, false, 47, true, 0, false)
      },
      {
        autor: autors[0],
        createdAt: "23h",
        text: `Our new website concept; Taking you from… @ Every Interaction <a href="https://instagram.com/p/BNFGrfhBP3M/">instagram.com/p/BNFGrfhBP3M/</a>`,
        actions: actionMenuConfig(1, false, 4, false, 2, false, 0, false)
      },
      {
        autor: autors[0],
        createdAt: "Nov 18",
        text: `Variable web fonts are coming, and will open a world of opportunities for weight use online`,
        card: {
          image: process.env.PUBLIC_URL + "img/card/rectangle.jpg",
          header: "The Future of Web Fonts",
          text: `We love typefaces. They give our sites and applications personalized feel. They convey the information and tell a story. They establish information hierarchy. But they’re…`,
          source: "vilijamis.com"
        },
        actions: actionMenuConfig(0, false, 0, false, 0, true, 0, false)
      }
    ]
  },
  {
    avatar: process.env.PUBLIC_URL + "img/avatar/appleinsider.jpg",
    name: "AppleInside",
    account: "appleinsider",
    isVerified: true,
    description: `In-depth Apple news, analysis &amp; reviews since 1997. Facebook: <a href="https://t.co/MTXnzSOBUj" >https://facebook.com/appleinsiderdotcom …</a> YouTube: <a href="https://t.co/R2aAX6Ml8d">youtube.com/user/appleinsiderdotcom …</a>`,
    location: "Cupertino, California",
    site: "appleinsider.com",
    joined: "февраль 2009 г.",
    kithFollowers: {
      count: 3,
      followers: []
    },
    media: {
      count: 14800,
      media: []
    },
    tweets: [
      {
        autor: autors[1],
        createdAt: "35m",
        text: `New SD card format will transfer at nearly a gigabyte per second <a href="https://t.co/dh9GuplS3c">https://t.co/dh9GuplS3c</a>`,
        image: process.env.PUBLIC_URL + "img/media/original/sd_cards.jpg",
        actions: actionMenuConfig(0, false, 5, false, 10, false, 0, false)
      },
      {
        autor: autors[1],
        createdAt: "2h",
        text: `Apple’s mini 18W USB-C charger may be real after all <a href="https://t.co/DHVzUY7bZg">https://t.co/DHVzUY7bZg</a>`,
        image: process.env.PUBLIC_URL + "img/media/original/hz.jpg",
        actions: actionMenuConfig(1, false, 13, false, 29, false, 0, false)
      },
      {
        autor: autors[1],
        createdAt: "2h",
        text: `<a href="/Dell">@Dell</a> reverses course, going public in $21.7B proposal <a href="https://t.co/lcTR6a6Tvl">https://t.co/lcTR6a6Tvl</a>`,
        image: process.env.PUBLIC_URL + "img/media/original/jobs.jpg",
        actions: actionMenuConfig(1, false, 5, false, 7, false, 0, false)
      },
      {
        autor: autors[1],
        createdAt: "3h",
        text: `<a href="/ATT">@ATT</a>'s <a href="/directvnow">@directvnow</a> follows <a href="/Sling">@Sling</a> TV, <a href="/YouTubeTV">@YouTubeTV</a> in hiking monthly fees <a href="https://t.co/7vhFJJRr0i">https://t.co/7vhFJJRr0i</a>`,
        image: process.env.PUBLIC_URL + "img/media/original/screen.jpg",
        actions: actionMenuConfig(0, false, 4, false, 7, false, 0, false)
      }
    ]
  },
  {
    avatar: process.env.PUBLIC_URL + "img/avatar/creode.jpg",
    name: "Creode",
    account: "Creode",
    isVerified: true,
    description: `Digital Agency in London &amp; Leeds specialising in Ecommerce &amp; CMS Development, creative, UX &amp; optimisation, &amp; Digital Marketing. <a href="/hashtag/drupal?src=hash">#drupal</a> <a href="/hashtag/magento?src=hash">#magento</a> specialists.`,
    location: "London & Leeds",
    site: "creode.co.uk",
    joined: "март 2009 г",
    kithFollowers: {
      count: 8,
      followers: []
    },
    media: {
      count: 105,
      media: []
    },
    tweets: [
      {
        autor: autors[2],
        createdAt: "25 apr.",
        text: `Grey skies and long days made more bearable with some gifts from <a href="/Beth_NBHD">@Beth_NBHD</a> and the teams at Leeds! <a href="/hashtag/citycentretakeover?src=hash">#citycentretakeover</a>`,
        image: process.env.PUBLIC_URL + "img/media/original/champagne.jpg",
        actions: actionMenuConfig(0, false, 1, false, 2, false, 0, false)
      },
      {
        autor: autors[3],
        createdAt: "17 apr.",
        text: `In a moment of madness I signed up to fly the <a href="/Creode">@Creode</a> flag at <a href="/codeinthedarkUK">@codeinthedarkUK</a> again! Who's coming along? Friday 27th at <a href="/Belgrave_Leeds">@Belgrave_Leeds</a>`,
        actions: actionMenuConfig(1, false, 4, false, 6, false, 0, false)
      },
      {
        autor: autors[2],
        createdAt: "14 mar.",
        text: `Woohoo!`,
        card: {
          image: process.env.PUBLIC_URL + "img/card/lock.png",
          header: "ACME v2 and Wildcard Certificate Support is Live",
          text: `We’re pleased to announce that ACMEv2 and wildcard certificate support is live! With today’s new features we’re continuing to break down bar...`,
          source: "community.letsencrypt.org"
        },
        actions: actionMenuConfig(0, false, 0, false, 0, false, 0, false)
      },
      {
        autor: autors[2],
        createdAt: "31 yan.",
        text: `There's definitely a trend in logo redevelopment for tech`,
        image: process.env.PUBLIC_URL + "img/media/original/logotypes.jpg",
        actions: actionMenuConfig(0, false, 1, false, 3, false, 0, false)
      }
    ]
  },
  {
    avatar: process.env.PUBLIC_URL + "img/avatar/epiphanysearch.jpg",
    name: "Epiphany Search",
    account: "EpiphanySearch",
    isVerified: false,
    description: `Looking for Epiphany Search? We've moved - you'll find us at <a href="/hello_epiphany">@hello_epiphany</a>`,
    location: "Leeds, England",
    site: "epiphany.co.uk",
    joined: "октябрь 2017 г.",
    kithFollowers: {
      count: 0,
      followers: []
    },
    media: {
      count: 0,
      media: []
    },
    tweets: []
  }
];

export const suggetions = profiles.map(profile => ({
  avatar: profile.avatar,
  name: profile.name,
  account: profile.account,
  isVerified: profile.isVerified
}));

export const trends = {
  title: "United Kingdom Trends",
  trends: [
    {
      title: "#BringYourDogToWorkDay"
    },
    {
      title: "#FridayFeeling",
      count: "12.1K"
    },
    {
      title: "#BrexitAnniversary",
      hint: "It’s one year since the UK voted to leave the European Union"
    },
    {
      title: "HMS Queen Elizabeth",
      count: "1,036"
    },
    {
      title: "Joe Budden",
      count: "1,036"
    },
    {
      title: "Trident",
      count: "6,136"
    }
  ]
};

export const followers = {
  count: function(account) {
    return account === "EpiphanySearch"
      ? 0
      : Math.floor(Math.random() * 50) + 1;
  },
  accounts: function(account) {
    return suggetions.filter(x => x.account !== account);
  }
};

export const media = {
  count: function(account) {
    return account === "EpiphanySearch"
      ? 0
      : Math.floor(Math.random() * 999) + 1;
  },
  media: function() {
    return Array.apply(null, { length: Math.floor(Math.random() * 5) + 1 })
      .map(Number.call, Number)
      .map(
        number => process.env.PUBLIC_URL + "img/media/" + (number + 1) + ".jpg"
      );
  }
};
