import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/app/nav/stack';
import SQLite,{ SQLiteDatabase } from "react-native-sqlite-storage";
import {useMigration } from './src/app/hooks/user';
import { User } from './src/services/user/services';

const db = SQLite.openDatabase(
  {
      name: 'todoist',
      location: 'default',
  },
  () => { },
  error => { console.log(error) }
);


const App = () => {
  useMigration(db)
  // useMigDown(db)
//   const createTable = () => {
//     db.transaction((tx) => {
//         tx.executeSql(
//             "CREATE TABLE IF NOT EXISTS "
//             + "users "
//             + "(ID INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, password TEXT);"
//         )
//     })
//   }

//   const dropTable = () => {
//     db.transaction((tx) => {
//         tx.executeSql(
//             "DROP TABLE IF EXISTS "
//             + "users "
//             // + "(ID INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, age INTEGER);"
//         )
//     })
//   }

//   const getData = () => {
//     try {
//         db.transaction((tx) => {
//           console.log('ok');

//           tx.executeSql(
            
//                 "SELECT * FROM users WHERE ID= ?",
//                 [3],
//                 (tx, results) => {
//                   console.log('ok');
                  
//                   var len = results.rows.length;
//                     if (len > 0) {  
//                       console.log(results.rows.item(0));
//                     }
//                 }
//             )
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }



// const setData = async (db:SQLiteDatabase,u:User) => {
  
//       try {
//           await db.transaction(async (tx) => {
//               await tx.executeSql(
//                   "INSERT INTO users (name, password) VALUES (?,?)",
//                   [u.name, u.password]
//               );
//           })
//           console.log('set-Home');
//       } catch (error) {
//           console.log(error);
//       }
  
// }
  return (
    <NavigationContainer>
      <Router/>
  </NavigationContainer>
  )
}


export default App;