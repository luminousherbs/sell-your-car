export const openings = [
    {
        text: "hi is this available",
        userResponses: [
            {
                text: "yes",
                state: "available1",
            },
            {
                text: "no",
                state: "unavailable1",
            },
        ],
    },
    {
        text: "whats the lowest price you would do?",
        userResponses: [
            {
                text: "$1000",
                state: "dropprice1",
            },
            {
                text: "$2000",
                state: "dropprice2",
            },
        ],
    },
];

export const replies = {
    available1: {
        text: "ok i'll buy it now",
        userResponses: [
            {
                text: "cool",
                state: "sell",
            },
            {
                text: "actually no",
                state: "unavailable1",
            },
        ],
    },

    unavailable1: {
        text: "i'll do it for $2000",
        userResponses: [
            {
                text: "i already sold it",
                state: "alreadysold",
            },
            {
                text: "ok sure",
                state: "sell",
            },
        ],
    },

    dropprice1: {
        text: "ok",
        userResponses: [
            {
                text: "cool",
                state: "sell",
            },
            {
                text: "would you do $2000",
                state: "dropprice2",
            },
        ],
    },

    dropprice2: {
        text: "bit steep",
        userResponses: [
            {
                text: "final offer",
                state: "finaloffer",
            },
            {
                text: "i can do $1000",
                state: "dropprice1",
            },
        ],
    },
};

// ideas
// trying to pick up item at wrong time
//  asking how much is delivery after you confirmed you don't do delivery
//
