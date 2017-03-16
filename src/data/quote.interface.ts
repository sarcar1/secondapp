export interface Quote {
    id: string,
    person: string,
    text: string,
    default?: boolean
}

export type CategoryGroup = {
    category: string,
    quotes: Quote[],
    icon: string
};
