import React from "react";
import { useState } from "react";
import { SQLiteDatabase } from "react-native-sqlite-storage";
import { Todo, User } from "../../services/user/services";

const setTodo = async (db:SQLiteDatabase,u:Todo) => {
  
    try {
        await db.transaction(async (tx) => {
            await tx.executeSql(
                "INSERT INTO todos (head, completed, category) VALUES (?,?,?)",
                [u.head, 0, u.category]
            );
        })
        console.log('set-Home');
    } catch (error) {
        console.log(error);
    }
  
  }
  
  const deleteTodo = async (db:SQLiteDatabase,id:number) => {
    
    try {
        await db.transaction(async (tx) => {
            await tx.executeSql(
                "DELETE FROM todos WHERE ID=?;",
                [id]
            );
        })
        console.log('delete-Home');
    } catch (error) {
        console.log(error);
    }
  }
  
function useGetTodos(db:SQLiteDatabase,category :string) {
    const [user, setuser] = useState<any[]>([])
      const getData = () => {
        try {
            db.transaction((tx) => {
              tx.executeSql(
                    "SELECT * FROM todos WHERE category=?",
                    [category],
                    (tx, results) => {
                      console.log('ok');
                      
                      var len = results.rows.length;
                        if (len > 0) {
                            setuser(results.rows.raw())
                        }
                    }
                )
            })
        } catch (error) {
            console.log(error);
        }
    }
    React.useEffect(()=>{
      getData()
    },[])
      return user
  }
  
export {
    useGetTodos,setTodo,deleteTodo
}