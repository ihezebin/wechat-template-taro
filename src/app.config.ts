export default defineAppConfig({
  entryPagePath: 'layout/layout',
  pages: ['layout/layout'],
  // pages: ['pages/index/index', 'pages/logs/logs', 'pages/my/my'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
    enablePullDownRefresh: true, // 开启下拉刷新
  },
  // tabBar: {
  //   color: '#999',
  //   selectedColor: '#1989fa',
  //   backgroundColor: '#fff',
  //   borderStyle: 'black',
  //   position: 'bottom',
  //   list: [
  //     {
  //       pagePath: 'pages/index/index',
  //       text: '首页',
  //     },
  //     {
  //       pagePath: 'pages/logs/logs',
  //       text: '日志',
  //     },
  //   ],
  // },
})
