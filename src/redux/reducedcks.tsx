const datainicial ={
	array:[]
}
export default function reducer(state = datainicial,action:any){
switch (action.type) {
	case "ADD_FAV":
		// code...
		return {...state, array: action.payload};
	
	default:
		// code...
		return state;
}
}

export const agregarfa=()=> async (dispatch:any)=>{

}