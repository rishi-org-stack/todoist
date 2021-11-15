import SQLite from'react-native-sqlite-storage'
import { User } from './services'

type user ={
    name: string
    password: string
}

export default class Repository {

    constructor(){

    }

    Create (db: SQLite.Transaction, u: User):number{
        db.executeSql('INSERT INTO users (name,password) VALUES (?,?)',
            [u.name,u.password],
            (_,results)=>{
                return (results.insertId);
                
            },
            (_,err)=>console.log(err!==undefined? 'repo create error'+err.message:"ok repo create")
        )
        return 0
    }

    Get(db: SQLite.Transaction, id: number):any{
        // console.log('id:',id);
        // try {
            // let res=''
            // var res:object[]=[]
            db.executeSql('SELECT * FROM users WHERE id=?',
                [id],
                (_,results)=>{
                    console.log("repo:",results.rows.raw()[0]);
                    return (results.rows.raw()[0]     
                    
                    )   
                },
                (_,error)=>console.log(error)
                // (_,_)=>console.log("ok")
            )
        
    }

    Delete(db: SQLite.Transaction, id: number): boolean{
        db.executeSql('SELECT * FROM users WHERE ID=?',
            [id],
            (_,results)=>{
                // results.rows.item
                return results.rowsAffected===1
                
            }
        )
        return false
    }
}