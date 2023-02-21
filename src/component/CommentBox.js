import questionImg from "./assets/questionImg.jpg"
import "./CommentBox.css"
const CommentBox = (
    { date,
        feedBack }
) => {
    return (
        <>
            <div id="comment-box" className="quote  quote-5">
                <div className="quote-author">
                    <img className="quote-author-img" src={questionImg} alt="" width="64" height="64" />
                    <div className="quote-author-body">
                        <div className="quote-author-name">
                            <cite className="quote-cite">Uzm. Dr. Osman Gönülal</cite>
                        </div>
                        <div className="date-statu">
                            <div className="quote-author">{date}</div>
                            <div style={{ color: "#fff" }} className="status bg-success text-center d-flex align-items-center rounded-pill">cevaplandı</div>
                        </div>
                    </div>
                </div>
                <p className="quote-text h5">{feedBack}</p>
            </div>
        </>
    )
}
export default CommentBox;