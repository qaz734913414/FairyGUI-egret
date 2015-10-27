declare module fairygui {
    class Controller extends egret.EventDispatcher {
        private _name;
        private _selectedIndex;
        private _previousIndex;
        private _pageIds;
        private _pageNames;
        private _pageTransitions;
        private _playingTransition;
        _parent: GComponent;
        private static _nextPageId;
        constructor();
        name: string;
        parent: GComponent;
        selectedIndex: number;
        setSelectedIndex(value?: number): void;
        previsousIndex: number;
        selectedPage: string;
        setSelectedPage(value: string): void;
        previousPage: string;
        pageCount: number;
        getPageName(index?: number): string;
        addPage(name?: string): void;
        addPageAt(name: string, index?: number): void;
        removePage(name: string): void;
        removePageAt(index?: number): void;
        clearPages(): void;
        getPageIndexById(aId: string): number;
        getPageIdByName(aName: string): string;
        getPageNameById(aId: string): string;
        getPageId(index?: number): string;
        selectedPageId: string;
        oppositePageId: string;
        previousPageId: string;
        setup(xml: any): void;
    }
}
declare module fairygui {
    class Frame {
        rect: egret.Rectangle;
        addDelay: number;
        texture: egret.Texture;
        constructor();
    }
}
declare module fairygui {
    class MovieClip extends egret.DisplayObject {
        interval: number;
        swing: boolean;
        repeatDelay: number;
        private _texture;
        private _needRebuild;
        private _frameRect;
        private _playing;
        private _playState;
        private _frameCount;
        private _frames;
        private _currentFrame;
        private _boundsRect;
        private _start;
        private _end;
        private _times;
        private _endAt;
        private _status;
        private _callback;
        private _callbackObj;
        constructor();
        frames: Array<Frame>;
        frameCount: number;
        boundsRect: egret.Rectangle;
        currentFrame: number;
        playing: boolean;
        setPlaySettings(start?: number, end?: number, times?: number, endAt?: number, endCallback?: Function, callbackObj?: any): void;
        private update();
        private setFrame(frame);
        $render(context: egret.sys.RenderContext): void;
        $measureContentBounds(bounds: egret.Rectangle): void;
    }
}
declare module fairygui {
    class PlayState {
        reachEnding: boolean;
        frameStarting: boolean;
        reversed: boolean;
        repeatedCount: number;
        private _curFrame;
        private _lastTime;
        private _curFrameDelay;
        constructor();
        update(mc: MovieClip): void;
        currentFrame: number;
        rewind(): void;
        reset(): void;
        copy(src: PlayState): void;
    }
}
declare module fairygui {
    class UIContainer extends egret.DisplayObjectContainer implements UIDisplayObject {
        private _owner;
        private _hitArea;
        constructor(owner: GObject);
        owner: GObject;
        hitArea: egret.Rectangle;
        $hitTest(stageX: number, stageY: number): egret.DisplayObject;
    }
}
declare module fairygui {
    interface UIDisplayObject {
        owner: GObject;
    }
}
declare module fairygui {
    class UIImage extends egret.Bitmap implements UIDisplayObject {
        private _owner;
        constructor(owner: GObject);
        owner: GObject;
    }
}
declare module fairygui {
    class UIMovieClip extends MovieClip implements UIDisplayObject {
        private _owner;
        constructor(owner: GObject);
        owner: GObject;
    }
}
declare module fairygui {
    class UISprite extends egret.Sprite implements UIDisplayObject {
        private _owner;
        private _hitArea;
        constructor(owner: GObject);
        owner: GObject;
        hitArea: egret.Rectangle;
        $hitTest(stageX: number, stageY: number): egret.DisplayObject;
    }
}
declare module fairygui {
    class UITextField extends egret.DisplayObjectContainer implements UIDisplayObject {
        private _owner;
        nativeTextField: egret.TextField;
        constructor(owner: GObject);
        owner: GObject;
    }
}
declare module fairygui {
    class DragEvent extends egret.Event {
        stageX: number;
        stageY: number;
        touchPointID: number;
        private _prevented;
        static DRAG_START: string;
        static DRAG_END: string;
        constructor(type: string, stageX?: number, stageY?: number, touchPointID?: number);
        preventDefault(): void;
        isDefaultPrevented(): boolean;
    }
}
declare module fairygui {
    class FocusChangeEvent extends egret.Event {
        static CHANGED: string;
        private _oldFocusedObject;
        private _newFocusedObject;
        constructor(type: string, oldObject: GObject, newObject: GObject);
        oldFocusedObject: GObject;
        newFocusedObject: GObject;
    }
}
declare module fairygui {
    class ItemEvent extends egret.Event {
        itemObject: GObject;
        stageX: number;
        stageY: number;
        static CLICK: string;
        constructor(type: string, itemObject?: GObject, stageX?: number, stageY?: number);
    }
}
declare module fairygui {
    class StateChangeEvent extends egret.Event {
        static CHANGED: string;
        constructor(type: string);
    }
}
declare module fairygui {
    enum ButtonMode {
        Common = 0,
        Check = 1,
        Radio = 2,
    }
    enum AutoSizeType {
        None = 0,
        Both = 1,
        Height = 2,
    }
    enum AlignType {
        Left = 0,
        Center = 1,
        Right = 2,
    }
    enum VertAlignType {
        Top = 0,
        Middle = 1,
        Bottom = 2,
    }
    enum FillType {
        None = 0,
        Scale = 1,
        ScaleFree = 2,
    }
    enum ListLayoutType {
        SingleColumn = 0,
        SingleRow = 1,
        FlowHorizontal = 2,
        FlowVertical = 3,
    }
    enum ListSelectionMode {
        Single = 0,
        Multiple = 1,
        Multiple_SingleClick = 2,
        None = 3,
    }
    enum OverflowType {
        Visible = 0,
        Hidden = 1,
        Scroll = 2,
        Scale = 3,
        ScaleFree = 4,
    }
    enum PackageItemType {
        Image = 0,
        Swf = 1,
        MovieClip = 2,
        Sound = 3,
        Component = 4,
        Misc = 5,
        Font = 6,
        Atlas = 7,
    }
    enum ProgressTitleType {
        Percent = 0,
        ValueAndMax = 1,
        Value = 2,
        Max = 3,
    }
    enum ScrollBarDisplayType {
        Default = 0,
        Visible = 1,
        Auto = 2,
        Hidden = 3,
    }
    enum ScrollType {
        Horizontal = 0,
        Vertical = 1,
        Both = 2,
    }
    enum RelationType {
        Left_Left = 0,
        Left_Center = 1,
        Left_Right = 2,
        Center_Center = 3,
        Right_Left = 4,
        Right_Center = 5,
        Right_Right = 6,
        Top_Top = 7,
        Top_Middle = 8,
        Top_Bottom = 9,
        Middle_Middle = 10,
        Bottom_Top = 11,
        Bottom_Middle = 12,
        Bottom_Bottom = 13,
        Width = 14,
        Height = 15,
        LeftExt_Left = 16,
        LeftExt_Right = 17,
        RightExt_Left = 18,
        RightExt_Right = 19,
        TopExt_Top = 20,
        TopExt_Bottom = 21,
        BottomExt_Top = 22,
        BottomExt_Bottom = 23,
        Size = 24,
    }
    function parseButtonMode(value: string): ButtonMode;
    function parseAutoSizeType(value: string): AutoSizeType;
    function parseAlignType(value: string): AlignType;
    function getAlignTypeString(type: AlignType): string;
    function parseVertAlignType(value: string): VertAlignType;
    function parseFillType(value: string): FillType;
    function parseListLayoutType(value: string): ListLayoutType;
    function parseListSelectionMode(value: string): ListSelectionMode;
    function parseOverflowType(value: string): OverflowType;
    function parsePackageItemType(value: string): PackageItemType;
    function parseProgressTitleType(value: string): ProgressTitleType;
    function parseScrollBarDisplayType(value: string): ScrollBarDisplayType;
    function parseScrollType(value: string): ScrollType;
    function ParseEaseType(value: string): Function;
}
declare module fairygui {
    class GearBase {
        protected _pageSet: PageOptionSet;
        protected _tween: boolean;
        protected _easeType: Function;
        protected _tweenTime: number;
        protected _owner: GObject;
        protected _controller: Controller;
        constructor(owner: GObject);
        controller: Controller;
        getPageSet(): PageOptionSet;
        tween: boolean;
        tweenTime: number;
        easeType: Function;
        setup(xml: any): void;
        protected addStatus(pageId: string, value: string): void;
        protected init(): void;
        apply(): void;
        updateState(): void;
    }
}
declare module fairygui {
    class GearSize extends GearBase {
        private _storage;
        private _default;
        private _tweenValue;
        private _tweener;
        constructor(owner: GObject);
        protected init(): void;
        protected addStatus(pageId: string, value: string): void;
        apply(): void;
        updateState(): void;
    }
}
declare module fairygui {
    class GearXY extends GearBase {
        private _storage;
        private _default;
        private _tweenValue;
        private _tweener;
        constructor(owner: GObject);
        protected init(): void;
        protected addStatus(pageId: string, value: string): void;
        apply(): void;
        updateState(): void;
        updateFromRelations(dx: number, dy: number): void;
    }
}
declare module fairygui {
    class Transition {
        private _name;
        private _owner;
        private _ownerBaseX;
        private _ownerBaseY;
        private _items;
        private _totalTimes;
        private _totalTasks;
        private _playing;
        private _onComplete;
        private _onCompleteObj;
        private _onCompleteParam;
        private _options;
        OPTION_IGNORE_DISPLAY_CONTROLLER: number;
        private FRAME_RATE;
        constructor(owner: GComponent);
        name: string;
        play(onComplete?: Function, onCompleteObj?: any, onCompleteParam?: any, times?: number, delay?: number): void;
        stop(setToComplete?: boolean, processCallback?: boolean): void;
        playing: boolean;
        setValue(label: string, ...args: any[]): void;
        setHook(label: string, callback: Function, thisObj: any): void;
        clearHooks(): void;
        setTarget(label: string, newTarget: GObject): void;
        updateFromRelations(targetId: string, dx: number, dy: number): void;
        private internalPlay(delay);
        private prepareValue(item, toProps, reversed?);
        private startTween(item);
        private __delayCall(item);
        private __delayCall2(item);
        private __tweenStart(item);
        private __tweenUpdate();
        private __tweenComplete(item);
        private __tweenRepeatComplete(item);
        private __playTransComplete(item);
        private checkAllComplete();
        private applyValue(item, value);
        private __shake(trans);
        private __shakeItem(item);
        setup(xml: any): void;
        private decodeValue(type, str, value);
    }
}
declare module fairygui {
    class RelationItem {
        private _owner;
        private _target;
        private _defs;
        private _targetX;
        private _targetY;
        private _targetWidth;
        private _targetHeight;
        constructor(owner: GObject);
        owner: GObject;
        target: GObject;
        add(relationType: number, usePercent: boolean): void;
        remove(relationType?: number): void;
        copyFrom(source: RelationItem): void;
        dispose(): void;
        isEmpty: boolean;
        applyOnSelfResized(dWidth: number, dHeight: number): void;
        private applyOnXYChanged(info, dx, dy);
        private applyOnSizeChanged(info);
        private addRefTarget(target);
        private releaseRefTarget(target);
        private __targetXYChanged(evt);
        private __targetSizeChanged(evt);
        private __targetSizeWillChange(evt);
    }
    class RelationDef {
        affectBySelfSizeChanged: boolean;
        percent: boolean;
        type: number;
        constructor();
        copyFrom(source: RelationDef): void;
    }
}
declare module fairygui {
    class GObject extends egret.EventDispatcher {
        data: any;
        private _x;
        private _y;
        private _width;
        private _height;
        private _pivotX;
        private _pivotY;
        private _alpha;
        private _rotation;
        private _visible;
        private _touchable;
        private _grayed;
        private _draggable;
        private _scaleX;
        private _scaleY;
        private _pivotOffsetX;
        private _pivotOffsetY;
        private _alwaysOnTop;
        private _internalVisible;
        private _focusable;
        private _tooltips;
        private _relations;
        private _group;
        private _gearDisplay;
        private _gearXY;
        private _gearSize;
        private _gearLook;
        private _displayObject;
        private _dragBounds;
        _parent: GComponent;
        _rawWidth: number;
        _rawHeight: number;
        _sourceWidth: number;
        _sourceHeight: number;
        _initWidth: number;
        _initHeight: number;
        _id: string;
        _name: string;
        _packageItem: PackageItem;
        _underConstruct: boolean;
        _constructingData: any;
        _gearLocked: boolean;
        static _gInstanceCounter: number;
        static XY_CHANGED: string;
        static SIZE_CHANGED: string;
        static SIZE_DELAY_CHANGE: string;
        constructor();
        id: string;
        name: string;
        x: number;
        y: number;
        setXY(xv: number, yv: number): void;
        center(restraint?: boolean): void;
        width: number;
        height: number;
        setSize(wv: number, hv: number, ignorePivot?: boolean): void;
        ensureSizeCorrect(): void;
        sourceHeight: number;
        sourceWidth: number;
        initHeight: number;
        initWidth: number;
        actualWidth: number;
        actualHeight: number;
        scaleX: number;
        scaleY: number;
        setScale(sx: number, sy: number): void;
        pivotX: number;
        pivotY: number;
        setPivot(xv: number, yv?: number): void;
        private applyPivot();
        touchable: boolean;
        grayed: boolean;
        enabled: boolean;
        rotation: number;
        normalizeRotation: number;
        alpha: number;
        visible: boolean;
        internalVisible: number;
        finalVisible: boolean;
        alwaysOnTop: number;
        focusable: boolean;
        focused: boolean;
        requestFocus(): void;
        tooltips: string;
        inContainer: boolean;
        onStage: boolean;
        resourceURL: string;
        group: GGroup;
        gearDisplay: GearDisplay;
        gearXY: GearXY;
        gearSize: GearSize;
        gearLook: GearLook;
        relations: Relations;
        addRelation(target: GObject, relationType: number, usePercent?: boolean): void;
        removeRelation(target: GObject, relationType?: number): void;
        displayObject: egret.DisplayObject;
        protected setDisplayObject(value: egret.DisplayObject): void;
        parent: GComponent;
        removeFromParent(): void;
        root: GRoot;
        asCom: GComponent;
        asButton: GButton;
        asLabel: GLabel;
        asProgress: GProgressBar;
        asTextField: GTextField;
        asRichTextField: GRichTextField;
        asTextInput: GTextInput;
        asLoader: GLoader;
        asList: GList;
        asGraph: GGraph;
        asGroup: GGroup;
        asSlider: GSlider;
        asComboBox: GComboBox;
        asMovieClip: GMovieClip;
        text: string;
        dispose(): void;
        addClickListener(listener: Function, thisObj: any): void;
        removeClickListener(listener: Function, thisObj: any): void;
        hasClickListener(): boolean;
        addEventListener(type: string, listener: Function, thisObject: any): void;
        removeEventListener(type: string, listener: Function, thisObject: any): void;
        private _reDispatch(evt);
        draggable: boolean;
        dragBounds: egret.Rectangle;
        startDrag(bounds?: egret.Rectangle, touchPointID?: number): void;
        stopDrag(): void;
        dragging: boolean;
        localToGlobal(x?: number, y?: number, resultPoint?: egret.Point): egret.Point;
        globalToLocal(x?: number, y?: number, resultPoint?: egret.Point): egret.Point;
        getGlobalRect(rect?: egret.Rectangle): egret.Rectangle;
        handleControllerChanged(c: Controller): void;
        protected createDisplayObject(): void;
        protected handleXYChanged(): void;
        protected handleSizeChanged(): void;
        protected handleGrayChanged(): void;
        constructFromResource(pkgItem: PackageItem): void;
        setup_beforeAdd(xml: any): void;
        setup_afterAdd(xml: any): void;
        private static sDragging;
        private static sGlobalDragStart;
        private static sGlobalRect;
        private static sHelperPoint;
        private initDrag();
        private dragBegin(evt);
        private dragEnd();
        private reset();
        private __begin(evt);
        private __end(evt);
        private __moving(evt);
        private __moving2(evt);
        private __end2(evt);
    }
}
declare module fairygui {
    class PackageItem {
        owner: UIPackage;
        type: PackageItemType;
        id: string;
        name: string;
        width: number;
        height: number;
        file: string;
        decoded: boolean;
        scale9Grid: egret.Rectangle;
        scaleByTile: boolean;
        smoothing: boolean;
        texture: egret.Texture;
        pivot: egret.Point;
        interval: number;
        repeatDelay: number;
        swing: boolean;
        frames: Array<Frame>;
        componentData: any;
        sound: egret.Sound;
        bitmapFont: BitmapFont;
        constructor();
        load(): any;
        toString(): string;
    }
}
declare module fairygui {
    class GComponent extends GObject {
        private _boundsChanged;
        private _bounds;
        private _AOTChildCount;
        private _opaque;
        protected _margin: Margin;
        protected _trackBounds: boolean;
        _buildingDisplayList: boolean;
        _children: Array<GObject>;
        _controllers: Array<Controller>;
        _transitions: Array<Transition>;
        _rootContainer: UIContainer;
        _container: egret.DisplayObjectContainer;
        _scrollPane: ScrollPane;
        constructor();
        protected createDisplayObject(): void;
        dispose(): void;
        displayListContainer: egret.DisplayObjectContainer;
        addChild(child: GObject): GObject;
        addChildAt(child: GObject, index?: number): GObject;
        private getInsertPosForAOTChild(target);
        removeChild(child: GObject, dispose?: boolean): GObject;
        removeChildAt(index: number, dispose?: boolean): GObject;
        removeChildren(beginIndex?: number, endIndex?: number, dispose?: boolean): void;
        getChildAt(index?: number): GObject;
        getChild(name: string): GObject;
        getVisibleChild(name: string): GObject;
        getChildInGroup(name: string, group: GGroup): GObject;
        getChildById(id: string): GObject;
        getChildIndex(child: GObject): number;
        setChildIndex(child: GObject, index?: number): void;
        private _setChildIndex(child, oldIndex, index?);
        swapChildren(child1: GObject, child2: GObject): void;
        swapChildrenAt(index1: number, index2?: number): void;
        numChildren: number;
        addController(controller: Controller): void;
        getController(name: string): Controller;
        removeController(c: Controller): void;
        controllers: Array<Controller>;
        childStateChanged(child: GObject): void;
        applyController(c: Controller): void;
        applyAllControllers(): void;
        getTransition(transName: string): Transition;
        isChildInView(child: GObject): boolean;
        scrollPane: ScrollPane;
        opaque: boolean;
        protected updateOpaque(): void;
        protected updateMask(): void;
        protected setupOverflowAndScroll(overflow: OverflowType, scrollBarMargin: Margin, scroll: ScrollType, scrollBarDisplay: ScrollBarDisplayType, flags?: number): void;
        protected handleSizeChanged(): void;
        protected handleGrayChanged(): void;
        setBoundsChangedFlag(): void;
        private __render();
        ensureBoundsCorrect(): void;
        protected updateBounds(): void;
        setBounds(ax: number, ay: number, aw: number, ah?: number): void;
        bounds: egret.Rectangle;
        viewWidth: number;
        viewHeight: number;
        findObjectNear(xValue: number, yValue: number, resultPoint?: egret.Point): egret.Point;
        notifyChildAOTChanged(child: GObject, oldValue: number, newValue?: number): void;
        constructFromResource(pkgItem: PackageItem): void;
        protected constructFromXML(xml: any): void;
        private constructChild(xml);
    }
}
declare module fairygui {
    class GButton extends GComponent {
        protected _titleObject: GObject;
        protected _iconObject: GObject;
        protected _relatedController: Controller;
        private _mode;
        private _selected;
        private _title;
        private _selectedTitle;
        private _icon;
        private _selectedIcon;
        private _sound;
        private _soundVolumeScale;
        private _pageOption;
        private _buttonController;
        private _changeStateOnClick;
        private _linkedPopup;
        private _menuItemGrayed;
        private _down;
        private _over;
        static UP: string;
        static DOWN: string;
        static OVER: string;
        static SELECTED_OVER: string;
        constructor();
        icon: string;
        selectedIcon: string;
        title: string;
        text: string;
        selectedTitle: string;
        titleColor: number;
        sound: string;
        soundVolumeScale: number;
        menuItemGrayed: boolean;
        selected: boolean;
        mode: ButtonMode;
        relatedController: Controller;
        pageOption: PageOption;
        changeStateOnClick: boolean;
        linkedPopup: GObject;
        addStateListener(listener: Function, thisObj: any): void;
        removeStateListener(listener: Function, thisObj: any): void;
        fireClick(downEffect?: boolean): void;
        protected setState(val: string): void;
        handleControllerChanged(c: Controller): void;
        protected constructFromXML(xml: any): void;
        setup_afterAdd(xml: any): void;
        private __rollover(evt);
        private __rollout(evt);
        private __mousedown(evt);
        private __mouseup(evt);
        private __click(evt);
    }
}
declare module fairygui {
    class GComboBox extends GComponent {
        protected _titleObject: GTextField;
        protected _dropdownObject: GComponent;
        protected _list: GList;
        private _visibleItemCount;
        private _items;
        private _values;
        private _itemsUpdated;
        private _selectedIndex;
        private _buttonController;
        private _over;
        private _down;
        constructor();
        text: string;
        titleColor: number;
        visibleItemCount: number;
        items: Array<string>;
        values: Array<string>;
        selectedIndex: number;
        value: string;
        protected setState(val: string): void;
        protected constructFromXML(xml: any): void;
        setup_afterAdd(xml: any): void;
        protected showDropdown(): void;
        private __popupWinClosed(evt);
        private __clickItem(evt);
        private __clickItem2(index);
        private __rollover(evt);
        private __rollout(evt);
        private __mousedown(evt);
        private __mouseup(evt);
    }
}
declare module fairygui {
    class GearAnimation extends GearBase {
        private _storage;
        private _default;
        constructor(owner: GObject);
        protected init(): void;
        protected addStatus(pageId: string, value: string): void;
        apply(): void;
        updateState(): void;
    }
}
declare module fairygui {
    class GearColor extends GearBase {
        private _storage;
        private _default;
        constructor(owner: GObject);
        protected init(): void;
        protected addStatus(pageId: string, value: string): void;
        apply(): void;
        updateState(): void;
    }
}
declare module fairygui {
    class GearDisplay extends GearBase {
        constructor(owner: GObject);
        apply(): void;
    }
}
declare module fairygui {
    class GearLook extends GearBase {
        private _storage;
        private _default;
        private _tweenValue;
        private _tweener;
        constructor(owner: GObject);
        protected init(): void;
        protected addStatus(pageId: string, value: string): void;
        apply(): void;
        updateState(): void;
    }
}
declare module fairygui {
    class GGraph extends GObject {
        private _graphics;
        private _type;
        private _lineSize;
        private _lineColor;
        private _lineAlpha;
        private _fillColor;
        private _fillAlpha;
        private _corner;
        constructor();
        graphics: egret.Graphics;
        drawRect(lineSize: number, lineColor: number, lineAlpha: number, fillColor: number, fillAlpha: number, corner?: Array<number>): void;
        drawEllipse(lineSize: number, lineColor: number, lineAlpha: number, fillColor: number, fillAlpha: number): void;
        clearGraphics(): void;
        private drawCommon();
        replaceMe(target: GObject): void;
        addBeforeMe(target: GObject): void;
        addAfterMe(target: GObject): void;
        setNativeObject(obj: egret.DisplayObject): void;
        private delayCreateDisplayObject();
        protected handleSizeChanged(): void;
        setup_beforeAdd(xml: any): void;
    }
}
declare module fairygui {
    class GGroup extends GObject {
        _updating: boolean;
        _empty: boolean;
        constructor();
        updateBounds(): void;
        moveChildren(dx: number, dy: number): void;
    }
}
declare module fairygui {
    class GImage extends GObject implements IColorGear {
        private _content;
        private _color;
        private _gearColor;
        constructor();
        color: number;
        private applyColor();
        gearColor: GearColor;
        handleControllerChanged(c: Controller): void;
        protected createDisplayObject(): void;
        dispose(): void;
        constructFromResource(pkgItem: PackageItem): void;
        protected handleSizeChanged(): void;
        setup_beforeAdd(xml: any): void;
        setup_afterAdd(xml: any): void;
    }
}
declare module fairygui {
    class GLabel extends GComponent {
        protected _titleObject: GObject;
        protected _iconObject: GObject;
        constructor();
        icon: string;
        title: string;
        text: string;
        titleColor: number;
        editable: boolean;
        protected constructFromXML(xml: any): void;
        setup_afterAdd(xml: any): void;
    }
}
declare module fairygui {
    class GList extends GComponent {
        private _layout;
        private _lineGap;
        private _columnGap;
        private _defaultItem;
        private _autoResizeItem;
        private _selectionMode;
        private _lastSelectedIndex;
        private _pool;
        private _selectionHandled;
        constructor();
        dispose(): void;
        layout: ListLayoutType;
        lineGap: number;
        columnGap: number;
        defaultItem: string;
        autoResizeItem: boolean;
        selectionMode: ListSelectionMode;
        getFromPool(url?: string): GObject;
        returnToPool(obj: GObject): void;
        addChildAt(child: GObject, index?: number): GObject;
        addItem(url?: string): GObject;
        addItemFromPool(url?: string): GObject;
        removeChildAt(index: number, dispose?: boolean): GObject;
        removeChildToPoolAt(index?: number): void;
        removeChildToPool(child: GObject): void;
        removeChildrenToPool(beginIndex?: number, endIndex?: number): void;
        selectedIndex: number;
        getSelection(): Array<number>;
        addSelection(index: number, scrollItToView?: boolean): void;
        removeSelection(index?: number): void;
        clearSelection(): void;
        selectAll(): void;
        selectNone(): void;
        selectReverse(): void;
        handleArrowKey(dir?: number): void;
        private __mouseDownItem(evt);
        private __clickItem(evt);
        private setSelectionOnEvent(item);
        private clearSelectionExcept(obj);
        resizeToFit(itemCount?: number, minSize?: number): void;
        getMaxItemWidth(): number;
        protected handleSizeChanged(): void;
        adjustItemsSize(): void;
        findObjectNear(xValue: number, yValue: number, resultPoint?: egret.Point): egret.Point;
        protected updateBounds(): void;
        setup_beforeAdd(xml: any): void;
    }
}
declare module fairygui {
    class GObjectPool {
        private _pool;
        private _count;
        constructor();
        clear(): void;
        count: number;
        getObject(url: string): GObject;
        returnObject(obj: GObject): void;
    }
}
declare module fairygui {
    class GLoader extends GObject implements IAnimationGear, IColorGear {
        private _gearAnimation;
        private _gearColor;
        private _url;
        private _align;
        private _verticalAlign;
        private _autoSize;
        private _fill;
        private _showErrorSign;
        private _playing;
        private _frame;
        private _color;
        private _contentItem;
        private _contentSourceWidth;
        private _contentSourceHeight;
        private _contentWidth;
        private _contentHeight;
        private _container;
        private _content;
        private _errorSign;
        private _updatingLayout;
        private _loading;
        private _externalLoader;
        private static _errorSignPool;
        constructor();
        protected createDisplayObject(): void;
        dispose(): void;
        url: string;
        align: AlignType;
        verticalAlign: VertAlignType;
        fill: FillType;
        autoSize: boolean;
        playing: boolean;
        frame: number;
        color: number;
        private applyColor();
        showErrorSign: boolean;
        protected loadContent(): void;
        protected loadFromPackage(itemURL: string): void;
        protected loadExternal(): void;
        protected onExternalLoadSuccess(texture: egret.Texture): void;
        protected onExternalLoadFailed(): void;
        private __externalLoadCompleted(evt);
        private __externalLoadFailed(evt);
        private setErrorState();
        private clearErrorState();
        private updateLayout();
        private clearContent();
        gearAnimation: GearAnimation;
        gearColor: GearColor;
        handleControllerChanged(c: Controller): void;
        protected handleSizeChanged(): void;
        setup_beforeAdd(xml: any): void;
        setup_afterAdd(xml: any): void;
    }
}
declare module fairygui {
    class GMovieClip extends GObject implements IAnimationGear, IColorGear {
        private _gearAnimation;
        private _gearColor;
        private _movieClip;
        constructor();
        color: number;
        protected createDisplayObject(): void;
        playing: boolean;
        frame: number;
        gearAnimation: GearAnimation;
        gearColor: GearColor;
        handleControllerChanged(c: Controller): void;
        protected handleSizeChanged(): void;
        constructFromResource(pkgItem: PackageItem): void;
        setup_beforeAdd(xml: any): void;
        setup_afterAdd(xml: any): void;
    }
}
declare module fairygui {
    class GProgressBar extends GComponent {
        private _max;
        private _value;
        private _titleType;
        private _reverse;
        private _titleObject;
        private _aniObject;
        private _barObjectH;
        private _barObjectV;
        private _barMaxWidth;
        private _barMaxHeight;
        private _barMaxWidthDelta;
        private _barMaxHeightDelta;
        private _barStartX;
        private _barStartY;
        constructor();
        titleType: ProgressTitleType;
        max: number;
        value: number;
        update(): void;
        protected constructFromXML(xml: any): void;
        protected handleSizeChanged(): void;
        setup_afterAdd(xml: any): void;
    }
}
declare module fairygui {
    class GTextField extends GObject implements IColorGear {
        protected _textField: egret.TextField;
        protected _font: string;
        protected _fontSize: number;
        protected _align: AlignType;
        protected _verticalAlign: VertAlignType;
        protected _color: number;
        protected _leading: number;
        protected _letterSpacing: number;
        protected _text: string;
        protected _ubbEnabled: boolean;
        private _autoSize;
        private _widthAutoSize;
        private _heightAutoSize;
        private _gearColor;
        private _updatingSize;
        private _sizeDirty;
        private _yOffset;
        private _textWidth;
        private _textHeight;
        private _requireRender;
        private _bitmapFont;
        private _lines;
        private _bitmapPool;
        private static GUTTER_X;
        private static GUTTER_Y;
        constructor();
        protected createDisplayObject(): void;
        dispose(): void;
        text: string;
        font: string;
        fontSize: number;
        color: number;
        align: AlignType;
        verticalAlign: VertAlignType;
        leading: number;
        letterSpacing: number;
        underline: boolean;
        bold: boolean;
        italic: boolean;
        singleLine: boolean;
        stroke: boolean;
        strokeColor: number;
        ubbEnabled: boolean;
        autoSize: AutoSizeType;
        displayAsPassword: boolean;
        ensureSizeCorrect(): void;
        gearColor: GearColor;
        handleControllerChanged(c: Controller): void;
        protected updateTextFormat(): void;
        protected render(): void;
        private __render();
        protected renderNow(updateBounds?: boolean): void;
        private renderWithBitmapFont(updateBounds);
        protected handleXYChanged(): void;
        protected handleSizeChanged(): void;
        protected handleGrayChanged(): void;
        private doAlign();
        setup_beforeAdd(xml: any): void;
        setup_afterAdd(xml: any): void;
    }
    class LineInfo {
        width: number;
        height: number;
        textHeight: number;
        text: string;
        y: number;
        private static pool;
        static borrow(): LineInfo;
        static returns(value: LineInfo): void;
        static returnList(value: Array<LineInfo>): void;
        constructor();
    }
}
declare module fairygui {
    class GRichTextField extends GTextField {
        constructor();
        text: string;
        private __clickLink(evt);
    }
}
declare module fairygui {
    class GRoot extends GComponent {
        private _nativeStage;
        private _modalLayer;
        private _popupStack;
        private _justClosedPopups;
        private _modalWaitPane;
        private _focusedObject;
        private _tooltipWin;
        private _defaultTooltipWin;
        private _focusManagement;
        private _volumeScale;
        private static _inst;
        static touchScreen: boolean;
        static contentScaleFactor: number;
        static touchDown: boolean;
        static ctrlKeyDown: boolean;
        static shiftKeyDown: boolean;
        static mouseX: number;
        static mouseY: number;
        static inst: GRoot;
        constructor();
        nativeStage: egret.Stage;
        setContentScaleFactor(designUIWidth: number, designUIHeight: number): void;
        enableFocusManagement(): void;
        showWindow(win: Window): void;
        hideWindow(win: Window): void;
        hideWindowImmediately(win: Window): void;
        showModalWait(msg?: string): void;
        closeModalWait(): void;
        closeAllExceptModals(): void;
        closeAllWindows(): void;
        getTopWindow(): Window;
        hasModalWindow: boolean;
        modalWaiting: boolean;
        showPopup(popup: GObject, target?: GObject, downward?: any): void;
        togglePopup(popup: GObject, target?: GObject, downward?: any): void;
        hidePopup(popup?: GObject): void;
        hasAnyPopup: boolean;
        private closePopup(target);
        showTooltips(msg: string): void;
        showTooltipsWin(tooltipWin: GObject, position?: egret.Point): void;
        hideTooltips(): void;
        getObjectUnderPoint(globalX: number, globalY: number): GObject;
        focus: GObject;
        volumeScale: number;
        playOneShotSound(sound: egret.Sound, volumeScale?: number): void;
        private adjustModalLayer();
        private __addedToStage(evt);
        private __stageMouseDownCapture(evt);
        private __stageMouseMoveCapture(evt);
        private __stageMouseUpCapture(evt);
        private __winResize(evt);
    }
}
declare module fairygui {
    class Margin {
        left: number;
        right: number;
        top: number;
        bottom: number;
        constructor();
        parse(str: string): void;
        copy(source: Margin): void;
    }
}
declare module fairygui {
    class GTimers {
        private _items;
        private _itemPool;
        private _enumI;
        private _enumCount;
        static inst: GTimers;
        private static FPS24;
        constructor();
        private getItem();
        private findItem(callback, thisObj);
        add(delayInMiniseconds: number, repeat: number, callback: Function, thisObj: any, callbackParam?: any): void;
        callLater(callback: Function, thisObj: any, callbackParam?: any): void;
        callDelay(delay: number, callback: Function, thisObj: any, callbackParam?: any): void;
        callBy24Fps(callback: Function, thisObj: any, callbackParam?: any): void;
        exists(callback: Function, thisObj: any): boolean;
        remove(callback: Function, thisObj: any): void;
        private __timer(advancedTime);
    }
}
declare module fairygui {
    class GScrollBar extends GComponent {
        private _grip;
        private _arrowButton1;
        private _arrowButton2;
        private _bar;
        private _target;
        private _vertical;
        private _scrollPerc;
        private _dragOffset;
        constructor();
        setScrollPane(target: ScrollPane, vertical: boolean): void;
        displayPerc: number;
        scrollPerc: number;
        minSize: number;
        protected constructFromXML(xml: any): void;
        private __gripMouseDown(evt);
        private __gripDragging(evt);
        private __arrowButton1Click(evt);
        private __arrowButton2Click(evt);
        private sHelperPoint;
        private __barMouseDown(evt);
    }
}
declare module fairygui {
    class GSlider extends GComponent {
        private _max;
        private _value;
        private _titleType;
        private _titleObject;
        private _aniObject;
        private _barObjectH;
        private _barObjectV;
        private _barMaxWidth;
        private _barMaxHeight;
        private _barMaxWidthDelta;
        private _barMaxHeightDelta;
        private _gripObject;
        private _clickPos;
        private _clickPercent;
        constructor();
        titleType: ProgressTitleType;
        max: number;
        value: number;
        update(): void;
        private updateWidthPercent(percent);
        protected constructFromXML(xml: any): void;
        protected handleSizeChanged(): void;
        setup_afterAdd(xml: any): void;
        private __gripMouseDown(evt);
        private __gripMouseMove(evt);
        private __gripMouseUp(evt);
    }
}
declare module fairygui {
    class GSwfObject extends GObject implements IAnimationGear {
        _container: UIContainer;
        _content: egret.DisplayObject;
        _playing: boolean;
        _frame: number;
        _gearAnimation: GearAnimation;
        constructor();
        protected createDisplayObject(): void;
        playing: boolean;
        frame: number;
        gearAnimation: GearAnimation;
        protected handleSizeChanged(): void;
        handleControllerChanged(c: Controller): void;
        constructFromResource(pkgItem: PackageItem): void;
    }
}
declare module fairygui {
    class GTextInput extends GTextField {
        constructor();
        dispose(): void;
        editable: boolean;
        maxLength: number;
    }
}
declare module fairygui {
    interface IAnimationGear {
        playing: boolean;
        frame: number;
    }
}
declare module fairygui {
    interface IColorGear {
        color: number;
    }
}
declare module fairygui {
    interface IUISource {
        fileName: string;
        loaded: boolean;
        load(callback: Function, thisObj: any): void;
    }
}
declare module fairygui {
    class PageOption {
        private _controller;
        private _id;
        constructor();
        controller: Controller;
        index: number;
        name: string;
        clear(): void;
        id: string;
    }
}
declare module fairygui {
    class PageOptionSet {
        private _controller;
        private _items;
        constructor();
        controller: Controller;
        add(pageIndex?: number): void;
        remove(pageIndex?: number): void;
        addByName(pageName: string): void;
        removeByName(pageName: string): void;
        clear(): void;
        empty: boolean;
        addById(id: string): void;
        containsId(id: string): boolean;
    }
}
declare module fairygui {
    class PopupMenu {
        protected _contentPane: GComponent;
        protected _list: GList;
        constructor(resourceURL?: string);
        addItem(caption: string, callback?: Function): GButton;
        addItemAt(caption: string, index: number, callback?: Function): GButton;
        addSeperator(): void;
        getItemName(index: number): string;
        setItemText(name: string, caption: string): void;
        setItemVisible(name: string, visible: boolean): void;
        setItemGrayed(name: string, grayed: boolean): void;
        setItemCheckable(name: string, checkable: boolean): void;
        setItemChecked(name: string, checked: boolean): void;
        isItemChecked(name: string): boolean;
        removeItem(name: string): boolean;
        clearItems(): void;
        itemCount: number;
        contentPane: GComponent;
        list: GList;
        show(target?: GObject, downward?: any): void;
        private __clickItem(evt);
        private __clickItem2(evt);
        private __addedToStage(evt);
    }
}
declare module fairygui {
    class Relations {
        private _owner;
        private _items;
        handling: GObject;
        sizeDirty: boolean;
        private static RELATION_NAMES;
        constructor(owner: GObject);
        add(target: GObject, relationType: number, usePercent?: boolean): void;
        addItems(target: GObject, sidePairs: string): void;
        remove(target: GObject, relationType?: number): void;
        contains(target: GObject): boolean;
        clearFor(target: GObject): void;
        clearAll(): void;
        copyFrom(source: Relations): void;
        dispose(): void;
        onOwnerSizeChanged(dWidth: number, dHeight: number): void;
        ensureRelationsSizeCorrect(): void;
        empty: boolean;
        setup(xml: any): void;
    }
}
declare module fairygui {
    class ScrollPane {
        private _owner;
        private _container;
        private _maskHolder;
        private _maskContentHolder;
        private _maskWidth;
        private _maskHeight;
        private _contentWidth;
        private _contentHeight;
        private _scrollType;
        private _scrollSpeed;
        private _mouseWheelSpeed;
        private _margin;
        private _scrollBarMargin;
        private _bouncebackEffect;
        private _touchEffect;
        private _scrollBarDisplayAuto;
        private _vScrollNone;
        private _hScrollNone;
        private _displayOnLeft;
        private _snapToItem;
        private _displayInDemand;
        private _mouseWheelEnabled;
        private _yPerc;
        private _xPerc;
        private _vScroll;
        private _hScroll;
        private static _easeTypeFunc;
        private _throwTween;
        private _tweening;
        private _time1;
        private _time2;
        private _y1;
        private _y2;
        private _yOverlap;
        private _yOffset;
        private _x1;
        private _x2;
        private _xOverlap;
        private _xOffset;
        _isMouseMoved: boolean;
        private _holdAreaPoint;
        private _isHoldAreaDone;
        private _holdArea;
        private _aniFlag;
        private _scrollBarVisible;
        private _hzScrollBar;
        private _vtScrollBar;
        static SCROLL: string;
        constructor(owner: GComponent, scrollType: number, margin: Margin, scrollBarMargin: Margin, scrollBarDisplay: number, flags?: number);
        dispose(): void;
        owner: GComponent;
        bouncebackEffect: boolean;
        touchEffect: boolean;
        scrollSpeed: number;
        snapToItem: boolean;
        percX: number;
        setPercX(sc: number, ani?: boolean): void;
        percY: number;
        setPercY(sc: number, ani?: boolean): void;
        posX: number;
        setPosX(val: number, ani?: boolean): void;
        posY: number;
        setPosY(val: number, ani?: boolean): void;
        isBottomMost: boolean;
        isRightMost: boolean;
        contentWidth: number;
        contentHeight: number;
        viewWidth: number;
        viewHeight: number;
        private getDeltaX(move);
        private getDeltaY(move);
        scrollTop(ani?: boolean): void;
        scrollBottom(ani?: boolean): void;
        scrollUp(speed?: number, ani?: boolean): void;
        scrollDown(speed?: number, ani?: boolean): void;
        scrollLeft(speed?: number, ani?: boolean): void;
        scrollRight(speed?: number, ani?: boolean): void;
        scrollToView(obj: GObject, ani?: boolean): void;
        isChildInView(obj: GObject): boolean;
        setSize(aWidth: number, aHeight: number): void;
        setContentSize(aWidth: number, aHeight: number): void;
        private handleSizeChanged();
        private posChanged(ani);
        private refresh();
        private killTweens();
        private calcYPerc();
        private calcXPerc();
        private onScrolling();
        private onScrollEnd();
        private static sHelperPoint;
        private __mouseDown(evt);
        private __mouseMove(evt);
        private __mouseUp(evt);
        private __rollOver(evt);
        private __rollOut(evt);
        private showScrollBar(val);
        private __showScrollBar(val);
        private __tweenUpdate();
        private __tweenComplete();
        private __tweenUpdate2();
        private __tweenComplete2();
    }
}
declare module fairygui {
    class BitmapFont {
        id: string;
        lineHeight: number;
        ttf: boolean;
        glyphs: any;
        constructor();
    }
}
declare module fairygui {
    class BMGlyph {
        x: number;
        y: number;
        offsetX: number;
        offsetY: number;
        width: number;
        height: number;
        advance: number;
        lineHeight: number;
        channel: number;
        texture: egret.Texture;
        constructor();
    }
}
declare module fairygui {
    class UIConfig {
        constructor();
        static defaultFont: string;
        static windowModalWaiting: string;
        static globalModalWaiting: string;
        static modalLayerColor: number;
        static modalLayerAlpha: number;
        static buttonSound: string;
        static buttonSoundVolumeScale: number;
        static horizontalScrollBar: string;
        static verticalScrollBar: string;
        static defaultScrollSpeed: number;
        static defaultScrollBarDisplay: number;
        static defaultScrollTouchEffect: boolean;
        static defaultScrollBounceEffect: boolean;
        static popupMenu: string;
        static popupMenu_seperator: string;
        static loaderErrorSign: string;
        static tooltipsWin: string;
        static defaultComboBoxVisibleItemCount: number;
    }
}
declare module fairygui {
    class UBBParser {
        private _text;
        private _readPos;
        protected _handlers: any;
        smallFontSize: number;
        normalFontSize: number;
        largeFontSize: number;
        defaultImgWidth: number;
        defaultImgHeight: number;
        static inst: UBBParser;
        constructor();
        protected onTag_URL(tagName: string, end: boolean, attr: string): string;
        protected onTag_IMG(tagName: string, end: boolean, attr: string): string;
        protected onTag_Simple(tagName: string, end: boolean, attr: string): string;
        protected onTag_COLOR(tagName: string, end: boolean, attr: string): string;
        protected onTag_FONT(tagName: string, end: boolean, attr: string): string;
        protected onTag_SIZE(tagName: string, end: boolean, attr: string): string;
        protected onTag_MOVE(tagName: string, end: boolean, attr: string): string;
        protected onTag_FLY(tagName: string, end: boolean, attr: string): string;
        protected getTagText(remove?: boolean): string;
        parse(text: string): string;
    }
}
declare module fairygui {
    class ToolSet {
        constructor();
        static getFileName(source: string): string;
        static startsWith(source: string, str: string, ignoreCase?: boolean): boolean;
        static endsWith(source: string, str: string, ignoreCase?: boolean): boolean;
        static trim(targetString: string): string;
        static trimLeft(targetString: string): string;
        static trimRight(targetString: string): string;
        static convertToHtmlColor(argb: number, hasAlpha?: boolean): string;
        static convertFromHtmlColor(str: string, hasAlpha?: boolean): number;
        static isUIObject(obj: egret.DisplayObject): boolean;
        static displayObjectToGObject(obj: egret.DisplayObject): GObject;
        static findChildNode(xml: any, name: string): any;
        static encodeHTML(str: string): string;
        static defaultUBBParser: UBBParser;
        static parseUBB(text: string): string;
    }
}
declare module fairygui {
    class UIObjectFactory {
        static packageItemExtensions: any;
        private static loaderExtension;
        constructor();
        static setPackageItemExtension(url: string, type: any): void;
        static setLoaderExtension(type: any): void;
        static newObject(pi: PackageItem): GObject;
        static newObject2(type: string): GObject;
    }
}
declare module fairygui {
    class UIPackage {
        private _id;
        private _name;
        private _basePath;
        private _items;
        private _itemsById;
        private _itemsByName;
        private _resKey;
        private _resData;
        private _customId;
        private _sprites;
        static _constructing: number;
        private static _packageInstById;
        private static _packageInstByName;
        private static _bitmapFonts;
        private static sep0;
        private static sep1;
        private static sep2;
        private static sep3;
        constructor();
        static getById(id: string): UIPackage;
        static getByName(name: string): UIPackage;
        static addPackage(resKey: string): UIPackage;
        static removePackage(packageId: string): void;
        static createObject(pkgName: string, resName: string, userClass?: any): GObject;
        static createObjectFromURL(url: string, userClass?: any): GObject;
        static getItemURL(pkgName: string, resName: string): string;
        static getItemByURL(url: string): PackageItem;
        static getBitmapFontByURL(url: string): BitmapFont;
        private create(resKey);
        private loadPackage();
        dispose(): void;
        id: string;
        name: string;
        customId: string;
        createObject(resName: string, userClass?: any): GObject;
        createObject2(pi: fairygui.PackageItem, userClass?: any): GObject;
        getItem(itemId: string): PackageItem;
        getItemAssetByName(resName: string): any;
        getItemAsset(item: PackageItem): any;
        private createSpriteTexture(sprite);
        private createSubTexture(atlasTexture, uvRect);
        private loadMovieClip(item);
        private loadFont(item);
    }
}
declare module fairygui {
    class Window extends GComponent {
        private _contentPane;
        private _modalWaitPane;
        private _closeButton;
        private _dragArea;
        private _contentArea;
        private _frame;
        private _modal;
        private _uiSources;
        private _inited;
        private _loading;
        protected _requestingCmd: number;
        constructor();
        addUISource(source: IUISource): void;
        contentPane: GComponent;
        frame: GComponent;
        closeButton: GObject;
        dragArea: GObject;
        contentArea: GObject;
        show(): void;
        showOn(root: GRoot): void;
        hide(): void;
        hideImmediately(): void;
        center(restraint?: boolean): void;
        centerOn(r: GRoot, restraint?: boolean): void;
        toggleStatus(): void;
        isShowing: boolean;
        isTop: boolean;
        modal: boolean;
        bringToFront(): void;
        showModalWait(requestingCmd?: number): void;
        protected layoutModalWaitPane(): void;
        closeModalWait(requestingCmd?: number): boolean;
        modalWaiting: boolean;
        init(): void;
        protected onInit(): void;
        protected onShown(): void;
        protected onHide(): void;
        protected doShowAnimation(): void;
        protected doHideAnimation(): void;
        private __uiLoadComplete();
        private _init();
        dispose(): void;
        protected closeEventHandler(evt: egret.Event): void;
        private __onShown(evt);
        private __onHidden(evt);
        private __mouseDown(evt);
        private __dragStart(evt);
    }
}