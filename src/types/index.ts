// 基础类型定义

// 用户角色类型
export type UserRole = 'own' | 'other';

// 消息类型
export type MessageType = 
  | 'text' 
  | 'image' 
  | 'voice' 
  | 'transferAccounts' 
  | 'redEnvelope' 
  | 'avInvite' 
  | 'businessCard' 
  | 'time' 
  | 'takeAPat' 
  | 'revoke' 
  | 'system' 
  | 'receive';

// 音视频邀请状态
export type AvInviteState = 'success' | 'cancelled' | 'rejected' | 'timeout';

// 音视频邀请类型
export type AvInviteType = 'voice' | 'video';

// 网络类型
export type NetworkType = 'wifi' | '4g' | '5g' | '3g' | '2g';

// 手机信号强度
export type SignalStrength = '0' | '1' | '2' | '3' | '4';

// 用户接口
export interface User {
  id: string;
  nickname: string;
  avatar: string;
  role: UserRole;
}

// 聊天消息接口
export interface ChatMessage {
  id: string;
  type: MessageType;
  content: string;
  user: User;
  role: UserRole;
  timestamp: number;
  received?: boolean;
  rejected?: boolean;
  money?: number;
  duration?: number | string;
  intervalTime?: number;
  invateType?: AvInviteType;
  state?: AvInviteState;
  image?: string;
  receivedChatType?: MessageType;
  patBold?: boolean;
}

// 外观配置接口
export interface Appearance {
  model: string;
  darkMode: boolean;
  networkType: NetworkType;
  wifiSignal: SignalStrength;
  phoneSignal: SignalStrength;
  phoneTimeHour: string;
  phoneTimeMinute: string;
  timeFollowSystem: boolean;
  isCharging: boolean;
  phoneBattery: number;
  doNotDisturb: boolean;
  earphoneMode: boolean;
  unreadMessages: number;
  chatTitle: string;
  showChatName: boolean;
  voiceMode: boolean;
  syncInputText: boolean;
  chatBackground: string;
}

// 生成配置接口
export interface GenerateConfig {
  maxInterval: number;
  minInterval: number;
}

// 音视频邀请状态选项
export interface AvInviteStateOption {
  label: string;
  value: AvInviteState;
}

// Store状态类型
export interface SystemState {
  activeMenu: string;
  appearance: Appearance;
  phoneWidth: number;
  phoneHeight: number;
  phoneScale: number;
  hadDisclaimer: boolean;
  qqGroupLink: string;
}

export interface ChatState {
  chatList: ChatMessage[];
  generateConfig: GenerateConfig;
}

export interface UserState {
  userList: User[];
  activeUser: User;
}

export interface TemplateState {
  templateList: ChatMessage[];
}

export interface ContextMenuState {
  visible: boolean;
  x: number;
  y: number;
  activeChatId: string;
  menuList: ContextMenuItem[];
}

// 右键菜单项
export interface ContextMenuItem {
  key: string;
  label: string;
  icon?: any;
  disabled?: boolean;
  danger?: boolean;
}

// HTML2Canvas选项
export interface HtmlToImageOptions {
  height?: number;
  width?: number;
  scale?: number;
  backgroundColor?: string;
  useCORS?: boolean;
  allowTaint?: boolean;
  [key: string]: any;
}

// 存储相关类型
export interface StorageItem {
  [key: string]: any;
}

// 事件总线事件类型
export type EventBusEvents = {
  sentChat: void;
  updateChatList: ChatMessage[];
  scrollToBottom: void;
  [key: string]: any;
}

// 工具函数类型
export interface FilterLabelFunction {
  (list: any[], value: any): string;
}

export interface RenderTextFunction {
  (text: string, emojiBase64: Record<string, string>): string;
}

// GIF生成相关类型
export interface GifFrame {
  id: string;
  delay: number;
}

export interface GifOptions {
  quality?: number;
  width?: number;
  height?: number;
  workers?: number;
  workerScript?: string;
}

// 文件上传相关类型
export interface UploadFile {
  uid: string;
  name: string;
  status: 'uploading' | 'done' | 'error' | 'removed';
  url?: string;
  response?: any;
  percent?: number;
  originFileObj?: File;
}

// 颜色主题类型
export interface ThemeConfig {
  token: {
    colorPrimary: string;
    [key: string]: any;
  };
}

// Emoji相关类型
export interface EmojiItem {
  key: string;
  value: string;
  base64: string;
}

// 导出所有类型的联合类型，方便使用
export type AllTypes = 
  | User 
  | ChatMessage 
  | Appearance 
  | GenerateConfig 
  | SystemState 
  | ChatState 
  | UserState 
  | TemplateState 
  | ContextMenuState;