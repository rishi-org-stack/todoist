import SQLite from'react-native-sqlite-storage'

interface Repo {
    Create: (db: SQLite.Transaction, user: User)=>number
     Get: (db: SQLite.Transaction, id: number)=>any
    Delete: (db: SQLite.Transaction, id: number)=>boolean
}

interface Service {
    Create: (u:User)=>number
    // Get:  (id: number)=>object
    // Delete: (id: number)=>boolean
}

class User {
    public name!:string
    public password!:string
    constructor(name: string, passord: string) {
        this.name=name
        this.password=passord
    }
}

class Todo {
    public head!:string
    public group!:string
    public completed!:number
    constructor(head: string, completed: number, category: string) {
        this.head=head
        this.completed=completed
        this.group=category
    }
}
class Group {
    public name!:string;
    public totalTodos!:number
    public todos!:Todo[]|any[]
    constructor(name: string) {
        this.name=name
        this.totalTodos=0
        this.todos=[]
    }
}
export type {
    Repo,
    Service
};

export{
    User,
    Todo,Group

}

