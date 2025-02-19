export default function Law() {
    const scoutLaw = [
      "A Scout is trustworthy",
      "A Scout is loyal",
      "A Scout is helpful",
      "A Scout is friendly",
      "A Scout is courteous",
      "A Scout is kind",
      "A Scout is obedient",
      "A Scout is cheerful",
      "A Scout is thrifty",
      "A Scout is brave",
      "A Scout is clean",
      "A Scout is reverent"
    ]
  
    return (
      <div className="min-h-screen flex flex-col pt-16">
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-scout-orange mb-8 text-center">Scout Law</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {scoutLaw.map((law, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-scout-orange hover:shadow-xl transition-shadow">
                  <div className="flex items-center">
                    <span className="text-scout-orange font-bold text-xl mr-4">{index + 1}.</span>
                    <p className="text-gray-800 text-lg">{law}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    )
  }