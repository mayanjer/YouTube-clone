import Post from "./Post"
import Button from "./Button"
import { BUTTON_IDENTIFIERS } from "../data"
import { IMAGES } from "../data"

export default function MainContent() {
    return <section className="mt-4">
        <div className="flex gap-2">
            {BUTTON_IDENTIFIERS.map((identifier)=> <Button identifier={identifier} />)}
        </div>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2  gap-3">
            {IMAGES.map(({image, heading}) => <Post image ={image} heading = {heading} />)}
        </div>
    </section>
}