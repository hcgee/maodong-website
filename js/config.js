// 轮播图数据
let lunboData = [
  {
    img_url: '../images/lunbo/1.jpg', // 轮播图片路径
    name: '', // 轮播图片名字
    en_name: '', // 轮播图片英文名字
    is_show: true, // 是否展示 true代表展示  false代表不展示
  },
  {
    img_url: '../images/lunbo/2.jpg', // 轮播图片路径
    name: '', // 轮播图片名字
    en_name: '', // 轮播图片英文名字
    is_show: true, // 是否展示 true代表展示  false代表不展示
  },
  {
    img_url: '../images/lunbo/3.jpg', // 轮播图片路径
    name: '', // 轮播图片名字
    en_name: '', // 轮播图片英文名字
    is_show: true, // 是否展示 true代表展示  false代表不展示
  },
  {
    img_url: '../images/lunbo/4.jpg', // 轮播图片路径
    name: '', // 轮播图片名字
    en_name: '', // 轮播图片英文名字
    is_show: true, // 是否展示 true代表展示  false代表不展示
  },
  {
    img_url: '../images/lunbo/5.jpg', // 轮播图片路径
    name: '', // 轮播图片名字
    en_name: '', // 轮播图片英文名字
    is_show: true, // 是否展示 true代表展示  false代表不展示
  },
]

// 作品数据
let zuopinData = [
  {
    img_url: '../zuopin/zuopin1/1.png', // 作品图片路径
    name: '作品合集', // 作品图片名字
    en_name: '作品合集', // 作品图片英文名字
    is_home_show: true, // 是否在首页展示 true代表展示  false代表不展示
    is_zuopin_show: true, // 是否在团队作品页面展示 true代表展示  false代表不展示
    video_url: '../zuopin/zuopin1/1.mp4', // 作品视频路径
  },
  {
    img_url: '../zuopin/zuopin2/2.png', // 作品图片路径
    name: '秽土转生.迪达拉', // 作品图片名字
    en_name: '秽土转生.迪达拉', // 作品图片英文名字
    is_home_show: true, // 是否在首页展示 true代表展示  false代表不展示
    is_zuopin_show: true, // 是否在团队作品页面展示 true代表展示  false代表不展示
    video_url: '../zuopin/zuopin2/2.mp4', // 作品视频路径
  },
  {
    img_url: '../zuopin/zuopin3/3.png', // 作品图片路径
    name: '秽土转生.宇智波斑', // 作品图片名字
    en_name: '秽土转生.宇智波斑', // 作品图片英文名字
    is_home_show: true, // 是否在首页展示 true代表展示  false代表不展示
    is_zuopin_show: true, // 是否在团队作品页面展示 true代表展示  false代表不展示
    video_url: '../zuopin/zuopin3/3.mp4', // 作品视频路径
  },
  {
    img_url: '../zuopin/zuopin4/4.png', // 作品图片路径
    name: '三代目雷影.艾', // 作品图片名字
    en_name: '三代目雷影.艾', // 作品图片英文名字
    is_home_show: true, // 是否在首页展示 true代表展示  false代表不展示
    is_zuopin_show: true, // 是否在团队作品页面展示 true代表展示  false代表不展示
    video_url: '../zuopin/zuopin4/4.mp4', // 作品视频路径
  },
  {
    img_url: '../zuopin/zuopin5/5.png', // 作品图片路径
    name: '夏日泳装.野原琳', // 作品图片名字
    en_name: '夏日泳装.野原琳', // 作品图片英文名字
    is_home_show: true, // 是否在首页展示 true代表展示  false代表不展示
    is_zuopin_show: true, // 是否在团队作品页面展示 true代表展示  false代表不展示
    video_url: '../zuopin/zuopin5/5.mp4', // 作品视频路径
  },
  {
    img_url: '../zuopin/zuopin6/6.png', // 作品图片路径
    name: '须佐能乎.宇智波斑', // 作品图片名字
    en_name: '须佐能乎.宇智波斑', // 作品图片英文名字
    is_home_show: true, // 是否在首页展示 true代表展示  false代表不展示
    is_zuopin_show: true, // 是否在团队作品页面展示 true代表展示  false代表不展示
    video_url: '../zuopin/zuopin6/6.mp4', // 作品视频路径
  },
  {
    img_url: '../zuopin/zuopin7/7.png', // 作品图片路径
    name: '漩涡鸣人.九尾查克拉', // 作品图片名字
    en_name: '漩涡鸣人.九尾查克拉', // 作品图片英文名字
    is_home_show: false, // 是否在首页展示 true代表展示  false代表不展示
    is_zuopin_show: true, // 是否在团队作品页面展示 true代表展示  false代表不展示
    video_url: '../zuopin/zuopin7/7.mp4', // 作品视频路径
  },
  {
    img_url: '../zuopin/zuopin8/8.png', // 作品图片路径
    name: '宇智波斑.白面具', // 作品图片名字
    en_name: '宇智波斑.白面具', // 作品图片英文名字
    is_home_show: false, // 是否在首页展示 true代表展示  false代表不展示
    is_zuopin_show: true, // 是否在团队作品页面展示 true代表展示  false代表不展示
    video_url: '../zuopin/zuopin8/8.mp4', // 作品视频路径
  },
  {
    img_url: '../zuopin/zuopin9/9.png', // 作品图片路径
    name: '猿飞木叶丸', // 作品图片名字
    en_name: '猿飞木叶丸', // 作品图片英文名字
    is_home_show: false, // 是否在首页展示 true代表展示  false代表不展示
    is_zuopin_show: true, // 是否在团队作品页面展示 true代表展示  false代表不展示
    video_url: '../zuopin/zuopin9/9.mp4', // 作品视频路径
  },
]

// 合作伙伴数据
let friendData = [
  {
    img_url: '../images/hezuohuoban/huoban1.png', // 合作伙伴图片路径
    name: '沐瞳', // 合作伙伴图片名字
    sort: 4, // 排放顺序
    en_name: '沐瞳', // 合作伙伴图片英文名字
    is_show: true, // 是否展示 true代表展示  false代表不展示
  },
  {
    img_url: '../images/hezuohuoban/huoban2.png', // 合作伙伴图片路径
    name: '网易', // 合作伙伴图片名字
    sort: 2, // 排放顺序
    en_name: '网易', // 合作伙伴图片英文名字
    is_show: true, // 是否展示 true代表展示  false代表不展示
  },
  {
    img_url: '../images/hezuohuoban/huoban3.png', // 合作伙伴图片路径
    name: '腾讯', // 合作伙伴图片名字
    sort: 1, // 排放顺序
    en_name: '腾讯', // 合作伙伴图片英文名字
    is_show: true, // 是否展示 true代表展示  false代表不展示
  },
  {
    img_url: '../images/hezuohuoban/huoban4.png', // 合作伙伴图片路径
    name: '字节跳动', // 合作伙伴图片名字
    sort: 3, // 排放顺序
    en_name: '字节跳动', // 合作伙伴图片英文名字
    is_show: true, // 是否展示 true代表展示  false代表不展示
  },
  {
    img_url: '../images/hezuohuoban/huoban5.png', // 合作伙伴图片路径
    name: 'DotWell', // 合作伙伴图片名字
    sort: 5, // 排放顺序
    en_name: 'DotWell', // 合作伙伴图片英文名字
    is_show: true, // 是否展示 true代表展示  false代表不展示
  },
  {
    img_url: '../images/hezuohuoban/huoban6.png', // 合作伙伴图片路径
    name: '网易', // 合作伙伴图片名字
    sort: 6, // 排放顺序
    en_name: '网易', // 合作伙伴图片英文名字
    is_show: true, // 是否展示 true代表展示  false代表不展示
  },
  {
    img_url: '../images/hezuohuoban/huoban7.png', // 合作伙伴图片路径
    name: '红鲤', // 合作伙伴图片名字
    sort: 7, // 排放顺序
    en_name: '红鲤', // 合作伙伴图片英文名字
    is_show: true, // 是否展示 true代表展示  false代表不展示
  },
]

// 公司照片数据
let gongsiData = [
  {
    img_url: '../images/gongsi/IMG_0654.png', // 公司图片路径
    name: '', // 公司图片名字
    sort: 2, // 排放顺序
    en_name: '', // 公司图片英文名字
    is_show: true, // 是否展示 true代表展示  false代表不展示
  },
  {
    img_url: '../images/gongsi/IMG_0662.png', // 公司图片路径
    name: '', // 公司图片名字
    sort: 1, // 排放顺序
    en_name: '', // 公司图片英文名字
    is_show: true, // 是否展示 true代表展示  false代表不展示
  },
  {
    img_url: '../images/gongsi/IMG_0667.png', // 公司图片路径
    name: '', // 公司图片名字
    sort: 3, // 排放顺序
    en_name: '', // 公司图片英文名字
    is_show: true, // 是否展示 true代表展示  false代表不展示
  },
  {
    img_url: '../images/gongsi/IMG_0672.png', // 公司图片路径
    name: '', // 公司图片名字
    sort: 4, // 排放顺序
    en_name: '', // 公司图片英文名字
    is_show: true, // 是否展示 true代表展示  false代表不展示
  },
]