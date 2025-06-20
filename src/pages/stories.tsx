// src/pages/stories.tsx
import AppLayout from '@/layouts/AppLayout';

const StoriesPage = () => (
  <AppLayout>
    <section className="py-12 px-6 max-w-5xl mx-auto text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Oral Histories & Community Stories</h1>
      <p className="text-lg mb-8">
        Experience the voices of our communities through personal memories, folktales, and generational storytelling. These narratives preserve identity and echo the soul of heritage.
      </p>

      <div className="space-y-8">
        <article className="bg-white shadow-md rounded p-6 border-l-4 border-emerald-600">
          <h2 className="text-xl font-semibold mb-2">The Wisdom of Elder Kandeh</h2>
          <p className="text-gray-700">
            "When the river speaks, even the rocks listen." Elder Kandeh shared this tale of the talking river, passed down in his village for over seven generations...
          </p>
        </article>

        <article className="bg-white shadow-md rounded p-6 border-l-4 border-emerald-600">
          <h2 className="text-xl font-semibold mb-2">How the Drummer Found His Beat</h2>
          <p className="text-gray-700">
            The story of a young boy who carved rhythms into silence, echoing the heartbeat of his ancestors through carved wood and stretched skin...
          </p>
        </article>

        {/* You can keep adding more stories statically or dynamically later */}
      </div>
    </section>
  </AppLayout>
);

export default StoriesPage;
