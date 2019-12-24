import {loginConstants} from "../constans/loginConstants";
import {loginServices} from "../services/loginServices";

export const login = ({email, password}) => dispatch => {
    dispatch(requestToken());
    loginServices.login(email, password)
        .then(res => {
            localStorage.setItem('token', JSON.stringify(res.access_token));
            dispatch(successToken())
        })
        .catch(err => {
            dispatch(failureToken(err))
        });

    function requestToken() {
        return {
            type: loginConstants.CREATE_REQUEST
        }
    }

    function successToken() {
        return {
            type: loginConstants.GET_TOKEN
        }
    }

    function failureToken(error) {
        return {
            type: loginConstants.FAILURE_TOKEN, error
        }
    }
};