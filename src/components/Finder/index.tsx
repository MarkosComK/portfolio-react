import { useState } from 'react'
import * as S from './style'
import * as B from '../styles/styledButtons'
import leftArrow from './finder-icons/left-arrow.png'
import rightArrow from './finder-icons/right-arrow.png'
import search from './finder-icons/search.png'
import applicationIcon from './finder-icons/application.png'
import recentIcon from './finder-icons/recent.png'
import airdropIcon from './finder-icons/airdrop.png' 
import desktopIcon from './finder-icons/desktop.png' 
import documentsIcon from './finder-icons/documents.png'
import downloadsIcon from './finder-icons/downloads.png'
import driveIcon from './finder-icons/drive.png'


// about images
import profileImg from './images/me-art.png'

// work images
import jsFolder from './finder-icons/js-folder.png'
import reactFolder from './finder-icons/react-folder.png'
import githubFolder from './finder-icons/github-folder.png'

interface Props {
    display: boolean,
    zIndex: number,
    handleChangeDisplay: (value: number) => void
}

function Finder({display, zIndex, handleChangeDisplay}: Props) {
    const [content, setContent] = useState<string>('about')

  return (
    <S.Finder display={display} zIndex={zIndex}>
      <S.Header>
        <div>
            <img src={leftArrow} alt="" />
            <img src={rightArrow} alt="" />
        </div>
        <p>About</p>
        <div>
            <img src={search} alt="" />
        </div>
      </S.Header>
      <section>
        <S.FinderSidebar>
            <S.FinderButtons>
                    <B.RButton onClick={() => handleChangeDisplay(3)}></B.RButton>
            </S.FinderButtons>
            <div>
                <S.Favorites>
                    <header>
                        <p >Favorites</p>
                    </header>
                    <ul >
                        <li onClick={() => setContent('about')}><img src={applicationIcon} alt="" />About</li>
                        <li onClick={() => setContent('work')}><img src={recentIcon} alt="" />Work</li>
                        <li><img src={documentsIcon} alt="" />Documents</li>
                        <li><img src={airdropIcon} alt="" />AirDrop</li>
                        <li><img src={desktopIcon} alt="" />Desktop</li>
                        <li><img src={downloadsIcon} alt="" />Downloads</li>
                    </ul>
                </S.Favorites>
                <S.Drive>
                    <ul>
                        <header>
                            <p >Drive</p>
                        </header>
                        <li><img src={driveIcon} alt="" />icloud</li>
                    </ul>
                </S.Drive>
                <S.FolderSize>
                    <header>
                        <p >Folder size</p>
                    </header>
                    <ul >
                        <button id="smallBtn" ><li>Small</li></button>
                        <button id="mediumBtn" ><li >Medium</li></button>
                        <button id="bigBtn" ><li >Big</li></button>
                    </ul>
                </S.FolderSize>
            </div>
        </S.FinderSidebar>
      </section>
      <S.FinderMain>
        <section>
            {/* this section should receive the content dynamically it`s in progress*/}
            {showContent(content)}
        </section>
      </S.FinderMain>
    </S.Finder>
  )
}


function showContent(value: string){
    if(value === "about"){
        return (
            <div>
                <h1>Hey, are you looking for a front end Web-Developer?</h1>
                <S.ProfileWrap>
                    <img src={profileImg} alt="" />
                    <div>
                        <p><strong>Markos Vinicius</strong></p>
                        <p>Web-developer from Brazil, based in Portugal</p>
                    </div>
                </S.ProfileWrap>
                <S.TextWrap>
                    <p>
                        I am a creative front-end developer who is passionate about art, technology, 
                        and music. My studies in programming began a few years ago, and since then, 
                        I have ventured into all aspects related to it - from computer assembly and 
                        maintenance to programming. Along the way, I discovered that programming allows 
                        me to use my creativity and intuition to create impressive projects.
                    </p>
                    <p>
                        Currently, I am focused on developing my skills in front-end, where I can align 
                        my best skills, including creativity, digital art, UX/UI, Photoshop, Adobe 
                        Illustrator, and Figma. I believe that developing front-end applications is 
                        the best way to discover my full potential and become a complete developer. 
                        If you are looking for a passionate front-end developer, I am 
                        here to help!
                    </p>
                    <div>
                        <p>
                            Remember:
                        </p>
                        <p>
                            Everything happens for a reason. 
                        </p>
                        <p>
                            What is yours for being here?
                        </p>
                    </div>
                    <S.Icons>
                        <a target="_blank" href="https://github.com/MarkosComK ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/>
                            </svg>
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/markos-soares/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                        </a>
                    </S.Icons>
                </S.TextWrap>
            </div>
        )
    } else if (value === "work"){
        return (
            <S.Work>
                <a href="https://markoscomk.github.io/front-end-mentor-solutions/calculator-app-main/" target="_blank">
                    <S.Folder>
                        <img src={jsFolder} alt="" />
                        <p>JavaScript</p>
                        <p>calculator</p>
                    </S.Folder>
                </a>
                <a href="https://markoscomk.github.io/pomodoro-clock/" target="_blank">
                    <S.Folder>
                        <img src={jsFolder} alt="" />
                        <p>Pomodoro</p>
                        <p>clock</p>
                    </S.Folder>
                </a>
                <a href="https://space-tourism-website.netlify.app/" target="_blank">
                    <S.Folder>
                        <img src={reactFolder} alt="" />
                        <p>Space Tourism</p>
                        <p>landing page</p>
                    </S.Folder>
                </a>
                <a href="https://github.com/MarkosComK" target="_blank">
                    <S.Folder>
                        <img src={githubFolder} alt="" />
                        <p>Visit my</p>
                        <p>Github</p>
                    </S.Folder>
                </a>
            </S.Work>
        )
    }
}
export default Finder
