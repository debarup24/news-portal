import { NewsItems } from '@/types/news'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
interface NewsCardProps {
    item: NewsItems
}

const NewsCard = ({item} : NewsCardProps) => {
  return (
    <div className='border p-4 rounded-md shadow-sm'>
     <Link href={`/news/${item._id}`}>
     <Image src={item?.imageUrl} alt={item?.title}
     width={500}
     height={500}
     className='mb-5 md:h-56 rounded hover:scale-105 cursor-pointer transition-all duration-300 shadow-md' />
     </Link>
      
       <div>
        <h2 className='text-xl font-semibold my-3'>{item?.title.substring(0,65)}</h2>
        <p className='mb-4 '>{item?.description.substring(0, 135)}...</p>
        <Link href={`/news/${item._id}`} >
        <Button className='text-gray-100 hover:underline'>Read More</Button>
        </Link>
       </div>
    </div>
  )
}

export default NewsCard