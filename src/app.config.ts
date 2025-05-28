export default defineAppConfig({
  entryPagePath: 'pages/index/index',
  pages: ['pages/index/index', 'pages/logs/logs', 'pages/my/my'],
  window: {
    navigationBarTitleText: 'wechat-template-taro',
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTextStyle: 'black',
    enablePullDownRefresh: true, // 开启下拉刷新
  },
  tabBar: {
    color: '#3c4858',
    selectedColor: '#30a9de',
    backgroundColor: '#fff',
    borderStyle: 'black',
    position: 'bottom',
    custom: true,
    list: [
      {
        text: '首页',
        pagePath: 'pages/index/index',
        iconPath: 'assets/iconpng/home.png',
        selectedIconPath: 'assets/iconpng/home.png',
      },
      {
        text: '日志',
        pagePath: 'pages/logs/logs',
        iconPath: 'assets/iconpng/tag.png',
        selectedIconPath: 'assets/iconpng/tag.png',
      },
      {
        text: '我的',
        pagePath: 'pages/my/my',
        iconPath: 'assets/iconpng/camera.png',
        selectedIconPath: 'assets/iconpng/camera.png',
      },
    ],
  },
})
