import styled from "styled-components";

interface Props {
    display: boolean,
    settingsDisplay: boolean
}

export const TopBar = styled.nav<Props>`
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 10px;
    width: 100vw;
    height: 25px;
    padding: 0 10px;
    ul{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        gap: 12px;
        padding: 0 12px;
        z-index: 100;
        background-color: var(--theme-bg-color);
        /* Glass effect */
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border-radius: 7px;

        &:nth-child(2){
            li:nth-child(1){
                &:hover{
                    cursor: pointer;
                }
            }
            div{
                position: absolute;
                top: 30px;
                left: 0;
                
                display: ${props => props.display ? "flex" : "none"};
                flex-direction: column;
                align-items: center;
                justify-content: center;


                background-color: var(--theme-bg-color);
                /* Glass effect */
                backdrop-filter: blur(20px);
                -webkit-backdrop-filter: blur(20px);
                border-radius: 7px;
                a{
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    height: 25px;
                    width: 100px;
                    text-decoration: none;
                    color: var(--font-color);

                    &:nth-child(1){
                        border-radius: 7px 7px 0 0;
                    }
                    &:nth-child(3){
                        border-radius: 0 0 7px 7px;
                    }
                    &:hover{
                        cursor: pointer;
                        background-color: var(--hover-menu-bg);
                    }
                }
            }
        }

        li{
            list-style: none;
            display: flex;
            align-items: center;
            &:nth-child(2){ /* Settings li */
            div{
                position: absolute;
                top: 30px;
                left: 0;
                
                width: 200px;
                height: 230px;
                
                display: ${props => props.settingsDisplay ? "flex" : "none"};
                flex-direction: column;
                align-items: center;
                
                
                background-color: var(--theme-bg-color);
                /* Glass effect */
                backdrop-filter: blur(20px);
                -webkit-backdrop-filter: blur(20px);
                border-radius: 7px;
                -webkit-box-shadow: -1px 4px 13px -4px rgba(0,0,0,0.75);
                -moz-box-shadow: -1px 4px 13px -4px rgba(0,0,0,0.75);
                box-shadow: -1px 4px 13px -4px rgba(0,0,0,0.75);
                    header{
                        margin-top: 10px;
                    }
                    main{
                        display: grid;
                        grid-template-columns: 1fr 1fr 1fr;
                        grid-template-rows: 1fr 1fr;
                        gap: 10px;

                        margin-top: 10px;

                        img{
                            width: 50px;
                            height: 85px;
                            border-radius: 4px;
                            -webkit-box-shadow: -1px 4px 13px -4px rgba(0,0,0,0.75);
                            -moz-box-shadow: -1px 4px 13px -4px rgba(0,0,0,0.75);
                            box-shadow: -1px 4px 13px -4px rgba(0,0,0,0.75);
                            &:hover{
                                cursor: pointer;
                                border: 1px solid black;
                            }
                        }
                    }
                    &:hover{
                        cursor: default;
                    }
                }
                &:hover{
                    cursor: pointer;
                }
            }
        }
    }
`
export const kIcon = styled.img`
    width: 30px;
`
export const Hours = styled.li`
    font-size: 14px;
`
