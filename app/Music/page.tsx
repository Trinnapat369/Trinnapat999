"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Instrument {
  name: string;
  price: number;
  image_url: string;
  like: number;
  is_new: boolean;
}

const MusicItem: React.FC<{ instrument: Instrument }> = ({ instrument }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md overflow-hidden m-4 w-64"
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative">
        <motion.img 
          src={instrument.image_url} 
          alt={instrument.name}
          className="w-full h-48 object-cover"
          animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
          transition={{ duration: 0.3 }}
        />
        {instrument.is_new && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm">
            New
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold">{instrument.name}</h3>
        <div className="flex justify-between items-center mt-2">
          <span className="text-xl font-semibold text-green-600">${instrument.price}</span>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            <span className="ml-1">{instrument.like}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function MusicStore() {
  const instruments: Instrument[] = [
    {
      name: "Fender Guitar",
      price: 300,
      image_url: "https://theeramusic.com/wp-content/uploads/2023/06/e-x10_back_angle_gal.jpg",
      like: 20,
      is_new: true,
    },
    {
      name: "Gibson Les Paul",
      price: 1200,
      image_url: "https://images.unsplash.com/photo-1550985616-10810253b84d",
      like: 45,
      is_new: false,
    },
    {
      name: "Roland Keyboard",
      price: 6000,
      image_url: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0",
      like: 32,
      is_new: true,
    },
    {
      name: "Yamaha Acoustic",
      price: 450,
      image_url: "https://images.unsplash.com/photo-1556449895-a33c9dba33dd",
      like: 28,
      is_new: false,
    },
    {
      name: "Pearl Drum Set",
      price: 890,
      image_url: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7",
      like: 37,
      is_new: true,
    },
    {
      name: "Selmer Saxophone",
      price: 1100,
      image_url: "https://images.unsplash.com/photo-1573871669414-010dbf73ca84",
      like: 41,
      is_new: false,
    },
    {
      name: "Ibanez Bass Guitar",
      price: 550,
      image_url: "https://images.unsplash.com/photo-1445985543470-41fba5c3144a",
      like: 29,
      is_new: true,
    },
    {
      name: "Martin Acoustic Guitar",
      price: 780,
      image_url: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1",
      like: 33,
      is_new: false,
    },
    {
      name: "Shure Microphone",
      price: 120,
      image_url: "https://images.unsplash.com/photo-1516223725307-6f76b9ec8742",
      like: 26,
      is_new: true,
    },
    {
      name: "Fender Amplifier",
      price: 220,
      image_url: "https://th.bing.com/th/id/R.7ef479a4313db8de8a9cb63d42f4f3ab?rik=0AaTBekmOLTuUw&pid=ImgRaw&r=0",
      like: 22,
      is_new: false,
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Music Instruments Store</h1>
        <div className="flex flex-wrap justify-center">
          {instruments.map((instrument, index) => (
            <MusicItem key={index} instrument={instrument} />
          ))}
        </div>
      </div>
    </div>
  );
}