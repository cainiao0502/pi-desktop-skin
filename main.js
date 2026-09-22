/**
 * Skin — PI-Desktop plugin entry.
 *
 * The host injects the global `pi` object. Every call is gated by the
 * permissions declared in manifest.json, so widening what this file does
 * usually means widening `permissions` too.
 */

async function onLoad() {
  await pi.commands.register({
    id: "skin.open",
    title: "Skin: Open Panel",
    keywords: ["skin"],
    run: async () => {
      await pi.ui.openPanel({ title: "Skin" });
      await pi.ui.showToast("Hello from Skin");
    },
  });
}

async function onUnload() {
  await pi.commands.unregister("skin.open");
}

module.exports = { onLoad, onUnload };
