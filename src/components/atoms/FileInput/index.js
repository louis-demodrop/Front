export const FileInput = ({ onDrop, onChange, onDragOver, accept, multiple }) => {

    return (
        <input type="file" onDrop={onDrop} onChange={onChange} onDragOver={onDragOver} accept={accept} multiple={multiple}></input>
    )
}