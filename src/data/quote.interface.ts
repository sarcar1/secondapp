export interface Quote {
    id: string,
    person: string,
    text: string,
    default?: boolean,
    send?: boolean,
    category?: string
}

export type CategoryGroup = {
    category: string,
    quotes: Quote[],
    icon: string
};
