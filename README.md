# 艺所地图 ArtTour

在线浏览世界各地美术馆、博物馆与画廊的 Web 应用。

## 技术栈

- React 19 + TypeScript + Vite
- Tailwind CSS + shadcn/ui
- Three.js / React Three Fiber（3D 场景）
- GSAP、Framer Motion（动画）

详细规格见 [tech-spec.md](./tech-spec.md)。

## 本地开发

```powershell
# 1. 克隆仓库
git clone https://github.com/wucan2848-del/arttourAPP.git
cd arttourAPP

# 2. 安装依赖
npm install

# 3. 启动开发服务器
npm run dev
```

浏览器打开终端里显示的地址（通常是 http://localhost:5173）。

## 团队协作出流程

```powershell
# 开始新功能前先同步最新代码
git pull origin main

# 开分支开发（不要直接在 main 上改）
git checkout -b feature/你的功能名

# 改完提交并推送
git add .
git commit -m "描述你做了什么"
git push origin feature/你的功能名
```

然后在 GitHub 上发起 **Pull Request**，审查通过后合并到 `main`。

## 邀请队友

仓库 **Settings → Collaborators → Add people**，输入队友的 GitHub 用户名即可。

## 常用命令

| 命令 | 说明 |
|------|------|
| `npm run dev` | 本地开发 |
| `npm run build` | 生产构建 |
| `npm run preview` | 预览构建结果 |
| `npm run lint` | 代码检查 |
