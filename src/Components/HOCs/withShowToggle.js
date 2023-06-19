import {useState} from "react"


export default function withShowToggle (OriginalComponent) {
    // HOC props
    const NewComponent = (props) => {

        const [showInfo , setShowInfo] = useState(false)

        const handleShowInfos = () => {
             setShowInfo(pervShowInfo => !pervShowInfo)
         }

        return (
            <OriginalComponent showInfo={showInfo} handleShowInfos={handleShowInfos} {...props} />
        )
    }

    return NewComponent
}