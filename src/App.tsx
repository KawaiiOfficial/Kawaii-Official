import React, { useState, useEffect } from 'react';
import { Heart, Github, MessageCircle, FileText, ExternalLink, ChevronDown } from 'lucide-react';

function App() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-gray-900">
      
      {/* Hero Section - Enhanced Visibility */}
      <section className="relative h-screen">
        <img
          src="https://res.cloudinary.com/dtm10i7bj/image/upload/v1749621849/7e538041-baaa-47be-b644-cd474b2e1ed9_o9kyfz.jpg"
          alt="Kawaii"
          className="w-full h-full object-cover"
        />
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Main Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-8xl font-black mb-6 tracking-wider text-white drop-shadow-lg transform hover:scale-105 transition-transform duration-300" 
                style={{
                  fontFamily: 'Comic Sans MS, cursive, system-ui',
                  textShadow: '4px 4px 0px rgba(0,0,0,0.3), 8px 8px 0px rgba(0,0,0,0.2), 12px 12px 20px rgba(0,0,0,0.5)',
                  color: 'white'
                }}>
              KAWAII
            </h1>
            <p className="text-xl font-medium tracking-wide text-white/90 drop-shadow-md"
               style={{ fontFamily: 'Comic Sans MS, cursive, system-ui' }}>
              Enter the Realm of Infinite Cuteness
            </p>
          </div>
        </div>

        {/* Kawaii Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={scrollToContent}
            className="group flex flex-col items-center space-y-2 text-white hover:text-white transition-all duration-300"
            style={{ fontFamily: 'Comic Sans MS, cursive, system-ui' }}
          >
            <div className="animate-bounce flex flex-col items-center text-white drop-shadow-lg">
              <ChevronDown size={48} className="group-hover:scale-110 transition-transform duration-300 mb-1" 
                style={{
                  filter: 'drop-shadow(3px 3px 0px rgba(0,0,0,0.8)) drop-shadow(6px 6px 0px rgba(0,0,0,0.4))',
                  color: 'white'
                }} />
              <ChevronDown size={48} className="group-hover:scale-110 transition-transform duration-300 -mt-6" 
                style={{
                  filter: 'drop-shadow(3px 3px 0px rgba(0,0,0,0.8)) drop-shadow(6px 6px 0px rgba(0,0,0,0.4))',
                  color: 'white'
                }} />
            </div>
            <span className="text-lg font-black tracking-wider group-hover:text-pink-200 transition-colors duration-300 text-white drop-shadow-lg"
                  style={{
                    textShadow: '3px 3px 0px rgba(0,0,0,0.8), 6px 6px 0px rgba(0,0,0,0.4)',
                    color: 'white'
                  }}>
              Explore
            </span>
          </button>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-light text-white mb-12 tracking-wide" style={{ color: 'white' }}>Connect With Us</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <a
              href="https://t.me/kawaiichannelsol"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center space-y-4 p-6 bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-gray-800/80 hover:border-pink-500/50 transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <MessageCircle size={32} className="text-pink-400 group-hover:text-pink-300 transition-colors duration-300" />
              </div>
              <div>
                <h3 className="text-white font-light text-lg mb-1">Telegram</h3>
                <p className="text-gray-400 text-sm font-light">Join our community</p>
              </div>
            </a>

            <a
              href="https://x.com/kawaiidotfun"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center space-y-4 p-6 bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-gray-800/80 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-white font-light text-lg mb-1">X.com</h3>
                <p className="text-gray-400 text-sm font-light">Follow for updates</p>
              </div>
            </a>

            <a
              href="https://github.com/KawaiiOfficial/Kawaii-Official"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center space-y-4 p-6 bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-gray-800/80 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <Github size={32} className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
              </div>
              <div>
                <h3 className="text-white font-light text-lg mb-1">GitHub</h3>
                <p className="text-gray-400 text-sm font-light">Explore the code</p>
              </div>
            </a>

            <a
              href="https://kawaii-official.gitbook.io/kawaii/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center space-y-4 p-6 bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-gray-800/80 hover:border-green-500/50 transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <FileText size={32} className="text-green-400 group-hover:text-green-300 transition-colors duration-300" />
              </div>
              <div>
                <h3 className="text-white font-light text-lg mb-1">Documentation</h3>
                <p className="text-gray-400 text-sm font-light">Read the guides</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Lore Section - Massively Expanded with Humor */}
      <section className="py-32 bg-gray-900">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-light text-white mb-6 tracking-wide">The Chronicles</h2>
            <p className="text-xl text-gray-400 font-light mb-8">
              The most scientifically accurate documentation of kawaii history ever compiled
            </p>
            <div className="w-24 h-px bg-white/30 mx-auto"></div>
          </div>

          {/* The Great Beginning */}
          <div className="mb-32">
            <div className="grid md:grid-cols-2 gap-20 items-center mb-16">
              <div>
                <h3 className="text-3xl font-light text-white mb-8">The Great Beginning</h3>
                <p className="text-gray-300 text-lg leading-relaxed font-light mb-6">
                  In the cosmic year 2847, when the universe was still learning how to smile, a single tear of pure joy fell from the eye of the first being to ever experience true happiness. This tear crystallized in the void of space, creating what we now know as the Heart Crystal of Kawaii.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed font-light mb-6">
                  From this crystal emerged the Great Kawaii, a cosmic entity of infinite adorableness whose first act was to giggle so sweetly that it created the fundamental laws of cuteness that govern our realm to this day.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed font-light">
                  Fun fact: The Great Kawaii's giggle was so powerful that it accidentally created 47 parallel universes where everything is slightly more adorable. Scientists are still trying to figure out how to visit them, but every attempt results in researchers becoming too overwhelmed by cuteness to continue their work.
                </p>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden group">
                <img
                  src="https://res.cloudinary.com/dtm10i7bj/image/upload/v1749621849/45d74183-46c2-487f-a753-9427c8b70218_g003bw.jpg"
                  alt="The Heart Crystal of Kawaii"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/60 via-transparent to-purple-900/30"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-light opacity-80">The Heart Crystal of Kawaii ✨</p>
                </div>
              </div>
            </div>

            {/* The Great Kawaii Incident */}
            <div className="grid md:grid-cols-2 gap-20 items-center mb-16">
              <div className="relative h-96 rounded-lg overflow-hidden group md:order-1">
                <img
                  src="https://res.cloudinary.com/dtm10i7bj/image/upload/v1749621850/6c25ec79-3874-4c4a-a3e4-3a7ea7837299_kelz6q.jpg"
                  alt="The Great Kawaii Incident"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 via-transparent to-orange-900/30"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-light opacity-80">The Great Kawaii Incident of 2851 🚨</p>
                </div>
              </div>
              <div className="md:order-2">
                <h3 className="text-3xl font-light text-white mb-8">The Great Kawaii Incident of 2851</h3>
                <p className="text-gray-300 text-lg leading-relaxed font-light mb-6">
                  Four years after the Great Beginning, disaster struck when someone accidentally sneezed while holding the Heart Crystal. This caused what historians now call "The Great Kawaii Incident" - a massive explosion of cuteness that spread across 12 galaxies.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed font-light mb-6">
                  The aftermath was catastrophic: entire planets became so adorable that space travelers would get distracted and forget to navigate their ships. The Galactic Safety Council had to issue emergency "Cuteness Overload" warnings for the next 200 years.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed font-light">
                  To this day, the person who sneezed remains anonymous, though rumors suggest they were immediately promoted to "Chief Kawaii Officer" of the universe. Their sneeze is now celebrated annually as "Bless You Day" across all affected galaxies.
                </p>
              </div>
            </div>

            {/* The Five Sacred Pillars */}
            <div className="grid md:grid-cols-2 gap-20 items-center mb-16">
              <div>
                <h3 className="text-3xl font-light text-white mb-8">The Five Sacred Pillars</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl text-white font-light mb-2">The Pillar of Gentle Greetings</h4>
                    <p className="text-gray-400 font-light">Every interaction must begin with a soft "nyaa~" to ensure positive energy flows between beings. Failure to do so results in a mandatory 3-hour cuddle therapy session.</p>
                  </div>
                  <div>
                    <h4 className="text-xl text-white font-light mb-2">The Pillar of Sparkle Collection</h4>
                    <p className="text-gray-400 font-light">Morning dewdrops contain concentrated happiness that must be gathered before sunrise. Professional Sparkle Collectors earn 6-figure salaries and have excellent dental coverage.</p>
                  </div>
                  <div>
                    <h4 className="text-xl text-white font-light mb-2">The Pillar of Daily Affection</h4>
                    <p className="text-gray-400 font-light">Seven hugs per day maintain the cosmic balance of love in the universe. The Hug Police patrol regularly to ensure compliance, though they're surprisingly gentle about it.</p>
                  </div>
                  <div>
                    <h4 className="text-xl text-white font-light mb-2">The Pillar of Mandatory Nap Time</h4>
                    <p className="text-gray-400 font-light">All beings must take a 20-minute nap at 2:22 PM to synchronize their dreams with the cosmic kawaii frequency. Alarm clocks are banned; only gentle butterfly kisses are allowed for wake-ups.</p>
                  </div>
                  <div>
                    <h4 className="text-xl text-white font-light mb-2">The Pillar of Excessive Politeness</h4>
                    <p className="text-gray-400 font-light">Citizens must say "please" and "thank you" at least 47 times per day. The current record holder said it 2,847 times in one day and was awarded a lifetime supply of rainbow sprinkles.</p>
                  </div>
                </div>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden group">
                <img
                  src="https://res.cloudinary.com/dtm10i7bj/image/upload/v1749621850/ec76fbcd-b655-471f-8708-0b02d6105d9b_lyhqa6.jpg"
                  alt="The Five Sacred Pillars"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-indigo-900/30"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-light opacity-80">The Sacred Pillars 🏛️</p>
                </div>
              </div>
            </div>

            {/* The War of the Grumpy Faces */}
            <div className="grid md:grid-cols-2 gap-20 items-center mb-16">
              <div className="relative h-96 rounded-lg overflow-hidden group md:order-1">
                <img
                  src="https://res.cloudinary.com/dtm10i7bj/image/upload/v1749621850/7a7bd243-b231-4ac3-92b0-f583345370e2_haxdfw.jpg"
                  alt="The War of the Grumpy Faces"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-pink-900/30"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-light opacity-80">The Great Frown Invasion ☹️</p>
                </div>
              </div>
              <div className="md:order-2">
                <h3 className="text-3xl font-light text-white mb-8">The War of the Grumpy Faces (2863-2864)</h3>
                <p className="text-gray-300 text-lg leading-relaxed font-light mb-6">
                  The darkest period in kawaii history began when the Grumpy Face Empire invaded from the Dimension of Perpetual Monday Mornings. Led by General Sourpuss McFrownyface, they attempted to ban all forms of cuteness and replace them with tax forms and expired milk.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed font-light mb-6">
                  The war lasted exactly 1 year, 2 months, and 17 minutes. It ended when kawaii forces deployed their secret weapon: a battalion of puppies wearing tiny hats. The Grumpy Face Empire immediately surrendered and asked if they could pet the puppies.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed font-light">
                  General McFrownyface was so moved by the experience that he changed his name to General Giggles McSnugglebottom and now runs a successful cupcake bakery in the Kawaii capital. His specialty is "Redemption Cookies" that taste like forgiveness and second chances.
                </p>
              </div>
            </div>

            {/* The Great Kawaii University */}
            <div className="grid md:grid-cols-2 gap-20 items-center mb-16">
              <div>
                <h3 className="text-3xl font-light text-white mb-8">The Great Kawaii University</h3>
                <p className="text-gray-300 text-lg leading-relaxed font-light mb-6">
                  Founded in 2870, GKU is the premier institution for higher kawaii education. The campus is built entirely from crystallized giggles and powered by renewable happiness energy. The library contains over 2 million books, all written in Comic Sans font for maximum readability.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg text-white font-light mb-2">Popular Majors:</h4>
                    <ul className="text-gray-400 font-light space-y-1 ml-4">
                      <li>• Advanced Snuggling (4-year degree)</li>
                      <li>• Professional Giggling (with minor in Chuckling)</li>
                      <li>• Theoretical Adorableness</li>
                      <li>• Applied Cuteness Engineering</li>
                      <li>• PhD in Sparkle Physics</li>
                    </ul>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed font-light">
                    The graduation ceremony involves each student receiving a diploma made of edible glitter while being serenaded by a choir of baby pandas. The school motto is "Kawaii or Die Trying" (though nobody has ever actually died from trying too hard to be cute).
                  </p>
                </div>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden group">
                <img
                  src="https://res.cloudinary.com/dtm10i7bj/image/upload/v1749621849/e6bb4b77-b3e6-4365-a797-3caa243473a8_qjtbfi.jpg"
                  alt="The Great Kawaii University"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-transparent to-blue-900/30"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-light opacity-80">Great Kawaii University 🏛️</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Enhanced Layout */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 px-8">
            <h2 className="text-5xl font-light text-white mb-6 tracking-wide">The Guardians</h2>
            <p className="text-xl text-gray-400 font-light mb-8">
              Meet the legendary protectors of kawaii energy across the realm
            </p>
            <div className="w-24 h-px bg-white/30 mx-auto"></div>
          </div>

          {/* Featured Character - Large */}
          <div className="mb-16 px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="group relative overflow-hidden rounded-sm">
                <img
                  src="https://res.cloudinary.com/dtm10i7bj/image/upload/v1749621850/7a7bd243-b231-4ac3-92b0-f583345370e2_haxdfw.jpg"
                  alt="Sparkle the Dream Weaver"
                  className="w-full h-[500px] object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <span className="text-sm font-light text-gray-300 tracking-wider">CHIEF GUARDIAN</span>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-4xl font-light text-white">Sparkle the Dream Weaver</h3>
                <p className="text-gray-300 text-lg font-light leading-relaxed">
                  The eldest and most powerful of all kawaii guardians, Sparkle has been weaving dreams from cotton candy clouds for over 1,000 cosmic years. Her specialty lies in creating rainbow bridges that connect sad hearts to happy ones.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                    <span className="text-gray-400 font-light">Master of Celestial Architecture</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span className="text-gray-400 font-light">Guardian of the Dream Realm</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-gray-400 font-light">Keeper of Rainbow Magic</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Character Grid - Enhanced */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {[
              {
                src: "https://res.cloudinary.com/dtm10i7bj/image/upload/v1749621850/ec76fbcd-b655-471f-8708-0b02d6105d9b_lyhqa6.jpg",
                title: "Blossom",
                subtitle: "The Giggle Guardian",
                description: "Protector of all innocent laughter in the realm. Has never encountered a frown she couldn't turn upside down.",
                power: "Laughter Amplification",
                years: "847 years of service"
              },
              {
                src: "https://res.cloudinary.com/dtm10i7bj/image/upload/v1749621850/6c25ec79-3874-4c4a-a3e4-3a7ea7837299_kelz6q.jpg",
                title: "Moonbeam",
                subtitle: "The Snuggle Sage",
                description: "Keeper of the Sacred Pillow Fort and inventor of the Ultimate Cuddle Technique. Can sense loneliness from 3 galaxies away.",
                power: "Comfort Manifestation",
                years: "623 years of service"
              },
              {
                src: "https://res.cloudinary.com/dtm10i7bj/image/upload/v1749621849/e6bb4b77-b3e6-4365-a797-3caa243473a8_qjtbfi.jpg",
                title: "Stardust",
                subtitle: "The Mischief Maker",
                description: "Professional hide-and-seek champion and part-time prankster. Known for turning vegetables into candy when no one's looking.",
                power: "Playful Transformation",
                years: "234 years of service"
              },
              {
                src: "https://res.cloudinary.com/dtm10i7bj/image/upload/v1749621849/45d74183-46c2-487f-a753-9427c8b70218_g003bw.jpg",
                title: "Cherry",
                subtitle: "The Happiness Alchemist",
                description: "PhD in Advanced Adorableness. Can transform any sad moment into pure joy using her special blend of giggles and sparkles.",
                power: "Emotional Alchemy",
                years: "456 years of service"
              }
            ].map((character, index) => (
              <div key={index} className="group relative overflow-hidden">
                <img
                  src={character.src}
                  alt={character.title}
                  className="w-full h-[400px] object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/90 transition-all duration-500"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="text-white space-y-3">
                    <div>
                      <span className="text-xs font-light text-gray-400 tracking-wider uppercase">{character.subtitle}</span>
                      <h3 className="text-2xl font-light">{character.title}</h3>
                    </div>
                    <p className="text-gray-300 font-light text-sm leading-relaxed">{character.description}</p>
                    <div className="space-y-1 pt-2 border-t border-gray-700">
                      <p className="text-xs text-gray-400 font-light">Power: {character.power}</p>
                      <p className="text-xs text-gray-400 font-light">{character.years}</p>
                    </div>
                  </div>
                </div>
                
                {/* Always visible name overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 group-hover:opacity-0 transition-opacity duration-500">
                  <h3 className="text-white font-light text-lg">{character.title}</h3>
                  <p className="text-gray-300 font-light text-sm">{character.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Realm Section - Enhanced */}
      <section className="py-32 bg-gray-900">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-light text-white mb-6 tracking-wide">The Realm</h2>
            <div className="w-24 h-px bg-white/30 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-16 mb-20">
            <div className="text-center">
              <div className="text-6xl mb-8">🌈</div>
              <h3 className="text-2xl font-light text-white mb-6">Climate</h3>
              <p className="text-gray-300 font-light leading-relaxed">
                Always 72°F with a gentle breeze that smells like vanilla cookies. Rain is made of liquid glitter and snow tastes like cotton candy. The aurora borealis appears every Tuesday at 3:33 PM.
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-8">🏰</div>
              <h3 className="text-2xl font-light text-white mb-6">Architecture</h3>
              <p className="text-gray-300 font-light leading-relaxed">
                All buildings are made of crystallized happiness and have rounded corners to prevent any potential sadness from sharp edges. Windows are made of solidified laughter.
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-8">🎭</div>
              <h3 className="text-2xl font-light text-white mb-6">Culture</h3>
              <p className="text-gray-300 font-light leading-relaxed">
                The national sport is competitive cuddling, and the currency is compliments. Tax season is called "Appreciation Season" and everyone looks forward to it.
              </p>
            </div>
          </div>

          {/* Daily Life in the Realm */}
          <div className="border-t border-gray-800 pt-20">
            <h3 className="text-3xl font-light text-white mb-12 text-center">Daily Life in Kawaii</h3>
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h4 className="text-xl font-light text-white mb-6">Morning Rituals</h4>
                <div className="space-y-4">
                  <p className="text-gray-300 font-light">6:00 AM - Sunrise Sparkle Collection</p>
                  <p className="text-gray-300 font-light">7:00 AM - Community Giggle Session</p>
                  <p className="text-gray-300 font-light">8:00 AM - Breakfast of Rainbow Pancakes</p>
                  <p className="text-gray-300 font-light">9:00 AM - Daily Compliment Exchange</p>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-light text-white mb-6">Evening Activities</h4>
                <div className="space-y-4">
                  <p className="text-gray-300 font-light">6:00 PM - Sunset Appreciation Circle</p>
                  <p className="text-gray-300 font-light">7:00 PM - Competitive Cuddling Matches</p>
                  <p className="text-gray-300 font-light">8:00 PM - Storytelling Under Star Blankets</p>
                  <p className="text-gray-300 font-light">9:00 PM - Dream Preparation Ceremony</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-black">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-5xl font-light text-white mb-12 tracking-wide">About</h2>
          
          <p className="text-xl text-gray-300 mb-16 leading-relaxed font-light">
            Welcome to the official documentation of the Kawaii Realm, a dimension where cuteness is a science, 
            adorableness is an art form, and happiness is the fundamental force of physics.
          </p>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-light text-white mb-6">Mission</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                To spread maximum adorableness across all dimensions while maintaining the perfect balance of 
                sweet and wholesome content that makes hearts flutter with joy.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-light text-white mb-6">Statistics</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Over 1 billion "awws" generated daily, 847% happiness increase rate, and a 0% chance of 
                encountering anything that isn't absolutely adorable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section - Enhanced Social Integration */}
      <section className="py-32 bg-gray-900">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-5xl font-light text-white mb-12 tracking-wide">Connect</h2>
          <p className="text-xl text-gray-300 mb-16 leading-relaxed font-light">
            Join our community across the digital realm and stay updated with the latest kawaii adventures.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <a
              href="https://t.me/kawaiichannelsol"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-gray-800/80 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                  <MessageCircle size={28} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-light text-lg mb-2">Telegram</h3>
                  <p className="text-gray-400 text-sm font-light">Join our community chat</p>
                </div>
                <ExternalLink size={16} className="text-gray-500 group-hover:text-blue-400 transition-colors duration-300" />
              </div>
            </a>

            <a
              href="https://x.com/kawaiidotfun"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-gray-800/80 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-blue-400">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-light text-lg mb-2">X.com</h3>
                  <p className="text-gray-400 text-sm font-light">Follow for updates</p>
                </div>
                <ExternalLink size={16} className="text-gray-500 group-hover:text-blue-400 transition-colors duration-300" />
              </div>
            </a>

            <a
              href="https://github.com/KawaiiOfficial/Kawaii-Official"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-gray-800/80 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center group-hover:bg-purple-500/30 transition-colors duration-300">
                  <Github size={28} className="text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-light text-lg mb-2">GitHub</h3>
                  <p className="text-gray-400 text-sm font-light">Explore the code</p>
                </div>
                <ExternalLink size={16} className="text-gray-500 group-hover:text-purple-400 transition-colors duration-300" />
              </div>
            </a>

            <a
              href="https://kawaii-official.gitbook.io/kawaii/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-gray-800/80 hover:border-green-500/50 transition-all duration-300"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center group-hover:bg-green-500/30 transition-colors duration-300">
                  <FileText size={28} className="text-green-400" />
                </div>
                <div>
                  <h3 className="text-white font-light text-lg mb-2">Documentation</h3>
                  <p className="text-gray-400 text-sm font-light">Read the guides</p>
                </div>
                <ExternalLink size={16} className="text-gray-500 group-hover:text-green-400 transition-colors duration-300" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-black border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="flex justify-center items-center mb-6">
            <Heart size={20} className="mx-3 text-gray-500" />
            <span className="font-light text-white tracking-wider">KAWAII REALM</span>
            <Heart size={20} className="mx-3 text-gray-500" />
          </div>
          
          <p className="text-gray-500 font-light mb-8">
            Spreading joy across the universe, one adorable moment at a time.
          </p>

          <div className="text-center">
            <p className="text-xs text-gray-600 font-light">
              © 2025 Kawaii Realm. All rights reserved in this dimension and 47 parallel universes.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;