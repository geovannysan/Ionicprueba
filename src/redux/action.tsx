

//import { useDispatch, useSelector } from 'react-redux';
 //const user = useSelector((state: any) => state);
export const setUSerState=(payload:any)=>{
	return{type:'SET_USER_STATE',payload}
}
export const deFavor=(payload:any)=>{
	return {type:'DELETE_FAVORITE',payload}
}
export const listPokem=(payload:any)=>{
	return{type:'SET_pokemi_STATE',payload}
}