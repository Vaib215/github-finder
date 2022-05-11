function About() {
  return (
    <div className="flex items-start md:items-center justify-between flex-col-reverse md:flex-row">
      <div>
        <h1 className='text-4xl mb-4 text-white lg:text-6xl'>Github Finder</h1>
        <p className='mb-4 text-2xl font-light'>
          A React app to search GitHub profiles and see profile details.
        </p>
        <p className='text-lg text-gray-400'>
          Version <span className='text-white'>1.0.0</span>
        </p>
        <p className='text-lg text-gray-400'>
          Made By: {' '}
          <a className='text-white' href='https://vaib.carrd.co'>
            Vaibhav Kumar Singh
          </a>
        </p>
      </div>
        <img src="https://i.imgur.com/cBY7XlP.png" alt="" className="w-48 h-48 md:w-80 md:h-80"/>
    </div>
  )
}

export default About