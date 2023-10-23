
import icon_dowload from '../assets/images/icons/down-to-line.svg'
import background from '../assets/images/background.jpg'

import { Div, Container } from '../assets/styles/ebook.css';

import { Header, Footer } from "../components";
import useGet from '../hooks/useGet.hook';
import { useParams } from 'react-router-dom';
import { useRef } from 'react';

import preloader from '../utils/preloader';
import configDomain from '../config/config.domain';

const Ebook = () => {

    const domain = configDomain?.domain

    const param = useParams()
    const slug = param.slug

    const { data: ebook, isLoading, isError, messageError } = useGet(`${domain}/ebook/${slug}`, {})

    const canvas_ref = useRef<HTMLCanvasElement | null>(null)
    const grid_ref = useRef<HTMLDivElement | null>(null)

    preloader(canvas_ref, grid_ref)

    return (
        <Div className="ebook_page">
            <Header />
            <Container className="container" style={{ backgroundImage: `url(${background})` }}>
                <div ref={grid_ref} className="grid wide" style={{ display: 'flex' }}>
                    {!isLoading && ebook && ebook.length > 0 &&
                        <>
                            <div className="section_image">
                                <img src={`${domain}/images/` + ebook[0].image} />
                            </div>
                            <div className="section_information">
                                <div className="information">
                                    <h1 className="name">{ebook[0].name}</h1>
                                    <h1 className='number_of_chap'>Số chương: {ebook[0].chap_number} Chương</h1>
                                    <h1 className="author">Tác giả: {ebook[0].author}</h1>
                                    <h1 className="status">Trạng thái: {ebook[0].status}</h1>
                                </div>
                                <div className="dowload_ebook">
                                    <div>
                                        <img src={icon_dowload} />
                                        <h2>Tải Ebook</h2>
                                    </div>
                                    <a href="/">Hướng Dẫn Chung ( Quan Trọng )</a>
                                </div>
                            </div>
                        </>
                    }
                    {isLoading === true &&
                        <canvas ref={canvas_ref} id="canvas" width="1200" height="320"></canvas>
                    }
                    {isError === true &&
                        <p style={{ width: '100%', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <h1>{messageError}</h1>
                        </p>
                    }
                </div>
            </Container>
            <Footer />
        </Div>
    )
}

export default Ebook;