
import styled from "styled-components";

const Div = styled.footer`

    /* margin-top: 64px; */
    border-top: 1px solid;
    padding-top: 24px;
    padding-bottom: 24px;

    .logo{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .logo_img {
            width: 84px;
        }

        .logo_text {
            width: 132px;
            margin-top: 10px;
        }
    }

    .social_media{
        display: flex;
        justify-content: center;
        margin-top: 20px;

        a:nth-of-type(1) {
            margin-right: 20px;
        }

        a:nth-of-type(3) {
            margin-left: 20px;
        }
    }

    h1 {
        text-align: center;
        margin-top: 14px;
        font-size: 1.6rem;
    }
`

export {
    Div
}