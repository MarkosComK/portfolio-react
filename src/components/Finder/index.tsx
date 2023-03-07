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

function Finder() {
  return (
    <S.Finder>
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
                    <B.RButton></B.RButton>
                    <B.YButton></B.YButton>
                    <B.GButton></B.GButton>
            </S.FinderButtons>
            <div>
                <S.Favorites>
                    <header>
                        <p >Favorites</p>
                    </header>
                    <ul >
                        <li id="about-btn"><img src={applicationIcon} alt="" />About</li>
                        <li id="work-btn"><img src={recentIcon} alt="" />Work</li>
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
      <main></main>
    </S.Finder>
  )
}

export default Finder
