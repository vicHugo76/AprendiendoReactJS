export function TwitterFollowCard ({ children, userName, isFollowing }) {
  // const imageSrc = `https://unavatar.io/twitter/${userName}` una forma de pasar el avatar o img
  console.log(isFollowing)
  return (
    // <article style={{display: 'flex', alignItems: 'center', color: '#fff'}}> esto es una forma de dar estilo

    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img 
          className='tw-followCard-avatar'
          src={ `https://unavatar.io/twitter/${userName}` } // o imageSrc
          alt="El avatar de midudev" />
        <div className='tw-followCard-info'>
          <strong>{ children }</strong>
          <span className='tw-followCard-infoUserName'>@{ userName }</span>
        </div>
      </header>

      <aside>
        <button className='tw-followCard-button'>
          Seguir {/* Children */}
        </button>
      </aside>

    </article>
  )
}