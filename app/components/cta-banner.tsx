import Link from 'next/link'

export default function CTABanner() {
  return (
    <div className="border border-pink-500/20 rounded-lg p-8 bg-black/50 relative max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">So, what are you waiting for?</h2>
      <p className="text-gray-400 mb-6">
        Setup your server with Vandal today and start protecting your community.
      </p>
      <div className="flex gap-4">
        <Link 
          href="https://builtbybit.com/members/snowyjs.471033/"
          className="px-6 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition-colors"
        >
          BuiltByBit
        </Link>
        <Link 
          href="#yettomake"
          className="px-6 py-2 border border-pink-500 text-white rounded hover:bg-pink-500/10 transition-colors"
        >
          View Pricing
        </Link>
      </div>
    </div>
  )
}