import { onMounted, watch, nextTick, Ref } from "vue";
import eventBus from '@/utils/eventBus';
import useStore from "@/store";
const { useChatStore } = useStore();

/**
 * 执行本方法可以让盒子自动滚动至底
 * @param {Ref<HTMLElement>} component ref绑定的dom
 */
export default function useAutoScrollBottom(component: Ref<HTMLElement | null>) {
  // watch(() => useChatStore.chatList, () => {
  //   toBottom();
  // }, {
  //   deep: true,
  // })

  onMounted(() => {
    toBottom();

    eventBus.on("sentChat", () => {
      toBottom();
    })
  });

  const toBottom = (): void => {
    if (!component || !component.value) return;
    nextTick(() => {
      if (component.value) {
        component.value.scrollTop = component.value.scrollHeight;
      }
    })
  };

  return {
    toBottom,
  }
} 