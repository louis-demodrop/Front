import { useState } from 'react'

import { Card, Button, Range } from '../../atoms'
import { useToggle } from '../../../hooks/useToggle'

export const MusicCard = ({ music: { author, title, duration }}) => {
    const [isOn, toggleIsOn] = useToggle(false)
    const [progress/* , setProgress */] = useState(0)
    
    return (<Card>
        <Button text={isOn ? "Pause" : "Play"} onClick={toggleIsOn}></Button>
        <Range value={progress}></Range>
        <span>{author}</span>
        <span>{title}</span>
        <span>{duration}</span>
    </Card>)
}