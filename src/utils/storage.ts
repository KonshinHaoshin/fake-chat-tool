import { get, set, del, createStore } from 'idb-keyval';

// 创建自定义的 IndexedDB 存储对象
const dbName = "WechatTool";
const storeName = "PiniaDB";
const customDB = createStore(dbName, storeName);

export interface StorageInterface {
  getItem(key: string): Promise<any>;
  setItem(key: string, value: any): Promise<void>;
  removeItem(key: string): Promise<void>;
}

export const indexedDBStorage: StorageInterface = {
  async getItem(key: string): Promise<any> {
    return (await get(key, customDB)) || null;
  },
  async setItem(key: string, value: any): Promise<void> {
    await set(key, value, customDB);
  },
  async removeItem(key: string): Promise<void> {
    await del(key, customDB);
  }
}; 