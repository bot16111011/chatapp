import user from '../reducers/user';
import profileImage from '../images/profile.svg';
import arvindInmage from '../images/Arvind.jpg'; 
import narendraImage from '../images/Narendra.jpg';
import trina from '../images/trina.png';
import akhilesh from '../images/akhil.webp';
import charles from '../images/charles.webp';
import shilpa from '../images/monica.jpg';
export const data = {
    profile: {
      id: 1,
      name: "Rajarshi Verma",
      image:profileImage,
      
      
      contacts: [
        {
          id: 2,
          name: "Arvind",
          image:arvindInmage,
          chatlog: [
            {
              text: "Hello Raj,How are you ?",
              timestamp: "12:36 PM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "I am fine Sir. What about you Sir?",
              timestamp: "12:37 PM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "I am great, Raj.",
              timestamp: "1:00 PM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "Are you facing any difficulty in your course?",
              timestamp: "01:01 PM",
              sender: "user",
              message_id: 4,
            },
            {
              text: "No, Sir",
              timestamp: "01:05 PM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 3,
          name: "Narendra",
          image:narendraImage,
            
          chatlog: [
            {
              text: "Hi,Raj",
              timestamp: "3:00 PM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "Hello sir",
              timestamp: "3:02 PM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "Have you completed your skill test?.",
              timestamp: "3:03 PM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "React?",
              timestamp: "3:30 PM",
              sender: "user",
              message_id: 4,
            },
            {
              text: "one is remaining",
              timestamp: "4:00 PM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 4,
          name: "TMC",
          image:trina,
          chatlog: [
            {
              text: "Hi Raj,",
              timestamp: "4:30 PM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "Hi",
              timestamp: "04:32 PM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "Yesterday, you raised a doubt",
              timestamp: "04:40 PM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "What happened ?",
              timestamp: "04:41 PM",
              sender: "user",
              message_id: 4,
            },
            {
              text: "Yes, about my placement ",
              timestamp: "04:50 PM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 5,
          name: "Suraj",
          image:
            "https://st3.depositphotos.com/1743476/16188/i/600/depositphotos_161885550-stock-photo-proud-latin-man.jpg",
          chatlog: [],
        },
        {
          id: 6,
          name: "Pritam",
          image:akhilesh,
          chatlog: [
            {
              text: "Hey Raj, where is your friend, Mayur?",
              timestamp: "05:00 PM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "I don't know bro!",
              timestamp: "05:01 PM", 
              sender: "me",
              message_id: 2,
            },
            {
              text: "Are you sure, Raj ?.",
              timestamp: "05:05 PM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "Yes bro, I am damn sure",
              timestamp: "05:07 PM",
              sender: "me",
              message_id: 4,
            },
            {
              text: "All right Pritam",
              timestamp: "05:09 PM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 7,
          name: "Charles",
          image:charles,
          chatlog: [
            {
              text: "Where are you bro ?",
              timestamp: "7:00 PM",
              sender: "me",
              message_id: 1,
            },
            {
              text: "I'm in Market now",
              timestamp: "07:07 PM",
              sender: "user",
              message_id: 2,
            },
            {
              text: "call me ASAP",
              timestamp: "07:07 PM",
              sender: "me",
              message_id: 3,
            },
            {
              text: "ok",
              timestamp: "07:09 PM",
              sender: "user",
              message_id: 4,
            },
            {
              text: "Is everything fine ?",
              timestamp: "07:10 PM",
              sender: "me",
              message_id: 5,
            },
            {
              text: "Yeah !!",
              timestamp: "07:12 PM",
              sender: "user",
              message_id: 6,
            },
          ],
        },
        {
          id: 8,
          name: "Shilpa",
          image:shilpa,
          chatlog: [],
        },
        {
          id: 9,
          name: "Steve",
          image:
            "https://st2.depositphotos.com/1273995/8790/i/600/depositphotos_87904862-stock-photo-portrait-of-bearded-man.jpg",
          chatlog: [],
        },
      ],
    },
  };