import Post from "./Post"
import Button from "./Button"
import { BUTTON_IDENTIFIERS } from "../data"
import { IMAGES } from "../data"

export default function MainContent() {
    return <section className="mt-4">
        <div className="flex gap-2">
            {BUTTON_IDENTIFIERS.map((identifier)=> <Button identifier={identifier} />)}
        </div>

        <div className="flex flex-wrap gap-3">
            {IMAGES.map((postDetails)=> <Post/>)}
        </div>
    </section>
}