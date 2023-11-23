import "@app/diary/diary.css";

export default function DiaryPost({params}) {
    const {judul, isi_diary} = params

    return(
        <>
            <div className="diary-container-post">
                <h1>{decodeURIComponent(judul)}</h1>
                <p>{decodeURIComponent(isi_diary)}</p>
            </div>
        </>
    )
}