import styled from "styled-components";

const Div = styled.div``

const Search = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 8px;

    .search {

        display: flex;
        align-items: center;
        background-color: white;
        border-radius: 5px;
        box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.08);
        position: relative;

        span {
            font-size: 2.2rem;
            color: #bec7d5;
            margin-right: 18px;
            cursor: pointer;
        }

        input {
            border: none;
            width: 434px;
            height: 40px;
            padding-left: 20px;
            font-size: 1.8rem;
            outline: none;
            margin-right: 18px;
            background-color: white;
            color: black;
            border-radius: 5px;
        }

        input::placeholder {
            color: #bec7d5;
        }
    }

    .show_list_search{
        /* display: none; */
        display: flex;
        flex-direction: column;
        width: 492px;
        margin-top: 48px;
        background-color: white;
        border-radius: 5px;
        box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.08);
        position: absolute;
        z-index: 10;
    
        a {
            margin-left: 10px;
            margin-top: 15px;
            font-size: 1.8rem;
            cursor: pointer;
        }

        a:last-child{
            margin-bottom: 15px;
        }

        h1 {
            margin-left: 10px;
            margin-top: 15px;
            font-size: 1.8rem;
            margin-bottom: 15px;
            text-align: center;
        }
    }
`

const Story = styled.div`

margin-top: 30px;

    .sum_story {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 10px;
        border-bottom: 1px solid;

        div {
            display: flex;
            align-items: center;
        }

        .number_of_story{
            span {
                margin-right: 10px;
                font-size: 2.6rem;
            }

            h1 {
                font-size: 2.2rem;
            }
        }

        .sort_by {

            h1 {
                font-size: 1.8rem;
                margin-left: 24px;
                cursor: pointer;
            }

            .active {
                color: red;
            }

            .no-active{
                color: black;
            }
        }
    }

    .list_story {

        margin-bottom: 32px;

        .item_story {
            display: flex;
            margin-top: 32px;

            .image {
                height: 156px;
                box-shadow: 2px 2px 4px 2px #e7e7e7;
                overflow: hidden;

                img {
                    width: 100px;
                    /* -webkit-transition: transform 0.5s, filter 0.5s;
                    -moz-transition: transform 0.5s, filter 0.5s;
                    -o-transition: transform 0.5s, filter 0.5s;
                    transition: transform 0.5s, filter 0.5s; */
                    transition: 0.5s ease all;
                }
            }

            .image:hover img {
                -webkit-transform: scale(1.1);
                -moz-transform: scale(1.1);
                -ms-transform: scale(1.1);
                -o-transform: scale(1.1);
                zoom: 1;
                -webkit-filter: brightness(0.7);
                filter: brightness(0.7);
            }

            .information {

                margin-left: 20px;
                width: calc(100% - 120px);
                
                .name{
                    font-size: 2rem;
                    line-height: 2.4rem;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                }

                .number_of_chap {
                    font-size: 1.7rem;
                    margin-top: 20px;
                }

                .author {
                    font-size: 1.7rem;
                    margin-top: 15px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    line-height: 2.2rem;
                }

                .status {
                    font-size: 1.7rem;
                    margin-top: 15px;
                }
            }
        }
    }
`

export {
    Div, Search, Story
}