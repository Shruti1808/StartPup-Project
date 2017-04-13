function _window():any{
    return window;
}

export class WindowReference {
    public static get():any{
        return _window();
    }
}
