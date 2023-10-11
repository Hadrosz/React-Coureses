import React from 'react'
import { useState } from 'react'

function TwitterFollowCard({ children, username, isFollowing }) {
  const [follow, setFollow] = useState(isFollowing)

  const buttonClassName = follow
    ? 'tw-followCard-button isFollowing'
    : 'tw-followCard-button '
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          src={`https://unavatar.io/twitter/${username}`}
          alt={`Avatar de ${children}`}
          className="tw-followCard-avatar"
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-info-Username">@{username}</span>
        </div>
      </header>
      <aside>
        <button
          className={buttonClassName}
          onClick={(e) => {
            setFollow(!follow)
          }}
        >
          <span className="tw-followCard-text">
            {follow ? 'Siguiendo' : 'Seguir'}
          </span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}

export default TwitterFollowCard
