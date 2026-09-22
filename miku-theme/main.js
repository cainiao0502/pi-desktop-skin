/**
 * Miku Theme — PI-Desktop plugin entry.
 *
 * 主题本体是声明式的（manifest contributes.themes + themes/*.css），
 * 这里只注册一个打开说明面板的命令。
 */

async function onLoad() {
  // v0.1.0 — themes: cyber-diva / snow-miku.
  await pi.commands.register({
    id: "miku-theme.open",
    title: "Miku Theme: Open Panel",
    keywords: ["miku", "theme"],
    run: async () => {
      await pi.ui.openPanel({ title: "Miku Theme" });
    },
  });
}

async function onUnload() {
  await pi.commands.unregister("miku-theme.open");
}

module.exports = { onLoad, onUnload };
