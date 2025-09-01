import { defineStore } from "pinia";
import { indexedDBStorage } from "@/utils/storage";
import _ from "lodash";
const appearance = {
  model: "ios",
  darkMode: false,
  networkType: "wifi",
  wifiSignal: "3",
  phoneSignal: "4",
  phoneTimeHour: "12",
  phoneTimeMinute: "21",
  timeFollowSystem: false,
  isCharging: false,
  phoneBattery: 60,
  doNotDisturb: false,
  earphoneMode: true,
  unreadMessages: 1,
  chatTitle: "微信对话",
  showChatName: false,
  voiceMode: false,
  syncInputText: true,
  chatBackground: "",
}

export const useSystemStore = defineStore("toolSystem", {
  state: () => ({
    activeMenu: "appearance", // 当前聚焦的工具栏目
    appearance: _.cloneDeep(appearance),
    phoneWidth: 1125,
    phoneHeight: 2436,
    phoneScale: 1,
    hadDisclaimer: true, // 已经确认过声明

  }),
  actions: {
    async init() {
      const toolSystem = await indexedDBStorage.getItem('toolSystem');
      if (!toolSystem) return;
      const {activeMenu, appearance, phoneWidth, phoneHeight, phoneScale, hadDisclaimer} = JSON.parse(toolSystem);
      this.activeMenu = activeMenu;
      this.appearance = appearance;
      this.phoneWidth = phoneWidth;
      this.phoneHeight = phoneHeight;
      this.phoneScale = phoneScale;
      this.hadDisclaimer = hadDisclaimer;
    },
    resetAppearance() {
      this.appearance = _.cloneDeep(appearance)
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        storage: indexedDBStorage,
      },
    ],
  },
});
