import { Observable } from 'tns-core-modules/data/observable';
import * as app from 'tns-core-modules/application';
import * as dialogs from 'tns-core-modules/ui/dialogs';
import { WheelView } from "./wheel-view";

import { View, Style, Property, CssProperty, EventData, CSSType } from "tns-core-modules/ui/core/view";


@CSSType("IconWhelView")
export abstract class WheelViewBase extends View implements WheelView {
    public static changeEvent = "change";
}

