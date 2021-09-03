import PropTypes from 'prop-types';
import './hobbyList.css'


HobbyList.propTypes = {
  hobbyList : PropTypes.array,
  hobbyActiveId: PropTypes.number,
  handleSetActiveHobby: PropTypes.func
}

HobbyList.defaultProps = {
  hobbyList : [],
  handleSetActiveHobby: () => {},
  hobbyActiveId: null
}


function HobbyList(props) {
  const { hobbyList, handleSetActiveHobby, hobbyActiveId } = props;
  return (
    <div className="hobby-list">
        <ul>
            {
              hobbyList.map((hobby) => (
                <li
                  className={hobby.id === hobbyActiveId ? 'active' : ''}
                  key={hobby.id}
                  onClick={() => handleSetActiveHobby(hobby.id)}
                  >
                    {hobby.title} 
                  </li>
              ))
            }
        </ul>
    </div>
  );
}

export default HobbyList;
