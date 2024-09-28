export type model = {
    open: boolean;
    id: number;
    title: string;
    done:boolean;
    handleClose: () => void;
    saveNote: (title: string, content: string, done: boolean) => void;
    note?: { title: string; content: string; done: boolean };
};