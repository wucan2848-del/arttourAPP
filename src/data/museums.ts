import type { Museum } from "@/types";

export const museums: Museum[] = [
  {
    id: "uffizi",
    name: "乌菲齐美术馆",
    nameEn: "Galleria degli Uffizi",
    cityId: "florence",
    type: "museum",
    description: "乌菲齐美术馆是欧洲最重要的美术馆之一，由美第奇家族于1560年开始建造。馆内收藏了从中世纪到近代的大量绘画和雕塑作品，尤其以文艺复兴时期的意大利绘画闻名于世，汇聚了波提切利、达芬奇、米开朗基罗、拉斐尔、提香、卡拉瓦乔等大师的杰作。",
    image: "/images/gallery-1.jpg",
    openHours: "周二至周日 8:15-18:30，周一闭馆",
    ticket: "全价票约20欧元，建议官网预订，每月第一个周日免费",
    address: "Piazzale degli Uffizi, 6, 50122 Firenze, Italy",
    artworks: [
      { id: 1, title: "维纳斯的诞生", artist: "桑德罗·波提切利", year: "约1485年", description: "描绘了爱与美的女神维纳斯从爱琴海的泡沫中诞生的场景，是文艺复兴时期最富诗意的杰作之一。", image: "/images/artwork-birth-venus.jpg", room: "波提切利厅" },
      { id: 2, title: "春", artist: "桑德罗·波提切利", year: "约1482年", description: "以神话人物为背景，描绘了春天繁盛的花园，充满诗意和哲学寓意。", image: "/images/artwork-primavera.jpg", room: "波提切利厅" },
      { id: 3, title: "天使报喜", artist: "列奥纳多·达·芬奇", year: "约1472年", description: "天使加百列向圣母玛利亚告知受孕的场景，达·芬奇早期作品，展示了透视法和细腻的光影处理。", image: "/images/artwork-annunciation.jpg", room: "达·芬奇厅" },
      { id: 4, title: "圣家族", artist: "米开朗基罗", year: "约1504年", description: "米开朗基罗为数不多的蛋彩画作品，以独特的圆形构图和雕塑感强烈的人物造型著称。", image: "/images/artwork-holy-family.jpg", room: "米开朗基罗厅" },
      { id: 5, title: "金丝雀圣母", artist: "拉斐尔", year: "约1506年", description: "圣母、圣子与施洗者约翰的温馨画面，拉斐尔完美展现了和谐、柔美与古典的理想美。", image: "/images/artwork-madonna.jpg", room: "拉斐尔厅" },
      { id: 6, title: "乌尔比诺的维纳斯", artist: "提香", year: "1538年", description: "提香的代表作之一，描绘了性感而慵懒的维纳斯，是威尼斯画派世俗与感官之美的巅峰。", image: "/images/artwork-venus-urbino.jpg", room: "提香厅" },
      { id: 7, title: "美杜莎", artist: "卡拉瓦乔", year: "约1597年", description: "绘制在盾牌上的美杜莎头颅，惊恐而真实，体现了卡拉瓦乔对戏剧性光影的极致追求。", image: "/images/artwork-medusa.jpg", room: "卡拉瓦乔厅" },
    ],
    itineraries: [
      { duration: "1.5", title: "1.5小时精华速览", description: "直奔镇馆之宝，快速领略文艺复兴最璀璨的明珠。", steps: ["波提切利厅 → 《维纳斯的诞生》与《春》", "达·芬奇厅 → 《天使报喜》", "拉斐尔厅 → 《金丝雀圣母》", "提香厅 → 《乌尔比诺的维纳斯》", "卡拉瓦乔厅 → 《美杜莎》"], highlights: ["波提切利《维纳斯的诞生》", "达·芬奇《天使报喜》", "提香《乌尔比诺的维纳斯》"] },
      { duration: "3", title: "3小时深度游", description: "按时间线完整体验文艺复兴的演进，从中世纪到巴洛克。", steps: ["起点：乔托等中世纪与早期文艺复兴展厅", "深入：乌切罗《圣罗马诺之战》", "核心展区：波提切利厅（20分钟细品两幅巨作）", "高峰：达·芬奇、米开朗基罗、拉斐尔三杰作品", "威尼斯画派：提香、丁托列托展厅", "巴洛克震撼：卡拉瓦乔《美杜莎》", "顶层露台俯瞰佛罗伦萨全景"], highlights: ["波提切利《春》", "米开朗基罗《圣家族》", "卡拉瓦乔《美杜莎》"] },
      { duration: "5-6", title: "全天慢游（5-6小时）", description: "不赶时间，细细品味每一个展厅，包含所有镇馆之宝与隐秘珍宝。", steps: ["09:30 抵达，参观底层特展", "10:00 二楼东翼：早期锡耶纳画派", "11:00 波提切利厅及相邻展厅", "12:30 午餐（馆内咖啡厅）", "13:30 文艺复兴三杰专区", "14:30 威尼斯画派与北方文艺复兴", "15:30 卡拉瓦乔与17世纪绘画", "16:30 版画素描室", "17:00 纪念品商店与露台日落"], highlights: ["所有波提切利作品", "达·芬奇手稿", "拉斐尔自画像", "提香《花神》", "卡拉瓦乔《酒神》"] },
    ],
    knowledge: {
      "维纳斯的诞生": "《维纳斯的诞生》是波提切利的代表作，描绘女神维纳斯从海上泡沫中升起，象征美与爱，是乌菲齐的镇馆之宝。",
      "春": "《春》表现神话人物在橘林中漫步，寓意自然复苏和爱的胜利，线条优雅，诗意盎然。",
      "波提切利": "桑德罗·波提切利是15世纪佛罗伦萨画派大师，作品富有诗意和柔美线条。",
      "达·芬奇": "列奥纳多·达·芬奇是文艺复兴全才，乌菲齐藏有其早期《天使报喜》。",
      "米开朗基罗": "米开朗基罗的《圣家族》是蛋彩画杰作，圆形构图体现雕塑般的力量感。",
      "拉斐尔": "拉斐尔以圣母像著称，《金丝雀圣母》和谐优雅，是其理想美的典范。",
      "提香": "提香是威尼斯画派色彩大师，《乌尔比诺的维纳斯》开创了世俗女性裸体画的经典模式。",
      "卡拉瓦乔": "卡拉瓦乔擅用戏剧性光影，《美杜莎》绘于盾牌上，恐怖而真实，极具震撼力。",
      "门票": "乌菲齐美术馆门票建议官网预订，全价票约20欧元，每月第一个周日免费。",
      "开放时间": "通常周二至周日 8:15-18:30，周一闭馆（节假日除外）。",
      "路线": "您可以选择1.5小时、3小时或全天游览方案。",
      "预约": "强烈建议提前在乌菲齐官网预约门票，旺季现场排队可能需要2小时以上。",
      "交通": "乌菲齐位于佛罗伦萨市中心，从火车站步行约15分钟。"
    },
  },
  {
    id: "accademia",
    name: "学院美术馆",
    nameEn: "Galleria dell'Accademia",
    cityId: "florence",
    type: "museum",
    description: "学院美术馆是佛罗伦萨另一座重要美术馆，以米开朗基罗的《大卫》原作闻名于世。除了《大卫》，还收藏了米开朗基罗的其他重要雕塑作品以及佛罗伦萨文艺复兴时期的绘画杰作。",
    image: "/images/mus-accademia.jpg",
    openHours: "周二至周日 8:15-18:50，周一闭馆",
    ticket: "全价票约16欧元，建议提前预订",
    address: "Via Ricasoli, 58/60, 50122 Firenze, Italy",
    artworks: [
      { id: 1, title: "大卫", artist: "米开朗基罗", year: "1501-1504年", description: "文艺复兴雕塑的巅峰之作，高达5.17米的大理石雕像，展现了圣经英雄大卫准备迎战歌利亚的瞬间。", image: "/images/gallery-1.jpg", room: "中央大厅" },
      { id: 2, title: "囚徒系列", artist: "米开朗基罗", year: "约1525-1530年", description: "四件未完成的大理石雕像，肌肉与躯干从石头中挣扎而出，象征灵魂从物质世界的解脱。", image: "/images/gallery-2.jpg", room: "米开朗基罗厅" },
      { id: 3, title: "圣母子与圣安娜", artist: "米开朗基罗", year: "约1510-1515年", description: "米开朗基罗唯一存世的木板蛋彩画，描绘圣母子与圣安娜，构图复杂且充满张力。", image: "/images/gallery-3.jpg", room: "米开朗基罗厅" },
      { id: 4, title: "圣母怜子", artist: "乔瓦尼·达·米兰", year: "1365年", description: "佛罗伦萨哥特式绘画的代表作，金色背景上的宗教场景令人印象深刻。", image: "/images/gallery-4.jpg", room: "哥特艺术厅" },
    ],
    itineraries: [
      { duration: "1", title: "1小时精华游", description: "直奔大卫，感受米开朗基罗的雕塑力量。", steps: ["中央大厅 → 米开朗基罗《大卫》", "米开朗基罗厅 → 囚徒系列", "快速浏览哥特与文艺复兴绘画"], highlights: ["米开朗基罗《大卫》", "囚徒系列"] },
      { duration: "2", title: "2小时深度游", description: "细品米开朗基罗的全部作品，了解雕塑艺术的演变。", steps: ["《大卫》细品（20分钟）", "米开朗基罗厅 → 囚徒与圣母子", "早期哥特与文艺复兴展厅", "乐器博物馆"], highlights: ["《大卫》", "囚徒系列", "圣母子与圣安娜"] },
    ],
    knowledge: {
      "大卫": "米开朗基罗的《大卫》是学院美术馆的镇馆之宝，高5.17米的大理石雕像，创作于1501-1504年。",
      "米开朗基罗": "米开朗基罗·博那罗蒂是文艺复兴三杰之一，以雕塑和绘画闻名于世。",
      "门票": "学院美术馆门票建议提前预订，全价票约16欧元。",
      "开放时间": "周二至周日 8:15-18:50，周一闭馆。"
    },
  },  {
    id: "louvre",
    name: "卢浮宫博物馆",
    nameEn: "Musée du Louvre",
    cityId: "paris",
    type: "museum",
    description: "世界最大的艺术博物馆，收藏了《蒙娜丽莎》《断臂维纳斯》《萨莫色雷斯的胜利女神》等旷世杰作，藏品跨越人类文明的八千年。",
    image: "/images/city-paris.jpg",
    openHours: "周三至周一 9:00-18:00（周二闭馆，周五至21:45）",
    ticket: "全价票17欧元，建议提前在线预订时间段",
    address: "Rue de Rivoli, 75001 Paris, France",
    artworks: [
      { id: 1, title: "蒙娜丽莎", artist: "列奥纳多·达·芬奇", year: "1503-1519年", description: "世界上最著名的肖像画，以她神秘的微笑和达·芬奇开创的渐隐法技法闻名于世。", image: "/images/mus-accademia.jpg", room: "德农馆二楼" },
      { id: 2, title: "米洛的维纳斯", artist: "阿历山德罗斯", year: "公元前130-100年", description: "古希腊雕塑的巅峰之作，以断臂的姿态展现了爱与美的女神维纳斯的优雅身姿。", image: "/images/mus-orsay.jpg", room: "叙利馆底层" },
      { id: 3, title: "萨莫色雷斯的胜利女神", artist: "未知", year: "公元前190年", description: "古希腊希腊化时期的杰作，展翅欲飞的胜利女神立于船首，气势磅礴。", image: "/images/mus-national-gallery-london.jpg", room: "德农馆顶层" },
      { id: 4, title: "自由引导人民", artist: "欧仁·德拉克罗瓦", year: "1830年", description: "法国浪漫主义绘画的标志性作品，描绘七月革命中人民高举三色旗冲锋的场景。", image: "/images/mus-moma.jpg", room: "德农馆" },
      { id: 5, title: "迦拿的婚礼", artist: "委罗内塞", year: "1563年", description: "卢浮宫最大的画作，描绘了圣经中迦拿婚礼的盛宴场景，人物众多、场面宏大。", image: "/images/mus-met.jpg", room: "德农馆" },
    ],
    itineraries: [
      { duration: "2", title: "2小时精华游", description: "直奔三大镇馆之宝，快速领略卢浮宫最核心的收藏。", steps: ["从玻璃金字塔入口进入", "德农馆二楼 → 《蒙娜丽莎》", "叙利馆底层 → 《米洛的维纳斯》", "德农馆顶层 → 《胜利女神》", "快速浏览法国绘画大厅"], highlights: ["蒙娜丽莎", "米洛的维纳斯", "胜利女神"] },
      { duration: "4", title: "4小时深度游", description: "从古希腊雕塑到法国绘画，深度体验卢浮宫的核心藏品。", steps: ["古埃及与近东文明", "古希腊罗马雕塑（含维纳斯与胜利女神）", "意大利绘画（含蒙娜丽莎）", "法国绘画（含自由引导人民）", "荷兰佛兰德斯绘画", "装饰艺术展区"], highlights: ["蒙娜丽莎", "胜利女神", "迦拿的婚礼", "自由引导人民"] },
    ],
    knowledge: {
      "蒙娜丽莎": "《蒙娜丽莎》是达·芬奇的代表作，以神秘的微笑和渐隐法闻名，是卢浮宫的镇馆之宝。",
      "维纳斯": "《米洛的维纳斯》是古希腊雕塑的巅峰之作，断臂的姿态反而增添了无限想象空间。",
      "门票": "卢浮宫门票建议提前在线预订时间段，全价票17欧元，18岁以下免费。",
      "开放时间": "周三至周一 9:00-18:00，周二闭馆，周五延长至21:45。",
      "交通": "可乘坐地铁1号线或7号线至Palais Royal - Musée du Louvre站。"
    },
  },
  {
    id: "orsay",
    name: "奥赛博物馆",
    nameEn: "Musée d'Orsay",
    cityId: "paris",
    type: "museum",
    description: "由火车站改建而成的印象派圣殿，藏有莫奈、雷诺阿、梵高的传世之作，是全球印象派收藏最丰富的博物馆。",
    image: "/images/mus-orsay.jpg",
    openHours: "周二至周三、周五至周日 9:30-18:00，周四至21:45，周一闭馆",
    ticket: "全价票16欧元，建议提前预订",
    address: "1 Rue de la Légion d'Honneur, 75007 Paris, France",
    artworks: [
      { id: 1, title: "星月夜", artist: "文森特·梵高", year: "1889年", description: "梵高在圣雷米精神病院期间的传世之作，旋转的星空与宁静的村庄形成强烈对比。", image: "/images/mus-reina-sofia.jpg", room: "印象派展厅" },
      { id: 2, title: "印象·日出", artist: "克劳德·莫奈", year: "1872年", description: "印象派运动得名之作，描绘了勒阿弗尔港晨雾中的朦胧美景。", image: "/images/mus-van-gogh.jpg", room: "印象派展厅" },
      { id: 3, title: "草地上的午餐", artist: "爱德华·马奈", year: "1863年", description: "挑战学院派审美的争议之作，开创了现代艺术的先河。", image: "/images/mus-palace.jpg", room: "马奈展厅" },
      { id: 4, title: "舞蹈课", artist: "埃德加·德加", year: "1874年", description: "德加以芭蕾舞者为主题的代表作，捕捉了舞者在排练中的优雅姿态。", image: "/images/city-florence.jpg", room: "德加展厅" },
    ],
    itineraries: [
      { duration: "1.5", title: "1.5小时印象派精华", description: "聚焦印象派大师作品，感受光与色的革命。", steps: ["5楼印象派展厅 → 莫奈《印象·日出》", "梵高作品区 → 《星月夜》", "雷诺阿《煎饼磨坊的舞会》", "德加芭蕾舞者系列"], highlights: ["莫奈《印象·日出》", "梵高《星月夜》", "雷诺阿《煎饼磨坊》"] },
      { duration: "3", title: "3小时完整体验", description: "从现实主义到后印象派，完整感受19世纪艺术的演变。", steps: ["底层雕塑与建筑", "现实主义：库尔贝、米勒", "印象派核心展厅（莫奈、雷诺阿）", "梵高与后印象派", "新艺术运动装饰"], highlights: ["梵高《星月夜》", "莫奈系列", "马奈《草地上的午餐》"] },
    ],
    knowledge: {
      "印象派": "奥赛博物馆拥有全球最丰富的印象派收藏，包括莫奈、雷诺阿、德加等大师作品。",
      "梵高": "奥赛收藏了多幅梵高名作，包括《星月夜》和《罗纳河上的星夜》。",
      "门票": "建议提前在线预订，全价票16欧元。",
      "开放时间": "周二至周日 9:30-18:00，周四延长至21:45，周一闭馆。"
    },
  },
  {
    id: "british-museum",
    name: "大英博物馆",
    nameEn: "British Museum",
    cityId: "london",
    type: "museum",
    description: "人类文明的百科全书，收藏了来自全球各大文明的珍贵文物，罗塞塔石碑与帕特农神庙浮雕令人叹为观止。",
    image: "/images/city-london.jpg",
    openHours: "每日 10:00-17:00（周五至20:30）",
    ticket: "免费入馆（特展需购票）",
    address: "Great Russell St, London WC1B 3DG, UK",
    artworks: [
      { id: 1, title: "罗塞塔石碑", artist: "古埃及祭司", year: "公元前196年", description: "破解古埃及象形文字的关键，刻有同一段内容的三种文字。", image: "/images/city-paris.jpg", room: "埃及馆" },
      { id: 2, title: "埃尔金大理石浮雕", artist: "菲迪亚斯学派", year: "公元前447-438年", description: "帕特农神庙的浮雕残片，展现了古希腊艺术的最高成就。", image: "/images/city-london.jpg", room: "希腊馆" },
      { id: 3, title: "路易斯棋子", artist: "维京工匠", year: "12世纪", description: "用海象牙雕刻的国际象棋棋子，面部表情生动有趣。", image: "/images/city-newyork.jpg", room: "中世纪馆" },
      { id: 4, title: "亚述猎狮浮雕", artist: "亚述工匠", year: "公元前645年", description: "描绘亚述国王猎杀狮子的场景，是古代近东艺术的杰作。", image: "/images/city-madrid.jpg", room: "亚述馆" },
    ],
    itineraries: [
      { duration: "1.5", title: "1.5小时必看精华", description: "看遍大英最著名的几件镇馆之宝。", steps: ["埃及馆 → 罗塞塔石碑", "希腊馆 → 埃尔金大理石", "中庭 → 大英图书馆展厅", "亚洲馆快速浏览"], highlights: ["罗塞塔石碑", "埃尔金大理石", "路易斯棋子"] },
      { duration: "3", title: "3小时文明之旅", description: "从古埃及到古罗马，穿越人类文明五千年。", steps: ["古埃及与苏丹", "古希腊与罗马", "古代近东", "亚洲", "非洲", "美洲"], highlights: ["罗塞塔石碑", "埃尔金大理石", "亚述猎狮浮雕"] },
    ],
    knowledge: {
      "罗塞塔石碑": "罗塞塔石碑是破解古埃及象形文字的关键，刻有同一段内容的三种文字。",
      "门票": "大英博物馆免费入馆，部分特展需购票。",
      "开放时间": "每日 10:00-17:00，周五延长至20:30。"
    },
  },
  {
    id: "national-gallery-london",
    name: "英国国家美术馆",
    nameEn: "National Gallery",
    cityId: "london",
    type: "museum",
    description: "特拉法加广场上的艺术宝库，收藏了从13世纪到20世纪的欧洲绘画杰作，从达芬奇到凡·高，免费向公众开放。",
    image: "/images/mus-national-gallery-london.jpg",
    openHours: "每日 10:00-18:00（周五至21:00）",
    ticket: "免费入馆",
    address: "Trafalgar Square, London WC2N 5DN, UK",
    artworks: [
      { id: 1, title: "向日葵", artist: "文森特·梵高", year: "1888年", description: "梵高最著名的静物画之一，燃烧般的黄色向日葵充满生命力。", image: "/images/city-amsterdam.jpg", room: "43号展厅" },
      { id: 2, title: "岩间圣母", artist: "列奥纳多·达·芬奇", year: "1491-1508年", description: "达·芬奇为米兰圣弗朗切斯科教堂创作的祭坛画，光影处理堪称完美。", image: "/images/city-tokyo.jpg", room: "66号展厅" },
      { id: 3, title: "镜前的维纳斯", artist: "迭戈·委拉斯开兹", year: "1647-1651年", description: "委拉斯开兹唯一存世的裸体画，维纳斯背对观众看着镜中的自己。", image: "/images/city-beijing.jpg", room: "30号展厅" },
    ],
    itineraries: [
      { duration: "1", title: "1小时必看名画", description: "从达芬奇到梵高，一小时看遍欧洲绘画史最璀璨的明珠。", steps: ["早期文艺复兴", "威尼斯画派", "伦勃朗与北方画派", "印象派：梵高《向日葵》"], highlights: ["梵高《向日葵》", "达芬奇《岩间圣母》", "委拉斯开兹《镜前的维纳斯》"] },
    ],
    knowledge: {
      "向日葵": "国家美术馆收藏的《向日葵》是梵高最著名的静物画之一。",
      "门票": "英国国家美术馆免费入馆。",
      "开放时间": "每日 10:00-18:00，周五延长至21:00。"
    },
  },
  {
    id: "moma",
    name: "现代艺术博物馆",
    nameEn: "MoMA",
    cityId: "newyork",
    type: "museum",
    description: "现代艺术的朝圣地，梵高的《星夜》与毕加索的《亚维农少女》在此安家，收藏了全球最全面的现代与当代艺术作品。",
    image: "/images/mus-moma.jpg",
    openHours: "周三至周一 10:30-17:30（周六至19:00）",
    ticket: "成人28美元，建议提前在线预订",
    address: "11 W 53rd St, New York, NY 10019, USA",
    artworks: [
      { id: 1, title: "星夜", artist: "文森特·梵高", year: "1889年", description: "MoMA的镇馆之宝，梵高在圣雷米期间创作的最著名作品，旋转的星空成为永恒的经典。", image: "/images/artwork-primavera.jpg", room: "5楼" },
      { id: 2, title: "亚维农少女", artist: "巴勃罗·毕加索", year: "1907年", description: "立体主义的开山之作，彻底颠覆了西方绘画的传统。", image: "/images/artwork-annunciation.jpg", room: "5楼" },
      { id: 3, title: "记忆的永恒", artist: "萨尔瓦多·达利", year: "1931年", description: "超现实主义最著名的作品，融化的时钟成为梦境与时间的永恒象征。", image: "/images/artwork-holy-family.jpg", room: "5楼" },
      { id: 4, title: "舞", artist: "亨利·马蒂斯", year: "1910年", description: "马蒂斯野兽派的代表作，五个裸体人物手拉手围成圆圈跳舞，色彩大胆而纯粹。", image: "/images/artwork-madonna.jpg", room: "5楼" },
    ],
    itineraries: [
      { duration: "2", title: "2小时现代艺术精华", description: "从印象派到波普艺术，看遍改变世界的现代艺术杰作。", steps: ["5楼 → 梵高《星夜》", "毕加索《亚维农少女》", "达利《记忆的永恒》", "马蒂斯《舞》", "4楼 → 波普艺术"], highlights: ["梵高《星夜》", "毕加索《亚维农少女》", "达利《记忆的永恒》"] },
      { duration: "4", title: "4小时完整体验", description: "深度探索MoMA的全部收藏，从绘画到雕塑到装置艺术。", steps: ["5楼：19世纪后期至1940年代", "4楼：1940年代至1970年代", "3楼：1970年代至今", "2楼：特展与项目", "雕塑花园"], highlights: ["梵高《星夜》", "莫奈《睡莲》", "沃霍尔《金宝汤罐》"] },
    ],
    knowledge: {
      "星夜": "MoMA的镇馆之宝，梵高最著名的作品。",
      "门票": "成人28美元，建议提前在线预订。",
      "开放时间": "周三至周一 10:30-17:30，周六延长至19:00，周二闭馆。"
    },
  },
  {
    id: "met",
    name: "大都会艺术博物馆",
    nameEn: "The Metropolitan Museum of Art",
    cityId: "newyork",
    type: "museum",
    description: "世界最全面的艺术博物馆之一，跨越五千年人类艺术史，从古埃及到当代，应有尽有。",
    image: "/images/mus-met.jpg",
    openHours: "周日、周二至周四 10:00-17:00，周五至周六至21:00，周三闭馆",
    ticket: "成人30美元，建议提前在线预订",
    address: "1000 5th Ave, New York, NY 10028, USA",
    artworks: [
      { id: 1, title: "华盛顿横渡特拉华河", artist: "伊曼纽尔·洛伊茨", year: "1851年", description: "美国历史上最著名的画作之一，描绘了独立战争中的关键瞬间。", image: "/images/artwork-venus-urbino.jpg", room: "美国厅" },
      { id: 2, title: "沉思者", artist: "奥古斯特·罗丹", year: "1902年", description: "罗丹最著名的雕塑作品，象征人类的理性与思考。", image: "/images/artwork-medusa.jpg", room: "欧洲雕塑厅" },
      { id: 3, title: "古希腊双耳瓶", artist: "未知", year: "公元前5世纪", description: "古希腊黑绘陶器的精品，描绘了神话英雄赫拉克勒斯的场景。", image: "/images/gallery-1.jpg", room: "希腊罗马厅" },
    ],
    itineraries: [
      { duration: "3", title: "3小时环球艺术之旅", description: "从古埃及到现代美国，穿越五千年的艺术史。", steps: ["埃及艺术", "希腊罗马艺术", "欧洲绘画", "美国艺术", "亚洲艺术"], highlights: ["华盛顿横渡特拉华河", "罗丹《沉思者》", "古希腊陶器"] },
    ],
    knowledge: {
      "门票": "成人30美元，纽约州居民可自愿付费。",
      "开放时间": "周三闭馆，其余时间10:00-17:00，周五周六延长至21:00。"
    },
  },  {
    id: "prado",
    name: "普拉多博物馆",
    nameEn: "Museo del Prado",
    cityId: "madrid",
    type: "museum",
    description: "西班牙艺术之巅，委拉斯开兹的《宫娥》与戈雅的《裸体的玛哈》在此，拥有全球最完整的西班牙绘画收藏。",
    image: "/images/city-madrid.jpg",
    openHours: "周二至周日 10:00-20:00（周日至19:00）",
    ticket: "全价票15欧元，建议提前预订",
    address: "C. de Ruiz de Alarcón, 23, 28014 Madrid, Spain",
    artworks: [
      { id: 1, title: "宫娥", artist: "迭戈·委拉斯开兹", year: "1656年", description: "西方艺术史最重要的画作之一，复杂的构图与空间关系令后世无限解读。", image: "/images/gallery-3.jpg", room: "12号展厅" },
      { id: 2, title: "裸体的玛哈", artist: "弗朗西斯科·戈雅", year: "1797-1800年", description: "戈雅大胆挑战教会的作品，首次在西方艺术中呈现毫不遮掩的女性裸体。", image: "/images/gallery-4.jpg", room: "36号展厅" },
      { id: 3, title: "人间乐园", artist: "耶罗尼米斯·博斯", year: "约1500年", description: "博斯最著名的三联画，描绘了伊甸园、人间和地狱三个场景，充满奇异的想象力。", image: "/images/mus-accademia.jpg", room: "56号展厅" },
      { id: 4, title: "大卫与歌利亚", artist: "卡拉瓦乔", year: "约1599年", description: "卡拉瓦乔描绘圣经故事的作品，强烈的光影对比展现了他独特的绘画风格。", image: "/images/mus-orsay.jpg", room: "普拉多地下室" },
    ],
    itineraries: [
      { duration: "2", title: "2小时西班牙艺术精华", description: "看遍普拉多最知名的西班牙绘画大师之作。", steps: ["委拉斯开兹展厅 → 《宫娥》", "戈雅展厅 → 《裸体的玛哈》与《着衣的玛哈》", "博斯 → 《人间乐园》", "快速浏览意大利与佛兰德斯绘画"], highlights: ["委拉斯开兹《宫娥》", "戈雅《裸体的玛哈》", "博斯《人间乐园》"] },
      { duration: "4", title: "4小时完整体验", description: "从文艺复兴到浪漫主义，完整探索普拉多的丰富收藏。", steps: ["佛兰德斯绘画：博斯、勃鲁盖尔", "意大利绘画：提香、拉斐尔", "西班牙黄金世纪：委拉斯开兹", "戈雅的全部作品", "19世纪法国绘画"], highlights: ["《宫娥》", "《人间乐园》", "戈雅《1808年5月3日》"] },
    ],
    knowledge: {
      "宫娥": "《宫娥》是委拉斯开兹最著名的作品，也是西方艺术史最重要的画作之一。",
      "门票": "全价票15欧元，建议提前预订。",
      "开放时间": "周二至周日 10:00-20:00，周日至19:00。"
    },
  },
  {
    id: "reina-sofia",
    name: "索菲亚王后艺术中心",
    nameEn: "Museo Reina Sofía",
    cityId: "madrid",
    type: "museum",
    description: "20世纪艺术的西班牙堡垒，毕加索的《格尔尼卡》是镇馆之宝，专注于现代与当代艺术收藏。",
    image: "/images/mus-reina-sofia.jpg",
    openHours: "周三至周一 10:00-21:00（周二闭馆）",
    ticket: "全价票12欧元，周一和周三至周六19:00-21:00免费",
    address: "C. de Santa Isabel, 52, 28012 Madrid, Spain",
    artworks: [
      { id: 1, title: "格尔尼卡", artist: "巴勃罗·毕加索", year: "1937年", description: "毕加索对西班牙内战中格尔尼卡镇被轰炸的控诉，20世纪最有力的反战作品。", image: "/images/mus-national-gallery-london.jpg", room: "206号展厅" },
      { id: 2, title: "记忆的永恒", artist: "萨尔瓦多·达利", year: "1931年", description: "超现实主义最著名的作品，融化的时钟成为梦境与时间的永恒象征。", image: "/images/mus-moma.jpg", room: "达利展厅" },
      { id: 3, title: "科学与慈悲", artist: "毕加索", year: "1897年", description: "毕加索早期写实主义风格的代表作，描绘了一位医生为病人看病的场景。", image: "/images/mus-met.jpg", room: "毕加索早期展厅" },
    ],
    itineraries: [
      { duration: "1.5", title: "1.5小时现代艺术速览", description: "直奔《格尔尼卡》，快速领略西班牙现代艺术的精华。", steps: ["206号展厅 → 毕加索《格尔尼卡》", "达利作品区", "米罗作品", "快速浏览其他现代艺术"], highlights: ["毕加索《格尔尼卡》", "达利《记忆的永恒》"] },
    ],
    knowledge: {
      "格尔尼卡": "《格尔尼卡》是毕加索最著名的作品之一，控诉了战争的残酷。",
      "门票": "全价票12欧元，特定时段免费。",
      "开放时间": "周三至周一 10:00-21:00，周二闭馆。"
    },
  },
  {
    id: "rijksmuseum",
    name: "荷兰国立博物馆",
    nameEn: "Rijksmuseum",
    cityId: "amsterdam",
    type: "museum",
    description: "荷兰黄金时代的艺术殿堂，伦勃朗的《夜巡》是镇馆之宝，收藏了荷兰艺术史上最辉煌时期的大量杰作。",
    image: "/images/city-amsterdam.jpg",
    openHours: "每日 9:00-17:00",
    ticket: "成人22.50欧元，建议提前在线预订",
    address: "Museumstraat 1, 1071 XX Amsterdam, Netherlands",
    artworks: [
      { id: 1, title: "夜巡", artist: "伦勃朗·凡·莱因", year: "1642年", description: "伦勃朗最著名的作品，以戏剧性光影描绘了阿姆斯特丹民兵连的行进。", image: "/images/artwork-annunciation.jpg", room: "荣誉大厅" },
      { id: 2, title: "倒牛奶的女仆", artist: "约翰内斯·维米尔", year: "约1658年", description: "维米尔描绘日常生活的大师之作，光线的处理令人叹为观止。", image: "/images/artwork-holy-family.jpg", room: "维米尔展厅" },
      { id: 3, title: "犹太新娘", artist: "伦勃朗", year: "约1665年", description: "伦勃朗晚期的杰作，描绘了一对情侣的亲密场景，色彩温暖而深沉。", image: "/images/artwork-madonna.jpg", room: "伦勃朗展厅" },
    ],
    itineraries: [
      { duration: "2", title: "2小时黄金时代精华", description: "聚焦荷兰黄金时代的绘画大师之作。", steps: ["荣誉大厅 → 伦勃朗《夜巡》", "维米尔展厅 → 《倒牛奶的女仆》", "伦勃朗其他作品", "快速浏览其他荷兰大师"], highlights: ["伦勃朗《夜巡》", "维米尔《倒牛奶的女仆》"] },
      { duration: "4", title: "4小时完整之旅", description: "从1100年至今，完整领略荷兰艺术与历史的全景。", steps: ["1100-1600：中世纪与文艺复兴", "1600-1700：荷兰黄金时代（重点）", "1700-1900：新古典主义到印象派", "1900-2000：现代与当代", "亚洲 Pavilion"], highlights: ["《夜巡》", "维米尔系列", "扬·斯特恩风俗画"] },
    ],
    knowledge: {
      "夜巡": "《夜巡》是伦勃朗最著名的作品，也是荷兰黄金时代的象征。",
      "门票": "成人22.50欧元，建议提前预订。",
      "开放时间": "每日 9:00-17:00。"
    },
  },
  {
    id: "van-gogh-museum",
    name: "梵高博物馆",
    nameEn: "Van Gogh Museum",
    cityId: "amsterdam",
    type: "museum",
    description: "世界上最大的梵高作品收藏，《向日葵》《星夜》《卧室》等名作云集，深入探索这位天才艺术家的一生。",
    image: "/images/mus-van-gogh.jpg",
    openHours: "每日 9:00-18:00（周五至21:00）",
    ticket: "成人22欧元，必须提前在线预订",
    address: "Museumplein 6, 1071 DJ Amsterdam, Netherlands",
    artworks: [
      { id: 1, title: "向日葵", artist: "文森特·梵高", year: "1889年", description: "梵高为高更装饰阿尔画室创作的系列，燃烧般的黄色充满生命力。", image: "/images/artwork-medusa.jpg", room: "2楼" },
      { id: 2, title: "星夜", artist: "文森特·梵高", year: "1889年", description: "梵高在圣雷米精神病院期间创作，旋转的星空成为永恒的经典。", image: "/images/gallery-1.jpg", room: "2楼" },
      { id: 3, title: "在阿尔的卧室", artist: "文森特·梵高", year: "1888年", description: "梵高对自己简朴卧室的描绘，色彩简洁却充满情感深度。", image: "/images/gallery-2.jpg", room: "1楼" },
      { id: 4, title: "吃土豆的人", artist: "文森特·梵高", year: "1885年", description: "梵高早期代表作，描绘了荷兰农民一家晚餐的场景，色调暗沉而真实。", image: "/images/gallery-3.jpg", room: "1楼" },
    ],
    itineraries: [
      { duration: "1.5", title: "1.5小时梵高人生之旅", description: "按时间线追踪梵高从荷兰到法国的艺术演变。", steps: ["1楼：早期荷兰时期（《吃土豆的人》）", "1楼：巴黎时期", "2楼：阿尔勒时期（《向日葵》《卧室》）", "2楼：圣雷米与奥维尔（《星夜》）"], highlights: ["《向日葵》", "《星夜》", "《在阿尔的卧室》"] },
    ],
    knowledge: {
      "向日葵": "梵高博物馆收藏了多幅《向日葵》系列作品。",
      "门票": "成人22欧元，必须提前在线预订。",
      "开放时间": "每日 9:00-18:00，周五延长至21:00。"
    },
  },
  {
    id: "national-art-center-tokyo",
    name: "国立新美术馆",
    nameEn: "The National Art Center, Tokyo",
    cityId: "tokyo",
    type: "museum",
    description: "日本最大的展示空间之一，没有常设展，世界级特展不断。黑川纪章设计的波浪形外观本身就是一件建筑艺术品。",
    image: "/images/mus-nact.jpg",
    openHours: "10:00-18:00（周二闭馆，周五至20:00）",
    ticket: "根据特展票价不同，一般1600-2200日元",
    address: "7-22-2 Roppongi, Minato-ku, Tokyo, Japan",
    artworks: [
      { id: 1, title: "特展限定作品", artist: "轮换", year: "当代", description: "国立新美术馆没有常设展，每次来访都会有不同的世界级特展等待着你。", image: "/images/gallery-4.jpg", room: "特展厅" },
    ],
    itineraries: [
      { duration: "2", title: "2小时特展体验", description: "根据当期特展，深度体验世界级艺术盛宴。", steps: ["查看当期特展信息", "1楼主展厅", "2楼副展厅", "建筑本身也值得欣赏"], highlights: ["当期特展作品", "建筑外观"] },
    ],
    knowledge: {
      "门票": "票价根据特展不同，一般1600-2200日元。",
      "开放时间": "10:00-18:00，周二闭馆，周五延长至20:00。",
      "交通": "东京地铁千代田线/日比谷线/都营大江户线至乃木坂站。"
    },
  },
  {
    id: "mori-art",
    name: "森美术馆",
    nameEn: "Mori Art Museum",
    cityId: "tokyo",
    type: "museum",
    description: "位于六本木新城53层，日本当代艺术的制高点，视野与艺术并重，可俯瞰东京全景。",
    image: "/images/gallery-3.jpg",
    openHours: "10:00-22:00（周二至17:00）",
    ticket: "成人1800日元，建议提前预订",
    address: "Roppongi Hills Mori Tower 53F, 6-10-1 Roppongi, Minato-ku, Tokyo",
    artworks: [
      { id: 1, title: "东京城市景观", artist: "无", year: "当代", description: "森美术馆最大的展品可能就是窗外的东京全景——从53层俯瞰这座超级都市。", image: "/images/mus-moma.jpg", room: "53层" },
    ],
    itineraries: [
      { duration: "1.5", title: "1.5小时艺术与城市", description: "看展+看景，一次体验东京的艺术与繁华。", steps: ["当期特展", "53层观景台（可俯瞰东京塔）", "六本木 Hills 周边漫步"], highlights: ["当期特展", "东京全景"] },
    ],
    knowledge: {
      "门票": "成人1800日元。",
      "开放时间": "10:00-22:00，周二提前至17:00闭馆。"
    },
  },
  {
    id: "palace-museum",
    name: "故宫博物院",
    nameEn: "The Palace Museum",
    cityId: "beijing",
    type: "museum",
    description: "世界最大宫殿建筑群，180万件藏品讲述六百年帝王史，从《千里江山图》到各种珍宝，是中华文明的集大成者。",
    image: "/images/mus-palace.jpg",
    openHours: "4月-10月 8:30-17:00，11月-3月 8:30-16:30（周一闭馆）",
    ticket: "旺季60元/淡季40元，必须提前在线预约",
    address: "4 Jingshan Front St, Dongcheng District, Beijing",
    artworks: [
      { id: 1, title: "千里江山图", artist: "王希孟", year: "1113年", description: "北宋青绿山水画的巅峰之作，11米长卷描绘了连绵的群山与浩渺的江河。", image: "/images/mus-palace.jpg", room: "绘画馆" },
      { id: 2, title: "清明上河图", artist: "张择端", year: "北宋", description: "中国十大传世名画之一，生动记录了北宋汴京的城市风貌与市井生活。", image: "/images/city-florence.jpg", room: "绘画馆" },
      { id: 3, title: "各种釉彩大瓶", artist: "清代工匠", year: "清乾隆", description: "集历代瓷器釉彩之大成，腹部施12道不同釉彩，是乾隆时期制瓷工艺的巅峰。", image: "/images/city-paris.jpg", room: "陶瓷馆" },
      { id: 4, title: "金瓯永固杯", artist: "清代宫廷工匠", year: "清乾隆", description: "皇帝每年元旦开笔仪式专用的金杯，镶嵌珍珠宝石，象征江山永固。", image: "/images/city-london.jpg", room: "珍宝馆" },
    ],
    itineraries: [
      { duration: "3", title: "3小时中轴线精华", description: "沿故宫中轴线，看遍最精华的宫殿与藏品。", steps: ["午门进入 → 太和殿", "中和殿、保和殿", "乾清宫、交泰殿、坤宁宫", "御花园", "珍宝馆/钟表馆"], highlights: ["太和殿", "千里江山图", "金瓯永固杯"] },
      { duration: "6", title: "全天深度游", description: "走遍东西六宫，完整体验紫禁城的宏伟与精致。", steps: ["中轴线三大殿", "东六宫与珍宝馆", "西六宫与慈宁宫", "御花园", "神武门出 → 上景山俯瞰全景"], highlights: ["《千里江山图》", "珍宝馆", "景山全景"] },
    ],
    knowledge: {
      "千里江山图": "北宋青绿山水画的巅峰之作，作者王希孟年仅18岁。",
      "门票": "旺季60元/淡季40元，必须提前在线预约，周一闭馆。",
      "开放时间": "8:30-17:00/16:30，周一闭馆。",
      "交通": "地铁1号线天安门东/西站。"
    },
  },
  {
    id: "ucca",
    name: "UCCA尤伦斯当代艺术中心",
    nameEn: "UCCA Center for Contemporary Art",
    cityId: "beijing",
    type: "cultural_center",
    description: "中国最具影响力的当代艺术机构，798艺术区的标志性建筑，致力于推动中国当代艺术的发展与国际交流。",
    image: "/images/gallery-4.jpg",
    openHours: "周二至周日 10:00-19:00（周一闭馆）",
    ticket: "根据展览不同，一般60-100元",
    address: "4 Jiuxianqiao Rd, Chaoyang District, Beijing",
    artworks: [
      { id: 1, title: "当期特展作品", artist: "轮换", year: "当代", description: "UCCA没有常设展，每次来访都会有不同的当代艺术展览等待着你。", image: "/images/city-newyork.jpg", room: "主展厅" },
    ],
    itineraries: [
      { duration: "2", title: "2小时当代艺术体验", description: "看展+逛798，一次体验北京的艺术氛围。", steps: ["UCCA当期特展", "798艺术区漫步", "周边画廊探索"], highlights: ["当期特展", "798艺术区"] },
    ],
    knowledge: {
      "门票": "根据展览不同，一般60-100元。",
      "开放时间": "周二至周日 10:00-19:00，周一闭馆。"
    },
  },
];

export function getMuseumsByCity(cityId: string): Museum[] {
  return museums.filter(m => m.cityId === cityId);
}

export function getMuseumById(id: string): Museum | undefined {
  return museums.find(m => m.id === id);
}

export function searchMuseums(query: string): Museum[] {
  const q = query.toLowerCase().trim();
  if (!q) return museums;
  return museums.filter(m =>
    m.name.toLowerCase().includes(q) ||
    m.nameEn.toLowerCase().includes(q) ||
    m.description.toLowerCase().includes(q) ||
    m.artworks.some(a => a.title.toLowerCase().includes(q) || a.artist.toLowerCase().includes(q))
  );
}