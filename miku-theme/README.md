# Miku Theme for PI-Desktop

初音未来主题插件，包含两套完整覆盖宿主 `--ds-*` 设计令牌的主题：

- **Cyber Diva（暗）** — 深夜蓝黑基底 × 霓虹 Miku Teal `#39C5BB`，克制的辉光与 hairline 描边。
- **Snow Miku（亮）** — 雪白 × 冰蓝 × 沉稳 Teal `#14A39A`，白日使用清爽不刺眼。

覆盖范围：三栏背景、侧栏渐变光效、文字四级灰度、强调色/焦点环、hover/选中态、
开关、代码块、遮罩、状态色、阴影、滚动条、文字选区、输入胶囊辉光、
原生窗口底色（`windowAppearance`）。

## 启用

设置 → 外观 → 主题，选择「Cyber Diva（初音 · 暗）」或「Snow Miku（初音 · 亮）」。

## 结构

```
manifest.json          # contributes.themes + windowAppearance，权限 ui.theme
themes/cyber-diva.css  # 暗色主题
themes/snow-miku.css   # 亮色主题
renderer/index.html    # 说明面板（命令 Miku Theme: Open Panel）
main.js                # 仅注册打开面板的命令
```

39 ♪
