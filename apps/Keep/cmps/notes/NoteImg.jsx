export function NoteImg({ info }) {
    return (
        <div className="img-card">
            <img src={info.url} />
            <h1>{info.title}</h1>
        </div>
    )
}
