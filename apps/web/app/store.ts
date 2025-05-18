import { create } from 'zustand';

export interface ImageInfo {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

export interface ImageStore {
  imageInfo: ImageInfo | null;
  setImageInfo: (info: ImageInfo) => void;
}

export const useImageStore = create<ImageStore>((set) => ({
  imageInfo: null,
  setImageInfo: (info) => set({ imageInfo: info }),
})); 