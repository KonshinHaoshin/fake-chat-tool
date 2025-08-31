import { defineStore } from "pinia";

interface ContextMenuState {
  menuVisible: boolean;
  menuLeft: number;
  menuTop: number;
  activeChatId: string;
}

export const useContextMenuStore = defineStore("toolContextMenu", {
  state: (): ContextMenuState => ({
    menuVisible: false, // 是否显示右键菜单
    menuLeft: 0, // 菜单位置横坐标
    menuTop: 0, // 菜单位置纵坐标
    activeChatId: "",
  }),
  actions: {
    // 显示右键菜单
    showContextMenu(clientX: number, clientY: number, chatId: string): void {
      this.activeChatId = chatId;
      this.menuLeft = clientX;
      this.menuTop = clientY;
      this.menuVisible = true;
    },
    // 隐藏右键菜单
    hideContextMenu(): void {
      this.menuVisible = false;
    },
  },
}); 