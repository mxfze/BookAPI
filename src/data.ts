export const data: Data = {
    report: [
        {
            "id": "9f4a7d28-1a1b-449a-bcf4-85270038b9b5",
            "book": "Oliver Twist"
        },
        {
            "id": "acd97bcc-782d-4493-9a56-0366abcaebac",
            "book": "A Christmas Carol"
        },
        {
            "id": "12cbd2d2-1953-419f-ba0b-e8a71b253312",
            "book": "Atomic Habits"
        },
        {
            "id": "67b82116-f63b-462b-ae5a-e92ccf2530f9",
            "book": "Harry Potter"
        }
    ],
}

interface Data {
    report: {
        id: string;
        book: string
    }[];
}

