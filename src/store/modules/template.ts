import { defineStore } from "pinia";
import { indexedDBStorage } from "@/utils/storage";

interface TemplateItem {
  id: string;
  [key: string]: any;
}

interface TemplateState {
  list: TemplateItem[];
}

export const useTemplateStore = defineStore("toolTemplate", {
  state: (): TemplateState => ({
    list: [],
  }),
  actions: {
    async init(): Promise<void> {
      const toolTemplate = await indexedDBStorage.getItem('toolTemplate');
      if (!toolTemplate) return;
      const { list } = JSON.parse(toolTemplate);
      this.list = list;
    },
    // 新增聊天模板
    add(params: Omit<TemplateItem, 'id'>): void {
      this.list.unshift({
        id: `template-${Date.now()}`,
        ...params
      });
    },
    delete(id: string): void {
      this.list = this.list.filter(item => item.id !== id);
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