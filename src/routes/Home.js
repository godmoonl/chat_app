import React, { useEffect, useState } from "react";
import { dbService} from "../fbase";
import Chat from "../components/Chat";
import ChatFactory from "../components/ChatFactory";

const Home = ({userObj}) => {
    
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
 
return(
    <div>
        <ChatFactory userObj={userObj}/>
        <div>
            {chats.map((chat)=>(

                <Chat 
                    key={chat.id} 
                    chatObj={chat} 
                    isOwner={chat.createrId===userObj.uid}/>
                ))}
        </div>
    </div>
    );
};
export default Home;