import { Common } from './wheel-view.common';
export declare class WheelView extends Common {
  // define your typings manually
  // or..
  // take the ios or android .d.ts files and copy/paste them here
}

export declare class VersionNumber {
  get(): string;
}

export declare class Toaster {
  makeToast(message: string);
}

export declare class IconWheelView {
  public getCurrentItem(): number;
}