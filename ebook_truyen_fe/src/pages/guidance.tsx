
import { Header, Footer } from "../components";

const Guidance = () => {
    return (
        <div className="guidance_page">
            <Header />
            <div className="container">
                <div className="grid wide">
                    <div className="guidance">
                        <h1>Hướng Dẫn Chung</h1>
                        <div className="guidance_dowload">
                            <h1>1: Hướng dẫn tải Ebook</h1>
                            <p></p>
                        </div>
                        <div className="guidance_read">
                            <h1>1: Hướng dẫn đọc truyện trên Mobile - PC</h1>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Guidance;