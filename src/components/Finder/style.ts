import styled from "styled-components";

interface Props {
    display: boolean
}

export const Finder = styled.div<Props>`
    display: ${props => props.display ? "flex" : "none"};
    position: absolute;
    border: 1px solid rgb(54, 54, 54);
    width: 800px;
    height: 500px;
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
        &:nth-child(3){ /* select search */
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
    width: 118px;
    ul{
        list-style-type: none;
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
            width: 110px;
            img{
                margin: 8px 6px 6px 6px;
            }
            &:hover{
                cursor: pointer;
                filter: brightness(150%);
            }
        }
    }
`

export const FolderSize = styled.div`
    height: 157px;
    header{
        height: 13px;
        font-size: 11px;
        color: #888888;
    }
    ul{
        list-style-type: none;
        button{
            display: flex;
            align-items: center;
            width: 100%;
            position: relative;
            left: 1px;
        }
        li{
            display: flex;
            align-items: center;
            height: 28px;
            border-radius: 7px;
            background-color: rgba(50, 50, 50, 0.95);
            font-size: 13px;
            letter-spacing: 1px;
            padding-left: 10px;
            width: 110px;
            img{
                margin: 8px 6px 6px 6px;
            }
            &:hover{
                cursor: pointer;
                filter: brightness(150%);
            }
        }
    }
`

export const FinderMain = styled.main`
    overflow: auto;
    padding: 20px;
    text-align: center;
    margin-top: 50px;
    &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        background-color: rgba(30, 30, 30, 0);
    }

    &::-webkit-scrollbar {
        width: 12px;
        background-color: rgba(30, 30, 30, 0);
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: #313131;
    }
`
export const ProfileWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
    img{
        width: 200px;
        height: 200px;
        border-radius: 50%;
    }
`

export const TextWrap = styled.div`
    text-align: center;
    p{
        margin: 48px 0;
    }
`

export const Work = styled.div`
    width: 100%;
    height: 400px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    a{
        text-decoration: none;
        color: #fff;
    }
`

export const Folder = styled.div`
    width: 120px;
    img{
        width: 80px;
    }
`