import { updateThread } from "../../../utilities/thread-api"

import { useState } from 'react'

export default function UpdateThread({thread}) {
    
    const [updateThreadTopic, setUpdateThreadTopic] = useState({
        topic: `${thread.topic}`,
    })
    
    function handleChange(event) {
        setUpdateThreadTopic({
            ...thread,
            [event.target.name]: event.target.value,
        })
    }

    async function handleSubmit(event) {
        event.preventDefault()
        try {
            const formData = { ...updateThreadTopic}
            await updateThread(formData, thread._id)
        
        } catch (error) {
            console.log(error)
        }
    }


    return (
 
        <form>
            <div className="form-floating">
                <input
                    className="form-control"
                    type="text"
                    name="topic"
                    placeholder="Create A Topic For This Thread!"
                    defaultValue = {thread.topic}
                    onChange={handleChange}
                />
               <label className="form-label">Title</label>
            </div>
            <button onClick={handleSubmit}>Update Thread</button>
        </form>
        
    )
}
