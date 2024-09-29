export type model = {
    open: boolean;
    handleClose: () => void;
    saveNote: (title: string, content: string, done: boolean) => void;
    note?: { title: string; content: string; done: boolean, id: number };
};

export type NoteType = {
    id: number;
    title: string;
    content: string;
    done: boolean;
};