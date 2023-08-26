"use client";
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { useState } from 'react';
import { AiOutlineSearch, AiOutlineArrowRight } from 'react-icons/ai'


export default function Home() {

  const SUGGESTS = [
    {
      id: 1,
      name: 'Handphone',
      value: 'Handphone'
    },
    {
      id: 2,
      name: 'Laptop',
      value: 'Laptop'
    },
    {
      id: 3,
      name: 'Dompet',
      value: 'Dompet'
    },
    {
      id: 4,
      name: 'Kunci',
      value: 'Kunci'
    }
  ]

  const [inputSuggestions, setInputSuggestions] = useState(SUGGESTS);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: any) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);
    const filteredSuggestions = SUGGESTS.filter((suggestion) =>
      suggestion.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setInputSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (suggestion: any) => {
    setInputValue(suggestion.value);
    setInputSuggestions([]);
  };



  return (
    <main className='px-10 py-8'>
      <Navbar />
      <section className="w-full flex flex-col justify-center items-center mt-24">
        <h1 className="hidden lg:block  text-[220px] text-white opacity-5 text-center -z-10 absolute">
          UTY HEBAT
        </h1>
        <h1 className="text-xl md:text-3xl font-semibold text-center leading-relaxed">
          SOLUSI PENCARIAN BARANG HILANG <br className='hidden md:block' />
          UNIVERSITAS TEKNOLOGI YOGYAKARTA
        </h1>
        <p className="mt-10 text-[10px] md:text-sm opacity-90 mb-3">
          Temukan informasi barangmu yang hilang di sini.
        </p>
        <div className="md:w-[650px] h-[54px] md:h-[56px] bg-white rounded-full text-[#232323] flex flex-row items-center justify-start px-4 gap-x-4 md:gap-x-8">
          <AiOutlineSearch className="text-2xl text-[#232323] opacity-50" />
          <input
            value={inputValue}
            onChange={handleInputChange}
            type="text"
            placeholder="Cari barangmu di sini..."
            className="w-3/4 placeholder:text-[12px] placeholder:font-normal font-semibold text-[14px] px-2 py-2 rounded-sm border-none focus:outline-none "
          />
          <button className="bg-violet-800 rounded-full text-sm text-center px-6 py-3 text-white hover:bg-violet-900 transition-all 0.4s">
            Cari
          </button>
        </div>
        <div className='flex flex-wrap justify-center items-center gap-x-4 gap-y-0'>
          {SUGGESTS.map((suggest, index) => {
            return (
              <>
                <div key={index} className="mt-8 flex flex-row gap-x-2 items-center justify-center bg-violet-800 transition-all duration-300 bg-opacity-20 hover:bg-opacity-100 backdrop-filter backdrop-blur-sm rounded-full text-sm w-36 h-9 text-white cursor-pointer"
                >
                  <p onClick={() => handleSuggestionClick(suggest)} className="text-white opacity-100">{suggest.name}</p>
                  <AiOutlineArrowRight className="-rotate-45" />
                </div>
              </>
            )
          })}
        </div>
      </section>
      <Footer />
    </main>
  )
}
