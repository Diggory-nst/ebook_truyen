
import { useEffect, useRef, useState } from "react";
import { Container, Div } from "../assets/styles/admin.css";
import axios from "axios";

import IonIcon from '@reacticons/ionicons'
import capitalizedText from "../utils/capitalizedText";
import preloader from "../utils/preloader"

import configDomain from "../config/config.domain";

interface DataType {
    _id: string,
    name: string,
    author: string,
    status: string,
    chap_number: string
}

type EbookType = DataType[]

const Admin = () => {

    const domain = configDomain?.domain

    const [nameUser, setNameUser] = useState<string>('')
    const [ebooks, setEbooks] = useState<EbookType>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [isError, setIsError] = useState<boolean>(false)
    const [messageError, setMessageError] = useState<string>('')

    const [ebook, setEbook] = useState<{
        name: string,
        author: string,
        status: string,
        chap_number: string
    }>({
        name: '',
        author: '',
        status: '',
        chap_number: ''
    })

    const [idEbookEdit, setIdEbookEdit] = useState<string>('')

    const [file, setFile] = useState<any>(null)

    const modal_ref = useRef<HTMLDivElement | null>(null)
    const popup_edit_ref = useRef<HTMLDivElement | null>(null)
    const popup_add_ref = useRef<HTMLDivElement | null>(null)

    const canvas_ref = useRef<HTMLCanvasElement | null>(null)

    const client_id = localStorage.getItem('client_id')
    const access_token = localStorage.getItem('access_token')
    const refresh_token = localStorage.getItem('refresh_token')

    const headers = {
        "Content-Type": 'application/json',
        "x-client-id": client_id,
        "authorization": access_token,
        "x-rtoken-id": refresh_token
    }

    useEffect(() => {
        const fetchData = async () => {

            const url = `${domain}/admin`

            try {
                const res = await axios.get(url, { headers })

                const data = res.data.metadata
                setNameUser(data.name_user)
                setEbooks(data.ebook)
                setIsLoading(false)
            } catch (error: any) {
                setIsError(true);
                setMessageError(error.response.data.message)
            }
        }

        fetchData()
    }, [])

    const deleteEbook = (ebook_id: string) => {
        axios.get(`${domain}/admin/delete-ebook/${ebook_id}`, { headers })
            .catch(error => console.log(error))

        const new_ebooks = ebooks.filter(item => item._id != ebook_id)
        setEbooks(new_ebooks)
    }

    const addBook = async () => {
        const name = capitalizedText(ebook.name)
        const author = capitalizedText(ebook.author)
        const status = capitalizedText(ebook.status)

        const url = `${domain}/admin/new-ebook`

        const data = {
            name,
            author,
            status,
            chap_number: ebook.chap_number,
            image: file
        }

        try {
            const res = await axios.post(url, data, {
                headers: {
                    "Content-Type": 'multipart/form-data',
                    "x-client-id": client_id,
                    "authorization": access_token,
                    "x-rtoken-id": refresh_token
                }
            })

            const recieveData = res.data
            const ebook: {
                _id: string,
                name: string,
                author: string,
                status: string,
                chap_number: string
            } = recieveData.metadata.ebook

            setEbooks([
                ...ebooks,
                ebook
            ])

            handleClosePopup()
        } catch (error) {
            console.log(error);
        }
    }

    const editEbook = async () => {

        const url = `${domain}/admin/edit-ebook/${idEbookEdit}`
        const data = ebook

        axios.patch(url, data, {
            headers: {
                "Content-Type": 'application/json',
                "x-client-id": client_id,
                "authorization": access_token,
                "x-rtoken-id": refresh_token
            }
        })
            .catch(error => console.log(error))

        const ebooksAfterUpdate = ebooks.map(item => {
            if (item._id === idEbookEdit) {
                return {
                    ...item,
                    name: ebook.name,
                    author: ebook.author,
                    status: ebook.status,
                    chap_number: ebook.chap_number
                }
            } else {
                return item
            }
        })

        setEbooks(ebooksAfterUpdate)
        handleClosePopup()
    }

    const handleChange = (e: any) => {
        setEbook(prev => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    const handleClosePopup = () => {
        if (!popup_edit_ref.current || !modal_ref.current || !popup_add_ref.current) return
        popup_edit_ref.current.style.display = 'none'
        popup_add_ref.current.style.display = 'none'
        modal_ref.current.style.display = 'none'
    }

    const handleOpenPopupEdit = (ebook_id: string) => {
        if (!popup_edit_ref.current || !modal_ref.current) return
        popup_edit_ref.current.style.display = 'block'
        modal_ref.current.style.display = 'flex'

        const ebook = ebooks.filter(item => item._id == ebook_id)[0]
        setEbook(ebook)
        setIdEbookEdit(ebook_id)
    }

    const handleOpenPopupAdd = () => {
        if (!popup_add_ref.current || !modal_ref.current) return
        popup_add_ref.current.style.display = 'block'
        modal_ref.current.style.display = 'flex'
    }

    preloader(canvas_ref)

    return (
        <Div className="admin_page">
            <div className="modal" ref={modal_ref}>
                <div className="popup_edit" ref={popup_edit_ref}>
                    <IonIcon name="close-outline" onClick={handleClosePopup}></IonIcon>
                    <div>
                        <input type="text" className="edit_name" value={ebook.name} name="name" placeholder="Name" onChange={handleChange} />
                        <input type="text" className="edit_author" value={ebook.author} name="author" placeholder="Author" onChange={handleChange} />
                        <input type="text" className="edit_status" value={ebook.status} name="status" placeholder="Status" onChange={handleChange} />
                        <input type="text" className="edit_chap_number" value={ebook.chap_number} name="chap_number" placeholder="Chap Number" onChange={handleChange} />
                        <button className="edit_save" onClick={editEbook}>Save</button>
                    </div>
                </div>
                <div className="popup_add" ref={popup_add_ref}>
                    <IonIcon name="close-outline" onClick={handleClosePopup}></IonIcon>
                    <div>
                        <h1>Select File:</h1>
                        <input type="file" />
                        <h1>Select Image: </h1>
                        <input type="file" className="add_image" onChange={e => setFile(e.target.files?.[0])} />
                        <input type="text" className="add_name" placeholder="Name" name="name" onChange={handleChange} />
                        <input type="text" className="add_author" placeholder="Author" name="author" onChange={handleChange} />
                        <input type="text" className="add_status" placeholder="Status" name="status" onChange={handleChange} />
                        <input type="text" className="add_chap_number" placeholder="Chap Number" name="chap_number" onChange={handleChange} />
                        <button className="add" onClick={addBook}>Add</button>
                    </div>
                </div>
            </div>
            <div className="grid wide">
                <Container className="container">
                    <div className="account">
                        <h1>{nameUser}</h1>
                        <button onClick={handleOpenPopupAdd}>Thêm Truyện</button>
                    </div>
                    <div className="list_story">
                        {!isLoading && ebooks && ebooks.length > 0 &&
                            ebooks.map(item => {
                                return (
                                    <div className="item_story" key={item._id}>
                                        <h1>{item.name}</h1>
                                        <button id="delete" onClick={() => deleteEbook(item._id)}>Delete</button>
                                        <button id="edit" onClick={e => handleOpenPopupEdit(item._id)}>Edit</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </Container>
            </div>
            {isLoading === true &&
                <canvas ref={canvas_ref} id="canvas" width="1200" height="200" style={{
                    position: 'absolute', top: '50%',
                    left: '50%', transform: 'translate(-50%, -50%)'
                }}></canvas>
            }
            {isError &&
                <p style={{
                    fontSize: '2.8rem', lineHeight: '3rem'
                    , position: 'absolute', top: '50%',
                    left: '50%', transform: 'translate(-50%, -50%)'
                }}>{messageError}</p>
            }
        </Div>
    )
}

export default Admin;