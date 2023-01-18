export interface IAttrs {
    [key: string]: string
};

export interface INewElt {
    tag: string,
    className?: string,
    attrs?: IAttrs,
    text?: string
};
