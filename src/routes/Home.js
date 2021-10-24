import React, { useEffect, useState } from "react";
import { dbService, storageService } from "../fbase";
import Chat from "../components/Chat";
import {v4 as uuidv4 } from 'uuid';

const Home = ({userObj}) => {
    const [chat,setChat]=useState("");
    const [chats,setChats]=useState([]);
    const [attachment, setAttachment]=useState("");
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
        let attachmentUrl="";
       if(attachment!==""){
            const attachmentRef=storageService.ref().child(`${userObj.uid}/${uuidv4()}`);
            const response=await attachmentRef.putString(attachment,"data_url");
            attachmentUrl = await response.ref.getDownloadURL();
       }
        const chatObj={
            text:chat,
            createdAt:Date.now(),
            createrId:userObj.uid,
            attachmentUrl,
        }
        await dbService.collection("chats").add(chatObj);
        setChat("");
        setAttachment("");
    }
    const onChange=(event)=>{
        const{ 
            target:{value},
        }=event;
        setChat(value);
    }
    const onFileChange=(event)=>{
        const {
            target:{files},
        }=event;
        const theFile=files[0];
        const reader = new FileReader();
        reader.onloadend = (finishedEvent)=>{
            const {
                currentTarget: {result}
            }=finishedEvent;
            setAttachment(result);
        }
        reader.readAsDataURL(theFile);
    }
    const onClearAttachment=(event)=>setAttachment(null);
return(
    <div>
        <form onSubmit={onSubmit}>
            <input value={chat} onChange={onChange} type="text" placeholder="What's on your mind?" maxLength={120}/>
            <input type="file" accpet="image/*" onChange={onFileChange}/>
            <button type="submit">Chat</button>
            {attachment && 
                <div>
                    <img src={attachment} width="50px" height="50px"/>
                    <button onClick={onClearAttachment}>clear</button>
                </div>
            }
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