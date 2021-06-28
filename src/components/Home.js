import React, { useRef, useState, useEffect } from "react";

import Header from "../components/Header";

import app from "../firebase";
import "firebase/firestore";

import "react-day-picker/lib/style.css";
import Calender from "./Calender";



const Home = () => {
  const email = app.auth().currentUser.email;

  return (
    <>
      <div>
        <div
          style={{
            backgroundColor: "CDF0EA",
          }}
        >
          <Header />
          <Calender />
        
        </div>
      </div>
    </>
  );
};

// function Appointement() {
//   const dummy = useRef();
//   const messagesRef = firestore.collection('messages');
//   const query = messagesRef.limit(25);
//   const [messages] = useCollectionData(query, { idField: 'id' });
//   const [formValue, setFormValue] = useState('');

//   const sendMessage = async (e) => {
//     e.preventDefault();
//     await messagesRef.add({
//       text: formValue,
//       createdAt: app.firestore.FieldValue.serverTimestamp(),
//     })

//     setFormValue('');
//     dummy.current.scrollIntoView({ behavior: 'smooth' });
//   }

//   return (<>
//     <main>

//       {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

//       <span ref={dummy}></span>

//     </main>

//     <form onSubmit={sendMessage}>

//       <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

//       <button type="submit">🕊️</button>

//     </form>
//   </>)
// }

// function ChatMessage(props) {
//   const { id,createdAt,text} = props.message;

//   return (<>
//     <div >
//       <p>{text}</p>
//     </div>
//   </>)
// }

export default Home;
