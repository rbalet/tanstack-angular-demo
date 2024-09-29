export interface Session {
  // @ToDo
}

export interface Todo {
  id: number
  title: string
  type?: 'todo' | 'doing' | 'done'
}
