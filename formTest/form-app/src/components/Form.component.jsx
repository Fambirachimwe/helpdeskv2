import React, { useState } from 'react';
import axios from 'axios';


const Form = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [attachment, seAttachment] = useState(null)

    const  handleUsername = (e) => {
        e.preventDefault();
        setUsername(e.target.value)
    }
    
    const handlePassword = (e) => {
        e.preventDefault();
        setPassword(e.target.value)
    }

    const handleAtachement = (e) => {
        e.preventDefault();
        seAttachment(e.target.files[0]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append('username', username);
        formData.append("password", password);
        formData.append("attachment", attachment);


        // axios.post('http://127.0.0.1:5000', formData).then(data => {
        //     console.log(data.data)
        // })

        axios({
            url: "http://127.0.0.1:5000/",
            method: "POST",
            data: formData,
            headers: {
                "content-type": "multipart/form-data"
            }
        }).then(data => {
            console.log(data)
        })


    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <input type="text" name="" onChange={handleUsername} value={username} placeholder="username" />
                <br/>
                <input type="password" name="" onChange={handlePassword} value={password} placeholder="password" />
                <br/>

                <input type="file" name="attachment" onChange={handleAtachement}/>
                <br/>
                <input type="submit" value=" Submit " />
            </form>
        </div>

    )
}

export default Form;

