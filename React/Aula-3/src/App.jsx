import { React } from "react";
import "./App.css";
import UserCard from "./UserCard";
const users = [
  {
    nome: "Fernando",
    idade: 23,
    cidade: "Campo Grande",
    email: "fernando@gmail.com",
    isPremium: true
  },
  {
    nome: "jorge",
    idade: 23,
    cidade: "NY",
    email: "jorge@gmail.com",
    isPremium: false
  },
  {
    nome: "Gabriel",
    idade: 23,
    cidade: "São Paulo",
    email: "gabriel@gmail.com",
    isPremium: true
  },
]
function App() {
  return (
    <div className = 'users-container'>
      {users.map((user) =>{
        return <UserCard user={user} />
      })}
    </div>
  );
}

export default App;
