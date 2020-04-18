export interface BridgeV1 {
    launch: (e) => void
}

export interface AppWindow extends Window {
    bridgev1?: BridgeV1;
}