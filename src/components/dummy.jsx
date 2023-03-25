import React , {useState} from "react";
//import png from './png-transparent-chupacabra-drawing-monster-cryptozoology-monster-mammal-fictional-character-painting.png';
//console.log(png);
export default function PageBody(){
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [description, setDescription] = useState('');
    return(
        <>
        <div className= "UserName container">
            <form>
                <h3>Username</h3>
                <input
                    id="name" 
                    value={userName} 
                    onChange={(e) => setUsername(e.target.value)} 
                    placeholder="Username">
                        
                    </input>
            </form>    
        </div>
        <br></br>
        <div className = "password contatiner">
            <form>
                <h4>Password</h4>
                <input
                    id="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Password">
                </input>
            </form>
        </div>
        <div className = "description Container">
            <form>
                <div> <h3>Description of Cyripted</h3> </div>
                <br></br>
                <div>
                <input 
                id="description" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                placeholder="description">
                </input>
                </div>

            </form>
        </div>
        <div><button 
            type="submit" 
            onClick={(e) => {
            e.preventDefault();
            console.log(userName);
            console.log(password);
            console.log(description);
            }}>Submit</button></div>
         </>
    );
    
}
