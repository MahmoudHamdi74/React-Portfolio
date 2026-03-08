import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="notfound-bg min-h-screen flex items-center justify-center p-4">
      <style>{`
        .notfound-glass {
          background: rgba(17, 24, 39, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 
                      0 2px 4px -1px rgba(0, 0, 0, 0.06),
                      inset 0 1px 1px rgba(255, 255, 255, 0.05);
        }
        
        .notfound-glass-button {
          background: rgba(17, 24, 39, 0.6);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        
        .notfound-glass-button:hover {
          background: rgba(37, 44, 59, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        
        .notfound-float-animation {
          animation: float 3s ease-in-out infinite;
        }
        
        .notfound-bg {
          background-color: #0F172A;
          background-image: 
            radial-gradient(at 20% 0%, rgba(124, 58, 237, 0.15) 0px, transparent 50%),
            radial-gradient(at 80% 0%, rgba(236, 72, 153, 0.15) 0px, transparent 50%),
            radial-gradient(at 0% 50%, rgba(56, 189, 248, 0.15) 0px, transparent 50%),
            radial-gradient(at 100% 50%, rgba(167, 139, 250, 0.15) 0px, transparent 50%),
            radial-gradient(at 0% 100%, rgba(52, 211, 153, 0.15) 0px, transparent 50%),
            radial-gradient(at 80% 100%, rgba(124, 58, 237, 0.15) 0px, transparent 50%);
        }
        
        .notfound-text-gradient {
          background: linear-gradient(135deg, #818cf8, #e879f9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .notfound-highlight {
          position: relative;
        }
        
        .notfound-highlight::after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #818cf8, #e879f9);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        
        .notfound-highlight:hover::after {
          transform: scaleX(1);
        }

        .notfound-glow {
          box-shadow: 0 0 20px rgba(129, 140, 248, 0.1);
        }
      `}</style>
      
      <div className="notfound-glass notfound-glow p-8 md:p-12 max-w-2xl w-full mx-4">
        <div className="text-center">
          <div className="mb-8 notfound-float-animation">
            <h1 className="text-7xl md:text-8xl font-bold text-gray-100 mb-2 tracking-tight">
              404
            </h1>
            <div className="h-1 w-24 mx-auto bg-linear-to-r from-indigo-400 to-purple-400 rounded-full mb-8"></div>
            <h2 className="text-2xl md:text-3xl font-medium notfound-text-gradient mb-4">
              Lost in Digital Space
            </h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
              The page you're looking for has drifted into another dimension. Don't worry, our team of space explorers is on it!
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/" 
                className="notfound-glass-button px-6 md:px-8 py-3 md:py-4 rounded-2xl text-gray-100 text-base md:text-lg inline-flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-indigo-500/20"
              >
                <i className="fas fa-home"></i>
                Return Home
              </Link>
              <Link 
                to="/#contact" 
                className="notfound-glass-button px-6 md:px-8 py-3 md:py-4 rounded-2xl text-gray-100 text-base md:text-lg inline-flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <i className="fas fa-headset"></i>
                Contact Support
              </Link>
            </div>
            
            <div className="pt-8 border-t border-gray-700/30">
              <p className="text-gray-400 text-sm">
                Need help? Check our{' '}
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-indigo-300 notfound-highlight">
                  documentation
                </a>
                {' '}or{' '}
                <Link to="/#github" className="text-purple-300 notfound-highlight">
                  system status
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
