# LiquidBounce MIUI Theme

[LiquidBounce NextGen](https://liquidbounce.net) 的 MIUI / HyperOS 风格主题 —— 液态玻璃 UI。
A MIUI / HyperOS-style liquid-glass theme for LiquidBounce NextGen.

基于 Miuix 设计令牌（`compose-miuix-ui/miuix` 的 `darkColorScheme`）手工移植，纯 CSS 覆盖层，
不修改客户端二进制。
Hand-ported from Miuix design tokens (`top.yukonga.miuix.kmp.theme.Colors` dark scheme).
Pure CSS overlay — the client binary is never modified.

## 特色 / Features

- **液态玻璃 / Liquid glass**: 55% 透光面板 + `backdrop-filter` 磨砂 + 顶部高光 + 细边框
  (blur 60px/saturate 240% 大面板, blur 40px 浮层)
- **HyperOS 浅蓝 / HyperOS light blue**: accent `#4da6ff`, surface `#242424`（CSS `!important` 钉死，免疫 JS 内联覆盖）
- **MiSans 字体栈 / MiSans font stack**: 西文 MiSans Latin 10 字重 + CJK MiSans，兜底雅黑
- **Miuix 圆角 / 16dp Miuix rounding**: 面板 16px、控件 12px、搜索条 24px
- **MIUI 细滚动条 / thin scrollbar**: 4px 滚动条，hover 变 accent 色
- 覆盖 7 个屏幕 + 10 个 HUD/覆盖层组件（见 `metadata.json`）

## 安装 / Installation

把整个 `miui` 文件夹复制到游戏目录，然后在游戏内 ClickGUI → Themes 选择：

```
<游戏目录>/LiquidBounce/themes/miui/
```

例：`D:\.minecraft\versions\<版本>\LiquidBounce\themes\miui\`（Fabric / NeoForge 路径相同）。

> **磨砂效果提示 / About the frosted glass**: `backdrop-filter` 需要 CEF 硬件加速。
> 若主题显示为纯半透明面板（无磨砂），在客户端的 CEF 启动参数中加入
> `--enable-gpu --use-angle=d3d11 --ignore-gpu-blocklist`（并重启游戏）。这是运行环境问题，与主题文件无关。

## 结构 / Layout

```
miui/
├── index.html          # 主题入口（引用 overlay CSS + assets bundle）
├── miui-overlay.css    # ★ 核心样式：Miuix 令牌 + 液态玻璃 + 圆角 + 滚动条
├── metadata.json       # 主题元数据（screens/components/fonts）
├── assets/             # LBNG 主题 Svelte bundle
├── components/         # 各组件 JSON 配置
├── backgrounds/        # 背景图（frag/png）
├── fonts/              # MiSans Latin/CJK + Inter 字体
└── img/                # 图标（flags 等）
```

核心逻辑集中在单个 `miui-overlay.css`（约 150 行）—— 想调玻璃透光率改 `--glass-color`，
换 accent 改 `:root` 里的 `--accent-color`，`?v=N` 缓存破击在 `index.html`。

## 字体署名 / Font attribution

- **MiSans** © 小米 / Xiaomi —— 依据 [MiSans 字体许可协议](https://hyperos.mi.com/font/zh/)
  免费商用授权使用（MiSans Latin × 10 字重 + MiSans CJK Regular/Semibold/Bold，woff2）。
  MiSans is licensed by Xiaomi under the MiSans Font License (free for commercial use).
- **Inter** © Rasmus Andersson —— [SIL Open Font License 1.1](https://openfontlicense.org)
  （9 个字重，随 LBNG 主题包自带）。

## 版权 / License

主题设计 & CSS © j3rk0ff。如用主题内代码，请保留本 README 与署名声明。
Theme design & CSS © j3rk0ff. If you reuse the code, keep this README and the attribution.

与本仓库无关：LiquidBounce 与 MIUI/HyperOS 均为各自所有者的商标。
Not affiliated with: LiquidBounce, MIUI and HyperOS are trademarks of their respective owners.
