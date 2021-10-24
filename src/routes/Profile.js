import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { authService, dbService } from "../fbase";

export default ({refreshUser, userObj}) =>{
    const history=useHistory();
    const [newDisplayName, setNewDisplayName]=useState(userObj.displayName);
    const onLogOutClick=()=>{
        authService.signOut();
        history.push("/");
    };
    const getMyChats=async()=>{
        const chats = await dbService
            .collection("chats")
            .where("creatorId","==",userObj.uid)
            .orderBy("createdAt")
            .get();
    }
    const onChange=(event)=>{
        const{
            target:{value}
        }=event
        setNewDisplayName(value);
    }
    const onSubmit=async(event)=>{
        event.preventDefault();
        if(userObj.displayName!==newDisplayName){
           await userObj.updateProfile({
               displayName:newDisplayName,
            });
            refreshUser();
        }
    
    }
    useEffect(()=>{
        getMyChats();
    },[])
    return(
        <>
        <form onSubmit={onSubmit}>
            <input 
                onChange={onChange} 
                type="text" 
                placeholder="Display name"
                value={newDisplayName}/>
            <input type="submit" value="Update Profile"/>
        </form>
            <button onClick={onLogOutClick}>Log Out</button>
        </>
    )
};