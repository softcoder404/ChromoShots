const post = {
    id: '1',
    createdAt: '26 July, 2023',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit,  expedita tempore provident magni voluptatum, blanditiis iste dolorem excepturi accusantium recusandae at dolore illo? Aut aliquam doloribus, id culpa nisi nihil',
    user: {
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
    username: 'softcoder404',
    },
    nofComments: 54,
    nofLikes: 154,
    comments: [
        {
            id: '1',
            content: 'Hello World!',
            user: {
                username: 'geeky_adam',
            }
        },
        {
            id: '2',
            content: 'Nice content, Kepp it up!',
            user: {
                username: 'lekanOfMicosoft',
            }
        }
    ]
};

export default post;