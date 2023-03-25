import React , {useState, useEffect} from "react";
//import png from './png-transparent-chupacabra-drawing-monster-cryptozoology-monster-mammal-fictional-character-painting.png';
//console.log(png);
export default function PageBody(){
    const [photo, setPhoto] = useState([]);
    const getAllPictures = (pics) => {
        pics.then((data) =>{
            return data.forEach((picture) => {
                setPhoto((photo) => [...photo, picture.Key]);
            });
        });
    }
    useEffect(() => {
        const pictures = listObjects();
        getAllPictures(pictures); 
    }, []);
    const [description, setDesc] = useState({
        desc: "",
    });
    return(
        <>
        <div className = "description Container">
            <form>
                <div> <h3>Description of Cyripted</h3> </div>
                <br></br>
                <div>
                <input 
                type = "text" 
                name = "Description" 
                placeHolder = "Description" 
                value = {description.desc}/>
                </div>

            </form>
        </div>
        <div className="Image container">
            <form>
                <div><h3>Image</h3></div>
                <br></br>
                <div>
                    <input 
                    type = "image"
                    alt = "img"
                    name = "image"
                    placeHolder = "image"
                    value= {photo}
                    />
                </div>
            </form>
        </div>
        
        </>
    );
}
