/**
 * 将图片文件转换为 Base64 格式
 * @param {File} file - 图片文件对象
 * @returns {Promise<string>} - 返回 Promise 对象
 */
export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });
}

export async function urlToBase64(url: string): Promise<string | undefined> {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const reader = new FileReader();
        const blob = await response.blob();
        reader.onloadend = () => resolve(reader.result as string);
        reader.readAsDataURL(blob);
      } else {
        throw new Error('图片加载失败');
      }
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
}

interface OptionItem {
  label: string;
  value: string;
}

/**
 * 获取时分下拉
 * @param {number} num 
 * @returns 
 */
export function toArr(num: number, zero: boolean = true, start: number = 0, unit: string = ""): OptionItem[] {
  const res: OptionItem[] = [];
  for (let i = start; i < num; i++) {
    const obj: OptionItem = {
      label: zero ? ('00' + i).slice(-2) : i + unit,
      value: zero ? ('00' + i).slice(-2) : i + unit,
    };
    res.push(obj);
  }
  return res;
}

/**
 * 获取年份下拉
 * @returns 
 */
export function toYearStr(): OptionItem[] {
  const res: OptionItem[] = [];
  for (let i = 2018; i < 2048; i++) {
    const obj: OptionItem = {
      label: i + "年",
      value: i + "年",
    };
    res.push(obj);
  }
  return res;
}

/**
 * 复制功能
 * @param {string} text 被复制的文本
 */
export function copyText(text: string): void {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

/**
 * 获得的文本转换为文本+表情包的 v-html
 * @param {string} text 文本
 */
export function renderText(text: string, emojiBase64: Record<string, string>): string {
  const replacedText = text.replace(/\[.*?\]/g, (match) => {
    const emoticon = match.trim().replace('[', '').replace(']', '');
    if (emojiBase64.hasOwnProperty(emoticon)) {
      const imageUrl = emojiBase64[emoticon];
      return `<img class="emoji-img" style="width:58px;margin:8px 4px 2px;vertical-align:bottom;" src="data:image/png;base64,${imageUrl}" alt="${emoticon}">`;
    }
    return match;
  }).replace(/\n/g, "<br />");
  
  return replacedText;
}

interface ArrayItem {
  label: string;
  value: string | number | boolean;
}

/**
 * 通过value返回arr数组的label
 * @param {Array} arr 
 * @param {number | string} value 
 * @returns 
 */
export function filterLabel(arr: ArrayItem[], value: string | number | boolean): string {
  if (!arr.length) {
    return "";
  }
  const item = arr.find(item => item.value === value);
  return item ? item.label : "";
}

/**
 * 延时函数
 * @param {number} time 
 * @returns 
 */
export const sleep = async (time: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

/**
 * 保留前面和后面各 6 位字符，并用省略号替代中间部分
 * @param {string} str 原字符串
 * @param {number} maxLength 文本允许最大长度
 * @returns 
 */
export const truncateMiddle = (str: string, maxLength: number): string => {
  if (str.length <= maxLength) {
    return str;
  }

  const ellipsis = '...';
  const startLength = Math.ceil((maxLength - ellipsis.length) / 2);
  const endLength = Math.floor((maxLength - ellipsis.length) / 2);

  const truncatedStr = str.substr(0, startLength) + ellipsis + str.substr(str.length - endLength);
  return truncatedStr;
}; 