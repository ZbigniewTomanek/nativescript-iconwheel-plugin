import { WheelViewBase } from './wheel-view.common';
import * as application from "tns-core-modules/application";

let listener: com.example.iconwheelview.OnWheelChangedListener;

function initializeChangingListener(): void {
    if (listener)
        return;

    
    @Interfaces([com.example.iconwheelview.OnWheelChangedListener])
    class ChangeListener extends java.lang.Object implements com.example.iconwheelview.OnWheelChangedListener {
        public owner: IconWheelView;

        constructor() {
            super();

            return global.__native(this);
        }

        public onChanged(wheelView: com.example.iconwheelview.WheelView, oldValue: number, newValue: number) {
            const owner = (<any>wheelView).owner;
            
            if (owner) {
                owner.notify({eventName: WheelViewBase.changeEvent, object: owner, 'oldValue': oldValue, 'newValue': newValue})
            }
        }
    }

    listener = new ChangeListener();
}

export class IconWheelView extends WheelViewBase {
    private _androidViewId: number;
    private wheelView:  com.example.iconwheelview.IconWheelView;
    nativeViewProtected: any;

    public createNativeView() {
        initializeChangingListener();
        this.wheelView = new com.example.iconwheelview.IconWheelView(application.android.context)
        this.wheelView.addChangingListener(listener);
        return this.wheelView;
    }
 

    public initNativeView(): void {
        (<any>this.nativeView).owner = this;
        super.initNativeView();
        this._androidViewId = android.view.View.generateViewId();
        this.nativeView.setId(this._androidViewId);
    }
    
    disposeNativeView(): void {
        (<any>this.nativeView).owner = null;
        super.disposeNativeView();
    }
  }

export class VersionNumber {
    get() {
      var PackageManager = android.content.pm.PackageManager;
      var pkg = application.android.context.getPackageManager().getPackageInfo(application.android.context.getPackageName(),
        PackageManager.GET_META_DATA);
      return pkg.versionName;
    }
  }

  export class Toaster {
      makeToast(message: string) {
          const toaster = new com.example.iconwheelview.Toaster();
          toaster.showToast(application.android.context, message);
      }
  }

