export type model = {
    open: boolean;
    //handleClose: () => void;
    saveNote: (title: string, content: string, done: boolean) => void;
    deleteNote: (id: number) => void;
    note: NoteType | null;
};

export type NoteType = {
    id: number;
    title: string;
    content: string;
    done: boolean;
};