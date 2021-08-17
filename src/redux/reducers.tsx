const defaultstate ={
	user:[]
}

export default function userReducer(
	state = defaultstate,action:any
	):any {
	switch (action.type) {
		case 'DELETE_FAVORITE':{
					 return {...state,
					 	user:[...state.user.filter((item:any,index) => index !== action.payload)]}
					}
		case 'SET_USER_STATE':{

					return{
						...state,
						user:[...state.user,action.payload]
					}}
			 default:{
			 		return state}

	}
	
}