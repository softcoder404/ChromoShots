export interface IPost {
    id: string | number;
    createdAt: string;
    image?: string;
    images?: string[];
    video?: string;
    description: string;
    user: IUser;
    nOfComments: number;
    nOfLikes: number;
    comments: IComment[];
}


export interface IUser {
    id: string | number;
    username: string;
    image?: string;
    name: string;
    bio?: string;
    posts: IPost[];
    website?: string; 
}

export interface IComment {
    id: string;
    content: string;
    user: IUser;
}