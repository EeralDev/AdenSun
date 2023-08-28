export interface IMyModal
{
    isOpen: boolean
}

export type myModalContextType =
    {
        myModal: IMyModal
        OpenModal: () => void; 
        CloseModal: () => void;
    }