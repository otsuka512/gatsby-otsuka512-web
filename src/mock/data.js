import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Koichi Otsuka', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Koichi Otsuka\'s Website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Koichi Otsuka',
  subtitle: 'I\'m the Site Reliability Engineer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'SRE エンジニア',
  paragraphTwo: '休みの日にはランニング',
  paragraphThree: '酒と旅行も好きです'
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
  //  img: 'project.jpg',
    title: 'Embeded Music Player',
    info: 'Raspberry Pi ZERO (以下 RPi Zero)とモバイル・バッテリーの組み合わせでポータブル音楽プレーヤーを作る',
    info2: 'Last-modified: 2017-07-09',
    url: 'https://qiita.com/otsuka512/items/856032a730ce9d1ec2ae',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Home Server Journal',
    info: 'お家サーバーの飼い方とネットワークとLinuxなWiki',
    info2: 'Last-modified: 2019-03-26',
    url: 'https://luke.skr.jp/hsj/',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '何か手伝えることがありますか?',
  btn: 'Email',
  email: 'info@otsuka512.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/otsuka512',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/otsuka512',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
