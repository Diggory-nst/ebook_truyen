
import styled from "styled-components";

const Div = styled.div``

const Container = styled.div`

    .section_image {
        margin-top: 20px;
        margin-bottom: 20px;
        height: 283px;
        background-color: white;
        padding: 10px;

        img{
            width: 193px;
            height: 263px;
        }
    }

    .section_information {
        display: flex;
        margin-top: 20px;
        margin-bottom: 20px;
        background-color: rgba(255, 255, 255, 0.5);
        margin-left: 32px;
        padding-top: 34px;
        padding-left: 34px;
        width: calc(100% - 245px);

        .information{

            width: calc(100% - 40%);

            .name {
                font-size: 2.4rem;
                line-height: 2.8rem;
            }

            .number_of_chap {
                margin-top: 44px;
            }

            .author {
                margin-top: 25px;
            }

            .status {
                margin-top: 25px;
            }
        }

        .dowload_ebook {

            width: calc(100% - 60%);
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 62px;

            div {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-bottom: 20px;
                cursor: pointer;

                img {
                    margin-bottom: 16px;
                    width: 32px;
                }

                h2 {
                    font-size: 1.8rem;
                }
            }

            a {
                font-size: 1.8rem;
            }
        }
    }
`

export {
    Div, Container
}