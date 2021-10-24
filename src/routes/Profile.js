import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { authService, dbService } from "../fbase";

export default ({userObj}) =>{
    const history=useHistory();
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
    useEffect(()=>{
        getMyChats();
    },[])
    return(
        <>
            <button onClick={onLogOutClick}>Log Out</button>
        </>
    )
};