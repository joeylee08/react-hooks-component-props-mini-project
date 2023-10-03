import React from 'react'

function Article({title, date = "January 1, 1970", preview, minutes}) {
  const coffee = "☕️";
  const bento = "🍱";
  let emojiString = "";
  const suffix = ` ${minutes} min read`
  const tens = Math.ceil(minutes / 10)

  if (minutes < 30) {
    for (let i = 0; i < tens; i++) {
      emojiString += coffee;
    }
  } else {
    for (let i = 0; i < tens; i++) {
      emojiString += bento;
    }
  }

  const timeToRead = " " + emojiString + suffix;

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}{timeToRead}</small>
      <p>{preview}</p>
    </article>
  )
}

export default Article