import Head from 'next/head';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Head>
        <title>ALX Listing App</title>
      </Head>

      <h1 className="text-3xl font-bold text-center mb-6">
        Welcome to the ALX Listing App 🏠
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <Card
          title="Modern Apartment"
          image="/assets/placeholder.jpg"
          description="A beautiful 2-bedroom apartment located in the city center."
        />
        <Card
          title="Beach House"
          image="/assets/placeholder.jpg"
          description="Relax by the beach with stunning ocean views."
        />
        <Card
          title="Mountain Cabin"
          image="/assets/placeholder.jpg"
          description="Enjoy a peaceful stay surrounded by nature."
        />
      </div>

      <div className="text-center mt-8">
        <Button label="Explore More" onClick={() => alert('Coming soon!')} />
      </div>
    </div>
  );
}
