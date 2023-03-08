import styled from "styled-components";

export const Finder = styled.div`
    display: none;
    position: absolute;
    border: 1px solid rgb(54, 54, 54);
    width: 800px;
    height: 500px;
    left: 400px;
    top: 50px;
    background: #1E1E1E;
    border-radius: 10px;
    section{
        div:nth-child(2){ /**select the div below <S.FinderButtons> */
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
`


export const Header = styled.header`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 650px;
    left: 150px;
    height: 49px;
    z-index: 1;
    div{
        &:nth-child(1){ /* select arrows */
            img{
                margin: 0 15px;
            }
        }
        &:nth-child(2){ /* select search */
            img{
                margin: 0 30px;
            }
        }
    }
`

export const FinderSidebar = styled.div`
    width: 150px;
    height: 498px;
    background: rgba(50, 50, 50, 0.95);
    -webkit-backdrop-filter: blur(48px);
            backdrop-filter: blur(48px);
    border-radius: 10px 0px 0px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    ul{
        button{
            width: 100%;
        }
    }
`

export const FinderButtons = styled.div`
    height: 46px;
    display: flex;
    align-items: center;
    width: 80%;
    position: relative;
    left: 1px;
`

export const Favorites = styled.div`
    width: 118px;
    height: 183px;
    header{
            height: 13px;
            font-size: 11px;
            color: #888888;
    }
    li{
        display: flex;
        align-items: center;
        height: 28px;
        border-radius: 7px;
        background-color: rgba(50, 50, 50, 0.95);
        font-size: 13px;
        letter-spacing: 1px;
        img{
            margin: 8px 6px 6px 6px;
        }
        &:hover{
            cursor: pointer;
            filter: brightness(150%);
        }
    }
`
export const Drive = styled.div`
    height: 45px;
    position: relative;
    left: -30px;
    ul{
        list-style-type: none;
        header{
            height: 13px;
            font-size: 11px;
            color: #888888;
        }
    }
`

export const FolderSize = styled.div`
    height: 157px;
    header{
        height: 13px;
    }
    ul{
        list-style-type: none;
        li{
            padding-left: 10px;
        }
    }
`