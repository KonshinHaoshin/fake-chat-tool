import { message, notification } from "ant-design-vue";

interface ToastOptions {
  type?: 'success' | 'error' | 'warning' | 'info';
  content?: string;
  duration?: number;
}

interface NotifyOptions {
  type?: 'success' | 'error' | 'warning' | 'info';
  title?: string;
  content?: string;
  duration?: number;
}

// 在浏览器中上部的提示
export const toast = ({
  type = "success",
  content = "提示语",
  duration = 3,
}: ToastOptions = {}): void => {
  message.open({
    type,
    content,
    duration,
  });
};

// 在浏览器右上角的提示
export const notify = ({
  type = "success",
  title = "提示",
  content = "内容",
  duration = 3,
}: NotifyOptions = {}): void => {
  notification.open({
    type,
    message: title,
    description: content,
    duration,
  });
}; 