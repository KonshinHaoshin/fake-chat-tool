import { useSystemStore } from "./modules/system";
import { useChatStore } from "./modules/chat";
import { useUserStore } from "./modules/user";
import { useTemplateStore } from "./modules/template";
import { useContextMenuStore } from "./modules/contextMenu";

interface StoreComposition {
  useSystemStore: ReturnType<typeof useSystemStore>;
  useChatStore: ReturnType<typeof useChatStore>;
  useUserStore: ReturnType<typeof useUserStore>;
  useTemplateStore: ReturnType<typeof useTemplateStore>;
  useContextMenuStore: ReturnType<typeof useContextMenuStore>;
}

// 将store统一到一起再分发
const useStore = (): StoreComposition => ({
  useSystemStore: useSystemStore(),
  useChatStore: useChatStore(),
  useUserStore: useUserStore(),
  useTemplateStore: useTemplateStore(),
  useContextMenuStore: useContextMenuStore(),
});

export default useStore; 