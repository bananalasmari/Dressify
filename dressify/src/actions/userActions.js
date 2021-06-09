import axios from "axios";

const update = ({ userId, name, email, address }) => async (dispatch, getState) => {
    const { userSignin: { userInfo } } = getState();
    dispatch({ payload: { userId, name, email, address } });
    try {
      const { data } = await axios.put('http://localhost:4000/api/v1/user/getUserDetails/' + userId,
        { name, email, address }, {
        headers: {
          Authorization: 'Bearer ' + userInfo.token
        }
      });
      dispatch({payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
    //   localStorage.setItem("token",data.data.token)
    } catch (error) {
      dispatch({ payload: error.message });
    }
  }

  export {update };


 