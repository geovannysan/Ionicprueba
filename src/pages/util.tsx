import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import {File} from '@ionic-native/file';
export const readSecretFile = async () => {
	try{
  const contents = await Filesystem.readdir({///{files: Array(0)}
    path: '', directory: Directory.Documents
  });
return contents;
}catch(error ){return error;}
};
export const Filedatos = async()=>{///me develve undefined
	try{
		const res = await File.listDir(File.dataDirectory,'files')
		return res;
		}catch(error){
		return error;}}
export const redSystem = async ()=>{///Error: File does not exist.
try{
const res = await Filesystem.readFile({
	path:'',directory:Directory.Documents,encoding:Encoding.UTF8
})
return res;
}catch(error){
	return error;
}
};