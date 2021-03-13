import './index.css'

export const FileInput = ({ onDrop, onChange, onDragOver, accept, multiple }) => (
    <input
        type="file"
        onDrop={onDrop}
        onChange={onChange}
        onDragOver={onDragOver}
        accept={accept}
        multiple={multiple}>
    </input>
)
