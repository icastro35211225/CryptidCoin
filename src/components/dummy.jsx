import React , {useState, useEffect} from "react";
//import png from './png-transparent-chupacabra-drawing-monster-cryptozoology-monster-mammal-fictional-character-painting.png';
//console.log(png);
export default function PageBody(){
    //const [photo, setPhoto] = useState([]);
    //const getAllPictures = (pics) => {
      //  pics.then((data) =>{
        //    return data.forEach((picture) => {
          //      setPhoto((photo) => [...photo, picture.Key]);
           // });
        //});
    //}
    //useEffect(() => {
      //  const pictures = List();
        //getAllPictures(pictures); 
    //}, []);
    const [description, setDesc] = useState({
        desc: "",
    });
    const [userInfo, setUserInfo] = useState({
        username: "",
        password: "",
    });
    const handleChange = (event) => {
        setUserInfo({...setUserInfo, [event.target.name]: event.target.value});
        setDesc({...setDesc, [event.target.name]: event.target.value});
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(userInfo);
        setUserInfo({ username: "", password: ""});
        setDesc({desc: ""});
    };

    return(
        <>
        <div className= "UserName container">
            <form>
                <h3>Username</h3>
                <input 
                    type = "text"
                    name = "userName"
                    placeholder = "userName"
                    //value = {userInfo.username}
                />
            </form>    
        </div>
        <br></br>
        <div className = "passWork contatiner">
            <form>
                <h4>Password</h4>
                <input
                    type = "password"
                    name = "userName"
                    placeholder = "password"
                    //value = {userInfo.password}
                />
            </form>
        </div>
        <div className = "description Container">
            <form>
                <div> <h3>Description of Cyripted</h3> </div>
                <br></br>
                <div>
                <input 
                type = "text" 
                name = "Description" 
                placeHolder = "Description" 
                //value = {description.desc}
                />
                </div>

            </form>
        </div>
        <div><button>Submit</button></div>
        
        </>
    );
    
}
