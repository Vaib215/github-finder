import { useContext, useEffect } from "react"
import { FaCodepen, FaGlobe, FaMapMarked, FaStore, FaTwitter, FaUserFriends, FaUsers, } from 'react-icons/fa'
import { Link, useParams } from "react-router-dom"
import Spinner from "../components/layout/Spinner"
import RepoList from "../components/repos/RepoList"
import { getUserAndRepos } from "../context/github/GithubActions"
import GithubContext from "../context/github/GithubContext"

function User() {
  const { user, loading, repos, dispatch } = useContext(GithubContext)
  const params = useParams()
  useEffect(() => {
    dispatch({type:'SET_LOADING'})
    const getUserData = async() => {
      const userData = await getUserAndRepos(params.login)
      dispatch({type:'GET_USER_AND_REPOS',payload:userData})
    }
    getUserData()
    // eslint-disable-next-line
  }, [])


  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user
  if (loading) {
    return <Spinner />
  }
  let web = blog && (blog.split("://")[0]==="https" ? blog.split("://")[1] : blog.split("://")[0])
  return (
    <>
      <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4">
          <Link to='/' className="btn btn-ghost text-white">
            Back to Search
          </Link>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
          <div className="custom-card-image mb-6 md:mb-8">
            <div className="rounded-lg shadow-xl card image-full">
              <figure>
                <img src={avatar_url} alt="" />
              </figure>
              <div className="card-body justify-end ">
                <h2 className="card-title mb-0">{name}</h2>
                <b>{login}</b>
              </div>
            </div>
          </div>
          <div className="col-span-2 text-white">
            <div className="mb-6">
              <h1 className="text-3xl card-title">
                {name}
                <div className="ml-2 mr-1 badge badge-success">{type}</div>
                {hireable && (
                  <div className="mx-1 badge badge-info">Hireable</div>
                )}
              </h1>
              <p>{bio}</p>
              <div className="mt-4 card-actions">
                <a
                  href={html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline text-white hover:bg-white"
                >
                  Visit Github Profile
                </a>
              </div>
            </div>
            <div className="flex flex-col md:flex-row rounded-lg shadow-md bg-base-100 stats text-white">
              {location && (
                <div className="stat">
                  <div className="flex items-center gap-2 stat-title">
                    <FaMapMarked/> Location
                  </div>
                  <div className="text-lg stat-value">{location}</div>
                </div>
              )}
              {blog && (
                <div className="stat">
                  <div className="flex items-center gap-2 stat-title">
                    <FaGlobe/> Website
                    </div>
                  <div className="text-lg stat-value">
                    
                    <a href={`https://${web}`} target="_blank" rel="noopener noreferrer">{web}</a>
                  </div>
                </div>
              )}
              {twitter_username && (
                <div className="stat">
                  <div className="flex items-center gap-2 stat-title">
                    <FaTwitter/> Twitter
                    </div>
                  <div className="text-lg stat-value">
                    <a href={`https://www.twitter.com/${twitter_username}`} target="_blank" rel="noopener noreferrer">@{twitter_username}</a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats text-white">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUsers color="white" className="text-3xl md:text-5xl"></FaUsers>
            </div>
            <div className="stat-title pr-5">
              Followers
            </div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {followers}
            </div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUserFriends color="white" className="text-3xl md:text-5xl"></FaUserFriends>
            </div>
            <div className="stat-title pr-5">
              Following
            </div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {following}
            </div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaCodepen color="white" className="text-3xl md:text-5xl"></FaCodepen>
            </div>
            <div className="stat-title pr-5">
              Public Repos
            </div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {public_repos}
            </div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaStore color="white" className="text-3xl md:text-5xl"></FaStore>
            </div>
            <div className="stat-title pr-5">
              Public Gists
            </div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {public_gists}
            </div>
          </div>
        </div>
        <RepoList repos={repos}/>
      </div>
    </>
  )
}

export default User