export type UserProps = {
    first_name: string,
    second_name: string,
    display_name?: string,
    login: string,
    email: string,
    password: string,
    phone: string,
    avatar?: string
    id?: number
  };

export type ChatTokenProps = {
    id: number,
    token: string
}

export type ChatsProps = {

    id: number,
    title: string,
    avatar: string,
    created_by: number,
    unread_count: number,
    last_message: {
      user: UserProps,
      time: string,
      content: string,
      id: number
    }
}

