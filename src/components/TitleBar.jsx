
import menuLogo from '../assets/menu-symbol.svg'
import youtubeLogo from '../assets/youtube-logo.svg'
import { Search } from 'lucide-react'


export default function TitleBar() {
    return <span className="flex gap-2">
        
        <img
            src={menuLogo}
            alt=" "
            className="w-10 h-5 mt-2" />
        <img src={youtubeLogo} alt=""
            className="w-25" />
        
        <input type="text" className="border w-100 h-10 mx-auto rounded-2xl px-4"/>
    </span>
}