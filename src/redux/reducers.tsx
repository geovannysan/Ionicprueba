const defaultstate ={
	user:[],
	next:"",
	pokemon:[]
}

export default function userReducer(
	state = defaultstate,action:any
	):any {
	switch (action.type) {
		case 'DELETE_FAVORITE':{
					 return {...state,
					 	user:[...state.user.filter((item:any,index) => item.id !== action.payload.id)]}
					}
		case 'SET_USER_STATE':{

					return{
						...state,
						user:[...state.user,action.payload]
					}}
					case 'SET_pokemi_STATE':{
					return{
						...state,
						next: action.payload.next,
						pokemon:[...state.pokemon, ...action.payload.pokemon]
					}}
			 default:{
			 		return state}

	}
	
}