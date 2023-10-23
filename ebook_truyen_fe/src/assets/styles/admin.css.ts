
import styled from "styled-components";

const Div = styled.div`

    .modal {
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: #313131c2;
        display: none;
        justify-content: center;
        align-items: center;

        .popup_edit {
            display: none;
            position: relative;
            width: 558px;
            height: 312px;
            background-color: #4e4d4d;
            padding: 20px;
            z-index: 10;
            border-radius: 5px;

            span {
                font-size: 2.8rem;
                color: white;
                float: right;
                cursor: pointer;
            }

            div {
                display: flex;
                flex-direction: column;
                margin-top: 40px;

                input {
                    margin-bottom: 20px;
                    margin-bottom: 15px;
                    height: 36px;
                    padding-left: 10px;
                    padding-right: 10px;
                    font-size: 1.8rem;
                    outline: none;
                }

                button {
                    width: 100px;
                    font-size: 1.8rem;
                    cursor: pointer;
                }
            }
        }

        .popup_add {
            display: none;
            position: relative;
            width: 558px;
            height: 470px;
            background-color: #4e4d4d;
            padding: 20px;
            z-index: 10;
            border-radius: 5px;

            span {
                font-size: 2.8rem;
                color: white;
                float: right;
                cursor: pointer;
            }

            div {
                margin-top: 40px;
                display: flex;
                flex-direction: column;

                h1 {
                    color: white;
                    font-size: 1.8rem;
                    margin-bottom: 15px;
                }

                input {
                    margin-bottom: 20px;
                    margin-bottom: 15px;
                    height: 36px;
                    padding-left: 10px;
                    padding-right: 10px;
                    font-size: 1.8rem;
                    outline: none;
                }

                input:nth-of-type(1){
                    padding: 0;
                }

                input:nth-of-type(2){
                    padding: 0;
                }

                button {
                    width: 100px;
                    font-size: 1.8rem;
                    cursor: pointer;
                }
            }
        }
    }

`

const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 70px;

    .account {
        display: flex;
        flex-direction: column;
        align-items: center;

        h1 {
            font-size: 2.4rem;
        }

        button {
            margin-top: 20px;
            font-size: 1.6rem;
            cursor: pointer;
        }
    }

    .list_story {
        margin-top: 55px;

        .item_story {

            display: flex;
            align-items: center;
            margin-bottom: 20px;

            h1 {
                margin-right: 45px;
            }

            #delete {
                font-size: 1.5rem;
                margin-right: 20px;
                cursor: pointer;
            }

            #edit {
                font-size: 1.5rem;
                cursor: pointer;
            }
        }
    }

`

export {
    Container, Div
}