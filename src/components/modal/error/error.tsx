import { FC } from "react"
const Error: FC<{error: string}> = ({ error }) => {
    return (
        <p className="text text_type_main-large mt-10">{error}</p>
    )
}



export default Error