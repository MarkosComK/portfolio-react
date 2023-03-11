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
                        <li><img src={airdropIcon} alt="" />AirDrop</li>
                        <li><img src={desktopIcon} alt="" />Desktop</li>
                        <li><img src={documentsIcon} alt="" />Documents</li>
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus est et
                    sem aliquet, sit amet vulputate ante auctor. Aenean eleifend enim vitae purus 
                    mollis, et suscipit eros elementum. Duis ornare, eros in ullamcorper sollicitudin, 
                    dolor lorem accumsan tellus, at pellentesque quam est vitae libero.
                    </p>
                    <p>
                        Proin ultricies neque in ante pellentesque luctus. Vestibulum venenatis mi vel 
                        orci vulputate, vel faucibus tortor pharetra. Vivamus hendrerit libero vel eros 
                        tempor, a posuere massa mollis. Morbi facilisis mauris ut lacus ullamcorper 
                        consequat.
                    </p>
                    <p>
                        Donec venenatis augue ut magna suscipit, non suscipit arcu tristique. Phasellus 
                        vel diam et enim interdum iaculis. Sed tempor, eros vel suscipit fringilla, nunc 
                        nibh euismod orci, sed varius ante leo ut lorem. Fusce nec posuere mi
                    </p>
                    <p>
                        Pellentesque facilisis, lectus quis pulvinar pretium, metus orci euismod lacus, 
                        sed volutpat magna nisl at odio. Fusce aliquet laoreet felis eget commodo. Sed 
                        pharetra odio id leo mollis, a congue lorem vehicula. Nunc ut dui eu leo 
                        tristique commodo sit amet vel velit.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus est et
                    sem aliquet, sit amet vulputate ante auctor. Aenean eleifend enim vitae purus 
                    mollis, et suscipit eros elementum. Duis ornare, eros in ullamcorper sollicitudin, 
                    dolor lorem accumsan tellus, at pellentesque quam est vitae libero.
                    </p>
                    <p>
                        Proin ultricies neque in ante pellentesque luctus. Vestibulum venenatis mi vel 
                        orci vulputate, vel faucibus tortor pharetra. Vivamus hendrerit libero vel eros 
                        tempor, a posuere massa mollis. Morbi facilisis mauris ut lacus ullamcorper 
                        consequat.
                    </p>
                    <p>
                        Donec venenatis augue ut magna suscipit, non suscipit arcu tristique. Phasellus 
                        vel diam et enim interdum iaculis. Sed tempor, eros vel suscipit fringilla, nunc 
                        nibh euismod orci, sed varius ante leo ut lorem. Fusce nec posuere mi
                    </p>
                    <p>
                        Pellentesque facilisis, lectus quis pulvinar pretium, metus orci euismod lacus, 
                        sed volutpat magna nisl at odio. Fusce aliquet laoreet felis eget commodo. Sed 
                        pharetra odio id leo mollis, a congue lorem vehicula. Nunc ut dui eu leo 
                        tristique commodo sit amet vel velit.
                    </p>
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
