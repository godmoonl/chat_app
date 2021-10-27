import React, { useEffect, useState } from "react";
import { dbService} from "../fbase";
import Chat from "../components/Chat";
import ChatFactory from "../components/ChatFactory";
import ReactHtmlParser from "react-html-parser"
import { Cheerio } from "cheerio";

const Home = ({userObj}) => {
    
    const [chats,setChats]=useState([]);
    
    useEffect( ()=>{
        dbService.collection("chats").orderBy('createdAt','desc').onSnapshot(snapshot=>{
            const chatArray=snapshot.docs.map((doc)=>({
                id:doc.id,
                ...doc.data(),
            }));
            setChats(chatArray);
        });
    },[])
return(
    <div className="container">
        <ChatFactory userObj={userObj}/>
        <div style={{marginTop:30}}>
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