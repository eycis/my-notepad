export interface NoteProps {
    open: boolean;
    handleClose: () => void;
    saveNote: (title: string, content: string) => void;
    note?: { title: string; content: string; };
}
