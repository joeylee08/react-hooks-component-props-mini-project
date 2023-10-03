import React from 'react';
import Article from './Article.js'

function ArticleList({posts}) {
  const mapped = posts.map(item => {
    return <Article title={item.title} date={item.date} preview={item.preview} minutes={item.minutes} key={item.id}/>
  })
  return (
    <main>
      {mapped}
    </main>
  )
}

export default ArticleList