
import menuLogo from '../assets/menu-symbol.svg'
import youtubeLogo from '../assets/youtube-logo.svg'


export default function TitleBar() {
    return <span className="flex">
        <img
            src={menuLogo}
            alt=" "
            className="w-10 h-5 border" />
        <img src={youtubeLogo} alt=""
        className="w-25 border"/>
    </span>
}