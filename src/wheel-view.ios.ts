import { WheelViewBase } from './wheel-view.common';

export class IconWheelView extends WheelViewBase {

}

export class VersionNumber {
    get () {
        var version = NSBundle.mainBundle.objectForInfoDictionaryKey("CFBundleShortVersionString");
        return version;
    }
}