export default function ScoutPromise() {
    const scoutPromise = [
      "On my honor",
      "I will do my best",
      "To do my duty to God and my country",
      "To help other people at all times",
      "To obey the Scout Law"
    ]
  
    return (
      <div className="min-h-screen flex flex-col pt-16">
        <section className="bg-orange-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-scout-orange mb-12 text-center">Scout Promise</h1>
            <div className="space-y-8 max-w-3xl mx-auto">
              {scoutPromise.map((line, index) => (
                <div key={index} className="flex items-center">
                  <div className="hidden md:block w-12 h-12 bg-scout-orange rounded-full flex items-center justify-center text-white font-bold mr-6">
                    {index + 1}
                  </div>
                  <p className="text-gray-800 text-xl bg-white p-6 rounded-lg shadow-md flex-1">
                    {line}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    )
  }