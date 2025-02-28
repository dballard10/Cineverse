import GenreList from "@/components/GenreList";
import { Navigation } from "@/components/Navigation";
import AsidePanel from "@/components/AsidePanel";
import useToggleAside from "@/hooks/use-toggleAside";
import PageHeading from "@/components/PageHeading";
import GridDisplay from "@/components/GridDisplay";

const HomePage = () => {
  const { isCollapsed, toggleCollapse } = useToggleAside({
    initialState: false,
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <Navigation />
      <PageHeading title="Discover" />
      <main className="flex h-full">
        <AsidePanel
          isCollapsed={isCollapsed}
          toggleCollapse={toggleCollapse}
          title="Genres"
        >
          <GenreList />
        </AsidePanel>
        <div className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4">
            <GridDisplay
              currentShowsText="What the world is currently watching"
              allShowsText="All Shows"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
