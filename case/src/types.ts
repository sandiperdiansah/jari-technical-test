export type IFruit = {
    fruitId: number;
    fruitName: string;
    fruitType: "IMPORT" | "LOCAL";
    stock: number;
};

export type IComment = {
    commentId: number;
    commentContent: string;
    replies?: IComment[];
};
