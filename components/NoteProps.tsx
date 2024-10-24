export type model = {
    open: boolean;
    //handleClose: () => void;
    saveNote: (title: string, content: string, done: boolean, color: string) => void;
    deleteNote: (id: number) => void;
    handleClose: () => void;
    note: NoteType | null;
};

export type NoteType = {
    id: number;
    title: string;
    content: string;
    done: boolean;
    color: string;
};