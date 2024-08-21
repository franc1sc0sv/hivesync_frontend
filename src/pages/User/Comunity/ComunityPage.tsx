import React, { useState } from 'react';
import { InputsForms } from "../../../components/forms/Inputs/inputs";
import { useForm } from 'react-hook-form';
import { FiSearch, FiFilter } from "react-icons/fi";
import { FiBookmark, FiMapPin } from "react-icons/fi";
import { GoBackTriangle } from '../../../components/Icons/goBackTriangle';
import { Link } from 'react-router-dom';

export const ComunityPage = () => {
  const { register } = useForm();
  const [selectedCategory, setSelectedCategory] = useState('Todo');

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-overlay_1 min-h-screen" style={{ overflowX: 'hidden' }}>
      <Link 
      to={`/app/25c618ef-553b-4064-bb27-294a01aa15ff/c8480359-ae51-4e98-8875-9f3d1d3009cf`}
      className='w-full flex justify-start items-center'>
        <GoBackTriangle size={30} color='white' />
      </Link>

      <div className="w-full max-w-5xl">
        <h2 className="text-3xl font-bold text-white">Descubre Nuestro Entorno</h2>
        <h3 className="text-4xl font-bold text-white mt-2">Comunidades</h3>

        <div className="mt-6 flex items-center gap-4">
          <div className="flex-grow">
            <InputsForms
              title=""
              placeholder="Descubre Nuestro Entorno"
              name="search"
              register={register}
            />
          </div>
          <button className="flex items-center justify-center p-3 rounded-xl bg-gray-800 text-white">
            <FiSearch size={24} />
          </button>
          <button className="flex items-center justify-center p-3 rounded-xl bg-gray-800 text-white">
            <FiFilter size={24} />
          </button>
        </div>

        <div className="mt-8 flex gap-4 overflow-x-auto">
          {['Todo', 'Recomendados', 'Popular', 'Nuevos'].map(category => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`py-2 px-4 rounded-full ${selectedCategory === category ? 'bg-purple-600 text-white' : 'bg-transparent text-white transition-all duration-500'}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-6 bg-gray-800 rounded-lg p-6 border border-gray-600 relative" style={{ borderColor: '#8C8C8C', borderRadius: '12px' }}>
          <div className="absolute inset-x-0 top-[1.5rem] h-48 bg-[#8C8C8C] rounded-t-lg" style={{ width: 'calc(100% - 3rem)', left: '1.5rem', right: '1.5rem', borderRadius: '12px' }}></div>
          <div className="w-full h-48 bg-gray-700 rounded-lg mb-4 relative">
            <div className="absolute top-2 right-2 bg-white rounded-full p-2">
              <FiBookmark size={24} className="text-purple-600" />
            </div>
          </div>
          <div className="flex flex-col items-start pt-2">
            <h4 className="text-white font-bold">It takes two</h4>
            <p className="text-white flex items-center">
              <FiMapPin className="mr-2" /> América
            </p>
          </div>
          <div className="absolute bottom-4 right-4 flex items-center">
            <div className="rounded-full h-8 w-8 z-10" style={{ backgroundColor: '#2E2934' }}></div>
            <div className="rounded-full h-8 w-8 ml-[-12px] z-20" style={{ backgroundColor: '#2E2934' }}></div>
            <div className="bg-purple-600 text-white rounded-full h-8 w-8 ml-[-12px] flex items-center justify-center z-30">
              +2k
            </div>
          </div>
        </div>

        <h3 className="mt-8 text-2xl font-bold text-white">Categorías</h3>
        <div className="flex gap-4 mt-4 overflow-x-auto">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-[#8C8C8C] rounded-lg"></div>
              <p className="text-white mt-2">Lorem</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
