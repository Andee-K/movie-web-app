import PageWithSearch from "../ui/PageWithSearch";
import Trending from "@/app/ui/Trending";
import { MediaCategory } from "../ui/MediaCategory";

export default function Page() {
  return (
    <PageWithSearch>
      <div className="flex flex-col gap-6">
        <Trending />
        <MediaCategory categoryTitle="Recommended for you" apiType="recommended" />
      </div>
    </PageWithSearch>
  );
}
