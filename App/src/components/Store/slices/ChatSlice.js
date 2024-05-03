import { createSlice } from "@reduxjs/toolkit";
import { socket } from "../../../App";




const initialState = {
    mySocketData: null,
    selectedChatindex:null,
    // selectedChat:{
    //     user:"User1",
    //     socketId:"test",
    //     messages:[
    //         { "sender": "User1", "recipient": "User2", "message": "Hey, how are you?", "timestamp": "2024-04-26T08:00:00Z" },
    //         { "sender": "User2", "recipient": "User1", "message": "Hi User1! I'm doing well, thanks for asking.", "timestamp": "2024-04-26T08:05:00Z" },
    //         { "sender": "User1", "recipient": "User2", "message": "That's great to hear! What have you been up to lately? I've been working on a new project at work and it's been keeping me busy.", "timestamp": "2024-04-26T08:10:00Z" },
    //         { "sender": "User2", "recipient": "User1", "message": "Wow, sounds interesting! I've been busy with my studies lately.", "timestamp": "2024-04-26T08:15:00Z" },
    //         { "sender": "User1", "recipient": "User2", "message": "What are you studying?", "timestamp": "2024-04-26T08:20:00Z" },
    //         { "sender": "User2", "recipient": "User1", "message": "I'm studying computer science. It's challenging but I enjoy it.", "timestamp": "2024-04-26T08:25:00Z" },
    //         { "sender": "User2", "recipient": "User1", "message": "I'm studying computer science. It's challenging but I enjoy it.", "timestamp": "2024-04-26T08:25:00Z" },
    //         { "sender": "User2", "recipient": "User1", "message": "I'm studying computer science. It's challenging but I enjoy it.", "timestamp": "2024-04-26T08:25:00Z" },
    //         { "sender": "User2", "recipient": "User1", "message": "I'm studying computer science. It's challenging but I enjoy it.", "timestamp": "2024-04-26T08:25:00Z" },
    //         { "sender": "User2", "recipient": "User1", "message": "I'm studying computer science. It's challenging but I enjoy it.", "timestamp": "2024-04-26T08:25:00Z" },
    //         { "sender": "User2", "recipient": "User1", "message": "I'm studying computer science. It's challenging but I enjoy it.", "timestamp": "2024-04-26T08:25:00Z" },
    //         { "sender": "User2", "recipient": "User1", "message": "I'm studying computer science. It's challenging but I enjoy it.", "timestamp": "2024-04-26T08:25:00Z" },
    //         { "sender": "User2", "recipient": "User1", "message": "I'm studying computer science. It's challenging but I enjoy it.", "timestamp": "2024-04-26T08:25:00Z" },
    //         { "sender": "User2", "recipient": "User1", "message": "I'm studying computer science. It's challenging but I enjoy it.", "timestamp": "2024-04-26T08:25:00Z" },
    //         { "sender": "User2", "recipient": "User1", "message": "I'm studying computer science. It's challenging but I enjoy it.", "timestamp": "2024-04-26T08:25:00Z" },
    //         { "sender": "User1", "recipient": "User2", "message": "That's cool! I've always been interested in coding.", "timestamp": "2024-04-26T08:30:00Z" },
    //         { "sender": "User2", "recipient": "User1", "message": "You should give it a try! It's a valuable skill to have.", "timestamp": "2024-04-26T08:35:00Z" },
    //         { "sender": "User1", "recipient": "User2", "message": "I might consider it in the future. Right now, I'm focusing on my current job.", "timestamp": "2024-04-26T08:40:00Z" },
    //         { "sender": "User2", "recipient": "User1", "message": "That's understandable. What do you do for work?", "timestamp": "2024-04-26T08:45:00Z" },
    //         { "sender": "User1", "recipient": "User2", "message": "I'm a graphic designer at a marketing agency.", "timestamp": "2024-04-26T08:50:00Z" },
    //         { "sender": "User2", "recipient": "User1", "message": "That's cool! I've always been interested in design.", "timestamp": "2024-04-26T08:55:00Z" },
    //         { "sender": "User1", "recipient": "User2", "message": "It's a fun field to be in. What about you? Any hobbies besides studying?", "timestamp": "2024-04-26T09:00:00Z" },
    //         { "sender": "User2", "recipient": "User1", "message": "I enjoy playing video games in my free time.", "timestamp": "2024-04-26T09:05:00Z" },
    //         { "sender": "User1", "recipient": "User2", "message": "Nice! What games do you play?", "timestamp": "2024-04-26T09:10:00Z" },
    //         { "sender": "User2", "recipient": "User1", "message": "I'm currently playing a lot of RPGs and strategy games.", "timestamp": "2024-04-26T09:15:00Z" },
    //         { "sender": "User1", "recipient": "User2", "message": "Those are fun genres. I used to play a lot of RPGs too.", "timestamp": "2024-04-26T09:20:00Z" },
    //         { "sender": "User2", "recipient": "User1", "message": "We should play together sometime!", "timestamp": "2024-04-26T09:25:00Z" },
    //         { "sender": "User1", "recipient": "User2", "message": "That would be awesome! Let's exchange gamer tags.", "timestamp": "2024-04-26T09:30:00Z" },
    //         { "sender": "User2", "recipient": "User1", "message": "Sure, I'll send you mine after this chat.", "timestamp": "2024-04-26T09:35:00Z" },
    //         { "sender": "User1", "recipient": "User2", "message": "Great, looking forward to it!", "timestamp": "2024-04-26T09:40:00Z" },
    //         { "sender": "User2", "recipient": "User1", "message": "Me too! Anyway, I have to get back to studying. Talk to you later!", "timestamp": "2024-04-26T09:45:00Z" },
    //         { "sender": "User1", "recipient": "User2", "message": "Alright, good luck with your studies! Bye for now.", "timestamp": "2024-04-26T09:50:00Z" },
    //         { "sender": "User2", "recipient": "User1", "message": "Thanks! Bye!", "timestamp": "2024-04-26T09:55:00Z" },
    //         { "sender": "User1", "recipient": "User2", "message": "Hey, how are you?", "timestamp": "2024-04-26T10:00:00Z" },
    //         { "sender": "User2", "recipient": "User1", "message": "Hi User1! I'm doing well, thanks for asking.", "timestamp": "2024-04-26T10:05:00Z" },
    //         { "sender": "User1", "recipient": "User2", "message": "That's great to hear! What have you been up to lately? I've been working on a new project at work and it's been keeping me busy.", "timestamp": "2024-04-26T10:10:00Z" },
    //         { "sender": "User2", "recipient": "User1", "message": "Wow, sounds interesting! I've been busy with my studies lately.", "timestamp": "2024-04-26T10:15:00Z" },
    //         { "sender": "User1", "recipient": "User2", "message": "What are you studying?", "timestamp": "2024-04-26T10:20:00Z" },
    //         { "sender": "User2", "recipient": "User1", "message": "I'm studying computer science. It's challenging but I enjoy it.", "timestamp": "2024-04-26T10:25:00Z" },
    //         { "sender": "User1", "recipient": "User2", "message": "That's cool! I've always been interested in coding.", "timestamp": "2024-04-26T10:30:00Z" },
    //         { "sender": "User2", "recipient": "User1", "message": "You should give it a try! It's a valuable skill to have.", "timestamp": "2024-04-26T10:35:00Z" },
    //         { "sender": "User1", "recipient": "User2", "message": "I might consider it in the future. Right now, I'm focusing on my current job.", "timestamp": "2024-04-26T10:40:00Z" },
    //         { "sender": "User2", "recipient": "User1", "message": "That's understandable. What do you do for work?", "timestamp": "2024-04-26T10:45:00Z" },
    //         { "sender": "User1", "recipient": "User2", "message": "I'm a graphic designer at a marketing agency.", "timestamp": "2024-04-26T10:50:00Z" },
    //         { "sender": "User2", "recipient": "User1", "message": "That's cool! I've always been interested in design.", "timestamp": "2024-04-26T10:55:00Z" },
    //         { "sender": "User1", "recipient": "User2", "message": "It's a fun field to be in. What about you? Any hobbies besides studying?", "timestamp": "2024-04-26T11:00:00Z" },
    //         { "sender": "User2", "recipient": "User1", "message": "I enjoy playing video games in my free time.", "timestamp": "2024-04-26T11:05:00Z" },
    //         { "sender": "User1", "recipient": "User2", "message": "Nice! What games do you play?", "timestamp": "2024-04-26T11:10:00Z" },
    //         { "sender": "User2", "recipient": "User1", "message": "I'm currently playing a lot of RPGs and strategy games.", "timestamp": "2024-04-26T11:15:00Z" },
    //         { "sender": "User1", "recipient": "User2", "message": "Those are fun genres. I used to play a lot of RPGs too.", "timestamp": "2024-04-26T11:20:00Z" },
    //         { "sender": "User2", "recipient": "User1", "message": "We should play together sometime!", "timestamp": "2024-04-26T11:25:00Z" },
    //         { "sender": "User1", "recipient": "User2", "message": "That would be awesome! Let's exchange gamer tags.", "timestamp": "2024-04-26T11:30:00Z" },
    //         { "sender": "User2", "recipient": "User1", "message": "Sure, I'll send you mine after this chat.", "timestamp": "2024-04-26T11:35:00Z" },
    //         { "sender": "User1", "recipient": "User2", "message": "Great, looking forward to it!", "timestamp": "2024-04-26T11:40:00Z" },
    //         { "sender": "User2", "recipient": "User1", "message": "Me too! Anyway, I have to get back to studying. Talk to you later!", "timestamp": "2024-04-26T11:45:00Z" },
    //         { "sender": "User1", "recipient": "User2", "message": "Alright, good luck with your studies! Bye for now.", "timestamp": "2024-04-26T11:50:00Z" },
    //         { "sender": "User2", "recipient": "User1", "message": "Thanks! Bye!", "timestamp": "2024-04-26T11:55:00Z" }
    //     ]
    // },
    chats:[]
}

// chats:[{
//     user:"test",
//     socketId:"test",
//     messages:[]
// }]

const  chatSlice=createSlice({
    name:'chat',
    initialState,
    reducers:{
        setSelectedchatIdex:(state,action)=>{
            console.log("action: " + action.payload);
            state.selectedChatindex = action.payload
        },
        addMessage:(state,action)=>{
            state.selectedChat.messages.push(action.payload)
        },
        addUsers:(state,action)=>{
            const newUser ={...action.payload, messages:[]}
            const existingUserIndex = state.chats.findIndex(user => user.socketId === newUser.socketId);
            if(  existingUserIndex == -1 ){
                state.chats.push(newUser);
                console.log("Data added successfully");
                return;
            }
            console.log("Data already exists");     
        },
        setInitialUsers:(state,action)=>{
            if(state.chats.length==0){
                action.payload.forEach((user)=>{
                    if(user.socketId!=state.mySocketData.socketId){
                        state.chats.push({...user,messages:[]});
                    }
                })  
            }
        },
        setMySocketData:(state,action)=>{
            state.mySocketData = action.payload
        },
        removeUser:(state,action)=>{
            const existingUserIndex = state.chats.findIndex(user => user.socketId === action.payload);
            if(  existingUserIndex!= -1 ){
                state.chats.splice(existingUserIndex,1);
                console.log("Data removed successfully");
                return;
            }
            console.log("Data does not exists");
        },
        sentChat:(state,action)=>{
            const chat = { 
                "sender": state.mySocketData.socketId,
                "recipient":state.chats[state.selectedChatindex].socketId,
                "message": action.payload,
                 "timestamp": new Date()
                }
            state.chats[state.selectedChatindex].messages.push(chat)
            socket.emit("chat-message",{
                "recepentId":state.chats[state.selectedChatindex].socketId,
                "message":action.payload
            })
        },
        receivedChat:(state,actions)=>{
            console.log("received chat :",actions.payload);
            // {senderId: 'qT41AI0DxQ6-6q-NAAAh', message: 'adnjksdnjksd'}
            const chat = { 
                "sender": actions.payload.senderId,
                "recipient":state.mySocketData.socketId,
                "message": actions.payload.message,
                 "timestamp": new Date()
                }
            // console.log(chat)
            state.chats.filter((userData,index)=>{
                if(userData.socketId==actions.payload.senderId){
                    state.chats[index].messages.push(chat);
                }
            })

        }


    }
})

export const {
    addMessage,
    addUsers, 
    setInitialUsers,
    setMySocketData, 
    removeUser, 
    setSelectedchatIdex,
    sentChat,
    receivedChat
}=chatSlice.actions
export default chatSlice.reducer