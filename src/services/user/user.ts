import { Repo, User } from "./services";
import SQLite from'react-native-sqlite-storage'
import { Use } from "react-native-svg";


export default class UserService {

    private repo!:Repo
    private db!: SQLite.SQLiteDatabase
    constructor(db:SQLite.SQLiteDatabase, repo: Repo) {
        this.repo=repo;
        this.db=db;
    }

    // Create (user: User):User{
    //         this.db.transaction((tx)=>{
    //             let insertedID = this.repo.Create(tx, user)
    //             // user = this.repo.Get(tx,insertedID)
    //             return user
    //     })
    //     return user
    // }

    // Get ( id: number):Object{
    //     let res : object={name:"sevice"}
        
    //         this.db.transaction((tx)=>{
    //             res = this.repo.Get(tx,id)
    //             // return user
    //          })
        
    //     return res
    // }

    // Delete ( id: number):boolean{
    //     this.db.transaction((tx)=>{
    //         let user = this.repo.Delete(tx,id)
    //         return user
    //      })
    //      return false
    // }
////Partion
    Create (user: User):number{
        this.db.transaction((tx)=>{
            tx.executeSql('INSERT INTO users (name,password) VALUES (?,?)',
                [user.name,user.password],
                (_,results)=>{
                    return (results.insertId);
                    
                },
                (_,err)=>console.log(err!==undefined? 'repo create error'+err.message:"ok repo create")
            )
        })
        return 0

    }
}