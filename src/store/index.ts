import Taro from '@tarojs/taro'
import { create } from 'zustand'

interface IStore {
  token: string | null
  tabKey?: string
  setTabKey: (tabKey?: string) => void
  setToken: (token: string) => void
  clearToken: () => void
}

const KEY_TOKEN = 'token'

export const useStore = create<IStore>((set) => ({
  token: Taro.getStorageSync(KEY_TOKEN),
  setTabKey: (tabKey) => set((state) => ({ ...state, tabKey })),
  setToken: (token) => set((state) => ({ ...state, token })),
  clearToken: () => set((state) => ({ ...state, token: null })),
}))

export const unsubscribeStore = useStore.subscribe((state: IStore) => {
  if (state.token) {
    Taro.setStorageSync(KEY_TOKEN, state.token)
  } else {
    Taro.removeStorageSync(KEY_TOKEN)
  }
})
