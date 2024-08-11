import React from 'react'
import { formatDate } from '../../../utils/formateDate';
import EditorJSHTML from 'editorjs-html';

const editorJSHTML = new EditorJSHTML();

function SingleBlogCard({blog}) {
  console.log(blog);
  const {title, description, content, coverImg, category, rating, author, createdAt} = blog || {};
  const htmlContent = editorJSHTML.parse(content).join('');


  return (
    <>
      <div className='bg-white p-8'>
        {/* Blog Header */}
        <div>
          <h1 className='md:text-4xl text-3xl font-medium mb-4'>{title}</h1>
          <p className='mb-6'>{formatDate(createdAt)} by <span>{author?.username}</span></p>
        </div>

        <div>
          <img src={coverImg} alt="cover image" className='w-full md:h-[520px] bg-cover' />
        </div>

        <div>
          <div dangerouslySetInnerHTML={{__html: htmlContent}} className='space-y-3 editorjsdiv' />

          <div>
            <span className='text-lg font-medium'>Rating: </span>
            <span>{rating} (based on 2,370 reviews)</span>
          </div>
          

        </div>
      </div>
    </>
  )
}

export default SingleBlogCard
