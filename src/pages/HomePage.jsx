import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addNewHobby, setActiveHobby } from "../actions/hobby";
import HobbyList from "../components/Home/HobbyList";

HomePage.prototype = {

}

const randomNumber = () => {
  return 1000 + Math.trunc(Math.random() * 9000)
}

function HomePage(props) {
  const hobbyList = useSelector(state => state.hobby.list);
  const hobbyActiveId = useSelector(state => state.hobby.activeId);
  const dispatch = useDispatch();

  const handleAddNewHobby = () => {
    // random hobby
    const newId = randomNumber();
    const newHobby = {
      id : newId,
      title : `nghialm ${newId}`
    }
    // dispatch action
    const action = addNewHobby(newHobby);
    dispatch(action);
  };

  const handleSetActiveHobby = (hobbyId) => {
    const action = setActiveHobby(hobbyId);
    dispatch(action);
  }

  
  return (
    <div className="home-page">
        <h1>Home Page</h1>
        <button onClick={handleAddNewHobby}>Random Hobby</button>
        <HobbyList
          hobbyList={hobbyList}
          hobbyActiveId={hobbyActiveId}
          handleSetActiveHobby={handleSetActiveHobby}
          />
    </div>
  );
}

export default HomePage;
