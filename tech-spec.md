# 艺所地图 (ArtSpace Map) - 技术规格

## 技术栈

| 层 | 技术 | 版本 |
|---|---|---|
| 框架 | React + TypeScript + Vite | ^19.0.0 |
| 样式 | Tailwind CSS | ^3.4.19 |
| UI 组件 | shadcn/ui | 内置 40+ 组件 |
| 3D 渲染 | @react-three/fiber + @react-three/drei + three | ^8.17.0 |
| 动画 | gsap (ScrollTrigger) + @studio-freight/lenis + framer-motion | ^3.12 + ^1.1 |
| 图标 | lucide-react | ^0.460 |
| 字体 | Google Fonts (Space Grotesk, Inter) | CDN |

---

## 组件清单

### 自定义组件

| 组件 | 位置 | 说明 |
|---|---|---|
| `App` | `src/App.tsx` | 根组件，管理全局状态（当前视图、搜索词、筛选条件、GPS位置） |
| `HeroScene` | `src/sections/HeroScene.tsx` | 首屏全屏场景：3D画廊背景 + 搜索UI叠加层 |
| `SpaceCard` | `src/components/SpaceCard.tsx` | 液态玻璃材质的空间卡片（单个场馆展示） |
| `SearchOverlay` | `src/components/SearchOverlay.tsx` | 中央搜索框 + GPS定位按钮组合 |
| `ResultsGrid` | `src/sections/ResultsGrid.tsx` | 搜索结果网格布局 |
| `FilterBar` | `src/components/FilterBar.tsx` | 底部药丸形筛选按钮组 |
| `SpaceDetail` | `src/components/SpaceDetail.tsx` | 场馆详情弹窗（液态玻璃模态框） |
| `ExhibitionTimeline` | `src/sections/ExhibitionTimeline.tsx` | 展览时间螺旋区（GSAP驱动） |
| `BottomNav` | `src/components/BottomNav.tsx` | 底部固定导航栏 |
| `Carousel3D` | `src/components/Carousel3D.tsx` | 3D画廊长廊（R3F） |
| `GlassPanel` | `src/components/GlassPanel.tsx` | 可复用的液态玻璃面板容器 |
| `CityTag` | `src/components/CityTag.tsx` | 城市标签组件 |

### shadcn/ui 组件使用

| 组件 | 用途 |
|---|---|
| `Button` | 底部导航按钮、操作按钮 |
| `Dialog` | 场馆详情弹窗骨架 |
| `Badge` | 类型标签（美术馆/博物馆/画廊） |
| `Input` | 搜索输入框 |
| `Skeleton` | 图片加载占位 |

---

## 动画实现方案

| 动画 | 库 | 实现方式 | 复杂度 |
|---|---|---|---|
| 3D画廊长廊旋转 | @react-three/fiber | useFrame 每帧更新rotation，easing.damp平滑插值 | 高 |
| 鼠标视差倾斜 | @react-three/fiber | state.pointer驱动wobble变量，叠加到rotation | 中 |
| 图片镜面反射渐变 | @react-three/fiber | modulate position.x映射到roughness/metalness/opacity | 高 |
| 液态玻璃面板入场 | framer-motion | motion.div + initial/animate，y:20→0, opacity:0→1 | 低 |
| 卡片悬停效果 | framer-motion | whileHover scale:1.02, boxShadow增强 | 低 |
| 搜索框展开 | framer-motion | AnimatePresence + layout动画 | 中 |
| 展览时间螺旋 | gsap ScrollTrigger | scrub模式，时间节点错开set/to动画 | 高 |
| 列表跟随滚动 | gsap ScrollTrigger onUpdate | progress映射到列表y位移 | 中 |
| 页面间过渡 | framer-motion | AnimatePresence包裹路由级页面切换 | 中 |
| 平滑滚动 | lenis | 全局接管，提供丝滑阻尼 | 低 |

---

## 状态管理

React Context + useReducer（无需外部状态库）：

```
AppState {
  view: 'hero' | 'results' | 'detail',
  searchQuery: string,
  activeFilter: 'all' | 'museum' | 'gallery' | 'art_fair',
  gpsLocation: { lat: number, lng: number } | null,
  selectedSpace: Space | null,
  filteredSpaces: Space[]
}
```

---

## 项目结构

```
src/
├── sections/
│   ├── HeroScene.tsx          # 首屏：3D背景 + 搜索
│   ├── ResultsGrid.tsx        # 搜索结果网格
│   └── ExhibitionTimeline.tsx # 展览时间螺旋
├── components/
│   ├── Carousel3D.tsx         # 3D画廊(R3F)
│   ├── GlassPanel.tsx         # 液态玻璃容器
│   ├── SpaceCard.tsx          # 场馆卡片
│   ├── SearchOverlay.tsx      # 搜索UI
│   ├── FilterBar.tsx          # 筛选栏
│   ├── BottomNav.tsx          # 底部导航
│   ├── SpaceDetail.tsx        # 详情弹窗
│   └── CityTag.tsx            # 城市标签
├── hooks/
│   ├── useGeolocation.ts      # GPS定位hook
│   ├── useSpaceSearch.ts      # 搜索过滤hook
│   └── useLenis.ts            # 平滑滚动hook
├── data/
│   └── spaces.ts              # 静态场馆数据(200条+)
├── types/
│   └── index.ts               # TypeScript类型定义
├── lib/
│   └── utils.ts               # 工具函数(距离计算等)
├── App.tsx                     # 根组件+状态管理
├── main.tsx                    # 入口
└── index.css                   # 全局样式+液态玻璃CSS
```

---

## 关键算法

### GPS距离计算（Haversine Formula）
```typescript
function haversine(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371; // km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat/2)**2 + Math.cos(lat1 * Math.PI/180) * Math.cos(lat2 * Math.PI/180) * Math.sin(dLng/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}
```

### 搜索匹配逻辑
- 城市名前缀匹配（如"pa"匹配"Paris"）
- 场馆名模糊匹配
- 支持拼音/英文城市名
- 结果按距离（GPS模式下）或字母排序

---

## 构建注意事项

1. **3D性能**：R3F Canvas设置 `dpr={[1, 2]}` 限制最大像素比，`gl={{ antialias: true, alpha: true }}`
2. **字体加载**：`@import` Google Fonts + `font-display: swap`
3. **液态玻璃降级**：通过 `@supports not (backdrop-filter: blur(16px))` 提供实色回退
4. **图片优化**：所有场馆图片使用 WebP 格式，懒加载
5. **移动端适配**：底部导航安全区 `env(safe-area-inset-bottom)`，触摸目标 ≥ 48px
