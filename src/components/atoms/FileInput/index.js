export const FileInput = ({ onDrop, onChange, onDragOver, multiple }) => {

    return (
        <input type="file" onDrop={onDrop} onChange={onChange} onDragOver={onDragOver} multiple={multiple}></input>
    )
}