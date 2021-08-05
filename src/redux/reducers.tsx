const defaultstate ={
	user:{},
	fav:{}
}

export default function reducer(
	state = defaultstate,
	{type,payload}:{type:string;payload:any}
	):any {

	switch (type) {
		case 'SET_USER_STATE':
			return{
				...state,
				user:{username:payload}
			}
		case 'ADD_FAVORITE':
		return{
			...state,
			fav:{payload}

		}
	}
	return state

}