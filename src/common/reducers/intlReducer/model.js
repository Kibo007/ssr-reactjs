const enLang = {
  locale: 'en-US',
  messages: {
    menuList: [
      {
        title: 'Home',
        to: '/'
      },
      {
        title: 'Courses',
        to: '/courses'
      },
      {
        title: 'Schedule',
        to: '/schedule'
      },
      {
        title: 'About',
        to: '/about'
      },
      {
        title: 'News',
        to: '/news'
      },
      {
        title: 'Contact',
        to: '/contact'
      }
    ],
    jumbotron: {
      tagline: 'A new language is a new life. Learn Japanese with Saijou',
      enrollLabel: 'Enroll Now'
    }
  }
};

export default {
  default: {
    ...enLang
  },
  [`intl_${'en-US'}`]: {
    ...enLang
  },
  intl_ja: {
    locale: 'ja',
    messages: {
      menuList: [
        {
          title: 'ホーム',
          to: '/'
        },
        {
          title: 'コース',
          to: '/courses'
        },
        {
          title: 'スケジュール',
          to: '/schedule'
        },
        {
          title: '約',
          to: '/about'
        },
        {
          title: 'ニュース',
          to: '/news'
        },
        {
          title: '接触',
          to: '/contact'
        }
      ],
      jumbotron: {
        tagline:
          '新しい言語は新しい人生です。サイエンスインターナショナルトレーニングセンターで日本語を学ぶ',
        enrollLabel: '今すぐ登録する'
      }
    }
  }
};
