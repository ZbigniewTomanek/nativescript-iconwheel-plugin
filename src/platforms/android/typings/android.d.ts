/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module example {
		export module iconwheelview {
			export abstract class AbstractWheelAdapter extends com.example.iconwheelview.adapters.WheelViewAdapter {
				public static class: java.lang.Class<com.example.iconwheelview.AbstractWheelAdapter>;
				public registerDataSetObserver(param0: globalAndroid.database.DataSetObserver): void;
				public notifyDataChangedEvent(): void;
				public unregisterDataSetObserver(param0: globalAndroid.database.DataSetObserver): void;
				public getItem(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
				public getEmptyItem(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup): globalAndroid.view.View;
				public notifyDataInvalidatedEvent(): void;
				public getItemsCount(): number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module example {
		export module iconwheelview {
			export class BuildConfig {
				public static class: java.lang.Class<com.example.iconwheelview.BuildConfig>;
				public static DEBUG: boolean;
				public static LIBRARY_PACKAGE_NAME: string;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module example {
		export module iconwheelview {
			export class IconWheelView extends com.example.iconwheelview.WheelView {
				public static class: java.lang.Class<com.example.iconwheelview.IconWheelView>;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			}
		}
	}
}

declare module com {
	export module example {
		export module iconwheelview {
			export class IconWheelViewAdapter extends com.example.iconwheelview.AbstractWheelAdapter {
				public static class: java.lang.Class<com.example.iconwheelview.IconWheelViewAdapter>;
				public registerDataSetObserver(param0: globalAndroid.database.DataSetObserver): void;
				public unregisterDataSetObserver(param0: globalAndroid.database.DataSetObserver): void;
				public constructor(param0: globalAndroid.content.Context, param1: native.Array<java.lang.Integer>);
				public getItem(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
				public getItemsCount(): number;
				public getEmptyItem(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup): globalAndroid.view.View;
				public constructor();
			}
			export module IconWheelViewAdapter {
				export class ViewHolder {
					public static class: java.lang.Class<com.example.iconwheelview.IconWheelViewAdapter.ViewHolder>;
					public setIcon(param0: globalAndroid.widget.ImageView): void;
					public getIcon(): globalAndroid.widget.ImageView;
				}
			}
		}
	}
}

declare module com {
	export module example {
		export module iconwheelview {
			export class ItemsRange {
				public static class: java.lang.Class<com.example.iconwheelview.ItemsRange>;
				public constructor(param0: number, param1: number);
				public getFirst(): number;
				public getLast(): number;
				public getCount(): number;
				public contains(param0: number): boolean;
				public constructor();
			}
		}
	}
}

declare module com {
	export module example {
		export module iconwheelview {
			export class OnWheelChangedListener {
				public static class: java.lang.Class<com.example.iconwheelview.OnWheelChangedListener>;
				/**
				 * Constructs a new instance of the com.example.iconwheelview.OnWheelChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onChanged(param0: com.example.iconwheelview.WheelView, param1: number, param2: number): void;
				});
				public constructor();
				public onChanged(param0: com.example.iconwheelview.WheelView, param1: number, param2: number): void;
			}
		}
	}
}

declare module com {
	export module example {
		export module iconwheelview {
			export class OnWheelClickedListener {
				public static class: java.lang.Class<com.example.iconwheelview.OnWheelClickedListener>;
				/**
				 * Constructs a new instance of the com.example.iconwheelview.OnWheelClickedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onItemClicked(param0: com.example.iconwheelview.WheelView, param1: number): void;
				});
				public constructor();
				public onItemClicked(param0: com.example.iconwheelview.WheelView, param1: number): void;
			}
		}
	}
}

declare module com {
	export module example {
		export module iconwheelview {
			export class OnWheelScrollListener {
				public static class: java.lang.Class<com.example.iconwheelview.OnWheelScrollListener>;
				/**
				 * Constructs a new instance of the com.example.iconwheelview.OnWheelScrollListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onScrollingStarted(param0: com.example.iconwheelview.WheelView): void;
					onScrollingFinished(param0: com.example.iconwheelview.WheelView): void;
				});
				public constructor();
				public onScrollingFinished(param0: com.example.iconwheelview.WheelView): void;
				public onScrollingStarted(param0: com.example.iconwheelview.WheelView): void;
			}
		}
	}
}

declare module com {
	export module example {
		export module iconwheelview {
			export class Toaster {
				public static class: java.lang.Class<com.example.iconwheelview.Toaster>;
				public showToast(param0: globalAndroid.content.Context, param1: string): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module example {
		export module iconwheelview {
			export class WheelRecycle {
				public static class: java.lang.Class<com.example.iconwheelview.WheelRecycle>;
				public getEmptyItem(): globalAndroid.view.View;
				public clearAll(): void;
				public recycleItems(param0: globalAndroid.widget.LinearLayout, param1: number, param2: com.example.iconwheelview.ItemsRange): number;
				public getItem(): globalAndroid.view.View;
				public constructor(param0: com.example.iconwheelview.WheelView);
			}
		}
	}
}

declare module com {
	export module example {
		export module iconwheelview {
			export class WheelScroller {
				public static class: java.lang.Class<com.example.iconwheelview.WheelScroller>;
				public static MIN_DELTA_FOR_SCROLLING: number;
				public constructor(param0: globalAndroid.content.Context, param1: com.example.iconwheelview.WheelScroller.ScrollingListener);
				public stopScrolling(): void;
				public scroll(param0: number, param1: number): void;
				public setInterpolator(param0: globalAndroid.view.animation.Interpolator): void;
				public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
			}
			export module WheelScroller {
				export class ScrollingListener {
					public static class: java.lang.Class<com.example.iconwheelview.WheelScroller.ScrollingListener>;
					/**
					 * Constructs a new instance of the com.example.iconwheelview.WheelScroller$ScrollingListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onScroll(param0: number): void;
						onStarted(): void;
						onFinished(): void;
						onJustify(): void;
					});
					public constructor();
					public onScroll(param0: number): void;
					public onFinished(): void;
					public onStarted(): void;
					public onJustify(): void;
				}
			}
		}
	}
}

declare module com {
	export module example {
		export module iconwheelview {
			export class WheelView {
				public static class: java.lang.Class<com.example.iconwheelview.WheelView>;
				public addScrollingListener(param0: com.example.iconwheelview.OnWheelScrollListener): void;
				public stopScrolling(): void;
				public scroll(param0: number, param1: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public invalidateWheel(param0: boolean): void;
				public setInterpolator(param0: globalAndroid.view.animation.Interpolator): void;
				public setVisibleItems(param0: number): void;
				public notifyClickListenersAboutClick(param0: number): void;
				public setBottomShadow(param0: globalAndroid.graphics.drawable.GradientDrawable): void;
				public removeClickingListener(param0: com.example.iconwheelview.OnWheelClickedListener): void;
				public constructor(param0: globalAndroid.content.Context);
				public setTopShadow(param0: globalAndroid.graphics.drawable.GradientDrawable): void;
				public setAdapter(param0: com.example.iconwheelview.adapters.WheelViewAdapter): void;
				public notifyChangingListeners(param0: number, param1: number): void;
				public removeChangingListener(param0: com.example.iconwheelview.OnWheelChangedListener): void;
				public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
				public getViewAdapter(): com.example.iconwheelview.adapters.WheelViewAdapter;
				public addClickingListener(param0: com.example.iconwheelview.OnWheelClickedListener): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public setCurrentItem(param0: number, param1: boolean): void;
				public getVisibleItems(): number;
				public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public setCurrentItem(param0: number): void;
				public onDraw(param0: globalAndroid.graphics.Canvas): void;
				public addChangingListener(param0: com.example.iconwheelview.OnWheelChangedListener): void;
				public notifyScrollingListenersAboutEnd(): void;
				public onMeasure(param0: number, param1: number): void;
				public setCenterFilter(param0: globalAndroid.graphics.drawable.Drawable): void;
				public getCurrentItem(): number;
				public removeScrollingListener(param0: com.example.iconwheelview.OnWheelScrollListener): void;
				public setCyclic(param0: boolean): void;
				public isCyclic(): boolean;
				public notifyScrollingListenersAboutStart(): void;
			}
		}
	}
}

declare module com {
	export module example {
		export module iconwheelview {
			export module adapters {
				export abstract class AbstractWheelTextAdapter extends com.example.iconwheelview.AbstractWheelAdapter {
					public static class: java.lang.Class<com.example.iconwheelview.adapters.AbstractWheelTextAdapter>;
					public static TEXT_VIEW_ITEM_RESOURCE: number;
					public static NO_RESOURCE: number;
					public static DEFAULT_TEXT_COLOR: number;
					public static LABEL_COLOR: number;
					public static DEFAULT_TEXT_SIZE: number;
					public context: globalAndroid.content.Context;
					public inflater: globalAndroid.view.LayoutInflater;
					public itemResourceId: number;
					public itemTextResourceId: number;
					public emptyItemResourceId: number;
					public registerDataSetObserver(param0: globalAndroid.database.DataSetObserver): void;
					public setTextColor(param0: number): void;
					public setEmptyItemResource(param0: number): void;
					public configureTextView(param0: globalAndroid.widget.TextView): void;
					public setItemTextResource(param0: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: number);
					public setItemResource(param0: number): void;
					public getItemsCount(): number;
					public setTextSize(param0: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: number, param2: number);
					public getItemTextResource(): number;
					public constructor(param0: globalAndroid.content.Context);
					public getItemText(param0: number): string;
					public constructor();
					public getTextColor(): number;
					public getTextSize(): number;
					public getItem(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
					public unregisterDataSetObserver(param0: globalAndroid.database.DataSetObserver): void;
					public getItemResource(): number;
					public getEmptyItem(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup): globalAndroid.view.View;
					public getEmptyItemResource(): number;
				}
			}
		}
	}
}

declare module com {
	export module example {
		export module iconwheelview {
			export module adapters {
				export class WheelViewAdapter {
					public static class: java.lang.Class<com.example.iconwheelview.adapters.WheelViewAdapter>;
					/**
					 * Constructs a new instance of the com.example.iconwheelview.adapters.WheelViewAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getItemsCount(): number;
						getItem(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
						getEmptyItem(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup): globalAndroid.view.View;
						registerDataSetObserver(param0: globalAndroid.database.DataSetObserver): void;
						unregisterDataSetObserver(param0: globalAndroid.database.DataSetObserver): void;
					});
					public constructor();
					public registerDataSetObserver(param0: globalAndroid.database.DataSetObserver): void;
					public getItemsCount(): number;
					public getItem(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
					public unregisterDataSetObserver(param0: globalAndroid.database.DataSetObserver): void;
					public getEmptyItem(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup): globalAndroid.view.View;
				}
			}
		}
	}
}

//Generics information:

