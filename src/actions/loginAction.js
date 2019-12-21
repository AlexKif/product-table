import {loginConstants} from "../constans/loginConstants";
import {loginServices} from "../services/loginServices";

export const login = ({email, password, remember}) => (dispatch) => {
    dispatch(requestToken());
    loginServices.login(email, password)
        .then(res => {
            dispatch(successToken(res.access_token, remember ))
        })
        .catch(err => {
            dispatch(failureToken(err))
        });

    function requestToken() {
        return {
            type: loginConstants.CREATE_REQUEST
        }
    }

    function successToken(token, isRemember) {
        return {
            type: loginConstants.GET_TOKEN, token, isRemember
        }
    }

    function failureToken(error) {
        return {
            type: loginConstants.FAILURE_TOKEN, error
        }
    }
};