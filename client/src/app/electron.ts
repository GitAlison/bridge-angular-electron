import { AppWindow } from '../../../common/types';


const win = window as AppWindow;

export function logar(e) {
    win.bridgev1.launch(e);

}