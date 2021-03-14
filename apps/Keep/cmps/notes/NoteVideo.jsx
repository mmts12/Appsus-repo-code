export function NoteVideo({ info }) {
    return (
        <div className="video-card">
            <iframe src={info.url} frameBorder="0"></iframe>
            <h1>{info.title}</h1>
        </div>
    )
}
