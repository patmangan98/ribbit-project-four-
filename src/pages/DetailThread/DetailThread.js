import { useParams } from "react-router-dom"
import Posts from "../components/Posts/Posts"

export default function DetailThread({thread}) {
    console.log(thread)
    let { threadId } = useParams()
    
    return (
    <>
    <Posts/>
    </>
    )
}