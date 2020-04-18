import { AppWindow } from '../../common/types';

const win = window as AppWindow;

win.bridgev1 = {
    launch: (e) => alert(e)
}