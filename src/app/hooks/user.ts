import React, { useState } from 'react'
import SQLite, { SQLiteDatabase } from 'react-native-sqlite-storage'
import { User, Todo } from '../../services/user/services'

function useGetConnection():SQLiteDatabase{
    const [dbRes, setdb] = useState<SQLiteDatabase>()

    React.useEffect( () => {
        const db =  SQLite.openDatabase({
            name:"todoist",
            location:'default'
          },()=>{})
          setdb(db)
        
    }, [])

    return dbRes!
}

function useMigration(db :SQLiteDatabase){
  const createTable = () => {
    db.transaction((tx) => {
        tx.executeSql(
            "CREATE TABLE IF NOT EXISTS "
            + "users "
            + "(ID INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, password TEXT);"
          )
      })

      db.transaction((tx) => {
        tx.executeSql(
            "CREATE TABLE IF NOT EXISTS "
            + "todos "
            + "(ID INTEGER PRIMARY KEY AUTOINCREMENT, head TEXT, completed INTEGER, category INTEGER);"
          )
      })
  }
    React.useEffect(()=>{
        createTable()
        
    },[])
}

function useMigDown(db:SQLiteDatabase){
  const dropTable = () => {
    db.transaction((tx) => {
        tx.executeSql(
            "DROP  TABLE IF EXISTS users "
        )

        tx.executeSql(
          "DROP  TABLE IF EXISTS todos "
      )
    })
  }
  React.useEffect(()=>{
    dropTable()
  },[])
}




const setData = async (db:SQLiteDatabase,u:User) => {
  
  try {
      await db.transaction(async (tx) => {
          await tx.executeSql(
              "INSERT INTO users (name, password) VALUES (?,?)",
              [u.name, u.password]
          );
      })
      console.log('set-Home');
  } catch (error) {
      console.log(error);
  }

}

const deleteData = async (db:SQLiteDatabase,id:number) => {
  
  try {
      await db.transaction(async (tx) => {
          await tx.executeSql(
              "DELETE FROM users WHERE ID=?;",
              [id]
          );
      })
      console.log('delete-Home');
  } catch (error) {
      console.log(error);
  }
}

function useGetUser(db:SQLiteDatabase,id :number) {
  const [user, setuser] = useState()
    const getData = () => {
      try {
          db.transaction((tx) => {
            tx.executeSql(
                  "SELECT * FROM users WHERE ID=?",
                  [id],
                  (tx, results) => {
                    console.log('ok');
                    
                    var len = results.rows.length;
                      if (len > 0) {
                          setuser(results.rows.item(0))
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




export{
    useGetConnection,
    useMigration,
    useMigDown,
    useGetUser,
    setData,
    deleteData
    
}