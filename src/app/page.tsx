"use client"

import { wallpaperList } from '@/app/data/wallpaperList'
import { WallpaperItem } from './components/WallpaperItem';
import { useState } from 'react';
import { Modal } from './components/Modal';

const Page = () => {
  const [modal, setModal] = useState(false);
  const [imageModal, setImageModal] = useState('');

  const openModal = (id: number) => {
    const photo = wallpaperList.find(item => item.id === id);
    if(photo){
      setImageModal(photo.url);
    }
    setModal(true);
  }

  const closeModal = () => {
    setModal(false);
  }

  return(
    <div className="mx-2 ">
      <h1 className="text-center text-3xl text-pink-500 mt-12 italic"> 🌸 Wallpaper Gallery 🌸</h1>
      <section className="container max-w-5xl bg-slate-600 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5">
        {wallpaperList.map(item => (
          <WallpaperItem 
            key={item.id}
            wallpaper={item}
            onClick={() => openModal(item.id)}
          />
        ))}
      </section>
          {modal && 
            <Modal 
              image={imageModal}
              closeModal={closeModal}
            />
          }

    </div>
  )
}

export default Page;