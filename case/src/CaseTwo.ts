import type { IComment } from "@/types";

const comments: IComment[] = [
    {
        commentId: 1,
        commentContent: "Hai",
        replies: [
            {
                commentId: 11,

                commentContent: "Hai juga",
                replies: [
                    {
                        commentId: 111,
                        commentContent: "Haai juga hai jugaa",
                    },
                    {
                        commentId: 112,
                        commentContent: "Haai juga hai jugaa",
                    },
                ],
            },
            {
                commentId: 12,
                commentContent: "Hai juga",
                replies: [
                    {
                        commentId: 121,
                        commentContent: "Haai juga hai jugaa",
                    },
                ],
            },
        ],
    },
    {
        commentId: 2,
        commentContent: "Halooo",
    },
];

export class CaseTwo {
    // case:  Buatlah fungsi untuk menghitung total komentar yang ada, termasuk semua balasan komentar. Berdasarkan data di atas, total komentar adalah 7 komentar.
    public countComments(commentsList: IComment[] = comments): number {
        let count = 0;
        commentsList.forEach((comment) => {
            count += 1;
            if (comment.replies) {
                count += this.countComments(comment.replies);
            }
        });
        return count;
    }
}
