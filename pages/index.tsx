import React from 'react'
import prisma from '../src/lib/prisma'

import { GetServerSideProps } from 'next'
import Layout from '../components/Layout'
import Post, { PostProps } from '../components/Post'

// export const getStaticProps: GetServerSideProps = async () => {
//   const feed = await prisma.post.findMany({
//     where: { published: true },
//     include: {
//       author: {
//         select: { name: true }
//       }
//     }
//   })
//   return { props: { feed } }
// }

type Props = {
  feed: PostProps[]
}

const Blog: React.FC<Props> = (props) => {
  return (
    <div>adas</div>
  )
}

export default Blog
