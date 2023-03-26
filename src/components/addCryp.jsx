import axios from 'axios';
import React, { useState, createObjectURL, useEffect } from 'react';
// import { storage } from '../firebase.js';
import firebase from 'firebase/compat/app';
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDNuPQ68vwc6E4LCVT8-MQszuLFe3kC8NU",
    authDomain: "cryptidcoin-82580.firebaseapp.com",
    projectId: "cryptidcoin-82580",
    storageBucket: "cryptidcoin-82580.appspot.com/",
    messagingSenderId: "1043600204601",
    appId: "1:1043600204601:web:6c44e0ae871c9b992cfee8",
    measurementId: "G-SVZJ6BQQ9V"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export default function AddCryp() {
    const [crypName, setName] = useState();
    const [crypDesc, setDesc] = useState();
    const [crypImg, setImg] = useState();
    const [imgUrl, setUrl] = useState();
    const [progresspercent, setProgresspercent] = useState(0);
    const path = 'http://35.184.229.236:3001';

    function fireStorage(event) {
        const file = event.target.files[0];
        console.log(file);
        const storageRef = storage.ref();
        const fileRef = storageRef.child(file.name);
        fileRef.put(file).then((snapshot) => {
            console.log('Uploaded a file:', snapshot.metadata.name);
            console.log('File download URL:', snapshot.downloadURL);
        });
        // const storageRef = ref(storage, `/files/${crypImg.name}`);
        // const uploadTask = uploadBytesResumable(storageRef, crypImg);
        // console.log("FIRESTORE");
        // uploadTask.on("state_changed",
        //     (snapshot) => {
        //         const progress =
        //             Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        //         setProgresspercent(progress);
        //     },
        //     (error) => {
        //         alert(error);
        //     },
        //     () => {
        //         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        //             setImg(downloadURL)
        //         });
        //     }
        // );
    }

    // async function handleSubmit(e) {
    //     e.preventDefault();
    // fireStorage();
    // console.log({
    //     name: crypName,
    //     desc: crypDesc,
    //     img: crypImg
    // });

    // await axios.post(`${path}/addCryp`, {
    //     name: crypName,
    //     desc: crypDesc,
    //     img: crypImg
    // }).then((res) => {
    //     console.log(res);
    // }).catch((err) => {
    //     console.error(err);
    // })
    // }

    useEffect(() => {
        if (crypImg) {
            setUrl(URL.createObjectURL(crypImg));
        }
    }, [crypImg])


    return (
        <div className='login'>
            <form>
                <label>Crpytid Name</label><br />
                <input type="text" value={crypName} onChange={(e) => setName(e.target.value)} placeholder="Crpytid Name"></input><br /><br />
                <label>Cryptid Desc</label><br />
                <input type="text" value={crypDesc} onChange={(e) => setDesc(e.target.value)} placeholder="Crpytid Description"></input><br /><br />
                <label>Cryptid Desc</label><br />
                <input type="file" onChange={(e) => { fireStorage(e) }} placeholder="Crpytid Image"></input><br /><br />
                <img src={imgUrl} /><br /><br />
                <button type='submit' onClick={() => {
                    //handleSubmit();
                }}>Add Cryp</button>
            </form>
        </div>
    )
}