

//import { useDispatch, useSelector } from 'react-redux';
 //const user = useSelector((state: any) => state);
export const setUSerState=(payload:any)=>{
	return{type:'SET_USER_STATE',payload}
}
export const addFavor=(payload:any)=>{
	
//const da:any =user.user.filter((item:any,index:number) => item.key == payload.key)
	return {type:'DELETE_FAVORITE',payload}
}