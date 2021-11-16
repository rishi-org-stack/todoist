import React, { useState } from "react";
import { SQLiteDatabase } from "react-native-sqlite-storage";
import { Group } from "../../services/user/services";

const setGroup = async (db:SQLiteDatabase,u:Group) => {
  
    try {
        await db.transaction(async (tx) => {
            await tx.executeSql(
                "INSERT INTO groups (name,total_todos) VALUES (?,?)",
                [u.name,u.totalTodos]
            );
        })
        console.log('set-Home');
    } catch (error) {
        console.log(error);
    }
  
  }
  
  const deleteGroup= async (db:SQLiteDatabase,id:number) => {
    
    try {
        await db.transaction(async (tx) => {
            await tx.executeSql(
                "DELETE FROM groups WHERE ID=?;",
                [id]
            );
        })
        console.log('delete-Home');
    } catch (error) {
        console.log(error);
    }
  }
  
function useGetGroups(db:SQLiteDatabase) {
    const [groups, setgroups] = useState<any[]>([])
      const getData = () => {
        try {
            db.transaction((tx) => {
              tx.executeSql(
                    "SELECT * FROM groups",
                    [],
                    (tx, results) => {
                      console.log('ok');
                      
                      var len = results.rows.length;
                        if (len > 0) {
                            setgroups(results.rows.raw())
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
      return groups
  }
  
export {
    useGetGroups,setGroup,deleteGroup}



