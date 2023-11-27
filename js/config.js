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
    is_show: false, // 是否展示 true代表展示  false代表不展示
  },
  {
    img_url: '../images/lunbo/4.jpg', // 轮播图片路径
    name: '', // 轮播图片名字
    en_name: '', // 轮播图片英文名字
    is_show: false, // 是否展示 true代表展示  false代表不展示
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
    img_url: '../images/hezuohuoban/huoban7.png', // 合作伙伴图片路径
    name: '红鲤', // 合作伙伴图片名字
    sort: 6, // 排放顺序
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

// 核心成员数据
let memberData = [
  {
    img_url: '../images/member/douyanfei.png', // 成员路径
    name: '窦艳飞', // 成员名字
    position: '视效总监', // 职位
    desc:'2009年开始投身动画行业认为动画是一种能够舒缓情绪、富有想象力的表现形式。倡导认真负责的工作态度，相信事在人为', // 介绍
    zuopin: '参与作品：大话西游\完美世界\倩女幽魂\崩坏星河\王牌战士\狐妖小红娘\斗战狂潮\snowride\剑与远征\第五人格\火影忍者手游\航海王等', // 参与作品
    sort: 1, // 排放顺序
    en_name: 'Dou Yanfei', // 成员英文名字
    is_show: true, // 是否展示 true代表展示  false代表不展示
  },
  {
    img_url: '../images/member/wupengfei.png', // 成员路径
    name: '吴鹏飞', // 成员名字
    position: '艺术总监', // 职位
    desc:'2010开始投身动画行业，参与制作并指导国内外多个CG动画影视项目倡导以认真专注的工作态度，创造具有生命力的动画作品从而向大众传递积极乐观的生活理念', // 介绍
    zuopin:'参与作品：大话西游\完美世界\倩女幽魂\崩坏星河\王牌战士\狐妖小红娘\斗战狂潮\snowride\剑与远征\第五人格\火影忍者手游\航海王等', // 参与作品
    sort: 2, // 排放顺序
    en_name: 'Wu Pengfei', // 成员英文名字
    is_show: true, // 是否展示 true代表展示  false代表不展示
  },
  {
    img_url: '../images/member/shiweixi.png', // 成员路径
    name: '时维熙', // 成员名字
    position: '制片总监', // 职位
    desc:'2008年投身CG行业，先后在、澳洲、中国大陆、香港、孟买等地工作。 主要负责电影特效镜头，动画电影，剧集动画、游戏和广告的整体项目统筹和技术支持', // 介绍
    zuopin:'参与作品：铁木真\ 李宗伟\狼灾记\阳神动画番剧\雪鹰领主动画番剧\练气3000年番剧\驯龙高手\功夫熊猫\快乐大脚2等', // 参与作品
    sort: 3, // 排放顺序
    en_name: 'Shi Weixi', // 成员英文名字
    is_show: true, // 是否展示 true代表展示  false代表不展示
  },
  {
    img_url: '../images/member/wangyaqiang.png', // 成员路径
    name: '王亚强', // 成员名字
    position: '技术总监', // 职位
    desc:'2013年特效制作和特效流程开发经验掌握 Houdini 特效工具开发、VEX 语言和 PDG流程，使用Python 开发Nuke、Houdini流程工具', // 介绍
    zuopin:'参与作品：王者荣耀cg\阴阳师cg\英雄联盟至高天主题曲动画\火炬之光-无限cg\倩女幽魂cg\明日方舟-登临意PV\DNFcg\火影忍者手游招募动画cg\海贼王手游cg\大圣归来动漫电影\茶啊二中，斗破苍穹动画番剧\星辰变动画番剧\完美世界动画番剧\镜双城动画番剧', // 参与作品
    sort: 4, // 排放顺序
    en_name: 'Wang Yaqiang', // 成员英文名字
    is_show: true, // 是否展示 true代表展示  false代表不展示
  },
]