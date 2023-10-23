
import '../assets/styles/base.css'
import '../assets/styles/grid_system.css'

import { Div, Search, Story } from '../assets/styles/home.css'
import { Header, Footer } from '../components'

import { Link } from 'react-router-dom'
import IonIcon from '@reacticons/ionicons'

import useGet from '../hooks/useGet.hook'
import { useEffect, useRef, useState, useTransition } from 'react'
import { useNavigate, createSearchParams } from 'react-router-dom'

import preloader from '../utils/preloader'
import axios from 'axios'

import configDomain from '../config/config.domain'

type EbooksSearch = [
    {
        _id: string,
        name: string,
        slug: string
    }
]

const Home = () => {

    const domain = configDomain?.domain

    const [search, setSearch] = useState<string>('')
    const [ebooksSearch, setEbooksSearch] = useState<EbooksSearch | null>(null)
    const [isPopup, setIsPopup] = useState<boolean>(false)

    const [url, setUrl] = useState<string>(`${domain}`)
    const [query, setQuery] = useState<string>('moinhat')

    const canvas_ref = useRef<HTMLCanvasElement | null>(null)
    const grid_ref = useRef<HTMLDivElement | null>(null)

    const { data, isLoading, isError } = useGet(url, {})

    const navigate = useNavigate()

    const handelQuery = (param_query: string) => {
        navigate({
            pathname: '/',
            search: `?${createSearchParams({
                orderby: param_query
            })}`
        })
        setQuery(param_query)
        setUrl(`${domain}/?orderby=${param_query}`)
    }

    useEffect(() => {
        const url = `${domain}/ebook/search`
        const data = {
            name_ebook: search
        }

        if (search == '') {
            setIsPopup(false)
            return
        }

        const fetchData = setTimeout(async () => {
            const res = await axios.post(url, data)
            const recieve_data = res.data

            const ebooks = recieve_data.metadata.ebooks
            ebooks.length > 0 ? setEbooksSearch(ebooks) : setEbooksSearch(null)
            setIsPopup(true)
        }, 500)

        return () => clearTimeout(fetchData)
    }, [search])

    preloader(canvas_ref, grid_ref)

    return (
        <Div className='home_page'>
            <Header />
            <div className="container">
                <div ref={grid_ref} className="grid wide">
                    <Search className="section_search">
                        <div className="search">
                            <input type="text" placeholder='Tìm kiếm' onChange={e => setSearch(e.target.value)} />
                            <IonIcon name="search-outline"></IonIcon>
                        </div>
                        <div className="show_list_search">
                            {isPopup && ebooksSearch &&
                                ebooksSearch.map(ebook => {
                                    return (
                                        <Link to={`/ebook/${ebook.slug}`} key={ebook._id}>{ebook.name}</Link>
                                    )
                                })
                            }
                            {isPopup && !ebooksSearch &&
                                <h1>Không có kết quả nào</h1>
                            }
                        </div>
                    </Search>
                    <Story className="section_story">
                        <div className="sum_story">
                            <div className='number_of_story'>
                                <IonIcon name="dice-outline"></IonIcon>
                                <h1>{data.length} Truyện</h1>
                            </div>
                            <div className='sort_by'>
                                <h1 className={query === 'moinhat' ? 'active' : 'no-active'} onClick={() => handelQuery('moinhat')}>Mới Nhất</h1>
                                <h1 className={query === 'hoanthanh' ? 'active' : 'no-active'} onClick={() => handelQuery('hoanthanh')}>Hoàn Thành</h1>
                                <h1 className={query === 'dangra' ? 'active' : 'no-active'} onClick={() => handelQuery('dangra')}>Đang Ra</h1>
                            </div>
                        </div>
                        <div className="list_story">
                            {data && data.length > 0 ?
                                <div className="row">
                                    {!isLoading && data && data.length > 0 &&
                                        data.map(item => {
                                            return (
                                                <div className="col l-4" key={item._id}>
                                                    <Link to={`/ebook/${item.slug}`} className="item_story">
                                                        <div className="image">
                                                            <img src={`${domain}/images/` + item.image} />
                                                        </div>
                                                        <div className="information">
                                                            <h1 className="name">{item.name}</h1>
                                                            <h1 className='number_of_chap'>Số chương: {item.chap_number} Chương</h1>
                                                            <h1 className="author">Tác giả: {item.author}</h1>
                                                            <h1 className="status">Trạng thái: {item.status}</h1>
                                                        </div>
                                                    </Link>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                :
                                <p style={{ height: '174px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <h1 style={{ fontSize: '2.6rem' }}>Không Có Ebook Nào</h1>
                                </p>
                            }
                            {isLoading === true &&
                                <canvas ref={canvas_ref} id="canvas" width="1200" height="200"></canvas>
                            }
                            {isError === true &&
                                <p style={{ height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <h1>Something Wrong...</h1>
                                </p>
                            }
                        </div>
                    </Story>
                </div>
            </div>
            <Footer />
        </Div>
    )
}

export default Home;