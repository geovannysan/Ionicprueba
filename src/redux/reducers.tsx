const defaultstate ={
	user:[]
}

export default function reducer(
	state = defaultstate,
	{type,payload}:{type:string;payload:any}
	):any {

	switch (type) {
		case 'SET_USER_STATE':
			return{
				user:[...state.user,payload]
			}
			case 'ADD_FAVORITE':
		return state.user.filter( i => i !== payload.item.id);
	}
	return state

}