import PropTypes from 'prop-types'
import { FaEye, FaInfo, FaLink, FaStar } from 'react-icons/fa'
import { CgGitFork } from 'react-icons/cg'
function RepoItem({ repo }) {
    const {
        name,
        description,
        html_url,
        forks,
        open_issues,
        watchers_count,
        stargazers_count
    } = repo
    return (
        <div className='rounded-md mb-2 card bg-base-200 hover:bg-base-300'>
            <div className="card-body">
                <h3 className="mb-2 text-xl font-semibold">
                    <a href={html_url} target="_blank" rel="noopener noreferrer">
                        <FaLink className='inline mr-1' /> {name}
                    </a>
                </h3>
                <p className="mb-3">{description}</p>
                <div className="flex">
                    <div>
                        <div className="mr-2 text-info bg-opacity-20 badge badge-info badge-lg" title='Watchers Count'>
                            <FaEye className="mr-2" /> {watchers_count}
                        </div>
                    </div>
                    <div>
                        <div className="mr-2 text-success bg-opacity-20 badge badge-success badge-lg" title='Stars Count'>
                            <FaStar className="mr-2" /> {stargazers_count}
                        </div>
                    </div>
                    <div>
                        <div className="mr-2 text-error bg-opacity-20 badge badge-error badge-lg" title='Open Issues'>
                            <FaInfo className="mr-2" /> {open_issues}
                        </div>
                    </div>
                    <div>
                        <div className="mr-2 text-warning bg-opacity-20 badge badge-warning badge-lg" title='Forks Count'>
                            <CgGitFork size={24} />
                            {forks}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
RepoItem.propTypes = {
    repo: PropTypes.object.isRequired
}
export default RepoItem