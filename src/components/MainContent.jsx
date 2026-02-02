import Post from "./Post";
import Button from "./Button";
import { BUTTON_IDENTIFIERS } from "../data";
import { POST } from "../data";

export default function MainContent() {
  return (
    <section className="mt-4">
      <div className="flex gap-2">
        {BUTTON_IDENTIFIERS.map((identifier) => (
          <Button identifier={identifier} />
        ))}
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2  gap-3">
        {POST.map(
          ({
            thumbNail,
            heading,
            profilePicture,
            accountName,
            viewCount,
            timePosted,
          }) => (
            <Post
              thumbNail={thumbNail}
              heading={heading}
              profilePicture={profilePicture}
              accountName={accountName}
              viewCount={viewCount}
              timePosted={timePosted}
            />
          ),
        )}
      </div>
    </section>
  );
}
