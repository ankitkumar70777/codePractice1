'use client' // Error boundaries must be Client Components
 
import { useEffect } from 'react';
import { RefreshCw, Home, MessageCircle, } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

 
export default function Error({
  error,
}: {
  error: Error & { digest?: string }
  }) {
  
const router = useRouter();

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-sm w-full">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-blue-700 px-6 py-8 text-center">
            <div className="w-16 h-16 mx-auto bg-white/20 rounded-lg flex items-center justify-center mb-4">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-xl font-semibold text-white mb-2">Oops! Something went wrong !</h1>
            <p className="text-blue-100 text-sm">
              We're working on it
            </p>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="mb-6">
              <h2 className="font-medium text-gray-900 mb-3">What happened?</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                We're experiencing a technical issue that's preventing the page from loading properly. 
                Our engineers have been notified and are working on a solution.
              </p>
            </div>

            {/* Status Indicator */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                <div>
                  <p className="text-sm font-medium text-yellow-800">Issue Detected</p>
                  <p className="text-xs text-yellow-700">Engineers are investigating</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <button 
                onClick={() => {router.push('/')}}
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-2.5 px-4 rounded-md transition-colors duration-200 text-sm flex items-center justify-center gap-2"
              >
                <RefreshCw className={`w-4 h-4`} />
                Try Again
              </button>
              
              <Link href="/" prefetch={false} className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 px-4 rounded-md transition-colors duration-200 text-sm flex items-center justify-center gap-2">
                <Home className="w-4 h-4" />
                Return to Feed
              </Link>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              For urgent issues, visit our <a href="#" className="text-blue-600 hover:underline">Help Center</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}