import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
function UserItem({user : {login , avatar_url}}) {
  return (
    <div className='card shadow-md compact side bg-base-100'>
        <div className="flex-row space-x-4 items-center card-body ">
            <div>
                <div className="avatar">
                    <div className="rounded-full w-14 h-14 shadow">
                        <img src={avatar_url} alt="" />
                    </div>
                </div>
            </div>
            <div>
                <h2 className="card-title">{login}</h2>
                <Link to={`user/${login}`} className='text-white text-opacity-60'>Visit Profile</Link>
            </div>
        </div>
    </div>
  )
}
UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}
export default UserItem