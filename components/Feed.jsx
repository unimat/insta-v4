import Stories from "./Stories";
import Posts from "./Posts";

export default function Feed() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto">
      <section className="md:col-span-2">
        {/* Stories */}
        <Stories />
        
        {/* Posts */}
        <Posts />
      </section>

      <section className="hiidden md:inline-grid md:col-span-1">
        <div className="fixed w-[380px]">
          {/* Mini Profile */}

          {/* Suggestions */}
        </div>
      </section>
    </main>
  )
}
