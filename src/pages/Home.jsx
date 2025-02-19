export default function Home() {
    const troopInfo = {
      name: "Scout Troop #123",
      location: "Forest Hills, CA",
      founded: 1998,
      motto: "Be Prepared!",
      activities: ["Camping", "Hiking", "Community Service", "First Aid Training"]
    }
  
    return (
      <div className="min-h-screen flex flex-col pt-16">
        <section className="bg-gradient-to-b from-scout-orange to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-white mb-6">{troopInfo.name}</h1>
            <div className="bg-white rounded-lg shadow-xl p-6 space-y-4">
              <p className="text-lg text-gray-800"><span className="font-semibold">Location:</span> {troopInfo.location}</p>
              <p className="text-lg text-gray-800"><span className="font-semibold">Founded:</span> {troopInfo.founded}</p>
              <p className="text-2xl text-scout-orange font-bold">{troopInfo.motto}</p>
              <div className="mt-6">
                <h2 className="text-xl font-semibold mb-4">Our Activities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {troopInfo.activities.map((activity, index) => (
                    <div key={index} className="bg-orange-50 p-4 rounded-lg flex items-center">
                      <span className="h-2 w-2 bg-scout-orange rounded-full mr-3"></span>
                      {activity}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }