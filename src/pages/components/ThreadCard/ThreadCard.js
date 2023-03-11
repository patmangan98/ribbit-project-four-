export default function ThreadCard ({thread}) {
    return ( 
        <div>
        <p>{thread.topic}</p>
        <button>Inspect Thread</button>
        </div>
    )
}