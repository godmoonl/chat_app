import React, { useEffect, useState } from "react";
import { dbService } from "../fbase";
import Chat from "../components/Chat";
const Home = ({userObj}) => {
    const [chat,setChat]=useState("");
    const [chats,setChats]=useState([]);

    useEffect( ()=>{
        dbService.collection("chats").onSnapshot(snapshot=>{
            const chatArray=snapshot.docs.map((doc)=>({
                id:doc.id,
                ...doc.data(),
            }));
            setChats(chatArray);
        });
    },[])
    const onSubmit= async (event)=>{
        event.preventDefault();
        await dbService.collection("chats").add({
            text:chat,
            createdAt:Date.now(),
            createrId:userObj.uid,
        });
        setChat("");
    }
    const onChange=(event)=>{
        const{ 
            target:{value},
        }=event;
        setChat(value);
    }
return(
    <div>
        <form onSubmit={onSubmit}>
            <input value={chat} onChange={onChange} type="text" placeholder="What's on your mind?" maxLength={120}/>
            <button type="submit">Chat</button>
        </form>
        <div>
            {chats.map((chat)=>(

                <Chat key={chat.id} chatObj={chat} isOwner={chat.createrId===userObj.uid}/>
                ))}
        </div>
    </div>
    );
};
export default Home;