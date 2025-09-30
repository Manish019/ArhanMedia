import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="mt-12 border-t border-gray-200">
<div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">LA</div>
<div>
<div className="font-semibold">LeadAd Studio</div>
<div className="text-xs text-gray-500">© {new Date().getFullYear()} All rights reserved</div>
</div>
</div>
<div className="text-sm text-gray-600">Designed with ❤️ by LeadAd Studio</div>
</div>
</footer>
    </>
  )
}

export default Footer