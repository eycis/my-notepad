export interface NoteProps {
    open: boolean;
    handleClose: () => void;
    saveNote: (title: string, content: string, done: boolean) => void;
    note?: { title: string; content: string; done: boolean };
}
